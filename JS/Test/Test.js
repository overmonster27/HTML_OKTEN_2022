// // - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// //     Вивести кожну змінну за допомогою: console.log , alert, document.write
//
// let array =['hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false ];
// console.log(array);
// document.write(array);
// alert(array);

//
// // - Створити об'єкт book з наступними полями :
// // назва, (тип string)
// // кількість сторінок (числовий тип),
// // жанр (string)
//
// let books = {name: "torque", pages: 234, genre: 'action'};
// console.log(books);

// // - Створити об'єкт book з наступними полями :
// // назва, (тип string)
// // кількість сторінок (числовий тип),
// // жанр (string)
// // автори (тип - масив, кожен елемент масиву - це стрінга)
//
// let books1 = [{
//     name: 'awdawd',
//     pages: 2321,
//     geenre: 'aladkm'
// }]
// console.log(books1);
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// - Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

// // - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// let firstname=('ihor');
// let middlename=('ruslanovich');
// let lastname=('fedoruk');
// let person=(firstname+' '+middlename+' '+lastname);
// console.log(person);

//
// // - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
//
// let a = (prompt('name'));
// let b=(prompt('middle name'));
// let c=(prompt('last name'));
// console.log(a,b,c);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//
// let a = (typeof 100);
// let b = (typeof '100');
// let c = (typeof true);
// console.log(a, b, c);

// // - Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
// let books = [
//     {name: 'Harry Potter and Sorcerer Stone', pages: '324', genre: 'fantasy', author: 'J.K.Rowling'},
//     {name:'A brief history of Time', pages:'212', genre:'popular science', author:'Stephen Hawking'},
//     {name:'Fahrenheit 451', pages:'249', genre:'sci-fi novel', author:'Ray Bradbury'},
//     {name:'The Shining', pages:'688', genre:'horror novel', author:'Stephen King'}
// ];
//
// console.log(books[0], books[1], books[2], books[3]);

// // - Є змінна х, якій ви надаєте довільне числове значення.
// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = 2;
// if (x !== 0){
//     console.log(true);
// }else{
//     console.log(false);
// }

//
// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).
// let time = prompt('how match time')
// if (time > 0 && 15 > time) {
//     console.log(1);
// } else if (time => 15 && 30 > time) {
//     console.log(2);
// } else if (time => 30 && 45 > time) {
//     console.log(3);
// } else if (time => 45 && 59 > time) {
//     console.log(4);
// }

// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
//
// let day = (prompt('what date'));
// if (day >= 0 && 10 >= day) {
//     console.log(1)
// }else if (day > 10 && 20 >= day){
//     console.log(2);
// }else if ( day > 20 && 30 >= day){
//     console.log(3);
// }

// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// switch (prompt('what day')) {
//     case '1':
//         console.log('sun');
//         break;
//     case '2':
//         console.log('car');
//         break;
//     case '3':
//         console.log('asd');
//         break;
//     case'4':
//         console.log('qwe');
//         break
//     case '5':
//         console.log('rte');
//         break
//     case '6':
//         console.log('321fas');
//         break
//     case '7':
//         console.log('fffsdf');
//         break
// }

// //     - Користувач вводить або має два числа.
// //         Потрібно знайти та вивести максимальне число з тих двох .
// //         Також потрібно врахувати коли введені рівні числа.
//
//
// let a = (3);
// let b = (3);
// if (a > b) {
//     console.log(a);
// }
// if (b > a) {
//     console.log(b);
// } else if (a === b) {
//     console.log('equal');
// }

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>sejfnkleb</div>`)
// }

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// for (let i = 0; i < 10; i++) {
//     console.log(`<div>'klajdnwadkljb' ${i + 1}</div>`);
// }

// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// let r = 0;
// while (r<20){
//     document.write(`<hi>;ajwndawlk ${r}</hi>`)
//     r++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let t = 0;
// while (t<20){
//     document.write(`<h1>'slekfeskln' ${t}</h1>`)
//     t++;
// }

// // - Використовуючи данні з масиву, за допомоги document.write та циклу
// // побудувати структуру по шаблону
// // Масив:
//
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`)
// for (let i = 0; i < listOfItems.length; i++) {
//     let listOfItem = listOfItems[i];
//     document.write(`<li>${listOfItem} ${i + 1}</li>`)
// }
// document.write(`</ul>`)
//
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
// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
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
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
//
// --------------------


// // Використовуючи данні з масиву, за допомоги document.write та циклу
// // побудувати структуру по шаблону  Зробити адекватну стилізацію
// // Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// //
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
//     let product = products[i];
//     document.write(`<div class="product-card">${product.title}<h3>${product.price}</h3>, <img src="${product.image}" alt = 'img'></div>`)
// }
//
//
// //
// // ШАБЛОН
// // <div class="product-card">
// //     <h3 class="product-title">TITLE. Price - PRICE</h3>
// // <img src="IMAGE" alt="" class="product-image">
// // </div>
// // Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
//
// --------------------
//     є масив

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
//
// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
// //     if (user.status === true){
// //         console.log(user);
// // //     }
// //     if (user.age >= 30){
// //         console.log(user);
// // //     }
// //     if (user.status === false){
// //         console.log(user);
// //     }
// // //
//
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років


