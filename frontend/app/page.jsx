'use client';

import Link from 'next/link';
import { useIsAuthenticated } from './lib/use-is-authenticated';

export default function HomePage() {
  const authed = useIsAuthenticated();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-900 text-white flex flex-col items-center justify-center px-6">
      <main className="max-w-3xl text-center">
        <span className="text-xs font-bold px-3 py-1 rounded-full border border-blue-300/40 text-blue-200 uppercase tracking-wider">
          Учебный симулятор
        </span>
        <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight">
          Отбор проб воды
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Интерактивная симуляция процесса отбора проб воды для лабораторного
          анализа: от подготовки тары и полевой сумки до транспортировки и
          сдачи проб.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          {authed ? (
            <>
              <Link
                href="/dashboard"
                className="px-8 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 font-semibold text-white transition-colors"
              >
                Перейти к выбору режима
              </Link>
              <Link
                href="/login"
                className="px-8 py-3 rounded-lg bg-white/10 hover:bg-white/20 font-semibold text-white transition-colors"
              >
                Войти под другим аккаунтом
              </Link>
            </>
          ) : (
            <Link
              href="/login"
              className="px-8 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 font-semibold text-white transition-colors"
            >
              Войти
            </Link>
          )}
        </div>
      </main>

      <footer className="absolute bottom-6 text-sm text-slate-400">
        Дипломный проект · Water-sampling
      </footer>
    </div>
  );
}
