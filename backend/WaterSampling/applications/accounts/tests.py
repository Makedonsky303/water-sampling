from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.test import APITestCase
from .models import RegisteredUser, UserProfile, ActionLog


def _setup_user(username, email, password='secret123', role='student'):
    user = User.objects.create_user(username=username, email=email, password=password)
    UserProfile.objects.create(user=user, role=role)
    return user


class LoginTests(APITestCase):
    def setUp(self):
        self.user = _setup_user('ivanov', 'ivanov@edu.kbtu.kz')

    def test_login_by_email_and_password(self):
        response = self.client.post('/api/accounts/login/', {
            'email': 'ivanov@edu.kbtu.kz',
            'password': 'secret123',
        }, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)
        self.assertTrue(ActionLog.objects.filter(user=self.user, action_type='login').exists())

    def test_login_email_case_insensitive(self):
        response = self.client.post('/api/accounts/login/', {
            'email': 'IVANOV@EDU.KBTU.KZ',
            'password': 'secret123',
        }, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_login_wrong_password(self):
        response = self.client.post('/api/accounts/login/', {
            'email': 'ivanov@edu.kbtu.kz',
            'password': 'wrong',
        }, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_login_unknown_email(self):
        response = self.client.post('/api/accounts/login/', {
            'email': 'nobody@edu.kbtu.kz',
            'password': 'secret123',
        }, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)


class ProfileTests(APITestCase):
    def setUp(self):
        self.user = _setup_user('petrov', 'petrov@edu.kbtu.kz', role='student')
        login = self.client.post('/api/accounts/login/', {
            'email': 'petrov@edu.kbtu.kz',
            'password': 'secret123',
        }, format='json')
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {login.data['access']}")

    def test_profile_returns_role(self):
        response = self.client.get('/api/accounts/profile/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['user']['email'], 'petrov@edu.kbtu.kz')
        self.assertEqual(response.data['role'], 'student')

    def test_profile_requires_auth(self):
        self.client.credentials()
        response = self.client.get('/api/accounts/profile/')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)


class LogoutTests(APITestCase):
    def test_logout_blacklists_refresh_token(self):
        user = _setup_user('sidorov', 'sidorov@edu.kbtu.kz')
        login = self.client.post('/api/accounts/login/', {
            'email': 'sidorov@edu.kbtu.kz',
            'password': 'secret123',
        }, format='json')
        refresh = login.data['refresh']

        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {login.data['access']}")
        response = self.client.post('/api/accounts/logout/', {'refresh': refresh}, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        refresh_response = self.client.post('/api/token/refresh/', {'refresh': refresh}, format='json')
        self.assertEqual(refresh_response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertTrue(ActionLog.objects.filter(user=user, action_type='logout').exists())


class LogsTests(APITestCase):
    def test_logs_list(self):
        user = _setup_user('kuznetsov', 'kuznetsov@edu.kbtu.kz')
        login = self.client.post('/api/accounts/login/', {
            'email': 'kuznetsov@edu.kbtu.kz',
            'password': 'secret123',
        }, format='json')
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {login.data['access']}")
        response = self.client.get('/api/accounts/logs/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual([log['action_type'] for log in response.data], ['login'])


class WhitelistTests(APITestCase):
    def setUp(self):
        self.admin = _setup_user('admin', 'admin@edu.kbtu.kz', role='admin')
        self.student = _setup_user('student', 'student@edu.kbtu.kz', role='student')
        self.teacher = _setup_user('teacher', 'teacher@edu.kbtu.kz', role='teacher')

    def _login(self, email):
        login = self.client.post('/api/accounts/login/', {
            'email': email,
            'password': 'secret123',
        }, format='json')
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {login.data['access']}")

    def test_student_cannot_access_whitelist(self):
        self._login('student@edu.kbtu.kz')
        response = self.client.get('/api/accounts/whitelist/')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_teacher_cannot_access_whitelist(self):
        self._login('teacher@edu.kbtu.kz')
        response = self.client.get('/api/accounts/whitelist/')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_whitelist_requires_auth(self):
        response = self.client.get('/api/accounts/whitelist/')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_admin_can_create_and_list_whitelist(self):
        self._login('admin@edu.kbtu.kz')
        create = self.client.post('/api/accounts/whitelist/', {
            'email': 'newstudent@edu.kbtu.kz',
            'full_name': 'Новый Студент',
            'role': 'student',
            'password': 'student123',
        }, format='json')
        self.assertEqual(create.status_code, status.HTTP_201_CREATED)

        listing = self.client.get('/api/accounts/whitelist/')
        self.assertEqual(listing.status_code, status.HTTP_200_OK)
        self.assertTrue(RegisteredUser.objects.filter(email='newstudent@edu.kbtu.kz').exists())

    def test_whitelist_password_required(self):
        self._login('admin@edu.kbtu.kz')
        create = self.client.post('/api/accounts/whitelist/', {
            'email': 'nopass@edu.kbtu.kz',
            'full_name': 'Без Пароля',
            'role': 'student',
        }, format='json')
        self.assertEqual(create.status_code, status.HTTP_400_BAD_REQUEST)

    def test_whitelist_create_creates_account(self):
        self._login('admin@edu.kbtu.kz')
        self.client.post('/api/accounts/whitelist/', {
            'email': 'created@edu.kbtu.kz',
            'full_name': 'Созданный',
            'role': 'student',
            'password': 'mypass123',
        }, format='json')

        entry = RegisteredUser.objects.get(email='created@edu.kbtu.kz')
        self.assertIsNotNone(entry.user)
        user = entry.user
        self.assertEqual(user.email, 'created@edu.kbtu.kz')
        self.assertTrue(user.check_password('mypass123'))
        profile = UserProfile.objects.get(user=user)
        self.assertEqual(profile.role, 'student')

    def test_new_account_can_login(self):
        self._login('admin@edu.kbtu.kz')
        self.client.post('/api/accounts/whitelist/', {
            'email': 'loginme@edu.kbtu.kz',
            'full_name': 'Логин',
            'role': 'student',
            'password': 'entrypass1',
        }, format='json')

        login = self.client.post('/api/accounts/login/', {
            'email': 'loginme@edu.kbtu.kz',
            'password': 'entrypass1',
        }, format='json')
        self.assertEqual(login.status_code, status.HTTP_200_OK)

    def test_admin_can_change_password(self):
        self._login('admin@edu.kbtu.kz')
        create = self.client.post('/api/accounts/whitelist/', {
            'email': 'changeme@edu.kbtu.kz',
            'full_name': 'Смена',
            'role': 'student',
            'password': 'oldpass123',
        }, format='json')
        entry_id = create.data['id']

        patch = self.client.patch(f'/api/accounts/whitelist/{entry_id}/', {
            'password': 'newpass456',
        }, format='json')
        self.assertEqual(patch.status_code, status.HTTP_200_OK)

        entry = RegisteredUser.objects.get(pk=entry_id)
        self.assertTrue(entry.user.check_password('newpass456'))

    def test_role_change_syncs_profile(self):
        self._login('admin@edu.kbtu.kz')
        create = self.client.post('/api/accounts/whitelist/', {
            'email': 'roleme@edu.kbtu.kz',
            'full_name': 'Роль',
            'role': 'student',
            'password': 'rolepass1',
        }, format='json')
        entry_id = create.data['id']

        patch = self.client.patch(f'/api/accounts/whitelist/{entry_id}/', {
            'role': 'teacher',
        }, format='json')
        self.assertEqual(patch.status_code, status.HTTP_200_OK)

        entry = RegisteredUser.objects.get(pk=entry_id)
        self.assertEqual(entry.user.profile.role, 'teacher')

    def test_profile_role_is_read_only(self):
        self._login('student@edu.kbtu.kz')
        response = self.client.patch('/api/accounts/profile/', {
            'role': 'admin',
        }, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['role'], 'student')

    def test_admin_can_delete_whitelist(self):
        entry = RegisteredUser.objects.create(
            email='remove@edu.kbtu.kz', full_name='Удалить', role='student'
        )
        self._login('admin@edu.kbtu.kz')
        response = self.client.delete(f'/api/accounts/whitelist/{entry.id}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(RegisteredUser.objects.filter(pk=entry.pk).exists())

    def test_whitelist_email_must_be_unique(self):
        RegisteredUser.objects.create(email='dup@edu.kbtu.kz', full_name='A', role='student')
        self._login('admin@edu.kbtu.kz')
        response = self.client.post('/api/accounts/whitelist/', {
            'email': 'dup@edu.kbtu.kz',
            'full_name': 'B',
            'role': 'teacher',
        }, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
