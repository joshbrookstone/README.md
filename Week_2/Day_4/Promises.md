# Promises

An official introductory description: A promise represents the ventual result of an asynchronous operation. The primary way of interation with a promise is through its *then* method, which registers callbacks to receive either a promise's eventual value or the reason why the promise cannot be fulffiled.

## we aer not avoiding callbacks with promises, instead we _wrap_ them into a promise.

* Promises are an object
* they do not rely on anything other than basic JS
* As of ES6, JS has promises supported natively in its code. via ```JS Promise```

### MPJ video on promises notes

* callbacks: when thise is done, do this
* promises: similiar, but composable
* something you can pass around. can write code around it. even though you dont have the value just yet.
* callbacks lead to convuluted code. callback hell
* callback hell not executing asynch
* promises let you compose stuff. getting away from callback hell
* promises are more powerful than callbacks because they compose.

## THere's More to Promises

* Error handling becomes much simpler with promises
* Promises make asynchronous code easier to unit test
* Promise.all can be used to run multiple async operations in parallel and have a single callback to see all the results together
* and more...


