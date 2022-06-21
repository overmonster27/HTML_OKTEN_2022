let energy = 100;

function getUp(energy) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            energy -= 40;
            if (energy <= 0) {
                reject('Спи дальше')
                return
            }
            console.log('Живи жизнь');
            resolve(energy);
        }, 1000)
    }))
}

function goToWork(energy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            energy -= 10;
            if (energy <= 0) {
                reject('Яж тобі казав іди спи!')
                return
            }
            console.log('Давай работай');
            resolve(energy)
        }, 1000)
    })
}

function eat(energy) {
    return new Promise((resolve) => {
        setTimeout(() => {
            energy += 40;
            console.log('Тепер до вечора протяну');
            resolve(energy)
        }, 1000)
    })
}

function work(energy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            energy -= 50;
            if (energy <= 0) {
                reject('Труба')
                return
            }
            console.log('Іще трошки');
            resolve(energy)
        }, 1000)
    })
}


function goHome(energy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            energy -= 20;
            if (energy <= 0) {
                reject('А було так близько')
                return
            }
            console.log('Наконецто Кайфавать');
            resolve(energy)
        }, 1000)
    })
}

function dinner(energy) {
    return new Promise((resolve) => {
        setTimeout(()=>{
            energy +=30;
            console.log('Гулять!');
            resolve(energy)
        },1000)
    })
}

function walk(energy) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            energy -=49;
            if (energy <=0){
                reject('Не дотянув');
                return
            }
            console.log('Фуууууух успів');
            resolve(energy)
        },1000)
    })
}



getUp(energy)
    .then(value => {
        console.log(`Енергія ${value}`);
        return goToWork(value);
    })
    .then(value => {
        console.log(`Енергія ${value}`);
        return eat(value);
    })
    .then(value => {
        console.log(`Енергія ${value}`);
        return work(value)
    })
    .then(value => {
        console.log(`Енергія ${value}`);
        return goHome(value)
    })
    .then(value => {
        console.log(`Енергія ${value}`);
        return dinner(value)
    })
    .then(value => {
        console.log(`Енергія ${value}`);
        return walk(value)
    })
    .then(value => {
        console.log(`Енергія ${value}`);
    })
    .catch(err => {
        console.log(err);
    });






