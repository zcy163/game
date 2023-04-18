from rest_framework import serializers

from applications.user.models import User


class UserSerializer(serializers.ModelSerializer):

  username = serializers.CharField(required=False)
  password = serializers.CharField(required=False)
  call_number = serializers.CharField(required=False, default="", allow_null=True, allow_blank=True)
  email_address = serializers.CharField(required=False, default="", allow_null=True, allow_blank=True)
  id_card_number = serializers.CharField(required=False, default="", allow_null=True, allow_blank=True)
  name = serializers.CharField(required=False, default="", allow_null=True, allow_blank=True)
  gender = serializers.CharField(required=False, default="", allow_null=True, allow_blank=True)

  def create(self, validated_data):
    user = User.objects.create_user(**validated_data)
    return user
  
  # def update(salf, instance,valited_data):
  #   query_set=User.objects.filter(pk=instance.pk)
  #   query_set.update(**valited_data)
  #   return query_set[0]

  class Meta:
    model = User
    #fields = ['id', 'name', 'id_card_number']
    fields = '__all__'
