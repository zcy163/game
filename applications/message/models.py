from django.db import models

from game.utils.models import BaseModel
from applications.user.models import User

# Create your models here.


class Message(BaseModel):
  """消息表"""
  text_message = models.TextField(
    verbose_name="广告信息",
    help_text="广告内容信息",
    default="")


  user = models.ManyToManyField(
    User, 
    related_name='message', 
    verbose_name='消息')

  id_is = models.TextField(
    verbose_name="预留",
    help_text="预留备用",
    default="")



  def save(self, *args, **kwargs):
    """
    重写父类的save方法，自定实现uid的成功和存储
    """
    super(Message, self).save(*args, **kwargs)

# 说明
  class Meta:
      db_table = "Message"  # 如果不设置，就会是用django默认的数据表命名方式
      verbose_name = "消息表"
      verbose_name_plural = verbose_name

  def __str__(self):
      return self.text_message