# Primitives and Objects in JS

## Primitive Types Dont Have Properties

### _in Javascript, primitive values do not have properties_

This raises the question:

* how can we use things such as "some string".length or 5.toString()? These are properties called on primitive types...why should that work? Because it _technically_ shouldn't if primitive data types have no properties.

## Primitive Types Have Corresponding Objects

* Each primitive(exludng symbol which has weird rules) has a corresponding object constructor. as you can see:

```Java
typeof(true); 
// "boolean" 
typeof(Boolean(true)); 
// => "boolean" 
typeof(new Boolean(true));
// => "object"
/*  
  It is generally considered bad practice to use primitive object constructors (as shown in the final line above). 
*/
```
* An object constructor can be invoked with the word _new_ 

* the reason we can use properties on primitive data type is because of type coercion. 
  * JS will take different data types, and one of them will be converted to an "equivalent". 

  _EG:_

  ```Java
  '1' == 1; // type coercion occurs
  // => true 
  '1' === 1; 
  // => false

similarly: in the case of "someString".length, "someString" is coerced to a string object in order to access the property length. However, "someString" itself is still a primitive data type.

```Java
const greeting = "Hello, world!" 
const objGreeting = new String("Hello, world!");

greeting == objGreeting; 
// => true

greeting === objGreeting; 
// => false
```
