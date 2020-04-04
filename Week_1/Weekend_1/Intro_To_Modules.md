# Intro to Modules

## Every File in Node is a Module

* Every file run by node has access to a module object

## Requiring a Module

* basic syntax tom import a module using our local filesystem using require:

```JS const sayHelloTo = require('./myModule');```

  * This assumed we have a file called myModule.js in the same directory as the file that is requiring the module.

  * The imported object gets assigned to the variable, sayHelloTo in the above example.

* We need to also make the sure the module is exported on the other side of the permission...so

```JS 

// myModule.js

const sayHelloTo = function(person) {
  console.log(`Hello, ${person}`);
}
// add this line to the end of the file.
module.exports = sayHelloTo;
```

* Export the module!

## Conclusion

We learned that in Node,

* modules are its way of organizing code into individual files
* every js file in node is implicitly a module
  * we can console.log(module) and see its details
module.exports tells node what to export from a file
it defaults to {}
  * we can use require with relative paths (like ./myModule) it doesn't need the .js extension, as that is implied
