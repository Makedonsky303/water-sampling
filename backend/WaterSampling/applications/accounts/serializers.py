from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from .models import UserProfile, ActionLog, Student


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name')


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = UserProfile
        fields = ('id', 'user', 'student_id', 'group', 'total_score', 'current_step', 'avatar')


class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)
    student_id = serializers.CharField(max_length=50)
    email = serializers.EmailField(
        required=False,
        validators=[UniqueValidator(
            queryset=User.objects.all(),
            message='Пользователь с таким email уже существует',
        )],
    )

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'student_id')

    def validate_student_id(self, value):
        if not Student.objects.filter(student_id=value).exists():
            raise serializers.ValidationError(
                'Студент с таким ID не найден в списке допущенных'
            )
        return value

    def validate(self, attrs):
        if UserProfile.objects.filter(student_id=attrs['student_id']).exists():
            raise serializers.ValidationError({
                'student_id': 'Этот ID студента уже зарегистрирован'
            })
        return attrs

    def create(self, validated_data):
        student_id = validated_data.pop('student_id')
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email', ''),
            password=validated_data['password'],
        )
        UserProfile.objects.create(user=user, group='student', student_id=student_id)
        return user


class ActionLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActionLog
        fields = ('id', 'action_type', 'details', 'timestamp')
