# Intro to Algorithms

An alogirthm is a set of instructions or steps for accomplishing a specific task. 

In C.S. an alogirthm is a set of steps that a computer takes to accomplish a task. We tell the computers to do by writing code, so an algorith mis the code that accomplishes a certain task.

## ALgorithm Complexity

* A.c. is all about how fast or slow a particular algorithm is. 

* How do we measure the speed of an algorithm? not time its too unreliable. we should measure speed by counting the number of elemntary operations. The number of operations that are so simple that they take a constant amount of time to perform.

```js
let number = 0
number +=2;
console.log(number);
```

These are lementary op[erations.

we can count up all the operations that an algorith meprfroms and call that ist runing time.

## Elementary Operations

an elementary operations is any that takes a fixed amount of time to perform, no matter what the data is.

number1 + number 2

no matter the numbers, it takes a fixed amount of time of n because there is 1 elementary operation here, so running time is 1

### conclusion

* an algorithm is any peice of cod ethat performs a particular task or solves a particular problem
* Time complexity is commonly estimated by counting the number of elementary operations performed by an algorithm. it takes a fixed amount of time to perform an elementary operation.
* TIme complexity is often reffered to as running time
* ALgorithms taht dont deal with dynamie data, like loops, usually take constant time (no n involved)
* Algorithms that iterate over data, involve using n based on the size of the data.

* WHen an algorithms complexity grows logarithmically, our input may get very,very large and yet the number of elementary operations will remain relatively small.

* Binary search is much more efficient than linear search.
