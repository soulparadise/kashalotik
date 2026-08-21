# Kashalotik production handoff

Дата фиксации: 21 августа 2026 года (Europe/Moscow).

## Текущий результат

- Production-сборка Kashalotik опубликована на виртуальном хостинге Beget.
- Базовый production-деплой выполнен коммитом `f01e22b34f8c87cd56720341302fb8f96932adaa`; канонические HTTPS-редиректы впервые проверены на сервере для коммита `48fef66f3fdfcf2952ddf3cb941bcf8794611e7b`. Текущую активную ревизию всегда определять по `deployment-version.txt`, поскольку каждый следующий push в `main` меняет SHA.
- GitHub Actions `Deploy production to Beget #1` и `Deploy Astro preview to GitHub Pages #43` завершились успешно.
- Production-файлы находятся в `/home/s/soulpab9/soulpab9.beget.tech/public_html`.
- К одному каталогу Beget прилинкованы `soulpab9.beget.tech`, `kashalotik.ru` и `preview.kashalotik.ru`.
- Основной домен и `www` переведены на Beget; NS остались у Axel Name.

## DNS в Axel Name

Авторитетные NS:

- `ns1.axelname.ru`
- `ns2.axelname.ru`

Зафиксированные A-записи:

- `kashalotik.ru` → `45.130.41.94`
- `www.kashalotik.ru` → `45.130.41.94`
- `*.kashalotik.ru` → `45.130.41.94`
- `preview.kashalotik.ru` → `45.130.41.94`

Предыдущий IP сайта до миграции: `176.57.67.161`. Технический домен Beget `soulpab9.beget.tech` использует другой IP и не должен применяться как A-запись пользовательского домена.

## SSL и HTTPS

- Установлен сертификат Let's Encrypt.
- Subject: `CN=kashalotik.ru`.
- SAN: `kashalotik.ru`, `www.kashalotik.ru`.
- Срок действия: с 21 августа 2026 до 19 ноября 2026.
- Прямые проверки `https://kashalotik.ru/` и `https://www.kashalotik.ru/` возвращают production HTML, код `200` и проходят TLS-проверку без ошибок.
- Панель Beget может некоторое время показывать промежуточный статус выпуска, хотя сертификат уже установлен на публичном сервере.

## Выполненные проверки

- Главная: `200`, production HTML размером 30109 байт.
- `/programs/`, `/prices/`, `/team/`, `/safety/`, `/rules/`, `/contacts/`: `200`.
- `robots.txt`, `sitemap.xml` и основной CSS asset: `200`.
- `robots.txt` разрешает индексацию и указывает production sitemap.
- `www.kashalotik.ru`: `200`, тот же production HTML.
- Старые URL перенаправляются с кодом `301`:
  - `/programm` → `/programs/`
  - `/individyalno` → `/programs/`
  - `/vater` → `/safety/`
  - `/page28635552.html` → `/rules/`
- Глобальные проверки показывали корректный HTTP/HTTPS-ответ с IP `45.130.41.94`; во время миграции отдельные DNS-резолверы кратковременно держали старый IP до истечения TTL.

## Что ещё требуется

1. Проверить Яндекс Вебмастер и Google Search Console после стабилизации HTTPS.
2. При необходимости удалить DNS-запись `preview.kashalotik.ru` после того, как поисковые системы и пользовательские закладки перестанут её использовать. До удаления preview постоянно перенаправляется на production origin.

## Канонические редиректы

- Любой HTTP-запрос постоянно перенаправляется на HTTPS.
- `www.kashalotik.ru` постоянно перенаправляется на `https://kashalotik.ru` с сохранением пути и query string.
- `preview.kashalotik.ru` и технический домен Beget постоянно перенаправляются на production origin.
- Старые URL сразу перенаправляются на конечные HTTPS-адреса без промежуточного hop.

## Деплой и откат

- Workflow: `.github/workflows/deploy-beget.yml`.
- GitHub Environment: `production`.
- В Environment настроены пять секретов: `BEGET_HOST`, `BEGET_USER`, `BEGET_SSH_KEY`, `BEGET_KNOWN_HOSTS`, `BEGET_DEPLOY_PATH`.
- Значения секретов и приватный ключ в репозитории не хранятся.
- Каждый push в `main` запускает production-деплой на Beget.
- Для отката запустить workflow вручную и указать проверенный commit SHA/tag в поле `ref`.
- Перед ручным откатом сверить `deployment-version.txt` на сервере.

## Безопасность и сохранённые пользовательские файлы

- Приватный deploy key не записан в репозиторий.
- В корне сайта workflow не трогает `.well-known/` и `cgi-bin/`.
- При настройке Beget автоматически создавались отдельные сайты `kashalotik.ru` и `preview.kashalotik.ru`; записи сайтов удалены из панели, домены перепривязаны к production-каталогу. Их оставшиеся каталоги на диске не удалялись.
- Несвязанные untracked-файлы сохранены и не входят в production-коммит:
  - `public/assets/images/program-early-swimming-v1.webp`
  - `public/assets/images/program-infant-swimming-v1.webp`

## Быстрый старт следующей сессии

1. Прочитать `AGENTS.md`, `docs/DEPLOY_BEGET.md` и этот файл.
2. Выполнить `git status --short` и `git rev-parse HEAD`.
3. Проверить сертификат и HTTP/HTTPS-ответы корня и `www`.
4. Не менять DNS повторно: он уже переключён на `45.130.41.94`.
5. Проверить, что HTTP, `www` и preview дают один прямой `301` на `https://kashalotik.ru`.
6. После работ обновить этот handoff, если изменились DNS, SSL, workflow или rollback-процедура.
