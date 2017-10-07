var subject = new Rx.Subject();
var observable = new Rx.Observable.create(function(observer) {
  console.log("Observer execution started");
  observer.next(1);
  setTimeout(() => observer.next(2), 2000);
  setTimeout(() => observer.complete(), 3000);
});

// I am subscribing to a subject now
subject.subscribe(data => console.log(data));
setTimeout(() => {
  subject.subscribe(
    data => console.log(data),
    err => console.error(err),
    () => console.log("Subscription done")
  );
}, 1000);

//chain up the subject to observable
observable.subscribe(subject);
