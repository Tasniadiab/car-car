# Generated by Django 4.0.3 on 2023-07-26 02:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0007_rename_status_appointment_status_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appointment',
            old_name='status_id',
            new_name='status',
        ),
    ]
