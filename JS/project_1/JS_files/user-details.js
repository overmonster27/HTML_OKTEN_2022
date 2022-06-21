let localUser = JSON.parse(localStorage.getItem('userId'))

let mainDIv = document.createElement('div');

let allInfo = document.createElement('div');
allInfo.setAttribute('class', 'all')

allInfo.innerHTML = `<h3>ID : ${localUser.id}<br>  Name : ${localUser.name}<br> Username : ${localUser.username}<br>  Email : ${localUser.email}<br> Adress : ${localUser.address.street}<br> Suite : ${localUser.address.suite}<br> City : ${localUser.address.city}<br> Zypcode : ${localUser.address.zypcode}<br> LAT : ${localUser.address.geo.lat}<br> LNG : ${localUser.address.geo.lng}<br> Phone : ${localUser.phone}<br> Website : ${localUser.website}<br> Name : ${localUser.company.name}<br> CatcPharse : ${localUser.company.catchPhrase}<br> BS : ${localUser.company.bs}<br></h3>`

let secondDiv = document.createElement('div');

let btn1 = document.createElement('button');
btn1.setAttribute('class', 'mainButton');
btn1.innerText = 'post of current user';
secondDiv.append(btn1);

let postDiv = document.createElement('div');
postDiv.setAttribute('class', 'postDiv');

btn1.addEventListener('click', function () {

    fetch(`https://jsonplaceholder.typicode.com/users/${localUser.id}/posts`)
        .then(response => response.json())
        .then(value => {

            for (const valueElement of value) {

                let innerPost = document.createElement('div');
                innerPost.setAttribute('class', 'innerPost')

                let par = document.createElement('h5');
                par.setAttribute('class', 'post');
                par.innerText = `${valueElement.title}`

                innerPost.append(par);

                let btn2 = document.createElement('button');
                btn2.setAttribute('class', 'secondButton');
                innerPost.append(btn2);

                let href2 = document.createElement('a');
                href2.setAttribute('class', 'href');
                href2.innerText = 'Post details';
                href2.href = 'post-details.html';

                btn2.append(href2);

                postDiv.append(innerPost);

                btn2.onclick = () => {
                    localStorage.setItem('userPost', JSON.stringify(valueElement))
                }
            }
            btn1.style.display = 'none';

        })
})
allInfo.append(postDiv);

mainDIv.append(allInfo, secondDiv,);

document.body.append(mainDIv);
