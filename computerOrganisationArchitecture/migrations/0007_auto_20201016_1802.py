# Generated by Django 3.1.1 on 2020-10-16 12:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('computerOrganisationArchitecture', '0006_auto_20201016_1747'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedback',
            name='experimentNO',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='computerOrganisationArchitecture.quizes'),
        ),
        migrations.DeleteModel(
            name='Experiment',
        ),
    ]
