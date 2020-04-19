# Event-Driven Architecture - A brief Intro

* EDA can be summarizes as: When X happens, then do Y

* X is the **event** and Y is the **handler**
  * perhapes x is a button, and y turns on a lightbuld

## client side events

* On the client side, we have the DOM, which has events such as onCLick, onFocus, onLOad
  * client side events can use jQuery

## Server-side Events

* on a server running NOde.js, you can think of an incoming request as an event, with a callback function that handles events ( and could render a response)

* THe Node.js core API provides an EventEmitter clas that is basis for event-driven ppatterns.