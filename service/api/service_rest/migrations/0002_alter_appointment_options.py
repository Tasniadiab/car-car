# Generated by Django 4.0.3 on 2023-07-24 19:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='appointment',
            options={'ordering': ('date_time',)},
        ),
    ]
