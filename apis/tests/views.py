from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.parsers import MultiPartParser, JSONParser, FileUploadParser

from server.response import APIResponse
from apis.tests.serializers import TestsSerializer
from applications.tests.models import Tests

import logging


logger = logging.Logger('console')

@api_view(['POST', 'GET'])
@permission_classes((AllowAny,))
@parser_classes([JSONParser])
def index(request):

  tests = Tests.objects.all()
  serializer = TestsSerializer(tests, many=True)

  logger.error(serializer.data)

  return APIResponse(serializer.data)
