from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.test import APITestCase
from .models import UserProfile, ActionLog


class AccountAPITests(APITestCase):
    def test_register_creates_profile_and_tokens(self):
        response = self.client.post('/api/accounts/register/', {
            'username': 'student1',
            'email': 'student1@example.com',
            'password': 'secret123',
            'password_confirm': 'secret123',
        }, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)

        user = User.objects.get(username='student1')
        self.assertTrue(user.check_password('secret123'))
        self.assertTrue(UserProfile.objects.filter(user=user, group='student').exists())
        self.assertTrue(ActionLog.objects.filter(user=user, action_type='register').exists())

    def test_register_password_mismatch(self):
        response = self.client.post('/api/accounts/register/', {
            'username': 'student2',
            'email': 'student2@example.com',
            'password': 'secret123',
            'password_confirm': 'different123',
        }, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_register_duplicate_email(self):
        payload = {
            'username': 'student3',
            'email': 'dup@example.com',
            'password': 'secret123',
            'password_confirm': 'secret123',
        }
        self.client.post('/api/accounts/register/', payload, format='json')
        payload['username'] = 'student4'
        response = self.client.post('/api/accounts/register/', payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_login_and_profile(self):
        self.client.post('/api/accounts/register/', {
            'username': 'student5',
            'email': 'student5@example.com',
            'password': 'secret123',
            'password_confirm': 'secret123',
        }, format='json')

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
        register = self.client.post('/api/accounts/register/', {
            'username': 'student6',
            'email': 'student6@example.com',
            'password': 'secret123',
            'password_confirm': 'secret123',
        }, format='json')
        refresh = register.data['refresh']

        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {register.data['access']}")
        response = self.client.post('/api/accounts/logout/', {'refresh': refresh}, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Отозванный refresh-токен больше не должен обновлять access
        refresh_response = self.client.post('/api/token/refresh/', {'refresh': refresh}, format='json')
        self.assertEqual(refresh_response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_logs_list(self):
        register = self.client.post('/api/accounts/register/', {
            'username': 'student7',
            'email': 'student7@example.com',
            'password': 'secret123',
            'password_confirm': 'secret123',
        }, format='json')
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {register.data['access']}")
        response = self.client.get('/api/accounts/logs/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]['action_type'], 'register')
