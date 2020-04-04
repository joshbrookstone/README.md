# Intro to recursion

There are the the normal looping methods of the ```for``` loop and the ```while``` loop. Loops allow us to do something over and over again until a condition is met

**BUT**

There are other ways of acheiving these goals without a loop.

## One way is recursion.

* Recursion is an alt. to traditional looping that allows you to do the same thing, in a different way.

* Some languages might not have for or while loops and may require you to loop with recursion instead.

* Any problem that you can solve with a for loop, you can solve with recursion.

## Examples:

Heres a while loop:

```JS
let number = 0;
while (number <= 12) {
  console.log(number);
  number += 2;
}
```

And heres a recursive loop of the same problem:

```JS
1.| function countEvenToTwelve(number) {
2.|   if (number <= 12) {
3.|     console.log(number);
4.|     countEvenToTwelve(number+2);
5.|   }
6.| }
7.| countEvenToTwelve(0);
```

On line 4 thats recursion! a function that calls itself **until it doesn't**

* A recursive function will call itself to execute code over and over again, kind of like a loop. And like a loop, it has to stop calling itself at some point so that it doesn't keep repeating forever

* Every recursive function must stop calling itself at some point, otherwise it will just continue to call itself forever, like an infinite loop. The following function never stops calling itself.

```JS
function countUpFrom(number) {
  console.log(number);
  countUpFrom(number+1);
}
countUpFrom(1);
```

* Once a function that loops crashes from the infinited loop, it will show an error message _RangeError: Maximum call stack size exceeded._ This is **stack overflow**

**Every recursive function MUST stop calling itself at some point**

* defn:
  * ```JS number <= 12``` is the recursive case, because as lonng as this is true, the function will continue to call itself.
  * We refer to ```JS number > 12``` as a base case. If this is true, the function will not call itself.

* Every time the function calls itself, the input gets close and closer to the base case.

* A function must have at least one recursive case and at least one base case in order to be recursive.

# Conclusion

Recursion is a tool you can use as an alternative to traditional iteration using for and while loops.

Every recursive function must have a base case and a recursive case.
Each recursive call should break down the current problem into a smaller, simpler one.
The recursive calls must eventually reach the smallest version of the problem, the base case.
The base case is when the problem can be solved without further recursion.

## When to use recursion?

* Being able to identify when the problem you are solving is just a smaller instance of the problem you have already solved will allow you to determine when to use recursion instead of iteration.