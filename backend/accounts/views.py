from rest_framework.generics import CreateAPIView
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

