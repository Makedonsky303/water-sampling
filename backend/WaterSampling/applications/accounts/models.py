from django.db import models
from django.contrib.auth.models import User


class RegisteredUser(models.Model):
    ROLE_CHOICES = [
        ('student', 'Студент'),
        ('teacher', 'Преподаватель'),
        ('admin', 'Администратор'),
    ]
    email = models.EmailField(unique=True, verbose_name='Почта (корпоративная)')
    full_name = models.CharField(max_length=200, verbose_name='ФИО')
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='student', verbose_name='Роль')
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name='registered_entry',
        verbose_name='Аккаунт',
        help_text='Создаётся автоматически из записи whitelist',
    )

    class Meta:
        verbose_name = 'Допущенный пользователь (whitelist)'
        verbose_name_plural = 'Допущенные пользователи (whitelist)'
        ordering = ['email']

    def __str__(self):
        return f"{self.email} — {self.full_name} ({self.get_role_display()})"

    def create_account(self, password):
        """Создаёт User + UserProfile из записи whitelist."""
        if self.user_id:
            raise ValueError('Аккаунт для этой записи уже существует')

        user = User.objects.create_user(
            username=self.email,
            email=self.email,
            password=password,
            first_name=self.full_name,
        )
        UserProfile.objects.create(user=user, role=self.role)
        self.user = user
        self.save(update_fields=['user'])
        return user

    def sync_account(self, password=None):
        """Обновляет существующий аккаунт (пароль/почта/ФИО/роль) по записи whitelist."""
        if not self.user_id:
            return None
        user = self.user
        changed = False

        if password:
            user.set_password(password)
            changed = True
        if user.email != self.email:
            user.email = self.email
            user.username = self.email
            changed = True
        if user.first_name != self.full_name:
            user.first_name = self.full_name
            changed = True

        if changed:
            user.save()

        profile = UserProfile.objects.filter(user=user).first()
        if profile is None:
            profile = UserProfile.objects.create(user=user)
        if profile.role != self.role:
            profile.role = self.role
            profile.save()

        return user


class UserProfile(models.Model):
    ROLE_CHOICES = [
        ('student', 'Студент'),
        ('teacher', 'Преподаватель'),
        ('admin', 'Администратор'),
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='student', verbose_name='Роль')
    total_score = models.IntegerField(default=0)
    current_step = models.IntegerField(default=1)  # 1..4
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)

    def __str__(self):
        return f"{self.user.username} ({self.get_role_display()})"

class ActionLog(models.Model):
    ACTION_TYPES = [
        ('register', 'Регистрация'),
        ('login', 'Вход'),
        ('logout', 'Выход'),
        ('step_complete', 'Завершение этапа'),
        ('pack_item', 'Укладка предмета'),
        ('unpack_item', 'Удаление предмета'),
        ('score_change', 'Изменение баллов'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='actions')
    action_type = models.CharField(max_length=20, choices=ACTION_TYPES)
    details = models.JSONField(default=dict)  # дополнительная информация
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-timestamp']

    def __str__(self):
        return f"{self.user.username} - {self.action_type} at {self.timestamp}"