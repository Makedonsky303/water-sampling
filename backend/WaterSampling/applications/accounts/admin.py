from django import forms
from django.contrib import admin, messages
import secrets
import string
from .models import RegisteredUser, UserProfile, ActionLog


def _random_password(length=12):
    alphabet = string.ascii_letters + string.digits
    return ''.join(secrets.choice(alphabet) for _ in range(length))


class RegisteredUserAdminForm(forms.ModelForm):
    password = forms.CharField(
        required=False,
        widget=forms.PasswordInput,
        help_text='Пароль для аккаунта. При создании обязателен или будет сгенерирован автоматически.',
    )

    class Meta:
        model = RegisteredUser
        fields = ('email', 'full_name', 'role', 'password')


@admin.register(RegisteredUser)
class RegisteredUserAdmin(admin.ModelAdmin):
    form = RegisteredUserAdminForm
    list_display = ('email', 'full_name', 'role', 'has_account')
    list_filter = ('role',)
    search_fields = ('email', 'full_name')

    def has_account(self, obj):
        return 'да' if obj.user_id else '—'
    has_account.short_description = 'Аккаунт создан'

    def save_model(self, request, obj, form, change):
        password = form.cleaned_data.get('password')
        super().save_model(request, obj, form, change)

        if not obj.user_id:
            if not password:
                password = _random_password()
            obj.create_account(password)
            messages.success(request, f'Аккаунт создан. Пароль: {password}')
        else:
            obj.sync_account(password=password)
            if password:
                messages.success(request, 'Пароль обновлён')
            else:
                messages.success(request, 'Данные аккаунта синхронизированы')


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'role', 'total_score', 'current_step')
    list_filter = ('role',)
    search_fields = ('user__username', 'user__email')


@admin.register(ActionLog)
class ActionLogAdmin(admin.ModelAdmin):
    list_display = ('user', 'action_type', 'timestamp')
    list_filter = ('action_type',)
    search_fields = ('user__username',)
    readonly_fields = ('user', 'action_type', 'details', 'timestamp')