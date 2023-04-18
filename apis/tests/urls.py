from django.urls import path, include
from apis.tests import views as tests_views


app_name = 'test'
app_version = 'v1'

urlpatterns = [
    path(f'{app_version}/index', tests_views.index, name='test_index'),
]
