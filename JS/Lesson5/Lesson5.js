
// //     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let numbers = ([2, 3, 4, 5, 6]);
// let rey = (number) => {
//     let i = 0;
//     for (let numberElement of number) {
//         i += numberElement
//     }return i/number.length
// };
// console.log(rey(numbers));

// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// let massive = [4, 5, 6, 7, 8,3,5553,22324,4342,34];
// let calc9 = (massive1) => {
//     let min = massive1[0];
//     let max = massive1[0];
//     for (let massive1Element of massive1) {
//         if (massive1Element < min) {
//             min = massive1Element
//         }
//         if (massive1Element > max) {
//             max = massive1Element
//         }
//     }
//     console.log(max);
//     return min;
// };
// console.log(calc9(massive));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//
// let numbers = (number) => {
//     let array = [];
//     for (let i = 0; i < number; i++){
//         array.push(Math.floor(Math.random()*100));
//     }return array
// };
// console.log(numbers(10));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// let thor = (loki, lim) => {
//     let xxx = [];
//     for (let i = 0; i < loki; i++) {
//         xxx.push(Math.floor(Math.random()*lim))
//
//     }return xxx
// };console.log(thor(10,20));

// // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let zxc = [1, 2, 3];
// let reverse = (array) => {
//     for (let i = array.length - 1; i >= 0; i--) {
//         let arr = array[i];
//         console.log(arr);
//     }
// }
// reverse(zxc);

//     Переробити на стрілочні функції з попереднього дз

// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let calc = (a, b) => a + b;
// console.log(calc(2, 3));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// let calc2 = (r) => r * 3.14 * r;
// console.log(calc2(5));

// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// let calc3 = (h, r) => h * 3.14 * r * r;
// console.log(calc3(2, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент
//
// let calc4 = (arguments) => {
//     for (let argument of arguments) {
//         console.log(argument);
//     }
// }
// calc4([3,4,5]);

// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let calc5 = (cycles) => {
//     for (let i = 0; i < cycles.length; i++) {
//     }
//     document.write(`<p>${cycles}</p>`);
// }
// calc5('awk');

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// //
// let calc6 = (m) => {
//     document.write(`<ol>`);
//         document.write(`<li>${m}</li>`)
//         document.write(`<li>${m}</li>`)
//         document.write(`<li>${m}</li>`)
//     }
//     document.write(`</ol>`);
// calc6('asfsafasfas',)

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// let calc6 = (l, m) => {
// //     document.write(`<ol>`);
// //     for (let i = 0; i < l; i++) {
// //         document.write(`<li>${m} ${i + 1}</li>`)
// //     }
// //     document.write(`</ol>`);
// // };
// // calc6(3,'faja')

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let calc6 =(...array)=>{
//     document.write(`<ol>`);
//     for (let i = 0; i < array.length; i++) {
//         let arrayElement = array[i];
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write(`</ol>`);
// };calc6('123230', 2323, true);

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let people = [
//     {name: "Lionya", age: 34, id: 23231},
//     {name: "petya", age: 43, id: 23234}
// ];
//     let calc6 =(array)=>{
//         for (let arrayElement of array) {
//             for (let arrayElementKey in arrayElement) {
//                 document.write(`<div>${arrayElementKey} ${arrayElement[arrayElementKey]}</div>`);
//             }
//         }
//     }; calc6(people);

// // - створити функцію яка повертає найменьше число з масиву
//
// let numbers = [23, 123, 4343, 21, 43];
// let calc8 = (array0) => {
//     let min = array0[0];
//     for (let array0Element of array0) {
//         if (array0Element < min) {
//             min = array0Element;
//         }
//
//     }return min;
// };
//
// console.log(calc8(numbers));

// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let asd = [1, 2, 10];
// let calc9 = (qwe) => {
//     let result = 0;
//     for (let qweElement of qwe) {
//         result = result + qweElement;
//     }return result;
// };
// console.log(calc9(asd));