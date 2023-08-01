from rest_framework.authtoken.models import Token
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from django.http import JsonResponse
from django.contrib.auth.models import User
from .serializers import SignupSerializer
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username #grabs the specified attributes of the user model. 'token' here is basically in encripted dictionary
        # ...
        return token

# this is the view that will be used to generate the token. it uses the serializer above to generate the token
class MyTokenObtainPairView(TokenObtainPairView): 
    serializer_class = MyTokenObtainPairSerializer

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
            try:
                User.objects.create_user(username=username, password=password)
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



