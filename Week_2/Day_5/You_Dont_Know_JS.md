# Chapter 4: Class Objects

* inheritance - data has intrinsic associated behaviour. proper design is to package up the data and behavior together. this is sometimes called data structures

* Any given string is just an instance of its class String.

* an example of classification: a car is a more general class of a vehicle

* car inherits the value of vehicles. it isnt the only vehicle, but instead extends the idea of vehicle

* the parent class is the top class wher the child class inherits from.

* once a child class id efined, its seperate and distinct frmo the parent class. it can override the parent class as well

* virtual polymorphism/relative poly :
  * any method can ref another method at a higher level of the inheritance hierachy
  * super is used for the parent class
  * dont let polymopyh confuse you into thinking a child class is linked to its parents class. a child class instead gets a copy of what it needs form the parents class.

**Class inheritance implies copies**

* multiple inheritance
  * child classes can inherit from more than one parent class
  * but what takes precedence if both parent classes have a certain method? whose takes precedence?
  * it extends into the sub class. following the branch down