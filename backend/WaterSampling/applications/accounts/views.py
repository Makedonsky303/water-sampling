from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from .models import UserProfile, ActionLog, RegisteredUser
from .serializers import (
    UserProfileSerializer,
    ActionLogSerializer,
    RegisteredUserSerializer,
)


class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        email = (request.data.get('email') or '').strip().lower()
        password = request.data.get('password')
        user = User.objects.filter(email=email).first()

        if user is not None and user.is_active and user.check_password(password):
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
        refresh_token = request.data.get('refresh')
        if refresh_token:
            try:
                token = RefreshToken(refresh_token)
                token.blacklist()
            except Exception:
                return Response({'error': 'Invalid refresh token'}, status=status.HTTP_400_BAD_REQUEST)
        ActionLog.objects.create(user=request.user, action_type='logout', details={'message': 'User logged out'})
        return Response({'message': 'Logged out successfully'}, status=status.HTTP_200_OK)


class ProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        profile, _ = UserProfile.objects.get_or_create(user=self.request.user)
        return profile


class ActionLogListView(generics.ListAPIView):
    serializer_class = ActionLogSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return ActionLog.objects.filter(user=self.request.user)


def _is_admin(user):
    profile = getattr(user, 'profile', None)
    return bool(profile and profile.role == 'admin')


class IsAdmin(permissions.BasePermission):
    message = 'Доступно только администраторам'

    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated and _is_admin(request.user))


class RegisteredUserListCreateView(generics.ListCreateAPIView):
    serializer_class = RegisteredUserSerializer
    permission_classes = [IsAdmin]
    queryset = RegisteredUser.objects.all()


class RegisteredUserDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RegisteredUserSerializer
    permission_classes = [IsAdmin]
    queryset = RegisteredUser.objects.all()
