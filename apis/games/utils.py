import random
import datetime
import random

from django_redis import get_redis_connection

from apis.games.datas import bettings
from apis.games.serializers import GamesHistorySerializer, GamesFutureSerializer
from applications.games.models import GamesHistory, GamesFuture, OpeningTime

DEFAULT_OPENING_TIME = 120


def getAward():
  awardRandom = random.randint(1, 100)
  awardResult = filter(lambda betting: awardRandom in betting.get('irange'), bettings)
  return [award for award in awardResult][0].get('id')

def setAward(config):
  data = { 'index': getAward() }
  data.update(config)
  serializer = GamesFutureSerializer(data=data)
  return serializer.save() if serializer.is_valid() else serializer.errors

def getCurrentAward():
  # 从redis获取当前奖品
  conn = get_redis_connection('default')
  currentAward = conn.get('currentAward')
  # 如果redis中没有，从数据库获取
  if not currentAward:
    future = GamesFuture.objects.first()
    currentAward = future.index
  return currentAward

def getCurrentSeconds():
  # 从redis获取当前时间
  conn = get_redis_connection('default')
  currentSeconds = conn.get('currentSeconds')
  # 如果redis中没有，重新获取时间
  if not currentSeconds:
    currentSeconds = datetime.datetime.now().strftime('%S')
  return int(currentSeconds)

def getFictitiousData():
  # 从redis获取当前奖品
  conn = get_redis_connection('default')
  fictitiousData = conn.get('fictitiousData') or '[]'
  if not fictitiousData:
    fictitiousData = str([[random.randint(0, 7), random.randint(0, 4)] for _ in range(10)])
  return fictitiousData

def getOpeningTime():
  # 获取开奖时间
  opening_time = OpeningTime.objects.first()
  if not opening_time:
    opening_time = OpeningTime.objects.create(index=DEFAULT_OPENING_TIME)
  return opening_time.index
