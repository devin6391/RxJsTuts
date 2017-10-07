// Promises are always async by nature
var shouldResolve = true;
var promise = new Promise((resolve, reject) => {
  if(shouldResolve) resolve(1);
  else reject(new Error("Promise is not resolved"));
});
promise.then(data => {
  console.log("Promise is resolved with data: " + data);
}).catch(e => console.error(e));

//It can be easily done with functions though.
var foo = function(){
  if(shouldResolve) return 1;
  else throw "Not returning anything useful but error";
}

////////////////=============///////////////////

//Observables are useful in sync operations
var observable = new Rx.Observable.create(function subscribe(observer) {
  observer.next(1);
  observer.next(2);
  observer.complete();
});
observable.subscribe(data => console.log(data));

//while generators can do what observable can do synchronously but not as a stream of data.
function* gen(){
  var init = 0;
  while(true) {
    yield init++;
  }
}
var generator = gen();
generator.next();
generator.next();
generator.next();
