// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// class User {
//     constructor(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
// //     }
// }
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// let user1 = new User(1, `ihor`, `fedoruk`, `lksfnjklfjns@gmail.com`, `+380952094200`);
// let user2 = new User(3, `ihor`, `fedoruk`, `lksfnjklfjns@gmail.com`, `+380952094200`);
// let user3 = new User(5, `ihor`, `fedoruk`, `lksfnjklfjns@gmail.com`, `+380952094200`);
// let user4 = new User(7, `ihor`, `fedoruk`, `lksfnjklfjns@gmail.com`, `+380952094200`);
// let user5 = new User(9, `ihor`, `fedoruk`, `lksfnjklfjns@gmail.com`, `+380952094200`);
// let user6 = new User(2, `ihor`, `fedoruk`, `lksfnjklfjns@gmail.com`, `+380952094200`);
// let user7 = new User(4, `ihor`, `fedoruk`, `lksfnjklfjns@gmail.com`, `+380952094200`);
// let user8 = new User(6, `ihor`, `fedoruk`, `lksfnjklfjns@gmail.com`, `+380952094200`);
// let user9 = new User(10, `ihor`, `fedoruk`, `lksfnjklfjns@gmail.com`, `+380952094200`);
// let user10 = new User(8, `ihor`, `fedoruk`, `lksfnjklfjns@gmail.com`, `+380952094200`);
// let usersArray = [];
// usersArray.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(usersArray);
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let fill = usersArray.filter((user) => {
//     return user.id % 2 === 0;
// });
// console.log(fill);
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(usersArray.sort((user1, user2) => user1.id - user2.id));

// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name= name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let client1 = new Client(1, 'vasya', 'liver', 'ajdnalkdjnaw@gmail.com', '38742389489736', ['bmw', 'reno', 'mersedes'])
let client2 = new Client(3, 'vasya', 'liver', 'ajdnalkdjnaw@gmail.com', '38742389489736', ['bmw', 'reno', 'mersedes'])
let client3 = new Client(2, 'vasya', 'liver', 'ajdnalkdjnaw@gmail.com', '38742389489736', ['bmw', 'reno', 'mersedes'])
let client4 = new Client(5, 'vasya', 'liver', 'ajdnalkdjnaw@gmail.com', '38742389489736', ['bmw', 'reno', 'mersedes'])
let client5 = new Client(4, 'vasya', 'liver', 'ajdnalkdjnaw@gmail.com', '38742389489736', ['bmw', 'reno', 'mersedes'])
let client6 = new Client(7, 'vasya', 'liver', 'ajdnalkdjnaw@gmail.com', '38742389489736', ['bmw', 'reno', 'mersedes'])
let client7 = new Client(6, 'vasya', 'liver', 'ajdnalkdjnaw@gmail.com', '38742389489736', ['bmw', 'reno', 'mersedes'])
let client8 = new Client(9, 'vasya', 'liver', 'ajdnalkdjnaw@gmail.com', '38742389489736', ['bmw', 'reno', 'mersedes'])
let client9 = new Client(8, 'vasya', 'liver', 'ajdnalkdjnaw@gmail.com', '38742389489736', ['bmw', 'reno', 'mersedes'])
let client10 = new Client(10, 'vasya', 'liver', 'ajdnalkdjnaw@gmail.com', '38742389489736', ['bmw', 'reno', 'mersedes'])
let ClientArray = [];
ClientArray.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10);
console.log(ClientArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(ClientArray.sort((client1, client2) => client1.id - client2.id));

// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function Car(model, produser, year, topspeed, enginesize) {
//     this.model = model;
//     this.produser = produser;
//     this.year = year;
//     this.topspeed = topspeed;
//     this.enginesize = enginesize;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.topspeed} на годину`);
//     };
//     this.info = function () {
//         console.log(this);
//     };
//     this.increesMaxSpeed = function (newspeed) {
//         console.log(this.topspeed += newspeed);
//     };
//     this.year = function (newYear) {
//         this.year = newYear;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver
//     }
// }
//
// let newCar = new Car('reno', 'france', '2011', 200, '1.4');
// newCar.drive();
// newCar.info();
// newCar.increesMaxSpeed(300);
// newCar.year(2012);
// newCar.addDriver('ihor');
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car2 {
//     constructor(model, produser, year, topspeed, enginesize) {
//         this.model = model;
//         this.produser = produser;
//         this.year = year;
//         this.topspeed = topspeed;
//         this.enginesize = enginesize;
//     };
//
//     drive = function () {
//         console.log(`їдемо зі швидкістю ${this.topspeed} на годину`);
//     };
//
//     info() {
//         console.log(this);
//     };
//
//     increesMaxSpeed(newspeed) {
//         console.log(this.topspeed += newspeed);
//     };
//
//     year2(newYear) {
//         this.year = newYear;
//     };
//
//     addDriver(driver) {
//         this.driver = driver
//     }
// }
//
// let newCar = new Car2('reno', 'france', '2011', 200, '1.4');
// newCar.drive();
// newCar.info();
// newCar.increesMaxSpeed(300);
// newCar.year2(2012);
// newCar.addDriver('ihor');

// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class sinderella {
//     constructor(name, age, footsize,) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     };
// }
//
// let sinArray = [
//     new sinderella('liza', 29, 41),
//     new sinderella('nastya', 38, 42),
//     new sinderella('katya', 58, 43),
//     new sinderella('victoria', 17, 44),
//     new sinderella('leron', 45, 35),
//     new sinderella('ira', 34, 36),
//     new sinderella('yana', 65, 37),
//     new sinderella('sasha', 11, 38),
//     new sinderella('vasilina', 12, 39),
//     new sinderella('galya', 25, 40),
// ];
//
// function Prince(name, age, footFind) {
//     this.name = name;
//     this.age = age;
//     this.footFind = footFind;
// }
//
// let newPrince = new Prince('ihor', 25, 37);
//
// let find = (arrs, prince) => {
//     for (const arrsElement of arrs) {
//         if (arrsElement.footsize === prince.footFind) {
//             return `${arrsElement.name}`;
//         }
//     }
// }
// console.log(find(sinArray, newPrince));
//
// console.log(sinArray.find(value => value.footsize === newPrince.footFind));
