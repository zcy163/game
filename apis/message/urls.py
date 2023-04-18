from django.urls import path, include
from apis.message import views as message_views


app_name = 'message'
app_version = 'v1'

urlpatterns = [
    path(f'{app_version}/index', message_views.index, name='message_index'),
    path(f'{app_version}/message_push', message_views.message_push, name='message_push'),
    path(f'{app_version}/message_pull', message_views.message_pull, name='message_pull'),
    path(f'{app_version}/message_edit', message_views.message_edit, name='message_edit'),
    path(f'{app_version}/message_del', message_views.message_del, name='message_del'),
    path(f'{app_version}/add', message_views.message_push, name='message_push'),
    path(f'{app_version}/del', message_views.message_del, name='message_del'),
    path(f'{app_version}/edit', message_views.message_edit, name='message_edit'),
]
