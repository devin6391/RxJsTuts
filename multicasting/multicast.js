var subject = new Rx.Subject();
var observable = new Rx.Observable.create(function(observer) {
  console.log("Observer execution started");
  observer.next(1);
  observer.next(2);
  observer.complete();
});

//chain up the subject to observable with multicast
var multicasted = observable.multicast(subject);

// I am subscribing to a subject now
multicasted.subscribe(data => console.log(data));
setTimeout(() => {
  multicasted.subscribe(data => console.log(data));
}, 1000);

//control when observable is going to execute
multicasted.connect();
