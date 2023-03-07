# Generated by Django 4.1.7 on 2023-03-04 17:33

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('solution_api', '0002_alter_solution_final_conc_alter_solution_final_vol_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='solution',
            name='units',
            field=models.CharField(max_length=3, null=True),
        ),
        migrations.AlterField(
            model_name='solution',
            name='final_conc',
            field=models.DecimalField(decimal_places=8, max_digits=10, validators=[django.core.validators.MinValueValidator(1e-06)]),
        ),
        migrations.AlterField(
            model_name='solution',
            name='final_vol',
            field=models.DecimalField(decimal_places=2, max_digits=10, validators=[django.core.validators.MinValueValidator(0.001)]),
        ),
        migrations.AlterField(
            model_name='solution',
            name='source_conc',
            field=models.DecimalField(decimal_places=2, max_digits=10, validators=[django.core.validators.MinValueValidator(0.001)]),
        ),
        migrations.AlterField(
            model_name='solution',
            name='source_vol',
            field=models.DecimalField(decimal_places=2, max_digits=10, validators=[django.core.validators.MinValueValidator(0.001)]),
        ),
    ]