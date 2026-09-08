const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';

const ACCESS_KEY = 'ws_access';
const REFRESH_KEY = 'ws_refresh';

export function getAccessToken() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(ACCESS_KEY);
}

export function getRefreshToken() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(REFRESH_KEY);
}

export function setTokens(access, refresh) {
  localStorage.setItem(ACCESS_KEY, access);
  localStorage.setItem(REFRESH_KEY, refresh);
}

export function clearTokens() {
  localStorage.removeItem(ACCESS_KEY);
  localStorage.removeItem(REFRESH_KEY);
}

export function isAuthenticated() {
  return Boolean(getAccessToken());
}

export async function login(email, password) {
  const res = await fetch(`${API_URL}/accounts/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || data.detail || 'Неверная почта или пароль');
  }

  setTokens(data.access, data.refresh);
  return data;
}

export async function fetchProfile() {
  const token = getAccessToken();
  const res = await fetch(`${API_URL}/accounts/profile/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) return null;
  return res.json();
}

export async function logout() {
  const refresh = getRefreshToken();
  try {
    await fetch(`${API_URL}/accounts/logout/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAccessToken()}`,
      },
      body: JSON.stringify({ refresh }),
    });
  } catch {
    // игнорируем ошибки сети при выходе
  }
  clearTokens();
}
