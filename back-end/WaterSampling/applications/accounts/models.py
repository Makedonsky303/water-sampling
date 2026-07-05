from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class UserProfile(models.Model):
    GROUP_CHOICES = [
        ('student', 'Студент'),
        ('teacher', 'Преподаватель'),
        ('admin', 'Администратор'),
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    group = models.CharField(max_length=20, choices=GROUP_CHOICES, default='student')
    total_score = models.IntegerField(default=0)
    current_step = models.IntegerField(default=1)  # 1..4
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)

    def __str__(self):
        return f"{self.user.username} (Profile)"

class ActionLog(models.Model):
    ACTION_TYPES = [
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