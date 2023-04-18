from django.urls import path, include
from apis.games import views as games_views


app_name = 'games'
app_version = 'v1'

urlpatterns = [
    path(f'{app_version}/health', games_views.health, name='games_health'),
    path(f'{app_version}/prize/index', games_views.prize, name='games_prize'),
    path(f'{app_version}/init/index', games_views.init, name='games_init'),
    path(f'{app_version}/history/index', games_views.history, name='games_history'),
    path(f'{app_version}/future/index', games_views.future, name='games_future'),
    path(f'{app_version}/prize/change', games_views.change, name='games_change'),
    path(f'{app_version}/opening/time/index', games_views.setOpeningTime, name='opening_time')
]