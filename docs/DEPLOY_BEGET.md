# Production-деплой Kashalotik на Beget

## Схема

`main` в GitHub → GitHub Actions → production-сборка Astro → SSH/rsync → отдельная директория сайта на Beget.

GitHub Pages остаётся preview-сборкой с базовым путём `/kashalotik/` и запретом индексации. Production собирается для `/` и использует `https://kashalotik.ru/` как canonical origin.

## GitHub Secrets

Секреты добавляются в GitHub Environment `production`:

- `BEGET_HOST` — SSH-хост из панели Beget;
- `BEGET_USER` — SSH-пользователь Beget;
- `BEGET_SSH_KEY` — приватный ключ Ed25519, созданный только для GitHub Actions;
- `BEGET_KNOWN_HOSTS` — проверенная строка публичного host key Beget;
- `BEGET_DEPLOY_PATH` — абсолютная директория только этого сайта, оканчивающаяся на `/public_html`.

Секреты, ключи, пароли и реальные значения не хранятся в репозитории.

## Первый безопасный запуск

1. Создать или выбрать сайт `kashalotik.ru` в Beget, не меняя DNS.
2. Уточнить его отдельную абсолютную директорию `public_html`.
3. Создать отдельную пару SSH-ключей для GitHub Actions и добавить публичный ключ в Beget.
4. Получить host key Beget по доверенному каналу и сохранить его в `BEGET_KNOWN_HOSTS`.
5. Создать GitHub Environment `production` и пять Secrets выше.
6. При необходимости включить required reviewer для Environment, чтобы push в `main` не публиковался без подтверждения.
7. Запустить `Deploy production to Beget` вручную. До переключения DNS проверить файлы через технический домен Beget или локальную подмену hosts.
8. Проверить `deployment-version.txt`: он содержит SHA сборки, находящейся на сервере.

Workflow удаляет устаревшие файлы только внутри проверенной директории `/home/.../public_html`. Каталоги `.well-known/` и `cgi-bin/` исключены из синхронизации, чтобы не затронуть ACME/SSL-файлы и системный CGI-каталог хостинга.

## Откат

Открыть Actions → `Deploy production to Beget` → `Run workflow`, указать рабочий commit SHA или tag в поле `ref` и подтвердить запуск. Workflow заново соберёт именно эту ревизию и синхронизирует её с Beget.

## Переключение домена выполняется отдельно

До отдельного согласованного переезда не менять DNS, SSL, основной домен, HTTP→HTTPS и www/non-www. Во время переезда проверить production-сборку, SSL, DNS, четыре 301, canonical, `robots.txt`, `sitemap.xml`, HTTP→HTTPS, www/non-www, Яндекс Вебмастер и Google Search Console.
