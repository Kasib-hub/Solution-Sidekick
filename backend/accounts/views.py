from rest_framework.authtoken.models import Token
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from django.http import JsonResponse
from django.contrib.auth.models import User
from .serializers import SignupSerializer
from rest_framework.permissions import AllowAny
from rest_framework.response import Response


class SignupView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = SignupSerializer
    permission_classes = [AllowAny]

    # this is all it needs to make a user. Doesn't use other stuff because?? remember serializer maps model to json
    # try adding email since its included in the modesl
    def perform_create(self, serializer):   
        if serializer.is_valid():
            username = serializer.validated_data["username"]
            password = serializer.validated_data["password"]
            email = serializer.validated_data["email"]
            try:
                User.objects.create_user(username=username, password=password, email=email)
            except:
                return Response({'error': 'Username already exists'})

class GetUserView(APIView):
    
    def get(self, request):
        if request.user.is_authenticated:
            user = User.objects.get(id=request.user.id)
            return JsonResponse({'user_id': user.id, 'username':user.username})
        else:
            return Response({"error":"User is not authenticated"})

class LogoutView(APIView):

    def post(self, request):
        if request.user.is_authenticated:
            token = Token.objects.get(user=request.user)
            token.delete()
            return Response({'message': 'You have successfully logged out'})
        else:
            return Response({"error":"You aren't logged in"})



