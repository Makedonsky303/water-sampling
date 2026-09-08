from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Student, UserProfile, ActionLog


class AccountAPITests(APITestCase):
    def setUp(self):
        self.student1 = Student.objects.create(student_id='S001', full_name='Иванов Иван')
        self.student2 = Student.objects.create(student_id='S002', full_name='Петров Пётр')

    def _register(self, username, email, password='secret123', student_id='S001'):
        return self.client.post('/api/accounts/register/', {
            'username': username,
            'email': email,
            'password': password,
            'student_id': student_id,
        }, format='json')

    def test_register_creates_profile(self):
        response = self._register('student1', 'student1@example.com')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn('message', response.data)

        user = User.objects.get(username='student1')
        self.assertTrue(user.check_password('secret123'))
        self.assertTrue(UserProfile.objects.filter(user=user, group='student', student_id='S001').exists())
        self.assertTrue(ActionLog.objects.filter(user=user, action_type='register').exists())

    def test_register_no_tokens(self):
        response = self._register('student_tokens', 'tokens@example.com')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertNotIn('access', response.data)
        self.assertNotIn('refresh', response.data)

    def test_register_unknown_student_id(self):
        response = self._register('student_unknown', 'unknown@example.com', student_id='S999')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_register_student_id_required(self):
        response = self.client.post('/api/accounts/register/', {
            'username': 'no_id',
            'email': 'noid@example.com',
            'password': 'secret123',
        }, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_register_duplicate_student_id(self):
        self._register('student_dup1', 'dup1@example.com')
        response = self._register('student_dup2', 'dup2@example.com', student_id='S001')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_register_duplicate_email(self):
        self._register('student3', 'dup@example.com')
        response = self._register('student4', 'dup@example.com')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_login_and_profile(self):
        self._register('student5', 'student5@example.com')

        response = self.client.post('/api/accounts/login/', {
            'username': 'student5',
            'password': 'secret123',
        }, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        access = response.data['access']

        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {access}')
        profile = self.client.get('/api/accounts/profile/')
        self.assertEqual(profile.status_code, status.HTTP_200_OK)
        self.assertEqual(profile.data['user']['username'], 'student5')
        self.assertEqual(profile.data['student_id'], 'S001')

    def test_login_wrong_password(self):
        response = self.client.post('/api/accounts/login/', {
            'username': 'nobody',
            'password': 'wrong',
        }, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_profile_requires_auth(self):
        response = self.client.get('/api/accounts/profile/')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_logout_blacklists_refresh_token(self):
        self._register('student6', 'student6@example.com')

        login = self.client.post('/api/accounts/login/', {
            'username': 'student6',
            'password': 'secret123',
        }, format='json')
        refresh = login.data['refresh']

        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {login.data['access']}")
        response = self.client.post('/api/accounts/logout/', {'refresh': refresh}, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        refresh_response = self.client.post('/api/token/refresh/', {'refresh': refresh}, format='json')
        self.assertEqual(refresh_response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_logs_list(self):
        self._register('student7', 'student7@example.com')

        login = self.client.post('/api/accounts/login/', {
            'username': 'student7',
            'password': 'secret123',
        }, format='json')
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {login.data['access']}")
        response = self.client.get('/api/accounts/logs/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(
            sorted(log['action_type'] for log in response.data),
            ['login', 'register'],
        )
