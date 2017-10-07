var subject = new Rx.Subject();
var observable = new Rx.Observable.create(function(observer) {
  console.log("Observer execution started");
  observer.next(1);
  observer.next(2);
  observer.complete();
});

//chain up the subject to observable
observable.subscribe(subject);

// I am subscribing to a subject now
subject.subscribe(data => console.log(data));
setTimeout(() => {
  subject.subscribe(data => console.log(data));
}, 1000);
