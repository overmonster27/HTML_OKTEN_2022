// // // створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calc(a, b) {
    return a * b;
}

let result = calc(11, 22);
console.log(result);

// // - створити функцію яка обчислює та повертає площу кола з радіусом r
//
function calc1(r) {
    return 2 * Math.PI * r
}

let result1 = calc1(3);
console.log(result1);

// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
function calc2(h, r1) {
    return 2 * Math.PI * r1 * h
}

let result2 = calc2(5, 2);
console.log(result2);

// - створити функцію яка приймає масив та виводить кожен його елемент
//
function calc3() {
    for (const argument of arguments) {
        console.log(argument);
    }
}

calc3(24, 25, 26);
//


// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function text(a) {
    document.write(a);
}

text(`kljankjanc aodjwndla;jwnd a;wdjna;ldwjand;aj`)


// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(a) {
    document.write(`<ul>`);
    document.write(`<li>${a}</li>`);
    document.write(`<li>${a}</li>`);
    document.write(`<li>${a}</li>`);
    document.write(`</ul>`);
}

list('hello');


// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function zxc(size, m) {
    document.write(`<ul>`);
    for (let i = 0; i < size; i++) {
        document.write(`<li>${m} ${i + 1}</li>`);
    }
    document.write(`</ul>`);
}

zxc(3, 'push me');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function elements(a1, a2, a3, a4, a5, a6) {
    document.write(`<ul>`);

    document.write(`<li>${a1}</li>`);
    document.write(`<li>${a2}</li>`);
    document.write(`<li>${a3}</li>`);
    document.write(`<li>${a4}</li>`);
    document.write(`<li>${a5}</li>`);
    document.write(`<li>${a6}</li>`);

    document.write(`</ul>`);
}

elements(33, 12, 'ldad', 'djawdjl', 3 === 3, 4 > 5);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [{id: 123456789, name: 'oleh', age: 24}, {id: 987654321, name: 'yura', age: 12}, {
    id: 951753825,
    name: 'vasya',
    age: 43
}];

function feed(tel) {
    for (const telElement of tel) {
        document.write(`<div>${telElement.id} ${telElement.name} ${telElement.age}</div>`)
    }
}
feed(users)

// - створити функцію яка повертає найменьше число з масиву

let arr = (array) => {
    let min = array[0];
    for (let funMaxElement of array) {
        if (funMaxElement < min) min = funMaxElement;
    }
    return min;
};
const arrReturn = arr([2, 3, 4, 5, 6, 10, 4, 3, 6]);
console.log(arrReturn);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function calc5() {
    let result = 0;a
    for (const item of arguments) {
        result = result + item;
    }
    return result;
}

console.log(calc5(12, 45, 65));