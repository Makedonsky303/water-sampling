#!/usr/bin/env bash
# Запуск Django backend. ВАЖНО: 0.0.0.0 — иначе с телефона/по IP сервер недоступен.
set -euo pipefail
cd "$(dirname "$0")/WaterSampling"
exec ../venv/bin/python manage.py runserver 0.0.0.0:8000