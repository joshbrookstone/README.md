# Objects

## Objects

* Contain key-value pairs; each key maps to a value
* Contain keys which are always strings
* _Have unique keys_
  * the same key cannot appear twice in an object
* Their keys point to values which can be of any type

## Object Literals

* Objects have a literal syntax using ```{}```. This is an empty _object literal_ assigned to a variable:
  * ``` const emptyObject = {};```
* an object literal with a single key-value pair:
  * ```const tinyObject = { "size": "Tiny" };```
  * ##### our key value doesn't need to be enclosed in double quotes. it is already considered a string. so we can write it like
    * ```const tinyObject = { size: "Tiny" };```

## Objects are like 2-Column Tables

![Photo](https://d.pr/i/n8ssKl+)

## Object values

* Object values can be of any type.
```
const myObject = {
  a: 6,     // Number
  b: "abc", // String
  c: true,  // Boolean
  d: null,  // Null
};
```

## Object key review

1. Keys are always strings

2. Each key is unique (can only occur once in the object)

3. Each key is associated with exactly one value. (Note that technically, an array or another object would count as "one value" here, even though they contain other values.)

## Object.Keys

* To inspect an object's keys, there is a method Object.keys(...) that returns an array of keys.

