# Generated by Django 4.0.3 on 2023-07-24 23:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0002_automobilevo_import_href'),
    ]

    operations = [
        migrations.AddField(
            model_name='automobilevo',
            name='color',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='automobilevo',
            name='year',
            field=models.PositiveSmallIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='automobilevo',
            name='import_href',
            field=models.URLField(blank=True, null=True, unique=True),
        ),
    ]
