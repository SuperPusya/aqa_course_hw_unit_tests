/*
Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
  1. forEach - присвойте массив в котором все числа делящиеся без остатка на 3 // [30]
  2. map - присвойте массив в котором из каждого элемента изначального массива вычли длину изначального массива 
     // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
  3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
     // [8, 30, 85, 95, 94]
  4. find - присвойте элемент, равный своему индексу //2
  5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
     // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
  6. reduce - получите сумму всех чисел массива //466
  7. some - проверьте, есть ли в массиве элементы больше 90 //true
  8. every - проверьте, что все элементы массива двухзначные //false
*/
const numbers = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

let forEach = [];
numbers.forEach((element) => {
  element % 3 === 0 ? forEach.push(element) : null;
});

let map;
const arrayLength = numbers.length;
map = numbers.map((element) => element - arrayLength);

let filter;
filter = numbers.filter((element, index, arr) => index > 0 && element > arr[index - 1]);

let find;
find = numbers.find((element, index, arr) => element === index);

let sort;
sort = [...numbers].sort((a, b) => a - b);

let reduce;
reduce = numbers.reduce((result, current) => result + current, 0);

let some;
some = numbers.some((element) => element > 90);

let every;
every = numbers.every((number) => Math.abs(number).toString().length === 2);

export { forEach, map, filter, find, sort, reduce, some, every };
