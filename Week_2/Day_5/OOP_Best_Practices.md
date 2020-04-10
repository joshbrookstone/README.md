# OOP Best Practices

goals of OO:

1. reduce deuplicated code (reusability)
2. Breaking code up into sensibly-divided units (modularity)

ultimately, we want to make complex things simpler to read, write and maintain.

## Abstraction

* OOP allows us to abstract how things work so people dont need to see the innner details of the code to make things work. they just follow the syntax we give them and go about doing this thign they want to do.

## Private vs Public

the _ to the start of a property name tells other developers that they shouldn't access this property directly but instead by interacting with it

## Single Responsibility Principle

* a class should only have a single job
* if it has more, than we risk breaking our code if something changes. 
* BUT if we split up our classes do do only a single job, than a change to one part of our app wont affect other unrelated parts of our app.

## inheritance is used to reduce duplicate code and share behaviour between classes.

## A generally summary of OOP we have covered:

* A class is a blueprint frmo which instances of objects can be created
* Classes have data in the form of value properties and behaviour in the form of methods
* Callses can inherit behaviour from other classes using the exted in their superlcass
* JS also gives us get and set keywords to more cleverly define methods that are data getters and setters