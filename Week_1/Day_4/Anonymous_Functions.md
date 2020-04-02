# Anonymous Functions

* Anonymous functions are often declared while being passed in as callbacks to other functions. Why? Because the receiving function that takes in the anonymous function will give that parameter a name anyway.

**EG**

```JS 
findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Waldo is located at:", index);
});
```

