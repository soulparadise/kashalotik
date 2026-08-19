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
    alternative: 'С абонементом на 4 занятия пробное стоит всего 750 ₽.',
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
