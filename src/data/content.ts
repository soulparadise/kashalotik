import { base } from './site';

const image = (name: string) => `${base}assets/images/${name}`;

export const programs = [
  { icon: '🫧', title: 'Грудничковое плавание', age: '1 месяц — 1 год', text: 'Мягкая адаптация к воде, дыхание, ныряние и расслабление.', image: image('pool-action-2.webp') },
  { icon: '🐳', title: 'Раннее плавание', age: '1 — 3 года', text: 'Игровые занятия и первые навыки самостоятельного плавания.', image: image('pool-action-3.webp') },
  { icon: '⭐', title: 'Дошкольное плавание', age: '3 — 5 лет', text: 'Подготовка к уверенному плаванию спортивными стилями.', image: image('pool-toy.webp') },
  { icon: '🥽', title: 'Школьное плавание', age: '5 — 10 лет', text: 'Техника, выносливость и подготовка к большому бассейну.', image: image('pool-action-1.webp') },
  { icon: '💞', title: 'Вместе с родителем', age: '1 месяц — 3 года', text: 'Мама или папа в воде вместе с малышом и тренером.', image: image('pool-action-3.webp') },
  { icon: '💙', title: 'Коррекционное плавание', age: 'Индивидуально', text: 'Водная реабилитация для детей с ОВЗ.', image: image('pool-action-2.webp') },
  { icon: '🧘', title: 'Аква-йога и акмионика', age: 'Для будущих мам', text: 'Дыхание, расслабление и бережная физическая активность.', image: image('pool-toy.webp') },
  { icon: '🌊', title: 'Свободное плавание', age: '30 минут — 2 500 ₽', text: 'Родитель и ребёнок плавают самостоятельно без тренера.', image: image('pool-action-1.webp') },
] as const;

export const trainers = [
  { name: 'Эльвира', image: image('elvira.webp'), role: 'Грудничковое, раннее, дошкольное и восстановительное плавание' },
  { name: 'Алина', image: image('alina.webp'), role: 'Грудничковое, раннее, дошкольное и реабилитационное плавание' },
  { name: 'Полина', image: image('polina.webp'), role: 'Грудничковое, раннее и дошкольное плавание' },
  { name: 'Сергей', image: image('sergey.webp'), role: 'Грудничковое, раннее, дошкольное и восстановительное плавание' },
  { name: 'Наталья', image: image('natalya.webp'), role: 'Грудничковое, раннее, дошкольное и восстановительное плавание' },
] as const;

export interface PricePlan {
  title: string;
  price: string;
  note: string;
  extra?: string;
  featured?: boolean;
}

export const prices: PricePlan[] = [
  { title: 'Пробное занятие', price: '1 500 ₽', note: '30 минут · предоплата 1 000 ₽', featured: true },
  { title: '4 занятия', price: '9 400 ₽', note: '30 минут · 30 дней', extra: '45 минут — 13 400 ₽' },
  { title: '8 занятий', price: '17 600 ₽', note: '30 минут · 30 дней', extra: '45 минут — 25 600 ₽' },
  { title: '12 занятий', price: '25 200 ₽', note: '30 минут · 45 дней', extra: '45 минут — 37 200 ₽' },
];
