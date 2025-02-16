/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

let n = 1; 

if (n >= 1 && n <= 9) {
    n = String(n);
    let nn = String(n) + String(n); // "nn" 
    let nnn = String(n) + String(n) + String(n); // "nnn"

    let result = n + nn + nnn;

    console.log("Результат:", result);
} else {
    console.log("Пожалуйста, введите корректное число от 1 до 9.");
}

