# Closures

## Recap

* You can define functions inside of functions...deeper and deeper...which is referred to as nesting.This leads to an important feature called _closures_

A function in JS has access to:

  1. variables in its own context
  2. variables in the context of all parent functions,
  3. global variables

#### BUT

what happesn if we create a function which references a variable from a parent function?

**Closures - an example**

```JS
const outer = function() {
  const x = 10;

  const inner = function() {
    console.log("The value of x is: " + x);
  }
  return inner;
  };

  const foo = outer();
  foo();
```

What will ```JS foo()``` print?

it does print ```The value of x is : 10``` 

But why?

Because the code is executed in the following manner.

Function outer is invoked: outer().
outer assigns the value 10 to the variable x.
outer defines a function and assigns it to the variable inner.
outer returns the value of inner – the just-defined function.
inner function is assigned to the variable foo.
Function foo is invoked, logging The value of x is: 10 to the console

## Whats really the point here?

  ### The key attribute of closures is demonstrated here: the inner function accesses variable x, which is defined within the parent function outer.

# Closures definition

Javascript will retain the context of parent functions, meaning it will retain references to any variables in parent functions. this is called - **Lexical Scoping**


[Closure notes from eloquent Javascript](https://eloquentjavascript.net/03_functions.html#h_hOd+yVxaku)

Its good to think of function values as containing both the code in their body and the environment in which they are created. 

When called, the function body sees the environment in which it is called