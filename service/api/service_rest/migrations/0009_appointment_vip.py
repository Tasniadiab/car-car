# Generated by Django 4.0.3 on 2023-07-26 15:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0008_rename_status_id_appointment_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='vip',
            field=models.BooleanField(default=False),
        ),
    ]
