// // Все робити за допомоги js.
// // - створити блок,
// //     - додати йому класи wrap, collapse, alpha, beta
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// // - додати цей блок в body.
// // - клонувати його повністю, та додати клон в body.
//
// const divElement = document.createElement('div');
//
// divElement.className = 'wrap collapse alpha beta';
// divElement.style.background = 'silver';
// divElement.style.fontSize = '20px';
// divElement.style.color = 'red';
// divElement.innerText = 'Я пливу)';
//
// document.body.appendChild(divElement);
// document.body.append(divElement.cloneNode(true));

// // // - Є масив:
// // //     ['Main','Products','About us','Contacts']
// // // Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// // // Завдання робити через цикли.
// const massive = ['Main','Products','About us','Contacts'];
//
// const divElement = document.getElementsByClassName('menu')[0];
//
// for (const string of massive) {
//
//     const liElement = document.createElement('li');
//
//     liElement.innerText = string;
//
//     divElement.appendChild(liElement);
// }

// // - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// // з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
//
// for (const element of coursesAndDurationArray) {
//     const divElement = document.createElement('div');
//     divElement.className = 'item';
//
//     const h2Element = document.createElement('h2');
//     h2Element.className = 'heading';
//
//     const pElement = document.createElement('p');
//     pElement.className = 'description'
//
//     h2Element.innerText = `${element.title}`;
//
//     pElement.innerText = `${element.monthDuration}`;
//
//     divElement.append(h2Element, pElement);
//
//     document.body.appendChild(divElement);
//
// }

// // - є масив
//
//
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// //
// //
// // // Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
// // // - взяти попередній масив з сімпсонами.
// // //     Проітерувати його, створиши для кожного елементу масиву <div class='member'>. Для кожної властивості елементу створити окремий блок, та помістити його у div.member
// const divElementAll = document.createElement('div');
//
// for (const simpson of simpsons) {
//
//     const divElement = document.createElement('div');
//
//
//     const h1Element = document.createElement('h1');
//     h1Element.innerText = `${simpson.name} ${simpson.surname}`;
//
//     const h2Element = document.createElement('h2');
//     h2Element.innerText = `${simpson.age}`;
//
//     const pElement = document.createElement('p');
//     pElement.innerText = `${simpson.info}`;
//
//     const imgElement = document.createElement('img');
//     imgElement.src = `${simpson.photo}`;
//
//     divElement.append(h1Element, h2Element, pElement, imgElement);
//
//     divElementAll.append(divElement);
//
//     document.body.appendChild(divElementAll);
// }

// // // - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// // //
// // // // Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення
// // окремих властивостей, для властивості modules зробити список з елементами
// // // // Приклад структири знаходиться у файлі example.png
// const mainDiv = document.createElement('div');
// for (const coursE of coursesArray) {
//     const div = document.createElement('div');
//
//     const h1 = document.createElement('h1');
//     h1.innerText = coursE.title;
//
//     const h2 = document.createElement('h2');
//     h2.innerText = coursE.monthDuration;
//
//     const h3 = document.createElement('h3');
//     h3.innerText = coursE.hourDuration;
//
//     const h12 = document.createElement('h1');
//     h12.innerText = coursE.modules;
//
//     const olE = document.createElement('ol');
//     for (const module of coursE.modules) {
//         const liE = document.createElement('li');
//         liE.innerText = module;
//         olE.appendChild(liE);
//     }
//     div.append(h1, h1, h3, h12, olE);
//     mainDiv.append(div)
//
//     document.body.appendChild(mainDiv);
// }