for (let i = 0; i < 10; i++) {
    document.write('<div> slkdlkvslkdv </div>')
}
for (let i =  0; i < 10; i++) {
    document.write(`<div> fjsndkjnf ${i}</div>`)
}
let e = 0;
while (e < 20) {
    document.write('<h1>lskefnleln</h1>')
    e++
}
let i = 0;
while (i < 20) {
    document.write(`<h1>akljwdwdlkj ${i}</h1>`)
    i++;
}


let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write('<ul>')
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<li>${listOfItems [i]}</li>`)
}
document.write('</ul>');


let products = [
    {
        title: 'Milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'Juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'Tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'Tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];


for (let i = 0; i < products.length; i++) {
    let product = products[i];
    document.write(`<div class="product-card">
 <h3 class="product-title">${product.title}</br> Price - ${product.price}</h3> <img src="${product.image}" alt="image">
 </div>`)
}


