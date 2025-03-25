// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль
// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
//   Обработайте промис методом .catch и выведите результат его резолва в консоль
// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then
// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then
// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

//1
function delayTwoSeconds(callback) {
  setTimeout(callback, 2000);
}

function myCallback() {
  console.log('Коллбэк вызван через 2 секунды');
}

delayTwoSeconds(myCallback);

//2
const prm2 = new Promise((resolve, reject) => {
  resolve(1);
});

prm2.then((result) => console.log(result));

//3
const prm3 = new Promise((resolve, reject) => {
  resolve(`Promise passed`);
  reject(`Promise failed`);
});

prm3.then((result) => console.log(result)).catch((reject) => console.log(reject));

//4
function promiseNumber(number) {
  return new Promise((resolve, reject) => {
    if (typeof number !== 'number') {
      reject('Параметр должен быть числом');
    } else {
      resolve(number);
    }
  });
}

promiseNumber(4)
  .then((num) => console.log(num))
  .catch((err) => console.error(err));

//5
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then(([num1, num2, num3]) => {
    console.log(num1);
    console.log(num2);
    console.log(num3);
  })
  .catch((err) => console.error(err));

//6
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then(([num1, num2, num3]) => {
    console.log(num1);
    console.log(num2);
    console.log(num3);
  })
  .catch((err) => console.error(err));

//7
async function funcPromiseAll() {
  try {
    const [num1, num2, num3] = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    console.log(num1);
    console.log(num2);
    console.log(num3);
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

funcPromiseAll();

async function funcPromiseallSettled() {
  try {
    const [num1, num2, num3] = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    console.log(num1);
    console.log(num2);
    console.log(num3);
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

funcPromiseallSettled();
