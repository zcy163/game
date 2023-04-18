from django.db import models
from django.contrib.auth.models import AbstractUser

from game.utils.models import BaseModel

# Create your models here.


class User(AbstractUser, BaseModel):
  """用户表"""
  name = models.CharField(
    verbose_name="姓名",
    help_text="身份证上的真实姓名",
    max_length=30,
    default="")

  id_card_number = models.CharField(
    verbose_name="身份证件号",
    help_text="身份证件号",
    max_length=18,
    default="")

  call_number = models.CharField(
    verbose_name="手机号码",
    help_text="手机号码",
    max_length=11,
    default="")

  email_address = models.CharField(
    verbose_name="邮箱",
    help_text="邮箱地址",
    max_length=24,
    default="")

  gender = models.CharField(
    verbose_name="性别",
    help_text="男,女",
    max_length=4,
    default="")

  integral_number = models.CharField(
    verbose_name="积分",
    help_text="游戏积分",
    max_length=24,
    default="")



  def save(self, *args, **kwargs):
    """
    重写父类的save方法，自定实现uid的成功和存储
    """
    super(User, self).save(*args, **kwargs)

  # 说明
  class Meta:
      db_table = "User"  # 如果不设置，就会是用django默认的数据表命名方式
      verbose_name = "用户表"
      verbose_name_plural = verbose_name

  def __str__(self):
      return self.username

class AssetSet(models.Model):
    """备用表"""
    pass