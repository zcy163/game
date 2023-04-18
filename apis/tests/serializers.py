from rest_framework import serializers

from applications.tests.models import Tests


class TestsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tests
    fields = ['id', 'name', 'id_card_number']
    # fields = '__all__'
