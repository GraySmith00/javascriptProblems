const animals = [
    { name: 'Fluffkins', species: 'rabbit'},
    { name: 'Caro',      species: 'dog'},
    { name: 'Hamilton',  species: 'dog'},
    { name: 'Harold',    species: 'fish'},
    { name: 'Ursula',    species: 'cat'},
    { name: 'Jimmy',     species: 'fish'}
]

//=============================================================

// filter method - will only return items when the condition inside the callback returns true.
const dogs = animals.filter(function(animal) {
    return animal.species === 'dog';
})

//const dogs = animals.filter(animal => animal.species === 'dog');

console.log(dogs);

//=============================================================

// find method - does the same thing as filter but only returns the first item


//=============================================================

// map method - will include all items, but items will be transformed by whatever happens in the callback.
const names = animals.map(function(animal) {
    return `${animal.name} is a ${animal.species}`;
});

//const names = animals.map(animal => `${animal.name} is a ${animal.species}`);

console.log(names);

//=============================================================

const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]

// let totalAmount = 0;
// for (let i = 0; i < orders.length; i++) {
//     totalAmount += orders[i].amount;
// }

// reduce method - multi-tool of list transformations
let totalAmount = orders.reduce(function(sum, order) {
    //console.log('hello', sum, order);
    return sum + order.amount;
}, 0)
// the 0 is the starting value

console.log(totalAmount);

//=============================================================

const customers = {
    'mark': [
        { name: 'waffle iron',  price: '80',    quantity: '2' },
        { name: 'blender',      price: '200',   quantity: '1' },
        { name: 'knife',        price: '10',    quantity: '4' }
    ],
    'nakita': [
        { name: 'waffle iron',  price: '80',    quantity: '2' },
        { name: 'knife',        price: '10',    quantity: '2' },
        { name: 'pot',          price: '20',    quantity: '3' }
    ] 
};
