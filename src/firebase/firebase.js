import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


// const expenses = [{
//     description: 'First expense',
//     note: '',
//     amount: 12.50,
//     createdAt: 16428369827
//   }, {
//     description: 'Second expense',
//     note: '',
//     amount: 12.50,
//     createdAt: 38923982
//   }, {
//     description: 'Third expense',
//     note: '',
//     amount: 12.50,
//     createdAt: 264230470923840370
//   }];

// database.ref('expenses').push(expenses[0]);
// // database.ref('expenses').push(expenses[1]);
// // database.ref('expenses').push(expenses[2]);

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //   });

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];
// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });
// //   console.log(expenses);
// // });















// // database.ref('notes/-L8O5jCogg-NAn6WThOC').remove();

// // database.ref('notes').push({
// //   title: 'topics',
// //   body: 'native, python'
// // });

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   const data = snapshot.val();
// //   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// // }, (e) => {
// //   console.log('Error fetching data: ', e);
// // });

// // setTimeout(() => {
// //   database.ref('name').set('Andrew');
// // }, 3000);

// // SUBSCRIPTION
// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // }, (e) => {
// //   console.log('Error with data fetching', e);
// // });

// // setTimeout(() => {
// //   database.ref('age').set(29);
// // }, 3500);

// // setTimeout(() => {
// //   database.ref().off(onValueChange);
// // }, 7000);

// // setTimeout(() => {
// //   database.ref('age').set(30);
// // }, 10500);


// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data: ', e);
// //   });


// // database.ref().set({
// //   name: 'Sarthak Gupta',
// //   age: 20,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software dveloper',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'New Delhi',
// //     country: 'India'
// //   }
// // }).then(() => {
// //   console.log('Data is saved')
// // }).catch((e) => {
// //   console.log('This failed.', e);
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Bangalore'
// // });

// // database.ref('isSingle').set(null);

// // database.ref()
// //   .remove()
// //   .then(() => {
// //     console.log('isSingle removed');
// //   })
// //   .catch((e) => {
// //     console.log('Error removing isSingle: ', e);
// //   });