from rest_framework import serializers

from applications.message.models import Message


class MessageSerializer(serializers.ModelSerializer):

  user = serializers.CharField(required=False, default="", allow_null=True, allow_blank=True)

  name = serializers.SerializerMethodField()

  def get_name(self, instance):
    user_list = instance.user.all()
    if not len(user_list) == 0:
      return user_list[0].username
    return ''

  class Meta:
    model = Message
    fields = ['id','user', 'text_message', 'name']
    # fields = '__all__'
