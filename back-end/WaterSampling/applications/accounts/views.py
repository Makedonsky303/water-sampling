from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from .models import UserProfile, ActionLog
from .serializers import (
    UserRegistrationSerializer,
    UserProfileSerializer,
    ActionLogSerializer,
)

class RegisterView(generics.CreateAPIView):
    serializer_class = UserRegistrationSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        # Создаём запись в логе
        ActionLog.objects.create(user=user, action_type='login', details={'message': 'Registration successful'})
        # Генерируем токены
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }, status=status.HTTP_201_CREATED)

class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            refresh = RefreshToken.for_user(user)
            ActionLog.objects.create(user=user, action_type='login', details={'message': 'User logged in'})
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        # Для JWT мы не можем инвалидировать токен на сервере (если не используем чёрный список),
        # но можно просто залогировать выход и попросить клиент удалить токен.
        ActionLog.objects.create(user=request.user, action_type='logout', details={'message': 'User logged out'})
        return Response({'message': 'Logged out successfully'}, status=status.HTTP_200_OK)

class ProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user.profile

class ActionLogListView(generics.ListAPIView):
    serializer_class = ActionLogSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return ActionLog.objects.filter(user=self.request.user)