// I don't have any way to cancel the promise
var promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});


//Observables can be cancelled
var observable = new Rx.Observable.create(function subscribe(observer) {
  observer.next(1);
  setTimeout(() => observer.next(2), 1000);
});

var subscription = observable.subscribe(data => console.log(data));
setTimeout(() => subscription.unsubscribe(), 500);
