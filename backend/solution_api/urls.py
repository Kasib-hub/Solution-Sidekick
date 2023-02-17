## wine_api/urls.py
from django.urls import path
from . import views

# remember these are paths for the api, a nested api
urlpatterns = [
    path('', views.WinesView.as_view(), name='wine_list'), # for listing and creating
    path('<int:wine_pk>', views.WinesView.as_view(), name='wine_detail'), # for detail, updating, and deleting, 
    path('<int:wine_pk>/comments', views.CommentsView.as_view(), name='comment_list'),
    path('<int:wine_pk>/comments/<int:comment_pk>', views.CommentsView.as_view(), name='comment_detail'),
    # if you knwo the comment alraedt then you dont' need the id of the wine or the wine in general
]