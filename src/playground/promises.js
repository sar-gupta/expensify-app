const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is my resolved data');
    // reject('Error');
  }, 5000);
});

console.log('before');

promise.then((data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Other promise');
    }, 5000);
  });
}).then((str) => {
  console.log(str);
}).catch((error) => {
  console.log(error);
});

console.log('after');