from rest_framework import serializers
from django_redis import get_redis_connection

from applications.games.models import GamesHistory, GamesFuture


class GamesHistorySerializer(serializers.ModelSerializer):
  class Meta:
    model = GamesHistory
    fields = '__all__'

class GamesFutureSerializer(serializers.ModelSerializer):

  """新奖品表"""
  def create(self, validated_data):

    # 将新奖品追加到新列表
    GamesFuture.objects.create(**validated_data)

    # 如果不需要更新直接返回
    if GamesFuture.objects.count() < 10:
      return currentAward or 0

    # 获取新列表中第一个实例
    future = GamesFuture.objects.first()
    currentAward = future.index

    # 保存到redis
    conn = get_redis_connection('default')
    conn.set('currentAward', currentAward)
    # 追加到历史列表中
    GamesHistory.objects.create(index=future.index)
    # 删除新列表中第一个实例
    future.delete()
    
    # 返回新奖品
    return currentAward or 0

  class Meta:
    model = GamesFuture
    fields = '__all__'
