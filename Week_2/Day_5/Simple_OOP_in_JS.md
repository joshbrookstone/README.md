# Review of Simple OOP in JavaScript

In JS, variables look like this:

```js
const dogSound = "woof";
let dogBreed = "shih tzu";
```

functions look like this: 

```js
function speak() {
  console.log(`${dogBreed} says ${dogSound}`);
}
```

objects look like this:

```js
const dog = {
  sound: "woof",
  dogBreed: "shih tzu",
  speak: function() {
    console.log(`${this.dogBreed} says ${this.dogSound}`);
  }
};
```

* in OOP, we use objects to group related variables and functions together to keep our code more organzied.

## Terminology

* an object is a collection of key-valuue pairs known as properties.

* an object is a little bundle of info also known as a state. each property an object has can represent the state of that object.
  * This objects sound is 'woof'
  * its breed is 'shih-tzu'

* When a property's value is a function, it is called a method.

* an object is not just a state. but it can do stuff known as behaviour.
  * behaviour takes the form of methods, which is just the name we give to functions when they are tied to an object.
  * some methods might modify the object
    * some might ask the object for info

## this

* we use this within a line of code as if ti were a variable. but its actually a keyword, like for or function. this in js, means nothing without context. the value of this is determined at the time of the call and depends on how and where it is called.

* **All we really need to know for OO in JavaScript, is that when you use this inside a method, this refers to the object that the method was called on.**

* this and the object it refers to from the inside are the same.

## Express response

* In Express, we write endpoint handles that take two arguments, a request and a response

```js 
app.get('/', (request, response) => {
});
```
* Response has interntal states, which we can modify or query with some methods and properties. some manipulations actually have external effects

## jQuery

* jQuery objects have properties like .length and methods like .text()

## Conclusion

in the context of OO, an object is a bundle of info. this info is its state when expressing it. but it also has behavior. this behaviour takes form of methods, which is the name we give to functions when theyre tied to an objects. some methods might modify the object, some methods might ask the object for info.

OO bundles related state and logic into an object that can be apssed around as a single entity.