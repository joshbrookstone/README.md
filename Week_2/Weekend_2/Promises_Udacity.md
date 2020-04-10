# Promises Udacity course

* promises can have 4 states:
  1. fulfiflled - it worked
  2. rejrected - it didnt work
  3. pending - still waiting
  4. settled - something happened!

promises can only settle once

promises are a try catch wrapper that will finish at an undetermined time

* error handling can come in many ways
  * a .catch(rejectFunc)
  or even
  * a .then(undefined, rejectFunc)
  these two are the same. a .catch is in a way a .then with a .than implied
  but using a .then means we cant call them both.
  * resolve does not always mean success