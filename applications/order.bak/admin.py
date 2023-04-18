from django.contrib import admin

from applications.order.models import order


@admin.register(order)
class orderAdmin(admin.ModelAdmin):
    list_display = ('id', 'text_order')