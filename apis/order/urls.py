from django.urls import path, include
from apis.order import views as order_views


app_name = 'order'
app_version = 'v1'

urlpatterns = [
    path(f'{app_version}/index', order_views.index, name='order_index'),
    path(f'{app_version}/add', order_views.order_push, name='add'),
    path(f'{app_version}/get', order_views.order_pull, name='get'),
    path(f'{app_version}/edit', order_views.order_edit, name='edit'),
    path(f'{app_version}/del', order_views.order_del, name='del'),
]
