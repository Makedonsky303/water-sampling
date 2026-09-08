from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile, ActionLog, RegisteredUser


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name')


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = UserProfile
        fields = ('id', 'user', 'role', 'total_score', 'current_step', 'avatar')
        read_only_fields = ('role',)


class RegisteredUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        required=False,
        allow_blank=True,
        min_length=6,
        style={'input_type': 'password'},
    )

    class Meta:
        model = RegisteredUser
        fields = ('id', 'email', 'full_name', 'role', 'password')

    def validate(self, attrs):
        if self.instance is None and not attrs.get('password'):
            raise serializers.ValidationError({'password': 'Пароль обязателен при создании'})
        return attrs

    def create(self, validated_data):
        password = validated_data.pop('password')
        entry = super().create(validated_data)
        try:
            entry.create_account(password)
        except Exception:
            entry.delete()
            raise
        return entry

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        entry = super().update(instance, validated_data)
        entry.sync_account(password=password)
        return entry


class ActionLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActionLog
        fields = ('id', 'action_type', 'details', 'timestamp')
