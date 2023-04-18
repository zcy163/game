import os
import django
from celery import Celery
from django.conf import settings

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'game.settings')
django.setup()

celery_game = Celery('celery_game')
celery_game.config_from_object('django.conf:settings')
celery_game.autodiscover_tasks(lambda: settings.INSTALLED_APPS)
