'use client';

import { useSyncExternalStore } from 'react';
import { getAccessToken } from './auth';

function subscribe(callback) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

function getSnapshot() {
  return getAccessToken();
}

function getServerSnapshot() {
  return null;
}

export function useIsAuthenticated() {
  return Boolean(useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot));
}