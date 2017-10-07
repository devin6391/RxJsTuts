var subject = new Rx.Subject();

subject.subscribe(data => console.log(data));
setTimeout(() => subject.subscribe(data => console.log(data)), 1000);

subject.next(1);
setTimeout(() => subject.next(2), 1500);
