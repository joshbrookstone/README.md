# How JS actually works video notes

* JS : what are you?

* we have:

JS which is the heap and the call stack

* Js can do one thing aat a time

* a stack is a data structure, we put things on top of it and keep going up

* we pop things off the stack to get to where the original call happens from

* call stack and blocking.
  * why is blocking a problem?
    * because...browsers

* we dont want to block the callback

* so lets use asynchronous callbacks

* what happens to the stack during asynch calbacks? it can only go on top of things and build to keep going up

* the asynch callback goes to the web API and it clears teh stack. and than the web api puts it into the task queue. than the event loop says: if the stack loop is clear, and the task queue has something in it. push the first hting in the task queeue onto the stack.

* so even with asycnch callback of a set timeout of zero. it still goes through the webapis and the taskqueue to the event loop. this is why its last.

* Events just get queued when in the browser so it doesnt block the call stack
