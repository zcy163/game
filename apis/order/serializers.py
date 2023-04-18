from rest_framework import serializers

from applications.order.models import OrderInfo
from applications.user.models import User


class OrderSerializer(serializers.ModelSerializer):

  user = serializers.CharField(required=False, default="", allow_null=True, allow_blank=True)

  name = serializers.SerializerMethodField()

  def get_name(self, instance):
    if instance.user_id:
      try:
        user = User.objects.get(id=instance.user_id)
        return user.username
      except User.DoesNotExist:
        return ''
    return ''
    

  class Meta:
    model = OrderInfo
    fields = ['user','order_sn','trade_no','pay_status','post_script','order_mount','pay_time',
    'address','signer_name','singer_mobile', 'name', 'id', 'create_time']
    # fields = '__all__'
