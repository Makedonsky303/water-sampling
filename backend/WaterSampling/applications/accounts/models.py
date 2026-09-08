from django.db import models
from django.contrib.auth.models import User


class Student(models.Model):
    student_id = models.CharField(max_length=50, unique=True, verbose_name='ID студента')
    full_name = models.CharField(max_length=200, verbose_name='ФИО')

    class Meta:
        verbose_name = 'Студент (whitelist)'
        verbose_name_plural = 'Студенты (whitelist)'
        ordering = ['student_id']

    def __str__(self):
        return f"{self.student_id} — {self.full_name}"


class UserProfile(models.Model):
    GROUP_CHOICES = [
        ('student', 'Студент'),
        ('teacher', 'Преподаватель'),
        ('admin', 'Администратор'),
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    student_id = models.CharField(max_length=50, blank=True, verbose_name='ID студента')
    group = models.CharField(max_length=20, choices=GROUP_CHOICES, default='student')
    total_score = models.IntegerField(default=0)
    current_step = models.IntegerField(default=1)  # 1..4
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)

    def __str__(self):
        return f"{self.user.username} (Profile)"

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