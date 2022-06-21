// // - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// const element = document.createElement('div');
// element.id = 'text';
// element.style.width = '200px';
// element.style.height = '200px';
// element.style.background = 'gray';
//
// document.body.appendChild(element);
//
// const elementObject = document.getElementById('text');
// elementObject.addEventListener('click',function () {
//     elementObject.style.display = 'none'
// });

// //     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// const inp = document.getElementsByTagName('input')[0];
// const ret = document.getElementsByTagName('button')[0];
//
//
// ret.addEventListener('click', function () {
//     if (inp.value >= 18) {
//         alert('You can go')
//     } else {
//         alert('STOP')
//     }
//     inp.value = '';
// });

// // // - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// // //     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// // // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// // //
// let f1 = document.forms.f1;
// let f2 = document.forms.f2;
// let enter = document.getElementById('button');
// enter.onclick = function (e) {
//     e.preventDefault();
//
//     let nameField = f1.name.value;
//     let surrnameField = f1.surrname.value;
//     let ageField = f2.age.value;
//     let statusField = f2.status.value;
//
//     let user = {
//         name: nameField,
//         surrname: surrnameField,
//         age: ageField,
//         status: statusField
//     };
//     console.log(user);
// };

// // // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// // //     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // // (Додатковачастина для завдання)
// //
// let in1 = document.createElement('input');
// let in2 = document.createElement('input');
// let inText = document.createElement('input');
// let btn = document.createElement('button');
//
// btn.innerText = 'click';
//
// document.body.append(in1, in2, inText, btn);
//
// btn.onclick = function (e) {
//     e.preventDefault();
//
//     let field1 = in1.value;
//     let field2 = in2.value;
//     let fieldText = inText.value;
//
//     function creator(row1, row2, rowText) {
//         let table = document.createElement('table');
//         document.body.append(table);
//
//         for (let i = 0; i < row1; i++) {
//             let trow = document.createElement('tr');
//             table.append(trow);
//
//             for (let j = 0; j < row2; j++) {
//                 let tdown = document.createElement('td');
//                 tdown.innerText = `${rowText}`;
//                 tdown.style.border = '2px solid red';
//                 trow.append(tdown);
//
//             }
//
//
//         }
//
//     }
//
//     creator(field1, field2, fieldText);
// };
// // Перші завдання зробив сам, а останнє робив по резолву якщо чесно)