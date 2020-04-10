# FunfunFunctions video on Object Creation

* this and bind

* There is no right way for OO in JS.

* instead, one must learn how Object creation works and than what works best for you

* JS is also a functional and also Object oriented programming language

```js
dog.talk() // "woof"
let talkFunction = dog.talk
talkFunction() // undefined...why?
```

talkinFunction has ceased to be connectiong to an object. so now it has no relationship to the 'this' of the dog object.

in a function, the this keyword does not refer to the context where it is being defined, it refers now to where it is being called

* but it CAN be binded so you can call it from a function

```js
let boundFunction = talkFunction.bind(dog)
boundFunction()
```

bind FORCES dthe this of talkfunction to BE dog.

## PART 2 of Object Orientation videos

* _this_ always has value in context

* bind copies a function, but where THIS is bound to a specific value

* functions are just values, they just live on their own

* this is context sensitive. a function is just a value. a function can do so many things. a variable, passed as an arg etc...

* function is like a sentence that needs to have context

* Unless you use bind. which gives this a specific context relative to a certain context.