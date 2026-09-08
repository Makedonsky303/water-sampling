#!/usr/bin/env bash
# Запуск Next.js фронтенда (dev).
set -euo pipefail
cd "$(dirname "$0")"
if ! command -v npm >/dev/null 2>&1; then
  export PATH="$HOME/.nvm/versions/node/v22.22.3/bin:$PATH"
fi
exec npm run dev