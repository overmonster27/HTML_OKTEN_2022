// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// let form1 = document.createElement('form');
// let inp1 = document.createElement('input');
// let inp2 = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText = 'GO';
//
// form1.append(inp1, inp2, btn);
// document.body.appendChild(form1);
//
// let key = 'key';
//
// const all = (inp1, inp2) => {
//     let obj = {inp1, inp2};
//     localStorage.setItem(key, JSON.stringify(obj))
// }
// btn.onclick = () => {
//     all(inp1.value, inp2.value)
// };


//
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

// let form1 = document.createElement('form');
// let name1 = document.createElement('input');
// let status = document.createElement('input');
// let age = document.createElement('input');
// let btn1 = document.createElement('button');
// btn1.innerText = 'GO';
//
// form1.append(name1, status, age, btn1);
// document.body.appendChild(form1);
//
// let key = 'key';
//
// let obj = (name1, status, age) => {
//     let mass = JSON.parse(localStorage.getItem(key)) || [];
//     mass.push({name1, status, age});
//     localStorage.setItem(key, JSON.stringify(mass));
// }
// btn1.onclick = () => {
//     obj(name1.value, status.value, age.value)
// };










