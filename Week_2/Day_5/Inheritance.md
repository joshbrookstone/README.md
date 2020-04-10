# Inheritance

* as we start to create different types of objects, inevitable we start to notice some code duplication.

* to solve this, we can take code shared by two calsses and group them using something called **inheritance**

* With inheritance, we can build a new class based on an existing class

* We can make a grouping for the code that is shared into a single class. than we can EXTEND the class into new classes with the extends keyword.

extensions of a class are a subclass, they inherit the code inside the superclass

# Supers

* if one wants to change something in a class, they can override it in the subclass

* OR we can do something in the parent class that only returns the common/shared string?

Lets use supers!

* use the super keyword allows us to access the superclass without entirely overriding something in the parent class

# Getters and Setters

getters and setters are special methods that are used to get the value of a property or set the value of a property.

* Why do this when we can accecs the value of a properly directly?
  * its because this lets us:
    1. validate data before assigning it to a property
    2. computing a vlue on the fly instead of simply pulling it out of a property

* we can set a value of something by making it a method that does something every time things change in the class and than calling the this new function we can find out the new value

* behind the scenes, the get and set syntax binds an object's property to a function that will be called when that value is looked up.

get and set keywords make our objects interface more simple.