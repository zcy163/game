# Generated by Django 4.0.6 on 2022-12-12 22:40

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='OrderInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
                ('order_sn', models.CharField(blank=True, max_length=30, null=True, unique=True, verbose_name='订单号')),
                ('trade_no', models.CharField(blank=True, max_length=100, null=True, unique=True, verbose_name='交易号')),
                ('pay_status', models.CharField(choices=[('success', '成功'), ('cancel', '取消'), ('paying', '待处理')], default='paying', max_length=10, verbose_name='订单状态')),
                ('post_script', models.CharField(max_length=11, verbose_name='订单留言')),
                ('order_mount', models.FloatField(default=0.0, verbose_name='订单金额')),
                ('pay_time', models.DateTimeField(blank=True, null=True, verbose_name='支付时间')),
                ('address', models.CharField(default='', max_length=100, verbose_name='收货地址')),
                ('signer_name', models.CharField(default='', max_length=20, verbose_name='收货人')),
                ('singer_mobile', models.CharField(max_length=11, verbose_name='联系电话')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='用户')),
            ],
            options={
                'verbose_name': '订单表',
                'verbose_name_plural': '订单表',
                'db_table': 'Order',
            },
        ),
    ]