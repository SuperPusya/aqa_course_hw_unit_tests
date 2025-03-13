/*
  У вас есть массив чисел. 
  Напиши функцию countOccurrences, которая принимает массив чисел и
  возвращает объект с подсчётом каждого числа.
  const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
  
  Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }
*/

function countOccurrences(arr) {
  const count = {};

  for (const number of arr) {
    if (count[number]) {
      count[number]++;
    } else {
      count[number] = 1;
    }
  }
  return count;
}

export { countOccurrences };
