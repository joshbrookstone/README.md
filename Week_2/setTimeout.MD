# setTimeout

setTimeous is used to delay the execution of some code to later. We specify the code via a callback, and the delay in ms(milliseconds)

For our purposes we will consider the function to therefore look like this: ```JS setTimeout(callback,delay)```

a trivial example:

```JS
console.log('first line');
setTimeout(() => {
  console.log('timeout line');
}, 1000);
console.log('last line');
```

The output will be as followes

```JS
first line
last line
timeout line
```
## What is setTimeout used for?

* Almost all web Apps schedule things
  * Some sites will show a notice to the user and then automatically hide it after a few seconds. That's accomplished via setTimeout
  * Some websites like to pop open an in-browser chat button after a few seconds. setTimeout is used to make them appear with a short delay.