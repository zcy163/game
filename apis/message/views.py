from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.parsers import MultiPartParser, JSONParser, FileUploadParser
from django.db.models import Q

from server.response import APIResponse
from apis.message.serializers import MessageSerializer
from applications.message.models import Message
from applications.user.models import User
from game.utils.pagination import GamePageNumberPagination
from game.utils.common import getId

import logging


logger = logging.Logger('console')

@api_view(['POST', 'GET'])
@permission_classes((AllowAny,))
@parser_classes([JSONParser])
def index(request):

  messages = Message.objects.all()
  page = GamePageNumberPagination()
  data = page.data(request, messages, MessageSerializer)

  return APIResponse(data)

@api_view(['POST', 'GET'])
@permission_classes((AllowAny,))
@parser_classes([JSONParser])
def message_push(request):
  """消息创建，不限制接口权限"""   
  try:
    mess = request.data['text_message']
    # if Message.objects.filter(text_message=mess):
    #    return APIResponse({},code=-1,msg='Content already exists.')
    message = Message.objects.create(text_message=mess)
  except Exception as s:
    return APIResponse({},code=-1,msg=str(s))
  
  try:
    user_id = request.data['user']
    user = User.objects.get(id=user_id)
    message.user.add(user)
  except Exception as e:
    pass

  return APIResponse({})



@api_view(['POST', 'GET'])
@permission_classes((AllowAny,))
def message_pull(request): 
  """消息查询，不限制接口权限"""   
  try:
    id = request.data['id']
    message = request.data['text_message']
    message_text = Message.objects.get(id=id)
    data = {
      "text" : message_text.text_message,
      "user" : {
        'id': message_text.user.all()[0].id,
        'username': message_text.user.all()[0].username
      }
    }
    return APIResponse(data)
  except Exception as s:
    try:
      message = request.data['text_message']
      message_text = Message.objects.get(text_message=message)
      data = {
        "text" : message_text.text_message,
        "user" : {
          'id': message_text.user.all()[0].id,
          'username': message_text.user.all()[0].username
        }
      }
      return APIResponse(data,msg=str('ID does not exist:') + str(s))
    except Exception as s:
      return APIResponse({},code=-1,msg=str('text_message non-existent:') + str(s))



@api_view(['POST', 'GET'])
@permission_classes((AllowAny,))
def message_edit(request):
    """消息更新，不限制接口权限"""
    try:
      id = getId(request)
      if id == -1:
          return APIResponse({}, code=1, msg='Failed to get ID.')

      try:
          message = Message.objects.get(id=id)
      except Message.DoesNotExist:
          return APIResponse({}, code=1, msg='message does not exist.')

      if request.method == 'GET':
          serializer = MessageSerializer(instance=message)
          return APIResponse({'row': serializer.data})
      
      if not request.data['user']:
        del request.data['user']
      serializer = MessageSerializer(instance=message, data=request.data)
      if not serializer.is_valid():
          return APIResponse({}, code=1, msg=serializer.errors)
      serializer.save()

      return APIResponse(serializer.data)
    except Exception as s:
      return APIResponse({}, code=-1, msg=str(s))
   
@api_view(['POST'])
@permission_classes((AllowAny,))
def message_del(request):
    """消息删除，不限制接口权限"""   
    # print(getId(request))
    try:
      for id in getId(request):
        message_delete = Message.objects.get(id=id)
        message_delete.delete()      
      return APIResponse({})
    except Exception as e:
        data = {
            "result":"text_message not found",
            "id":id,
        }
        return APIResponse(data,code=-1,msg=str(e))
