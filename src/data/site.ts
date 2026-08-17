const configuredBase = import.meta.env.BASE_URL;
export const base = configuredBase.endsWith('/') ? configuredBase : `${configuredBase}/`;

export const site = {
  name: 'Кашалотик',
  phone: '+7 (925) 980-00-17',
  phoneHref: 'tel:+79259800017',
  email: 'baby_swim@mail.ru',
  address: 'Москва, Россошанский проезд, 3, ТЦ «Прага», цокольный этаж',
  hours: 'Ежедневно с 9:00 до 21:00',
  booking: 'https://n304612.yclients.com/',
  maps: 'https://yandex.ru/maps/org/kashalotik/117749875078/',
};

export const navigation = [
  { href: base, label: 'О бассейне' },
  { href: `${base}programs/`, label: 'Занятия' },
  { href: `${base}prices/`, label: 'Расписание' },
  { href: `${base}team/`, label: 'Команда' },
  { href: `${base}safety/`, label: 'Водоподготовка' },
  { href: `${base}rules/`, label: 'Правила' },
  { href: `${base}contacts/`, label: 'Контакты' },
];
