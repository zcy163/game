from django.urls import path, include
from apis.user import views as user_views


app_name = 'user'
app_version = 'v1'

urlpatterns = [
    path(f'{app_version}/index', user_views.index, name='user_index'),
    path(f'{app_version}/add', user_views.add, name='user_add'),
    path(f'{app_version}/login', user_views.login, name='user_login'),
    path(f'{app_version}/logout', user_views.logout, name='user_logout'),
    path(f'{app_version}/edit', user_views.update, name='user_edit'),
    path(f'{app_version}/del', user_views.delete, name='user_del'),
    path(f'{app_version}/check', user_views.check, name='user_check'),
]