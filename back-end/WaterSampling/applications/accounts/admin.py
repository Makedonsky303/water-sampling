from django.contrib import admin
from .models import UserProfile, ActionLog

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'group', 'total_score', 'current_step')
    list_filter = ('group',)
    search_fields = ('user__username',)

@admin.register(ActionLog)
class ActionLogAdmin(admin.ModelAdmin):
    list_display = ('user', 'action_type', 'timestamp')
    list_filter = ('action_type',)
    search_fields = ('user__username',)
    readonly_fields = ('user', 'action_type', 'details', 'timestamp')
