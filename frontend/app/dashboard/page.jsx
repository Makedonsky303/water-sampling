'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { isAuthenticated, fetchProfile } from '../lib/auth';

export default function DashboardPage() {
  const router = useRouter();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace('/login');
      return;
    }
    fetchProfile().then(setProfile);
  }, [router]);

  const modes = [
    {
      title: 'Экзамен',
      icon: '🎓',
      description:
        'Прохождение симуляции с оценкой. Будет проверяться баллами и ошибками.',
    },
    {
      title: 'Тренировка / Обучение',
      icon: '📚',
      description:
        'Отработка навыков без контроля результата. Пока ведёт туда же, что и экзамен.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-900 text-white flex flex-col">
      <header className="w-full max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Water-sampling
        </Link>
        <div className="flex items-center gap-3">
          {profile && (
            <span className="text-sm text-slate-300 hidden sm:block">
              {profile.user?.email}
            </span>
          )}
          <Link
            href="/profile"
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-semibold transition-colors"
          >
            Профиль
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Выберите режим симуляции
        </h1>
        <p className="mt-3 text-slate-300 text-center">
          {profile
            ? `${profile.user?.first_name || 'Пользователь'}, приступайте к работе.`
            : 'Загружаем ваш профиль…'}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 w-full max-w-3xl">
          {modes.map((mode) => (
            <Link
              key={mode.title}
              href="/simulator"
              className="group rounded-2xl bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-300/40 p-8 transition-colors"
            >
              <div className="text-4xl">{mode.icon}</div>
              <h2 className="mt-4 text-xl font-bold">{mode.title}</h2>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {mode.description}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-blue-300 group-hover:text-blue-200">
                Начать →
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}