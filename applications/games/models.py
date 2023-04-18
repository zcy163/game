from django.db import models

from game.utils.models import BaseModel


class GamesHistory(BaseModel):
  """历史数据"""
  index = models.CharField(verbose_name="index", max_length=1, default="0")

class GamesFuture(BaseModel):
  """新数据"""
  index = models.CharField(verbose_name="index", max_length=1, default="0")

class OpeningTime(BaseModel):
  """开奖时间"""
  index = models.IntegerField(verbose_name="index", default=120)
