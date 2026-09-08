'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { isAuthenticated, fetchProfile, logout } from '../lib/auth';

const ROLE_LABELS = {
  student: 'Студент',
  teacher: 'Преподаватель',
  admin: 'Администратор',
};

export default function ProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace('/login');
      return;
    }
    fetchProfile()
      .then(setProfile)
      .catch(() => setError('Не удалось загрузить профиль'));
  }, [router]);

  const handleLogout = async () => {
    await logout();
    router.replace('/');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <header className="w-full bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="text-sm text-slate-500 hover:text-slate-700">
            ← К выбору режима
          </Link>
          <span className="font-bold text-slate-800">Профиль</span>
        </div>
      </header>

      <main className="flex-1 flex items-start justify-center px-6 py-10">
        {error && (
          <div className="max-w-md w-full text-center bg-red-50 border border-red-200 text-red-600 rounded-lg px-4 py-3">
            {error}
          </div>
        )}

        {!profile && !error && (
          <div className="text-slate-500 text-sm">Загрузка профиля…</div>
        )}

        {profile && (
          <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
                {(profile.user?.first_name || profile.user?.email || '?')[0].toUpperCase()}
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">
                  {profile.user?.first_name || profile.user?.email}
                </h1>
                <p className="text-sm text-slate-500">{profile.user?.email}</p>
              </div>
            </div>

            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <dt className="text-slate-500">Роль</dt>
                <dd className="text-slate-800 font-medium">
                  {ROLE_LABELS[profile.role] || profile.role}
                </dd>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <dt className="text-slate-500">Текущий этап</dt>
                <dd className="text-slate-800 font-medium">{profile.current_step}</dd>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <dt className="text-slate-500">Баллы</dt>
                <dd className="text-slate-800 font-medium">{profile.total_score}</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/simulator"
                className="text-center py-3 rounded-lg bg-blue-500 hover:bg-blue-400 font-semibold text-white transition-colors"
              >
                Перейти к симуляции
              </Link>
              <button
                onClick={handleLogout}
                className="py-3 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 font-semibold text-slate-700 transition-colors"
              >
                Выйти
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}