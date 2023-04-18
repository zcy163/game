from celery import shared_task, Task
from django_redis import get_redis_connection

from apis.games.utils import getAward, setAward, getCurrentSeconds, getOpeningTime

import logging
import datetime
import random


logger = logging.Logger('console')

class GameHookTask(Task):

  def on_success(self, retval, task_id, args, kwargs):
    logger.info(f'task id:{task_id} , args:{args} , successful !')

  def on_failure(self, exc, task_id, args, kwargs, einfo):
    logger.info(f'task id:{task_id} , args:{args} , failed ! erros:{exc}')

  def on_retry(self, exc, task_id, args, kwargs, einfo):
    logger.info(f'task id:{task_id} , args:{args} , retry ! erros:{exc}')


@shared_task(base=GameHookTask, bind=True)
def gamesCelery(self, *args):
  return self.name, args


@shared_task(base=GameHookTask, bind=True)
def setAwardCelery(self):
  # 获取新奖品
  currentAward = setAward({ 'update': True, 'count': 10 })
  return self.name, currentAward


@shared_task(base=GameHookTask, bind=True)
def setSecondsCelery(self):
  # 获取开奖时间
  opening_time = getOpeningTime()
  # 获取当前秒
  # seconds = datetime.datetime.now().strftime('%S')
  seconds = getCurrentSeconds()
  seconds = 0 if seconds >= opening_time else seconds + 1
  # 每秒生成10组虚拟下注数据
  fictitiousData = [[random.randint(0, 7), random.randint(0, 4)] for _ in range(random.randint(0, 2))]
  # 保存到redis
  conn = get_redis_connection('default')
  conn.set('currentSeconds', seconds)
  conn.set('fictitiousData', str(fictitiousData))
  # if seconds == '25' or seconds == '55':
  if seconds == opening_time - 5:
    setAwardCelery.delay()
  return self.name, seconds, str(fictitiousData), opening_time
