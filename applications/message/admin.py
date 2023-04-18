from django.contrib import admin

from applications.message.models import Message


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'text_message')