from django.contrib import admin
from .models import Student, UserProfile, ActionLog


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('student_id', 'full_name')
    search_fields = ('student_id', 'full_name')


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'student_id', 'group', 'total_score', 'current_step')
    list_filter = ('group',)
    search_fields = ('user__username', 'student_id')

@admin.register(ActionLog)
class ActionLogAdmin(admin.ModelAdmin):
    list_display = ('user', 'action_type', 'timestamp')
    list_filter = ('action_type',)
    search_fields = ('user__username',)
    readonly_fields = ('user', 'action_type', 'details', 'timestamp')
