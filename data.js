/* ============================================================
   КОНФИГУРАЦИЯ ПЛАТФОРМЫ KDen Neon
   ============================================================
   Единственный файл, где вы настраиваете карточки приложений.
   Все ссылки на файлы (иконки, APK, скриншоты) — относительные,
   лежат в папке /assets.

   Для каждой карточки:
     icon       — путь к иконке (assets/icons/<slug>/icon.png)
     name       — название
     type       — 'app' или 'game'
     short      — краткое описание (на карточке)
     desc       — полное описание (в модальном окне)
     version    — текущая версия
     features   — список ключевых возможностей (в модальном окне)
     screens    — массив путей к скриншотам (assets/screenshots/<slug>/...)
     apk        — путь к APK (assets/apk/<slug>/...)
     apkSize    — размер APK (для показа)
     ruStore    — ссылка на RuStore (пустая, если не опубликовано)
     status     — состояние:
                  'active'  — опубликовано, обе кнопки
                  'free'    — бесплатное, можно скачать
                  'queue'   — в очереди на публикацию, только APK
                  'pro'     — есть платная версия (proPrice внутри)
     proPrice   — цена Pro-версии (если есть внутренняя покупка)
     category   — категория приложения

   Просто меняйте значения — сайт обновится автоматически.
   ============================================================ */

