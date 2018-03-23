// const person = {
//   name: 'Sarthak',
//   age: 20,
//   location: {
//     city: 'New Delhi',
//     temp: 92
//   }
// };

// const {name='Anonymous', age} = person;
// console.log(`${name} is ${age}`);

// const {city, temp: temperature} = person.location;

// if(city && temperature) {
//   console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);




// const address = ['F-87 Vikaspuri', 'New Delhi', 'Delhi', '110018'];
// const [, city, state] = address;
// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`)