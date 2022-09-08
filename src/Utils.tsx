export function wordCount(str: string) {
  const m = str.match(/[^\s]+/g);
  return m ? m.length : 0;
}

export function plural(n: number) {
  if (n === 0) return 'no words';
  else if (n === 1) return '1 word';
  else return n + ' words';
}

export function randomMessage() {
  const messages = [
    'Do something with passion or not it all',
    'How do you do?',
    "Nice day, isn't it?",
    'I recently changed the oil',
    'If you never try you will never know',
    'Life is a one time offer, use it well',
    'The best thing in our life is love',
    'Never regret anything that made you smile',
  ];
  return messages[Math.floor(Math.random() * (messages.length + 1))];
}