const APPS = [
    {
        icon: "assets/icons/galochka/icon.png",
        name: "Галочка — списки",
        type: "app",
        short: "Менеджер списков покупок и дел. Отмечайте галочкой и планируйте в календаре.",
        desc: "Галочка — простой и удобный менеджер списков покупок, дел и проектов. Никаких сложных настроек, только то, что действительно нужно.",
        version: "4.1.0",
        category: "Продуктивность",
        features: [
            "Любые списки: покупки, дела, чек-листы и рабочие проекты",
            "Календарь — планируйте задачи по датам",
            "Умные напоминания: общее время или индивидуально для каждого списка (в Pro)",
            "Поиск, сортировка, фильтры и перетаскивание",
            "Закрепление важных списков",
            "Экспорт и импорт ZIP",
            "Тёмная и светлая темы (системная настройка)",
            "Русский и английский языки",
            "Все данные хранятся только на устройстве — без регистрации и сбора личной информации"
        ],
        screens: [
            "assets/screenshots/galochka/01-Списки.png",
            "assets/screenshots/galochka/02-Календарь.png",
            "assets/screenshots/galochka/03-Поиск.png",
            "assets/screenshots/galochka/04-Настройки.png",
            "assets/screenshots/galochka/05-Галочка-Про.png",
            "assets/screenshots/galochka/06-Корзина.png"
        ],
        apk: "assets/apk/galochka/Галочка-4.1.0-release.apk",
        apkSize: "11 МБ",
        ruStore: "https://www.rustore.ru/catalog/app/com.kdenstudiomeasurement.checkmark",
        status: "active",
        proPrice: 99
    },
    {
        icon: "assets/icons/bibliya/icon.png",
        name: "Обычная Библия",
        type: "app",
        short: "Библия в вашем телефоне: поиск, заметки, чтение офлайн.",
        desc: "Обычная Библия — приложение для чтения Синодального перевода Библии. Без рекламы, без регистрации, бесплатно.",
        version: "4.0.0",
        category: "Книги и справочники",
        features: [
            "Все книги Ветхого и Нового Завета",
            "Быстрый поиск по тексту",
            "Заметки к стихам",
            "Точки чтения — сохраняйте важные места",
            "История чтения — последние места (настраивается)",
            "Выделение текста цветом — маркер для важных стихов",
            "Озвучка Библии",
            "Копирование и отправка стихов",
            "Автоматическое сохранение прогресса чтения",
            "Удобный тёмный дизайн и настройка шрифта",
            "Ежедневные напоминания (утро и вечер)",
            "Всё работает офлайн"
        ],
        screens: [
            "assets/screenshots/bibliya/01_Gлавный_экран.png",
            "assets/screenshots/bibliya/02_Умное_выделение.png",
            "assets/screenshots/bibliya/03_Заметки.png",
            "assets/screenshots/bibliya/04_Точки_чтения.png",
            "assets/screenshots/bibliya/05_Поиск.png",
            "assets/screenshots/bibliya/06_Настройки.png",
            "assets/screenshots/bibliya/07_Выбор_главы.png",
            "assets/screenshots/bibliya/08_О_приложении.png"
        ],
        apk: "assets/apk/bibliya/Библия-release.apk",
        apkSize: "9 МБ",
        ruStore: "https://www.rustore.ru/catalog/app/com.kdenstudiomeasurement.handybible",
        status: "active",
        proPrice: null
    },
    {
        icon: "assets/icons/schemoteka/icon.png",
        name: "Схемотека",
        type: "game",
        short: "Собери свою электрическую цепь! Лампы, транзисторы, моторы и датчики.",
        desc: "Схемотека — реалистичный симулятор электрических схем. Почувствуй себя инженером и собери свою цепь из десятков компонентов.",
        version: "0.4.0",
        category: "Образование",
        features: [
            "Более 60 видов деталей: от резисторов и лампочек до транзисторов и датчиков",
            "Реалистичная физика: компоненты перегреваются, провода плавятся",
            "Влияние среды: солнце, горелка и магнит для датчиков",
            "Готовые схемы для быстрого старта",
            "Удобное управление перетаскиванием на экране телефона"
        ],
        screens: [
            "assets/screenshots/schemoteka/01-Главное-меню.png",
            "assets/screenshots/schemoteka/02-Компоненты.png",
            "assets/screenshots/schemoteka/03-Схемы.png",
            "assets/screenshots/schemoteka/04-Настройки-двигателя.png",
            "assets/screenshots/schemoteka/05-Новое-сохранение.png",
            "assets/screenshots/schemoteka/06-Сохранения.png",
            "assets/screenshots/schemoteka/07-Настройки.png"
        ],
        apk: "assets/apk/schemoteka/Схемотека-0.4.0-release.apk",
        apkSize: "5 МБ",
        ruStore: "https://www.rustore.ru/catalog/app/com.kdenstudiomeasurement.schemoteka",
        status: "active",
        proPrice: null
    },
    {
        icon: "assets/icons/morze/icon.png",
        name: "Морзе",
        type: "game",
        short: "Игра на память: запоминай сигналы, проходи уровни и бей рекорды.",
        desc: "Морзе — уютная игра на память, где нужно повторять сигналы за полем. Смотри, какие клетки вспыхивают, и повторяй последовательность в том же порядке.",
        version: "0.6.0",
        category: "Казуальные",
        features: [
            "Повторяй сигналы: смотри и повторяй последовательность в том же порядке",
            "Уровни и растущее поле: 3×3 → 4×4 → 5×5",
            "Таблица лидеров: соревнуйся по очкам, активности, лайкам, престижу и спринту",
            "Стили поля: «Классика», «Неон», «Конфеты»",
            "Бонусы-читы: подсказка и щит от ошибки",
            "Престиж: копи очки и повышай статус",
            "Тёмная тема, анимации и статистика максимального уровня",
            "Мгновенный старт без регистрации"
        ],
        screens: [
            "assets/screenshots/morze/01-Игра.png",
            "assets/screenshots/morze/02-Магазин.png",
            "assets/screenshots/morze/03-Топ.png",
            "assets/screenshots/morze/04-Промо.png"
        ],
        apk: "assets/apk/morze/Морзе-0.6.0-release.apk",
        apkSize: "11 МБ",
        ruStore: "",
        status: "queue",
        proPrice: null
    },
    {
        icon: "assets/icons/html-editor/icon.png",
        name: "HTML Editor Run Craft",
        type: "app",
        short: "Удобный редактор HTML, CSS и JavaScript с запуском проектов на телефоне.",
        desc: "HTML Editor Run Craft — аккуратный и удобный инструмент для работы с кодом прямо на вашем устройстве. Для тех, кому важно писать, редактировать и тестировать проекты без лишних сложностей.",
        version: "0.5.0",
        category: "Инструменты",
        features: [
            "Редактор с подсветкой, нумерацией строк и моноширинным шрифтом",
            "Файловая система: папки, файлы, переименование и перемещение",
            "Мгновенный просмотр проекта одной кнопкой",
            "Локальное хранение — данные в безопасности",
            "Корзина и импорт/экспорт проектов",
            "Светлая, тёмная или системная тема и акцентный цвет"
        ],
        screens: [
            "assets/screenshots/html-editor/01-Персонализация.png",
            "assets/screenshots/html-editor/02-Справочник.png",
            "assets/screenshots/html-editor/03-Редактор.png",
            "assets/screenshots/html-editor/04-Файловая-система.png",
            "assets/screenshots/html-editor/05-Главный-экран.png"
        ],
        apk: "assets/apk/html-editor/HTML-Editor-Run-Craft-0.5.0-release.apk",
        apkSize: "19 МБ",
        ruStore: "https://www.rustore.ru/catalog/app/com.kdenstudiomeasurement.htmleditorruncraft",
        status: "active",
        proPrice: null
    },
    {
        icon: "assets/icons/unity-cs/icon.png",
        name: "Unity C# Справочник",
        type: "app",
        short: "Карманный справочник по Unity C# с готовыми примерами кода.",
        desc: "Unity C# Справочник — удобное карманное приложение для разработчиков игр на движке Unity. Больше не нужно искать по всему интернету базовый синтаксис — всё важное всегда под рукой.",
        version: "0.5.0",
        category: "Книги и справочники",
        features: [
            "Более 200 тем по языку C# и движку Unity",
            "Готовые примеры кода",
            "Умный поиск: ищет в названиях и внутри кода",
            "Разделение на категории (Основы, Физика, UI, Логика и др.)",
            "Светлая и тёмная тема, настройка размера шрифта",
            "Весь справочник доступен офлайн"
        ],
        screens: [
            "assets/screenshots/unity-cs/promo-1.png",
            "assets/screenshots/unity-cs/promo-2.png",
            "assets/screenshots/unity-cs/promo-3.png"
        ],
        apk: "assets/apk/unity-cs/UnityCSharp-0.5.0-release.apk",
        apkSize: "5 МБ",
        ruStore: "",
        status: "queue",
        proPrice: null
    }
];

/* Группировка по типу для разделов "Приложения" и "Игры" */
const GAMES = APPS.filter(a => a.type === 'game');
const APPS_ONLY = APPS.filter(a => a.type === 'app');