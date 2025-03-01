/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

let resultUnique = [];
let resultNull;

for (const myPizza of myPizzasT1) {
    let isUnique = true;
    for (const competitorPizza of competitorPizzas) {
        if (myPizza.toLowerCase() === competitorPizza.toLowerCase()) {
            isUnique = false;
            break;
        }
    }
    if (isUnique) {
        resultUnique.push(myPizza);
    }
}

if (resultUnique.length === 0) {
    resultNull = null;
}


let resultUnique2 = [];
for (const myPizza of myPizzasT2) {
    let isUnique = true;
    for (const competitorPizza of competitorPizzas) {
        if (myPizza.toLowerCase() === competitorPizza.toLowerCase()) {
            isUnique = false;
            break;
        }
    }
    if (isUnique) {
        resultUnique2.push(myPizza);
    }
}

if (resultUnique2.length === 0) {
    resultNull = null;
}


export { resultNull, resultUnique };
