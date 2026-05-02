export interface IAnswer {
  text: string;
  type: 'positive' | 'negative' | 'neutral';
}

export const answersList: IAnswer[] = [
  { text: 'Бесспорно', type: 'positive' },
  { text: 'Определённо да', type: 'positive' },
  { text: 'Никаких сомнений', type: 'positive' },
  { text: 'Может быть', type: 'neutral' },
  { text: 'Спроси позже', type: 'neutral' },
  { text: 'Лучше не рассказывать', type: 'neutral' },
  { text: 'Даже не думай', type: 'negative' },
  { text: 'Мой ответ — нет', type: 'negative' },
  { text: 'Духи сказали - Да', type: 'positive' },
  { text: 'Истина где-то рядом!', type: 'neutral' },
  { text: 'Духи затрудняются в ответе', type: 'neutral' },
  { text: 'Ну и вопрос', type: 'neutral' },
  { text: 'Не смей - духи недовольны!', type: 'negative' },
  { text: 'Nope', type: 'negative' },
];
