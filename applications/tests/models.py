from django.db import models
from game.utils.models import BaseModel


class Tests(BaseModel):

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

  def save(self, *args, **kwargs):
    """
    重写父类的save方法，自定实现uid的成功和存储
    """
    super(Tests, self).save(*args, **kwargs)

# 说明
class Meta:
    db_table = "tests"  # 如果不设置，就会是用django默认的数据表命名方式
    verbose_name = "测试表"
    verbose_name_plural = verbose_name

def __str__(self):
    return self.name

