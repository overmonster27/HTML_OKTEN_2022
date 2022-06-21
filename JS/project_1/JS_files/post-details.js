let postOfUser = JSON.parse(localStorage.getItem('userPost'));

let generalDiv = document.createElement('div');
generalDiv.setAttribute('class', 'general');

let midlediv = document.createElement('div');
midlediv.setAttribute('class', 'midle');

midlediv.innerHTML = `<h3> UserID : ${postOfUser.userId}<br> PostID : ${postOfUser.id}<br> Title : ${postOfUser.title}<br> Body : ${postOfUser.body}<br></h3>`

let title = document.createElement('h1');
title.innerText = 'Comments'

let generalComents = document.createElement('div')
generalComents.setAttribute('class', 'generalComent')


fetch(`https://jsonplaceholder.typicode.com/posts/${postOfUser.id}/comments`)
    .then(response => response.json())
    .then(value => {
        for (const valueElement of value) {

            let commentElement = document.createElement('div');
            commentElement.setAttribute('class', 'comment')
            commentElement.innerHTML = `<h3>PostID : ${valueElement.postId}<br> ID: ${valueElement.id}<br> Name : ${valueElement.name}<br> Email : ${valueElement.email}<br> Body : ${valueElement.body}<br></h3>`;

            generalComents.append(commentElement);
        }
    })

generalDiv.append(midlediv, title, generalComents);
document.body.append(generalDiv);
