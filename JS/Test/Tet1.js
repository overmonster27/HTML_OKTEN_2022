// // - Є змінна х, якій ви надаєте довільне числове значення.
// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// const x = 0;
// if (x !== 0){
//     console.log(true);
// }else {console.log(false);}

// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).
// const time = +prompt('How mutch time');
// if (time > 0 && 15 >= time) {
//     console.log('first');
// } else if (15 < time && 30 >= time) {
//     console.log('second');
// } else if (30 < time && 45 >= time){
//     console.log('third');
// }else if (45 < time && 59 >= time){
//     console.log('fourth');
// };

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {document.write('<div>fkshfndkjn</div>');}

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {document.write(`<div>skdjfsjdf ${i}</div>`);}

// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20){
//     document.write('<h1>lidsufuhldjsf</h1>')
//     i++;
// }

// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20){
//     document.write(`<h5>jefiowejfoi ${i + 1}</h5>`)
//     i++;
// }

// // - Використовуючи данні з масиву, за допомоги document.write та циклу
// // побудувати структуру по шаблону
// // Масив:
// //
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write('<ol>')
// for (let i = 0; i < listOfItems.length; i++) {
//     document.write(`<li>${listOfItems [i]}</li>`)
// }
// document.write('</ol>')
//
// // ШАБЛОН:
// //     <ul>
// //         <li>ITEM OF ARRAY</li>
// //         <!--
// //             і тд інші об'єкти масиву
// //              ...
// //              ...
// //              ...
// //         -->
// //     </ul>
// //
// // замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
// //
// // -----------------------------------------------

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (let i = 0; i < products.length; i++) {
//     let product = products[i]
//     document.write(`<div>${product.title}  ${product.price}  <img src="${product.image}"></div>`)
// }
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//

// //     є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// // for (const user of users) {
// //     if (user.status === true){
// //         console.log(user);
// //     }
// // }
//
// for (const user of users) {
//     if (user.age > 30) {
//         console.log(user);
//     }
// }
// // за допомоги циклу вивести:
// //     - користувачів зі статусом true
// // - користувачів зі статусом false
// // - користувачів які старші за 30 років

// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// const calc = (a, b) => a * b ;
// console.log(calc(2,3));

// // - створити функцію яка обчислює та повертає площу кола з радіусом r
// const pi = (r) => 3.14 * r * 2;
// console.log(pi(2));

// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// const cilinder = (h, r) => h * r * 2 * 3.14;
// console.log(cilinder(2,3));

// // - створити функцію яка приймає масив та виводить кожен його елемент
// const cla = (arr) =>{
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// cla([1,2,3,4,5])

// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// const arr = (paragraph) =>{
//     document.write(`<p>${paragraph}</p>`);
// }
// arr('lakwdmlakwmd');

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// const ul = (text) =>{
//     document.write('<ol>')
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ol>')
// }
// ul(';lsfekjnm;oejn');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const ul = (text, number) => {
//     document.write('<ol>')
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ol>')
// };
// ul('aldawdljn',5);

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// const list = (...arr)=>{
//     document.write('<ol>')
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr [i]}</li>`)
//     }
//     document.write('</ol>')
// };
// list('123', 21, true);

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let people = [
//     {name: "Lionya", age: 34, id: 23231},
//     {name: "petya", age: 43, id: 23234}
// ];
// const calc = (arr) => {
//     for (const arrElement of arr) {
//         for (arrElementkey in arrElement) {
//             document.write(`<div>${arrElementkey} ${arrElement[arrElementkey]}</div>`)
//         }
//     }
// }
// calc(people);

// // - створити функцію яка повертає найменьше число з масиву
// const ret = (arr) => {
//     let min = arr[0];
//     for (const arrElement of arr) {
//         if (arrElement < min) {
//             min = arrElement;
//         }
//     }return min;
// };
// console.log(ret([12, 343, 21, 23]));

// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// const calc = (mass) => {
//     let result = 0;
//     for (const mass1 of mass) {
//         result = result + mass1;
//     }return result;
// }
// console.log(calc([1, 3, 4, 5, 6]));

// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// const calc = (mass) => {
//     let i = 0;
//     for (const mass1 of mass) {
//         i += mass1
//     }
//     return i / mass.length
// }
// console.log(calc([1, 2, 3, 4, 5]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].