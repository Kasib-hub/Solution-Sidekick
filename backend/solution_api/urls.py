## wine_api/urls.py
from django.urls import path, include
from . import views

# remember these are paths for the api, a nested api
urlpatterns = [
    path('', views.SolutionsView.as_view(), name='solution_list'), # for listing and creating
    path('<int:solution_pk>', views.SolutionsView.as_view(), name='solution_detail'), # for detail, updating, and deleting, 
    path('<int:solution_pk>/likes', views.LikesView.as_view(), name='like_list'),
    path('<int:solution_pk>/likes/<int:like_pk>', views.LikesView.as_view(), name='like_detail'),
    path('<int:solution_pk>/comments', views.CommentsView.as_view(), name='comment_list'),
    path('<int:solution_pk>/comments/<int:comment_pk>', views.CommentsView.as_view(), name='comment_detail'),
    path('third_party', views.ThirdPartyView.as_view()),
    path('accounts/', include('accounts.urls')),
]