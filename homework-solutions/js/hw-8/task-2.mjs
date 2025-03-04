/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  const vowels = 'aeiou';
  return wordsArr.sort((a, b) => {
    const count = (word) =>
      word
        .toLowerCase()
        .split('')
        .filter((char) => vowels.includes(char)).length;
    return count(a) - count(b);
  });
}

export { sortedByVowels };
