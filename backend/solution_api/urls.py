## wine_api/urls.py
from django.urls import path
from . import views

# remember these are paths for the api, a nested api
urlpatterns = [
    path('', views.SolutionsView.as_view(), name='solution_list'), # for listing and creating
    path('<int:solution_pk>', views.SolutionsView.as_view(), name='solution_detail'), # for detail, updating, and deleting, 
    
    path('<int:solution_pk>/comments', views.CommentsView.as_view(), name='comment_list'),
    path('<int:solution_pk>/comments/<int:comment_pk>', views.CommentsView.as_view(), name='comment_detail'),
    # if you knwo the comment alraedt then you dont' need the id of the wine or the wine in general
]