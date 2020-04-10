# OOP Part 1: Classes & Instances

* Classes are blueprints

an example: a house and its blueprints.

  * the blueprint is a template for creatinga  new house
  *  we can create as many houses as we want with this blue print 
  * each house unique, but based off of the blueprint

* in OOP, classes are blueprints(templates) that we use to create instances of objects. A class describes what the object is going to be and we can creat new objects using the class

## Class

* use the class keyword with the name class to delcare a class.

```js
class PIzza{}
```

* class name should always be a noun, and the first letter should always be capitalized

* to create a new object fmor a class, use the new keyword: 

```JS
let pizza1 = new Pizza();
let pizza2 = new Pizza();
```

pizza1 and pizza2 are pizza objects. When you create an object using a class, it is an instance of that class. so pizza1 and pizza2 are instances of the PIzza class.

There objects are both instances of the same class, but unique, completeley seperate things.

pizza1 !== pizz2;

There is nothing insde the pizza class. our blueprint is blank, so it will just create an empty object.

## MEthods and properties

* lets update the calss so that it can allow pizzas to have toppings. if we wanted every pizza instance to start off with cheese, but allow other toppings to be added, here is how:

```JS
class pizza {

  constructor() {
    this.toppings = ["chees"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

}
```
 
Our pizza b.p. is now describing two methods (constructor and addTopping) as well as a property toppings.

* methods are added to a class as follows:

```js
class SomeClass {
  methodName(parameters){

  }
}
```

* to add properties to a class, simple use the this keyword followed by the property name, then assign it a value

* Since a class is just a blueprint for creating objects, methods like addTopping will exist on the instances created from the class, but not on the class itself.

## constructor

* constructor is a special kind of method that gets executed when an object instance is created frmo a class. basically sets a base of the class and any new instance will get it. great place to setup a default state for new instances.

**the constructor is for setting defaultvalues for any new object's properties**

* the class pattern allows us to DRY up our code by defining the default state and behaviour for all pizzas/or object instances of its kind in one place instead

## customizing the constructor

* every class has a single constructor method that will get called when an instance of that class is created. 

EG: 

```JS
class Pizza {

  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

}
```

now everytime we use this class to create a new object, we can pass in a size and crust.

let pizza = new Pizza("large","thin");

then when this pizza is created we will get :

```js
let pizza = {
  size: 'large',
  crust: 'thin',
  toppings: ["cheese"]
}
```