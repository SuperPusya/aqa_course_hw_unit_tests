// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

async function createTodo(todo) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });

    if (response.status !== 201) {
      throw new Error(`получен ${response.status}`);
    }

    const responseData = await response.json();

    const comparisonKeys = Object.keys(todo);
    for (const key of comparisonKeys) {
      if (responseData[key] !== todo[key]) {
        throw new Error(`Несоответствие данных`);
      }
    }

    return responseData;
  } catch (e) {
    console.error(e.message);
    throw e;
  } finally {
    console.log('Работа функции createTodo завершена');
  }
}

const newTodo = {
  userId: 1,
  title: 'delectus aut autem',
  completed: false,
};

createTodo(newTodo)
  .then((data) => console.log('Создана задача:', data))
  .catch(() => console.log('Не удалось создать задачу'));
