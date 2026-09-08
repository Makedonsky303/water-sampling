from django.urls import path
from .views import (
    LoginView,
    LogoutView,
    ProfileView,
    ActionLogListView,
    RegisteredUserListCreateView,
    RegisteredUserDetailView,
)

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('logs/', ActionLogListView.as_view(), name='logs'),
    path('whitelist/', RegisteredUserListCreateView.as_view(), name='whitelist'),
    path('whitelist/<int:pk>/', RegisteredUserDetailView.as_view(), name='whitelist-detail'),
]
