# Objects and Iteration

**Looping over Objects requires using the for...in statement**

Say we create an object: 

```Javascript
var planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14
};
```

* We can traverse all the properties of this object using a for-loop, like so:

```Javascript
for (var planet in planetMoons) {
  var numberOfMoons = planetMoons[planet];
  console.log("Planet: " + planet + ", # of Moons: "+ numberOfMoons);
}
```
## Limitations of ```for...in```

* We should be careful with this looping technique, as it can produce some unexpected results. For reasons which we'll cover in later activities, objects can sometimes have properties that they inherit from their prototype chain as well as method names. An additional filtering step is sometimes necessary:


```Javascript 
for (var planet in planetMoons) {
  // additional filter for object properties:
  if (planetMoons.hasOwnProperty(planet)) {
    //  ...
  }
}
```

## Conclusion

* Because objects are not iterable like arrays, we have to use another type of loop. We learned about how to iterate over object properties and values using a for..in loop. We saw how to use the hasOwnProperty method to ensure we don't get unexpected results.