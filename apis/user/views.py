from django.http import HttpResponse
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.parsers import MultiPartParser, JSONParser, FileUploadParser
from rest_framework.authtoken.models import Token

from server.response import APIResponse
from apis.user.serializers import UserSerializer
from applications.user.models import User
from game.utils.pagination import GamePageNumberPagination
from game.utils.common import getId

import logging


logger = logging.Logger('console')

@api_view(['POST', 'GET'])
@permission_classes((AllowAny,))
@parser_classes([JSONParser])
def index(request):
  """用户全量查询，不限制接口权限"""
  users = User.objects.all()
  page = GamePageNumberPagination()
  data = page.data(request, users, UserSerializer)
  return APIResponse(data)


@api_view(['POST'])
@permission_classes((AllowAny,))
def add(request):
    """用户注册，不限制接口权限"""

    username = request.data['username']
    if username and User.objects.filter(username=username):
        return APIResponse({}, code=1, msg='Already exists.')

    serializer = UserSerializer(data=request.data)
    if not serializer.is_valid():
        return APIResponse({}, code=1, msg=serializer.errors)
    instance = serializer.save()
    token, _ = Token.objects.get_or_create(user=instance)
    
    if not token:
        return APIResponse({}, code=1, msg='Exception while creating authorization.')
    data = {'token': token.key}
    data.update(serializer.data)
    return APIResponse(data)



@api_view(['POST'])
@permission_classes((AllowAny,))
def login(request):
    """用户登录，不限制接口权限"""
    username = request.data.get('username', '')
    password = request.data.get('password', ''  )
    user = User.objects.filter(username=username)
    if not user:
        return APIResponse({}, code=1, msg="user does not exist.")
    user = authenticate(username=username, password=password)
    if not user:
        user = User.objects.get(username=username, password=password)
    if not user:
        return APIResponse({}, code=1, msg="Wrong password.")
    serializer = UserSerializer(instance=user)
    # 获取token
    token, _ = Token.objects.get_or_create(user=user)
    userinfo = serializer.data
    userinfo.update({'token': token.key})
    return APIResponse({'userinfo': userinfo})

@api_view(['POST'])
@permission_classes((AllowAny,))
def logout(request):
    """用户登出，不限制接口权限"""
    return APIResponse({})

@api_view(['POST', 'GET'])
@permission_classes((AllowAny,))
def update(request):
    """用户更新，不限制接口权限"""

    user_id = getId(request)
    if user_id == -1:
        return APIResponse({}, code=1, msg='Failed to get ID.')

    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist:
        return APIResponse({}, code=1, msg='user does not exist.')

    if request.method == 'GET':
        serializer = UserSerializer(instance=user)
        return APIResponse({'row': serializer.data})

    serializer = UserSerializer(instance=user, data=request.data)
    if not serializer.is_valid():
        return APIResponse({}, code=1, msg=serializer.errors)
    serializer.save()
    
    return APIResponse(serializer.data)
   
@api_view(['POST'])
@permission_classes((AllowAny,))
def delete(request):
    """用户删除，不限制接口权限"""   
    
    try:
        for user_id in getId(request):
            user_delete = User.objects.get(id=user_id)
            user_delete.delete()      
        return APIResponse({})
    except Exception as e:
        data = {
            "result":"user not found",
            "user_id":user_id,
        }
        return APIResponse(data,code=1,msg=str(e))

@api_view(['POST'])
@permission_classes((AllowAny,))
def check(request):
    """用户查看，不限制接口权限"""
    user_id = request.query_params.get('id')
    user = User.objects.get(id=user_id)
    serializer = UserSerializer(instance=user)

    return APIResponse({'row': serializer.data})
