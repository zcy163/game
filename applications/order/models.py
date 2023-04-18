from django.db import models

from game.utils.models import BaseModel
from applications.user.models import User
# Create your models here.

import uuid
import time


class OrderInfo(BaseModel):
  """订单表"""
  ORDER_STATUS = (
        ('success', u'成功'),
        ('cancel', u'取消'),
        ('paying', u'待处理')
    )

  user = models.ForeignKey(
    User, 
    to_field='id',
    verbose_name=u'用户',
    on_delete=models.CASCADE)
  # 订单号必须唯一
  order_sn = models.CharField(
    max_length=30, 
    null=True, blank=True, 
    unique=True, 
    verbose_name=u'订单号')
  trade_no = models.CharField(max_length=100, 
    unique=True, 
    null=True, 
    blank=True, 
    verbose_name=u'交易号')
  # 默认为待处理。
  pay_status = models.CharField(choices=ORDER_STATUS, 
    default="paying", 
    max_length=10, 
    verbose_name=u'订单状态')
  post_script = models.CharField(max_length=11, 
    verbose_name=u'订单留言')
  order_mount = models.FloatField(default=0.0, 
    verbose_name=u'订单金额')
  pay_time = models.DateTimeField(null=True, 
    blank=True, 
    verbose_name=u'支付时间')
  # 用户信息
  # 里的address不用外键的原因是 后期地址可能随时会改 那这里的订单是在交易状态下生成的 不可能人家后期改地址也把这里改了
  address = models.CharField(max_length=100,
   default='',
  verbose_name=u'收货地址')
  signer_name = models.CharField(max_length=20,
   default="",
  verbose_name=u'收货人')
  singer_mobile = models.CharField(max_length=11,
  verbose_name=u'联系电话')

  def save(self, *args, **kwargs):
    """
    重写父类的save方法，自定实现uid的成功和存储
    """
    if not self.order_sn or self.order_sn == '':
      self.order_sn = f'{int(time.time())}{str(uuid.uuid4().int)[:8]}'
    super(OrderInfo, self).save(*args, **kwargs)

# 说明
  class Meta:
      db_table = "Order"  # 如果不设置，就会是用django默认的数据表命名方式
      verbose_name = "订单表"
      verbose_name_plural = verbose_name

  def __str__(self):
      return self.order_sn