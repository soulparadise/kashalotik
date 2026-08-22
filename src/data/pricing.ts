export interface SubscriptionPlan {
  sessions: number;
  price: string;
  perSession: string;
  validity: string;
  freeze: string;
  recommended?: boolean;
  bestValue?: boolean;
}

export interface SubscriptionCategory {
  id: string;
  label: string;
  title: string;
  duration: string;
  note?: string;
  schedule?: string;
  plans: SubscriptionPlan[];
}

export const trialOffer = {
  title: 'Пробное занятие',
  eyebrow: 'Для новых клиентов',
  format: 'Тренер + ребёнок',
  duration: '30 минут',
  price: '1 500 ₽',
  prepayment: 'Предоплата — 1 000 ₽',
  promotion: {
    title: 'Пробное занятие — в подарок',
    description: 'При покупке абонемента на 8 или 12 занятий в день визита.',
    alternative: 'При покупке абонемента на 4 занятия — пробное всего 750 ₽',
  },
  note: 'При покупке абонемента стоимость пересчитывается. Перенос или отмена — до 20:00 предшествующего дня.',
} as const;

export const singleVisitOffer = {
  title: 'Разовое занятие',
  eyebrow: 'Без абонемента',
  format: 'Тренер + ребёнок',
  variants: [
    { duration: '30 минут', price: '3 000 ₽' },
    { duration: '45 минут', price: '4 500 ₽' },
  ],
  description: 'Ещё не готовы к абонементу? Приходите разово, чтобы оценить тренера, качество воды и впечатления ребёнка — без лишних обязательств.',
  conditions: ['100% предоплата', 'Перенос или отмена — до 20:00 предшествующего дня'],
} as const;

export const subscriptionCategories: SubscriptionCategory[] = [
  {
    id: 'early',
    label: 'Ранние рыбки',
    title: 'Абонемент «Ранние рыбки»',
    duration: '30 минут',
    note: 'Специальный тариф',
    schedule: 'По будням с 9:00 до 15:00',
    plans: [
      { sessions: 4, price: '8 600 ₽', perSession: '2 150 ₽', validity: '30 дней', freeze: 'Без заморозки' },
      { sessions: 8, price: '15 840 ₽', perSession: '1 980 ₽', validity: '30 дней', freeze: 'Без заморозки', recommended: true },
      { sessions: 12, price: '22 680 ₽', perSession: '1 890 ₽', validity: '45 дней', freeze: 'Заморозка до 14 дней', bestValue: true },
    ],
  },
  {
    id: 'standard-30',
    label: 'Стандарт 30 мин',
    title: 'Стандартный абонемент',
    duration: '30 минут',
    plans: [
      { sessions: 4, price: '9 400 ₽', perSession: '2 350 ₽', validity: '30 дней', freeze: 'Без заморозки' },
      { sessions: 8, price: '17 600 ₽', perSession: '2 200 ₽', validity: '30 дней', freeze: 'Без заморозки', recommended: true },
      { sessions: 12, price: '25 200 ₽', perSession: '2 100 ₽', validity: '45 дней', freeze: 'Заморозка до 14 дней', bestValue: true },
    ],
  },
  {
    id: 'standard-45',
    label: 'Стандарт 45 мин',
    title: 'Стандартный абонемент',
    duration: '45 минут',
    plans: [
      { sessions: 4, price: '13 400 ₽', perSession: '3 350 ₽', validity: '30 дней', freeze: 'Без заморозки' },
      { sessions: 8, price: '25 600 ₽', perSession: '3 200 ₽', validity: '30 дней', freeze: 'Без заморозки', recommended: true },
      { sessions: 12, price: '37 200 ₽', perSession: '3 100 ₽', validity: '45 дней', freeze: 'Заморозка до 14 дней', bestValue: true },
    ],
  },
];

export const subscriptionConditions = [
  'Продление абонемента — по справке от врача.',
  'Отмена занятия день в день — по справке от врача.',
] as const;

export interface Promotion {
  title: string;
  badge: string;
  description: string;
  conditions: string[];
}

export const promotions: Promotion[] = [
  {
    title: 'Особенным деткам — особое внимание!',
    badge: 'Скидка 10%',
    description: 'На абонементы для детей с ограниченными возможностями.',
    conditions: ['Действует на первый и все последующие абонементы', 'Необходима розовая справка', 'Бессрочно'],
  },
  {
    title: 'Много малышей — много скидок!',
    badge: 'Скидка 10%',
    description: 'На абонементы в бассейн для многодетных семей.',
    conditions: ['Действует на первый и все последующие абонементы', 'Необходимо удостоверение многодетной семьи', 'Бессрочно'],
  },
  {
    title: 'Подарок именинникам',
    badge: 'Скидка 5%',
    description: 'На любой абонемент в бассейн для именинника.',
    conditions: ['При покупке за 5 дней до дня рождения или в течение 5 дней после', 'Необходимо свидетельство о рождении', 'Бессрочно'],
  },
  {
    title: 'Приведи друга!',
    badge: 'Занятие в подарок',
    description: 'Получайте бесплатное занятие за каждого приведённого друга.',
    conditions: ['Акция действует для клиентов с действующим абонементом', 'Бессрочно'],
  },
  {
    title: 'Скидка Z',
    badge: 'Скидка 10%',
    description: 'На абонементы для детей из семей мобилизованных и участников специальной военной операции (СВО).',
    conditions: ['Действует на первый и все последующие абонементы', 'Необходимо удостоверение', 'Бессрочно'],
  },
  {
    title: 'Скидка за отзыв',
    badge: 'Скидка 5%',
    description: 'На следующий абонемент за отзыв о бассейне.',
    conditions: ['Оставьте отзыв на Яндекс Картах, 2ГИС, Google Maps или Zoon.ru', 'Предоставляется за один отзыв', 'Бессрочно'],
  },
  {
    title: 'Вместе веселее',
    badge: 'Семейный формат',
    description: 'Один абонемент можно приобрести на двоих или троих детей из одной семьи.',
    conditions: ['Действует на первый и все последующие абонементы', 'Бессрочно'],
  },
];
