// 1. Дан код:
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 с = a+1 = 2
// d = b++; alert(d);           // 1 d = b (+1 прибавиться в след операции)/ процесс мутации переменной
// c = (2+ ++a); alert(c);      // 5 с = 2+ (2+1) / а уже =2
// d = (2+ b++); alert(d);      // 4 d = 2+ 2 (теперь к b прибавилась 1)
// alert(a);                    // 3 в последнии операции а = 3
// alert(b);                    // 3 окончание мутации из предыдущий операции с b
// Почему код даёт именно такие результаты?


// 2. Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2);
// x = 1 + (2*2) = 5

// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
let a = 5, b = -10;
function whatToDo(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        if (a >= 0 && b >= 0) { return a - b; }
        else if (a < 0 && b < 0) { return a * b; }
        else { return a + b; }
    }
    else {
        return 'Задайте целое число'
    }
}
console.log(whatToDo(a, b));


// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
// let a = 15;
// switch (a) {
//     case 0:
//         console.log(`${a} 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15`);
//         break;
//     case 1:
//         console.log(`${a} 2 3 4 5 6 7 8 9 10 11 12 13 14 15`);
//         break;
//     case 2:
//         console.log(`${a} 3 4 5 6 7 8 9 10 11 12 13 14 15`);
//         break;
//     case 3:
//         console.log(`${a} 4 5 6 7 8 9 10 11 12 13 14 15`);
//         break;
//     case 4:
//         console.log(`${a} 5 6 7 8 9 10 11 12 13 14 15`);
//         break;
//     case 5:
//         console.log(`${a} 6 7 8 9 10 11 12 13 14 15`);
//         break;
//     case 6:
//         console.log(`${a} 7 8 9 10 11 12 13 14 15`);
//         break;
//     case 7:
//         console.log(`${a} 8 9 10 11 12 13 14 15`);
//         break;
//     case 8:
//         console.log(`${a} 9 10 11 12 13 14 15`);
//         break;
//     case 9:
//         console.log(`${a} 10 11 12 13 14 15`);
//         break;
//     case 10:
//         console.log(`${a} 11 12 13 14 15`);
//         break;
//     case 11:
//         console.log(`${a} 12 13 14 15`);
//         break;
//     case 12:
//         console.log(`${a} 13 14 15`);
//         break;
//     case 13:
//         console.log(`${a} 14 15`);
//         break;
//     case 14:
//         console.log(`${a} 15`);
//         break;
//     case 15:
//         console.log(15);
//         break;
//     default:
//         console.log('задайте целое число от 0 до 15');
// }


a = 10;
switch (a) {
    case 15:
        console.log(15);
    case 14:
        console.log(14);
    case 13:
        console.log(13);
    case 12:
        console.log(12);
    case 11:
        console.log(11);
    case 10:
        console.log(10);
    case 9:
        console.log(9);
    case 8:
        console.log(8);
    case 7:
        console.log(7);
    case 6:
        console.log(6);
    case 5:
        console.log(5);
    case 4:
        console.log(4);
    case 3:
        console.log(3);
    case 2:
        console.log(2);
    case 1:
        console.log(1);
    case 0:
        console.log(0);
        break;
    default:
        console.log('задайте целое число от 0 до 15');
}



// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
// let a = 5, b = -10;
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return 'a и b должны быть числами'
    }
}

function subtract(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }
    else {
        return 'a и b должны быть числами'
    }
}

function multiply(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    }
    else {
        return 'a и b должны быть числами'
    }
}

function divide(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a / b;
    }
    else {
        return 'a и b должны быть числами'
    }
}

// console.log(addition(a, b));
// console.log(subtraction(a, b));
// console.log(multiplication(a, b));
// console.log(division(a, b));

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5)
// и вернуть полученное значение (использовать switch).

a = -70;
b = 80;
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'add': return add(a, b);
            break;
        case 'subtract': return subtract(a, b);
            break;
        case 'multiply': return multiply(a, b);
            break;
        case 'divide': return divide(a, b);
            break;
        default: return 'Введите одно из 4х корректныхназваний операций: "add", "subtract", "multiply" или "divide".'
    }
}

console.log(mathOperation(a, b, 'add'));
console.log(mathOperation(a, b, 'subtract'));
console.log(mathOperation(a, b, 'multiply'));
console.log(mathOperation(a, b, 'divide'));


// 7. *Сравнить null и 0. Попробуйте объяснить результат.
// прочитала про алгоритмы сравнения JS и размышления про удивительное свойство null быть не меньше и не больше 0, а также не равным 0, но быть больше либо равным 0 (:

// 8. *С помощью рекурсии организовать функцию возведения числа в степень.
// Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
    if (typeof val === 'number') {
        if (pow >= 1) {
            return val * power(val, pow - 1);
        }
        else if (pow == 0) { return 1; }
        else return "Задайте целое положительное число для 'pow'"
    }
    else {
        return "Задайте целое число для 'val'"
    }
}
console.log(power(5, 5));
