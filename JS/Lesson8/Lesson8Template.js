// / Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!/;

//     - Напишіть код,  котрий :

// -- отримує текст з параграфа з id "content"
// const ppp = document.getElementById('content');
// const text = ppp.innerText;
// console.log(text);

// // // -- отримує текст з блоку з id "rules"
// const eee = document.getElementById('rules');
// const text1 = eee.innerText;
// console.log(text1);

// // -- замініть текст параграфа з id 'content' на будь-який інший
// const qqq = document.getElementById('content');
// qqq.innerText = 'lorem ipsum';

// -- замініть текст параграфа з id 'rules' на будь-який інший
// const eee = document.getElementById('rules');
// eee.innerText = 'Милая моя это дым над рекой';

// // -- змініть кожному елементу колір фону на червоний
// const elementcolor = document.body.children;
// for (const elementcolorElement of elementcolor) {
//     elementcolorElement.style.background = 'green'
// }

// // -- змініть кожному елементу колір тексту на синій
// const color = document.body.children;
// for (const colorElement of color) {
//     colorElement.style.color = 'blue'
// }3


// // -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// const classid = document.getElementById('rules');
// const id = classid.classList;
// console.log(id);

// // -- поміняти колір тексту у всіх елементів fc_rules на червоний
// const rules = document.getElementsByClassName('fc_rules');
// for (const rule of rules) {
//     rule.style.color = 'red';
// }


// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

// // a) додає клас з назвою групи, елементу з ід main_header
// const element = document.getElementById('main_header');
// element.className = 'Vasilina'

// // b) робить шириниу елементу ul 400px
// const size1 = document.getElementsByTagName('ul');
// for (const size1Element of size1) {
//     size1Element.style.width = '400px';
// }

// // c) робить шириниу всіх елементів з класом linkList шириною 50%
// const size1 = document.getElementsByClassName('linkList');
// for (const size1Element of size1) {
//     size1Element.style.width = '50%'
// }

// // d) отримує текст який зберігається в елементі з класом listElement2
// const text1 = document.getElementsByClassName('listElement2');
// for (const text1Element of text1) {
//     console.log(text1Element.innerText);
// }

// // e) отримує всі елементи li та змінює ім колір фону на сірий
// let lizhko = document.getElementsByTagName('li');
// for (const lizhkoElement of lizhko) {
//     lizhkoElement.style.background = 'gray'
// }

// // f) отримує всі елементи 'a' та додає їм клас anchor
// const yakor = document.getElementsByTagName('a');
// for (const yakorElement of yakor) {
//     yakorElement.className = 'anchor';
// }

// // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let taxtQ = document.getElementsByTagName('a');
// for (let taxtQElement of taxtQ) {
//     if (taxtQElement.innerText=== 'link3'){
//         taxtQElement.style.fontSize = '40px'
//     }
// }

// // h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// const rotation = document.getElementsByTagName('a');
// for (const rotationElement of rotation) {
//     rotationElement.className = 'element' + '_' + rotationElement.innerText;
// }

// // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// const color = prompt('backGround')
// let idontknow = document.getElementsByClassName('sub-header');
// for (const idontknowElement of idontknow) {
//     idontknowElement.style.background = color;
// }

// // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let color = prompt('What color')
// let segmet = document.getElementsByClassName('sub-header');
// for (let segmetElement of segmet) {
//     if (segmetElement.innerText === 'content 2 segment'){
//         segmetElement.style.color = color;
//     }
// }

// // k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// const textPrompt = prompt('What text are you whant')
// const textP = document.getElementsByClassName('content_1');
// for (const textPElement of textP) {
//     textPElement.innerText = textPrompt;
// }

// // l) отримати елементи p та змінити їм padding на 20px
// let paragraph = document.getElementsByTagName('p');
// for (let paragraphElement of paragraph) {
//     paragraphElement.style.padding = '40px';
// }

// // m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
//
// let rat = document.getElementsByClassName('text2');
// for (const ratElement of rat) {
//     ratElement.innerText = 'mar-2022';
// }