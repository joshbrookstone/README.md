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

## Video 3

* classes were added to JS to kind of replace protoypes becasue poeple were used to classes

* classes implemented ontop of prototypes

* the this in context is whatever is on the left.(hard to explain)

* prototypes are delegates
  * dont work like classes that make a copy like a blueprint

* prototype is a way of saying: for this object, use this other object as a backup, a deleagate

* if a object doesnt exist, go look at the protoype and find what ive told you to use.

## Video 4 NEW

New creates a new object

Set the prototype - Objet.setPrototypeOf(obj, constructor.prototype)
Execute the constructor with this
apply - its like bind but executes its value immediately
returns the created object

## Video 5 Object Creation - What is __prototype__

* set prototype is more like object delegation tahn class inheritance

* __proto__ - this is  reference to the same object we set to the prototype

* objects delegating to other objects

* __proto__ is the object that points out what has been set up

* proototype is set using the NEW keyword

## Video 6 Object.create

* static method that creates a new object with the prototype set to a certain object

* creates a completely fresh object set to the prototype of the object you choose

* they are new objects when created, that are set to a reference of a protoype. and if its not in the object youve created, they will look at the refernce object

* Object.create is more natural than the New keywwork

* set protoype of should not be used in making things. it can slow the function down.

## Video 7 Classes in Object

* classes in js are just syntactic sugar in JS

* JS does not have classes...they fake classes

* a thin layer over prototypal inheritance...