// Все стірлочними!!!!!!!!!

// //     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// let track = ([23, 323, 532, 123, 123])
// let car = (wheel) => {
//     let i = 0;
//     for (const wheelElement of wheel) {
//         i = wheelElement
//     }
//     return i / wheel.length
// };console.log(car(track));

// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// let space = [23, 43, 123, 45, 32, 32124, 53, 31];
// let plannet = (sea) => {
//     let max = sea[0];
//     let min = sea[0];
//     for (let seaElement of sea) {
//         if (seaElement < min) {
//             min = seaElement
//         }
//         if (seaElement > max) {
//             max = seaElement
//         }
//     }console.log(max);
//     return min;
// };
// console.log(plannet(space));


// // - створити функцію яка заповнює масив рандомними числами
// // (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//
// let numbers =(number)=>{
//     let array =[];
//     for (let i = 0; i < number; i++) {
//         array.push(Math.round(Math.random()*100));
//
//     }return array;
// };console.log(numbers(5));


// // - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// let numbers = (number, limit) => {
//     let massive = [];
//     for (let i = 0; i < number; i++) {
//         massive.push(Math.round(Math.random() * limit))
//
//     }
//     return massive;
// };
// console.log(numbers(5, 10));


// // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let massive = [1, 2, 3];
// let reverse = (array) => {
//     for (let i = array.length - 1; i >= 0; i--) {
//         let arr = array[i];
//         console.log(arr);
//     }
// };
// reverse(massive)

//     Переробити на стрілочні функції з попереднього дз

// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// let asd = (a,b) =>{return a*b }
// console.log(asd(2,3));

// // - створити функцію яка обчислює та повертає площу кола з радіусом r
// let qwe =(r)=>{return 3.14* r * r};
// console.log(qwe(4));

// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// let zxc = (h, r) => {
//     return 3.14 * h * r * r
// };console.log(zxc(2,3));

// // - створити функцію яка приймає масив та виводить кожен його елемент
//
// let mass = [1,2,3,'aowkd',true];
// let massive =(ma)=>{
//     for (let i = 0; i < ma.length; i++) {
//     }return ma
// };console.log(massive(mass));

// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// let fgt =(text) =>{
//     for (let i = 0; i < text; i++) {
//     }
//     document.write(`<p>${text}</p>`)
// };fgt('lalkwdnlk')

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let fun = (text, number) => {
//     document.write(`<ol>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//     document.write(`</ol>`)
// };
// fun('afoldiwfo', 3)

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// let f = (text, number) => {
//     document.write(`<ol>`)
//     for (let i = 0; i < number; i++) {
//         const textElement = text[i];
//         document.write(`<li>${text} ${i + 1}</li>`
//         )
//     }
//     document.write(`</ol>`)
// };
// f('falkjn',3);

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let f = (...massive) => {
//     document.write(`<ol>`)
//     for (let massiveElement of massive) {
//         document.write(`<li>${massiveElement}</li>`)
//     }
//     document.write(`</ol>`)
// }
// f('eslfkesf;o', 23, true);

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let people = [
//     {name: "Lionya", age: 34, id: 23231},
//     {name: "petya", age: 43, id: 23234}
// ];
// let fun = (massive) => {
//     for (let massiveElement of massive) {
//         for (let massiveElementKey in massiveElement) {
//             document.write(`<div>${massiveElementKey} ${massiveElement[massiveElementKey]}</div>`)
//         }
//     }
// };
// fun(people);

// // - створити функцію яка повертає найменьше число з масиву
//
// let numbers = [23, 23123, 434, 3211, 23, 4324, 123];
// let f = (nul) => {
//     let min = nul[0];
//     for (let nulElement of nul) {
//         if (nulElement < min) {
//             min = nulElement
//         }
//     }return min;
// };
// console.log(f(numbers));

// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let arr = [1, 2, 10];
// let f = (array) => {
//     let r = 0;
//     for (let arrayElement of array) {
//         r = r + arrayElement
//     }return r;
// };
// console.log(f(arr));

// // -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
//
// let people = [
//     {name: "Lionya", age: 34, id: 23231},
//     {name: "petya", age: 43, id: 23234}
// ];
//
// let f = (poi)=>{
//     let muss = poi[0];
//     poi[0] = poi[1]
//     poi[1] = muss;
//     return poi;
// };console.log(f(people));

// Всі функції повинні бути описані стрілочним типом!!!!


// //     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let numbers = [9, 2, 3, 5];
// let f = (funk) => {
//     let min = funk[0];
//     for (let funcElement of funk) {
//         if (funcElement < min) {
//             min = funcElement;
//         }
//     }
//     return min;
// };
// console.log(f(numbers));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
//
//
//
// - Дано натуральное число n. Выведите все числа от 1 до n.
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
