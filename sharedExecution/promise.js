var promise = new Promise((res, rej) => {
  console.log("Promise execution started");
  setTimeout(() => res(1), 2000);
});

promise.then(data => console.log(data));
setTimeout(() => promise.then(data => console.log(data)), 1000);
