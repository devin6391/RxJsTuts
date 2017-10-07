var observable = new Rx.Observable.create(function(observer) {
  console.log("Observer execution started");
  observer.next(1);
  setTimeout(() => observer.next(2), 2000);
  setTimeout(() => observer.complete(), 3000);
});

var sub1 = observable.subscribe(
  data => console.log(data),
  err => console.error(err),
  () => console.log("Subscription done")
);

setTimeout(() => {
  observable.subscribe(
    data => console.log(data),
    err => console.error(err),
    () => console.log("Subscription done")
  );
}, 4000);
