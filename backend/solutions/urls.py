
from django.urls import path, include

urlpatterns = [
    path('solution_api/', include('solution_api.urls')),
    # path('accounts/', include('accounts.urls')), Moved in order to work with Docker
]
