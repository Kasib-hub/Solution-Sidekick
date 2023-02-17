
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('solution_api/', include('solution_api.urls')),
    path('accounts/', include('accounts.url')),
]
