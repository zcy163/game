from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAuthenticated
from rest_framework.parsers import MultiPartParser, JSONParser, FileUploadParser
from django.http import HttpResponse

from server.response import APIResponse
from apis.games.utils import getCurrentAward, getCurrentSeconds, getFictitiousData, getOpeningTime
from apis.games.serializers import GamesHistorySerializer, GamesFutureSerializer
from applications.games.models import GamesHistory, GamesFuture, OpeningTime
from applications.user.models import User
from applications.games.tasks import gamesCelery
from game.utils.pagination import GamePageNumberPagination
from apis.user.serializers import UserSerializer

import logging

logger = logging.Logger('console')


@api_view(['GET'])
@permission_classes((AllowAny,))
def health(request):
  return APIResponse({})


@api_view(['POST'])
@permission_classes((IsAuthenticated,))
def prize(request):
  
  data = {
    'integral': 0,  # 中奖积分
    'award': getCurrentAward(),  # 中奖ID
    'opening_time': getOpeningTime()  # 开奖时间
  }
  # 测试任务
  gamesCelery.delay(data['award'])

  # GET 请求返回奖品ID
  if request.method == 'GET':
    return APIResponse(data)

  # 获取用户下注数据
  try:
    user_id = request.data['userId']
    user_integral = request.data['integral']
    user_betting_data = request.data['data']
  except:
    return APIResponse({}, code=1, msg='Missing parameter.')

  try:
    user = User.objects.get(id=user_id)
  except User.DoesNotExist:
    return APIResponse({}, code=1, msg='user does not exist.')

  # 验证用户积分
  quantities = map(lambda x: x['bets'], user_betting_data)
  databse_integral = int(user.integral_number) if not user.integral_number == '' else 0
  if not databse_integral - sum(quantities) == int(user_integral):
    return APIResponse({}, code=1, msg='Data exception.')

  # 计算得分
  dd = [x for x in filter(lambda x: x.get('id') == int(data['award']), user_betting_data)]
  data['integral'] = list(map(lambda x: x.get('translate') * x.get('bets'), dd))[0]

  # 分数更新到数据库
  last_integral = user_integral + data['integral']
  serializer = UserSerializer(instance=user, data={'integral_number': last_integral})
  if not serializer.is_valid():
    return APIResponse({}, code=1, msg=serializer.errors)
  serializer.save()

  return APIResponse(data)

@api_view(['POST'])
@permission_classes((IsAuthenticated,))
def init(request):
  data = {
    'seconds': getCurrentSeconds(),
    'fictitious': getFictitiousData(),
    'opening_time': getOpeningTime()  # 开奖时间
  }
  return APIResponse(data)

@api_view(['POST', 'GET'])
@permission_classes((IsAuthenticated,))
def history(request):
  # historys = GamesHistory.objects.all().order_by('-id')[:5]
  historys = GamesHistory.objects.all().order_by('-id')
  # logger.info(historys)
  page = GamePageNumberPagination()
  data = page.data(request, historys, GamesHistorySerializer)
  return APIResponse(data)

@api_view(['POST', 'GET'])
@permission_classes((IsAuthenticated,))
def future(request):
  # futures = GamesFuture.objects.all()[:10]
  futures = GamesFuture.objects.all().order_by('id')
  # logger.info(futures)
  page = GamePageNumberPagination()
  data = page.data(request, futures, GamesFutureSerializer)
  return APIResponse(data)
 
@api_view(['POST'])
@permission_classes((IsAuthenticated,))
def change(request):
  try:
    future = GamesFuture.objects.get(id=request.data['prizeId'])
  except GamesFuture.DoesNotExist:
    return APIResponse({}, code=1, msg='The prize does not exist.')
  
  serializer = GamesFutureSerializer(instance=future, data={ 'index': request.data['prizeIndex'] })
  if not serializer.is_valid():
    return APIResponse({}, code=1, msg=serializer.error)
  serializer.save()
  return APIResponse({})


@api_view(['POST'])
@permission_classes((IsAuthenticated,))
def setOpeningTime(request):
  # 修改开奖时间
  openingTime = OpeningTime.objects.first()
  openingTime.index = request.data['opening_time']
  openingTime.save()
  return APIResponse({})
