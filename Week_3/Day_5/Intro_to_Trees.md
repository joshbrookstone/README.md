# Intro to Trees: Org Charts

* every app uses some sort of data. Sometimes the data in our app is simple, ie strings,numbers,booleans. Other times we store our data in arrays or objects.

* Arrays are great when we have a list of data

* Obejcts are great when we want to be able to look up data usiong a key

* But another commonly used data structure is a **Tree**

* check out durian-tree.js

## Summary

* Data structures allow us to organize our data so that it can be managed more efficiently
* trees are data structures like arrays and objects that we can make ourselves.
* we can build a tree as long as their is a single parents and many children and nodes

* other places trees are great solutions:
  1. THe Browser Dom
  2. The FIle System

# Traversing Trees

## Breadth 
   
   * start with the root node
   * move onto the roots children
   * than move onto those nodes children

  access each node row by row. breadth first traversal will always visit the nodes closest to the root neode before moving to th enodes that are farther away

## Depth 

we go through each nodes children and than go back to the next child and go through thiers. breadth is like peeling an onion, depth is like stabbing through each part


## SUb trees

* every node in the tree, apart from the root node, is actually the root node of a smaller tree

## traversal

* for depth first traversal, use recurse algorithms

  * visit the root node fothe tree
  * get the first unvisited child sub-tree of the current node
  3. do the step 1 with the sub tree

  this is what that code looks like

  ```js
  class Node {

  constructor(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
  }

  depthFirstTraversal() {

    console.log(this); // 1

    for (const childNode of this.children) {
      childNode.depthFirstTraversal(); // 2
    }
  }
}
```
