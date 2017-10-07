//Promises are eager
var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise execution started");
    resolve(1);
  }, 1000);
});

//Observables are lazy, they wont execute anything within unless subscribed
var observable = new Rx.Observable.create(function subscribe(observer) {
  console.log("Observable execution started");
  observer.next(1);
  setTimeout(() => observer.next(2), 1000);
});
