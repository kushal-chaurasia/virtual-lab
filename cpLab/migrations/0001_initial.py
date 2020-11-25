# Generated by Django 3.1.1 on 2020-10-20 10:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CpLabQuizes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(max_length=400)),
                ('option1', models.CharField(max_length=400)),
                ('option2', models.CharField(default='', max_length=400)),
                ('option3', models.CharField(default='', max_length=400)),
                ('option4', models.CharField(default='', max_length=400)),
                ('correctans', models.CharField(default='', max_length=400)),
                ('experimentNO', models.CharField(default='', max_length=50)),
            ],
        ),
    ]