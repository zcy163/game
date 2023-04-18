from django.contrib import admin

from applications.tests.models import Tests


@admin.register(Tests)
class TestsAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'id_card_number')