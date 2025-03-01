const isValidInput = (sentence) => typeof sentence === 'string';
const isEmptyString = (sentence) => sentence.trim() === '';

/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (!isValidInput(word)) {
    return false;
  }
  word = word.toLowerCase();

  const reversedWord = word.split('').reverse().join('');

  return word === reversedWord;
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (!isValidInput(sentence) || isEmptyString(sentence)) {
    return [];
  }

  let words = sentence.split(' ');
  let maxLength = 0;
  let longestWords = [];

  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWords = [word];
    } else if (word.length === maxLength) {
      longestWords.push(word);
    }
  }

  return longestWords;
}

export { isPalindrom, findLongestWords };
