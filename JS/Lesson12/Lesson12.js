// //  1.
//  // Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// //  Для кожного елементу свій блок div.post
// //  Всі характеристики повинні мати свої блоки всередені div.post
// //  https://jsonplaceholder.typicode.com/posts
//
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(posts => {
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('mainDiv');
        for (const post of posts) {
            let divCard = document.createElement('div');
            divCard.setAttribute('class', 'innerDiv')
            divCard.innerHTML = `
                    <h3>ID: ${post.id}</h3>
                    <h4>Title: ${post.title}</h4>
                    <h5>Body: ${post.body}</h5>
                    `;
            mainDiv.appendChild(divCard);
            document.body.appendChild(mainDiv);
        }
    });


// //   //    2.
// //  Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// //      Для кожного елементу свій блок div.comment
//  // Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
//
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(coments => {
//         let main = document.createElement('div');
//         document.body.appendChild(main);
//         for (const mainElement of coments) {
//             let innerDiv = document.createElement('div');
//             main.appendChild(innerDiv);
//             for (mainEl in mainElement) {
//                 let inerInerDiv = document.createElement('div');
//                 inerInerDiv.innerText = `${mainEl} ${mainElement[mainEl]}`
//                 main.appendChild(inerInerDiv);
//             }
//         }
//     });