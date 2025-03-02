/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/

function mergeArrays(...arrays) {
  return [...arrays.flat()];
}

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function normalizeSpaces(sentence) {
  let words = [];
  let word = ''; //для временного хранения текущего слова
  for (let i = 0; i < sentence.length; i++) {
    //проходим по каждому символу в предложении
    if (sentence[i] === ' ') {
      if (word !== '') {
        words.push(word);
        word = '';
      }
    } else {
      word += sentence[i];
    }
  }
  if (word !== '') {
    words.push(word);
  }
  return words.join(' ');
}

function devideBy(sentence) {
  let normalizedSentence = normalizeSpaces(sentence);
  let words = normalizedSentence.toLowerCase().split(' ');
  let result = words[0];

  for (let i = 1; i < words.length; i++) {
    result += '_' + words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return result;
}

console.log(devideBy('I    am    an     engineer'));

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */

function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib[n];
}

export { mergeArrays, fibonacci, devideBy };
