// // найти та вивести довижину настипних стрінгових значень
//
// let q = 'hello world';
// let w = 'lorem ipsum';
// let e = 'javascript is cool';
// console.log(q.length, w.length, e.length);

// // - Перевести до великого регістру наступні стрінгові значення
//
// let a = 'hello world';
// let s = 'lorem ipsum';
// let d = 'javascript is cool'
// console.log(a.toUpperCase());
// console.log(s.toUpperCase());
// console.log(d.toUpperCase());

// // // - Перевести до нижнього регістру настипні стрінгові значення
// let a = 'HELLO WORLD';
// let s = 'LOREM IPSUM';
// let d = 'JAVA SCRIPT IS COOL'
// console.log(a.toLowerCase());
// console.log(s.toLowerCase());
// console.log(d.toLowerCase());

// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   '
// let trim = str.trim();
// console.log(trim);

// // // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// //
// let str = 'Хіба ревуть воли як ясла повні';
// let split = str.split(' ');
// console.log(split);

// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// let massive =[10, 8, -7, 55, 987, -1011, 0, 1050, 0]
// console.log(massive.map(i => i + ''));

// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//
// //     let nums = [11,21,3];
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11, 21, 3];
// let arrSort = (numbers, direction) => {
//     if (direction === 'ascending') {
//         numbers.sort((a, b) => a - b)
//     } else if (direction === 'descending') {
//         numbers.sort((a, b) => b - a)
//     }
//     return numbers;
// };
// console.log(arrSort(nums, 'ascending'));
// console.log(arrSort(nums, 'descending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
//
// // let sort = (arr) => arr.sort((a, b) => a.monthDuration - b.monthDuration);
// // console.log(sort(coursesAndDurationArray));
//
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let f2 = (arr2)=> arr2.filter(value => value.monthDuration > 5);
// console.log(f2(coursesAndDurationArray));

// // описати колоду карт/
// let cards = [
//     {cardSuit: 'spade', value: '1', color: 'black'},
//     {cardSuit: 'spade', value: '2', color: 'black'},
//     {cardSuit: 'spade', value: '3', color: 'black'},
//     {cardSuit: 'spade', value: '4', color: 'black'},
//     {cardSuit: 'spade', value: '5', color: 'black'},
//     {cardSuit: 'spade', value: '6', color: 'black'},
//     {cardSuit: 'spade', value: '8', color: 'black'},
//     {cardSuit: 'spade', value: '9', color: 'black'},
//     {cardSuit: 'spade', value: '10', color: 'black'},
//     {cardSuit: 'spade', value: 'jack', color: 'black'},
//     {cardSuit: 'spade', value: 'queen', color: 'black'},
//     {cardSuit: 'spade', value: 'king', color: 'black'},
//     {cardSuit: 'spade', value: 'ace', color: 'black'},
//     {cardSuit: 'none', value: 'joker', color: 'black'},
//     {cardSuit: 'diamond', value: '1', color: 'black'},
//     {cardSuit: 'diamond', value: '2', color: 'black'},
//     {cardSuit: 'diamond', value: '3', color: 'black'},
//     {cardSuit: 'diamond', value: '4', color: 'black'},
//     {cardSuit: 'diamond', value: '5', color: 'black'},
//     {cardSuit: 'diamond', value: '6', color: 'black'},
//     {cardSuit: 'diamond', value: '7', color: 'black'},
//     {cardSuit: 'diamond', value: '8', color: 'black'},
//     {cardSuit: 'diamond', value: '9', color: 'black'},
//     {cardSuit: 'diamond', value: '10', color: 'black'},
//     {cardSuit: 'diamond', value: 'jack', color: 'black'},
//     {cardSuit: 'diamond', value: 'queen', color: 'black'},
//     {cardSuit: 'diamond', value: 'king', color: 'black'},
//     {cardSuit: 'diamond', value: 'ace', color: 'black'},
//     {cardSuit: 'heart', value: '1', color: 'red'},
//     {cardSuit: 'heart', value: '2', color: 'red'},
//     {cardSuit: 'heart', value: '3', color: 'red'},
//     {cardSuit: 'heart', value: '4', color: 'red'},
//     {cardSuit: 'heart', value: '5', color: 'red'},
//     {cardSuit: 'heart', value: '6', color: 'red'},
//     {cardSuit: 'heart', value: '7', color: 'red'},
//     {cardSuit: 'heart', value: '8', color: 'red'},
//     {cardSuit: 'heart', value: '9', color: 'red'},
//     {cardSuit: 'heart', value: '10', color: 'red'},
//     {cardSuit: 'heart', value: 'jack', color: 'red'},
//     {cardSuit: 'heart', value: 'queen', color: 'red'},
//     {cardSuit: 'heart', value: 'king', color: 'red'},
//     {cardSuit: 'heart', value: 'ace', color: 'red'},
//     {cardSuit: 'clubs', value: '1', color: 'red'},
//     {cardSuit: 'clubs', value: '2', color: 'red'},
//     {cardSuit: 'clubs', value: '3', color: 'red'},
//     {cardSuit: 'clubs', value: '4', color: 'red'},
//     {cardSuit: 'clubs', value: '5', color: 'red'},
//     {cardSuit: 'clubs', value: '6', color: 'red'},
//     {cardSuit: 'clubs', value: '7', color: 'red'},
//     {cardSuit: 'clubs', value: '8', color: 'red'},
//     {cardSuit: 'clubs', value: '9', color: 'red'},
//     {cardSuit: 'clubs', value: '10', color: 'red'},
//     {cardSuit: 'clubs', value: 'jack', color: 'red'},
//     {cardSuit: 'clubs', value: 'queen', color: 'red'},
//     {cardSuit: 'clubs', value: 'king', color: 'red'},
//     {cardSuit: 'clubs', value: 'ace', color: 'red'},
//     {cardSuit: 'none', value: 'joker', color: 'red'},
// ];
//
// // - знайти піковий туз
//
// // console.log(cards.find(value => value.cardSuit === 'clubs' && value.value === 'ace'));
//
// // // - всі шістки
// //
// // console.log(cards.filter(value => value.value === '6'));
//
// // // - всі червоні карти
// //
// // console.log(cards.filter(value => value.color === 'red'));
//
// // // - всі буби
// //
// // console.log(cards.filter(value => value.cardSuit === 'diamond'));
//
// // // - всі трефи від 9 та більше
// //
// // console.log(cards.filter(value => value.cardSuit === "spade" && value.value > '8' || value.value === '10' && value.cardSuit === 'spade'));
//
// // {
// //     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
// //         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
// //     color:'', // 'red','black'
// //}
