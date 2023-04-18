from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.parsers import MultiPartParser, JSONParser, FileUploadParser
from django.db.models import Q

from server.response import APIResponse
from apis.order.serializers import OrderSerializer
from applications.order.models import OrderInfo
from applications.user.models import User
from game.utils.pagination import GamePageNumberPagination
from game.utils.common import getId

import logging


logger = logging.Logger('console')

@api_view(['POST', 'GET'])
@permission_classes((AllowAny,))
@parser_classes([JSONParser])
def index(request):

  user_id = request.query_params.get('user_id', 0)
  if user_id:
    order = OrderInfo.objects.filter(user=user_id)
  else:
    order = OrderInfo.objects.all()
  page = GamePageNumberPagination()
  data = page.data(request, order, OrderSerializer)

  return APIResponse(data)

@api_view(['POST', 'GET'])
@permission_classes((AllowAny,))
@parser_classes([JSONParser])
def order_push(request):
  """订单创建，不限制接口权限"""   
  try:
    user_id = request.data['user_id']
    integral = request.data['integral']
    post_script = request.data['post_script']
    pay_status = request.data['pay_status']
    order_mount = request.data['order_mount']
    address = request.data['address']
    signer_name = request.data['signer_name']
    singer_mobile = request.data['singer_mobile']
    integral_number = User.objects.get(id=user_id)
    if not str.isdigit(integral):
        return APIResponse({},code=-1,msg="Integral type not int!")
    if not integral_number:
      return APIResponse(code=-1,msg="User not found")
    if int(integral) <= int(integral_number.integral_number):
      new_integral = int(integral_number.integral_number) - int(integral)
      integral_number.integral_number = new_integral
      integral_number.save()
      order = OrderInfo.objects.create(
      user = integral_number,
      pay_status=pay_status,
      post_script=post_script,
      order_mount=order_mount,
      address=address,
      signer_name=signer_name,
      singer_mobile=singer_mobile,)

      # order.user = integral_number
      # order.save

      # serializer = OrderSerializer(data=request.data)
      # if not serializer.is_valid():
      #   print(serializer.errors)
      #   return APIResponse({},code=-1, msg=serializer.error_messages)
      # serializer.save()
      data = {
        "code": 0,
        "msg" : "",
        "id": order.id,
        "pay_status":order.pay_status,
        "order_sn": order.order_sn
      }
      return APIResponse(data=data)
    else:
      return APIResponse({}, code=-1, msg=" Filed order! insufficient points  ")
  except Exception as s:
    return APIResponse({},code=-1,msg=str(s))


  



@api_view(['POST', 'GET'])
@permission_classes((AllowAny,))
def order_pull(request): 
  """订单查询，不限制接口权限"""   
  try:
    id = request.data['id']
    order = OrderInfo.objects.get(id=id)
    data = {
      "code": 0,
      "user" : {
        "id": order.id,
        "user_id": order.user.id,
        "pay_status": order.pay_status,
        "order_sn": order.order_sn,
        "order_mount": order.order_mount,
        "address": order.address,
        "signer_name": order.signer_name,
        "singer_mobile": order.singer_mobile,
      }
    }
    return APIResponse(data)
  except Exception as s:
    try:
      order_sn = request.data['order_sn']
      order = OrderInfo.objects.get(order_sn=order_sn)
      data = {
      "code": 0,
      "user" : {
        "id": order.id,
        "user_id": order.user.id,
        "pay_status": order.pay_status,
        "order_sn": order.order_sn,
        "order_mount": order.order_mount,
        "address": order.address,
        "signer_name": order.signer_name,
        "singer_mobile": order.singer_mobile,
      }
    }
      return APIResponse(data)
    except Exception as s:
      return APIResponse({},code=-1,msg=str('text_order non-existent:') + str(s))



@api_view(['POST', 'GET'])
@permission_classes((AllowAny,))
def order_edit(request):
    """订单更新，不限制接口权限"""
    try:
      id = getId(request)
      if id == -1:
          return APIResponse({}, code=1, msg='Failed to get ID.')

      try:
          order = OrderInfo.objects.get(id=id)
      except OrderInfo.DoesNotExist:
          return APIResponse({}, code=1, msg='order does not exist.')

      if request.method == 'GET':
          serializer = OrderSerializer(instance=order)
          return APIResponse({'row': serializer.data})
      
      if not request.data['user_id']:
        del request.data['user_id']
      if request.data['user_id']:
        order.user = User.objects.get(id=request.data['user_id'])
      if request.data['pay_status']:
        order.pay_status = request.data['pay_status']
      if request.data['order_mount']:
        order.order_mount = request.data['order_mount']
      if request.data['address']:
        order.address = request.data['address']
      if request.data['signer_name']:
        order.signer_name = request.data['signer_name']
      if request.data['singer_mobile']:
        order.singer_mobile = request.data['singer_mobile']
      order.save
      # serializer = OrderSerializer(instance=order, data=request.data)
      # if not serializer.is_valid():
      #     return APIResponse({}, code=1, msg=serializer.errors)
      # serializer.save()
      data = {
      "code": 0,
      "user" : {
        "id": order.id,
        "user_id": order.user.id,
        "pay_status": order.pay_status,
        "order_sn": order.order_sn,
        "order_mount": order.order_mount,
        "address": order.address,
        "signer_name": order.signer_name,
        "singer_mobile": order.singer_mobile,
      }
    }
      return APIResponse(data)
    except Exception as s:
      return APIResponse({}, code=-1, msg=str(s))
   
@api_view(['POST'])
@permission_classes((AllowAny,))
def order_del(request):
    """订单删除，不限制接口权限"""   
    # print(getId(request))
    try:
      for id in getId(request):
        order_delete = OrderInfo.objects.get(id=id)
        order_delete.delete()      
      return APIResponse({})
    except Exception as e:
        data = {
            "result":"order id not found",
            "id":id,
        }
        return APIResponse(data,code=-1,msg=str(e))
