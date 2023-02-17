from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from .serializers import SolutionSerializer, CommentSerializer     # we create the serializers
from .models import Solution, Comment


class SolutionsView(APIView):

    def get(self, request, solution_pk=None):
        if solution_pk:
            data = Solution.objects.get(pk=solution_pk)
            
