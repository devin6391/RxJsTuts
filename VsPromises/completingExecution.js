// I don't have any way to cancel the promise
var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
    console.log("I am still executing");
  }, 1000);
});

promise.then(data => console.log(data));

//Observables can be cancelled
var observable = new Rx.Observable.create(function subscribe(observer) {
  observer.next(1);
  setTimeout(() => {
    observer.complete();
  }, 500);
  setTimeout(() => observer.next(2), 1000);
});

var subscription = observable.subscribe(
  data => console.log(data),
  err => console.error(err),
  () => console.log("I am done");
);
