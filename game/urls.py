"""game URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # rest_framework
    path('rest/api-auth/', include('rest_framework.urls', namespace='auth')),
    # 测试应用
    path('rest/1.0/tests/', include('apis.tests.urls', namespace='tests')),
    # 用户
    path('rest/1.0/user/', include('apis.user.urls', namespace='user')),
    # 游戏
    path('rest/1.0/games/', include('apis.games.urls', namespace='games')),
    # 消息
    path('rest/1.0/message/', include('apis.message.urls', namespace='message')),
    # 订单
    path('rest/1.0/order/', include('apis.order.urls', namespace='order')),
]
