from django.contrib import admin
from .models import Solution, Comment
# Register your models here.

admin.site.register((Solution, Comment))
