"use strict";
// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true,
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.
Object.defineProperty(exports, "__esModule", { value: true });
function hasUppercase(password) {
    for (let char of password) {
        if (char >= 'A' && char <= 'Z') {
            return true;
        }
    }
    return false;
}
function hasLowercase(password) {
    for (let char of password) {
        if (char >= 'a' && char <= 'z') {
            return true;
        }
    }
    return false;
}
function hasDigit(password) {
    for (let char of password) {
        if (char >= '0' && char <= '9') {
            return true;
        }
    }
    return false;
}
function hasMinLength(password) {
    return password.length >= 8;
}
function isNotEmpty(password) {
    return password.trim() !== '';
}
function validatePassword(password) {
    return (hasUppercase(password) &&
        hasLowercase(password) &&
        hasDigit(password) &&
        hasMinLength(password) &&
        isNotEmpty(password));
}
