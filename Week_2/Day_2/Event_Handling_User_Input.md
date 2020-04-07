# Event Handling and User Input

* Asynchronous programming isn't just about scheduling code to run later visa setTimeout. 

## User Events

* a common requirement is the ability to handle user input. EG: a user could click a lnk or button on a page, submit a form, drag and drop.

### These actions are called **events**

* These user events can occur anytime while our app is running, we need to be able to handle them asynchronosly.

## Callbacks

* callbacks are a major way that JS handles dealing with code that needs to run later

## User Input

* Can happen on the comman line apps

* What if we want node app to keep running but allow the user ot type info?

* This is where event handling comes in 

## Event Handling

some example code:

```js
// on any input from stdin (standard input), output a "." to stdout
process.stdin.on('data', (key) => {
  process.stdout.write('.');
});

console.log('after callback');
```
here we use ```js process.stdin``` and ```js process.stdout``` stdin deals with input, stdout with output

we use the **on** method on stdin to register a callback. Unlike setTimeout, ths callback is not scheduled to run x second slater. so no delay. it is meant to run ANY TIME a user provides input to the program.

* The _on_ function is a very common method name for registering callbacks to handle events.

## Events in General

* User events are relatable way to get introduced to the concept of events.

* not all event handling is due to direct user input

## Conclusion

This interactive reading introduces the idea of events and how JavaScript uses callbacks as the strategy to handle their asynchronous nature. For our initial example, we looked at Node's process.stdin object and used on to register a callback to read user input. In later exercises, we'll now expect you to use this technique to create fun little solutions.


