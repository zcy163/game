# Generated by Django 4.0.6 on 2022-12-07 17:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tests',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
                ('name', models.CharField(default='', help_text='身份证上的真实姓名', max_length=30, verbose_name='姓名')),
                ('id_card_number', models.CharField(default='', help_text='身份证件号', max_length=18, verbose_name='身份证件号')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
