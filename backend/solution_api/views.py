from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from .serializers import SolutionSerializer, CommentSerializer, LikeSerializer     # we create the serializers
from .models import Solution, Comment, Like


class SolutionsView(APIView):

    def get(self, request, solution_pk=None):
        if solution_pk:
            data = Solution.objects.get(pk=solution_pk)
            serializer = SolutionSerializer(data)
        else:
            data = Solution.objects.all()
            serializer = SolutionSerializer(data, many=True)
        return Response({"result": serializer.data})

    def post(self, request):
        solution = request.data
        solution['creator_id'] = request.user.id
        serializer = SolutionSerializer(data=solution)
        if serializer.is_valid(raise_exception=True):
            
            solution_saved = serializer.save()
        return Response({"result": f"solution {solution_saved.title}"})

    def put(self, request, solution_pk):
        saved_solution = get_object_or_404(Solution.objects.all(), pk=solution_pk)
        data = request.data
        serializer = SolutionSerializer(instance=saved_solution, data=data, partial=True) #partial means not all fields are required 
        #The .is_valid() method takes an optional raise_exception flag that will cause it to raise a serializers.ValidationError exception if there are validation errors.
        if serializer.is_valid(raise_exception=True):#
            saved_solution = serializer.save()
        return Response({"result": f"{saved_solution.title} updated"})

    def delete(self, request, solution_pk):
        solution = get_object_or_404(Solution.objects.all(), pk=solution_pk)
        solution.delete()
        return Response({"result": f"solution id {solution_pk} deleted"},status=204)


class CommentsView(APIView):

    def get(self, request, solution_pk, comment_pk=None):
        if comment_pk:  
            data = Comment.objects.get(pk=comment_pk)
            serializer = CommentSerializer(data)
        else:
            # filters on the id of 
            data = Comment.objects.filter(solution_id=solution_pk)
            serializer = CommentSerializer(data, many=True)
        return Response({"result": serializer.data})

    # don't have comment id since not created yet
    def post(self, request, solution_pk):
        comment = request.data
        serializer = CommentSerializer(data=comment)
        if serializer.is_valid(raise_exception=True):
            comment_saved = serializer.save()
        return Response({"result": f"Comment {comment_saved.comment}"})

    def put(self, request, solution_pk, comment_pk):
        saved_comment = get_object_or_404(Comment.objects.all(), pk=comment_pk)
        data = request.data
        serializer = CommentSerializer(instance=saved_comment, data=data, partial=True) #partial means not all fields are required 
        #The .is_valid() method takes an optional raise_exception flag that will cause it to raise a serializers.ValidationError exception if there are validation errors.
        if serializer.is_valid(raise_exception=True):#
            saved_comment = serializer.save()
        return Response({"result": f"{saved_comment.comment} updated"})

    def delete(self, request, solution_pk, comment_pk):
        comment = get_object_or_404(Comment.objects.all(), pk=comment_pk)
        comment.delete()
        return Response({"result": f"Comment id {comment_pk} deleted"},status=204)


class LikesView(APIView):

    def get(self, request, solution_pk, like_pk=None):
        if like_pk:  
            data = Like.objects.get(pk=like_pk)
            serializer = LikeSerializer(data)
        else:
            # filters on the id of 
            data = Like.objects.filter(solution_id=solution_pk)
            serializer = LikeSerializer(data, many=True)
        return Response({"result": serializer.data})

    # don't have comment id since not created yet
    def post(self, request, solution_pk):
        like = request.data
        serializer = LikeSerializer(data=like)
        if serializer.is_valid(raise_exception=True):
            like_saved = serializer.save()
        return Response({"result": f"like {like_saved.solution}"})

    def delete(self, request, solution_pk, like_pk):
        like = get_object_or_404(Like.objects.all(), pk=like_pk)
        like.delete()
        return Response({"result": f"like id {like_pk} deleted"},status=204)