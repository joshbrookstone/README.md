# Javascript Functions as Objects

**One of the distinctive things about Javascript is that functions are _first-class objects_.**

* This means two important things:
  1. Functions can be stored in variables and passed around
  2. Functions can do everything that other objects can do (like having properties assigned to them)

``` Javascript

  const myFn = function() {
  console.log("I am function.");
  }

  myFn.someAttribute = 42;
  console.log(myFn.someAttribute);

  function runner(f) {
  f();
  }

  runner(myFn);
```

### What is going on here and why is it special?

1. We assgint a function to our variable ```myFn```
2. An attribute ```someAttribute``` is assigned to that function object
3. a ```runner``` function is defined that runs the argument ```f``` that we pass it
4. we pass a reference to our ```myFn```, which gets invooked by the ```runner``` function


## Callback Functions

The most notable usage of having _functions as values_ in Javascript is a **callback function**

### **A callback function**

* Is a function passed (by reference) into another function (call this one the _receiver_ function)
* The _receiver_ function is therefore accepting behavior to perfrom by calling the _callback_ function that it now has access to 
* The _receiver_ function can decide to call the _callback_ function at any time, as many times as it wants

## Callback example

```Javascript
// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found();   // execute callback
    }
  }
}

const actionWhenFound = function() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
```

