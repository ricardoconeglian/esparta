# Generated by Django 3.2.8 on 2021-12-30 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('produto', '0002_auto_20211230_0944'),
    ]

    operations = [
        migrations.AddField(
            model_name='cadastroproduto',
            name='codigo_sap_produto',
            field=models.IntegerField(default=11, unique=True),
            preserve_default=False,
        ),
    ]