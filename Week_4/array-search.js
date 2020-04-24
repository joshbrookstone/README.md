/* eslint-disable no-constant-condition */
// this is a regular seach that takes 3n + 4 operations to complete. relative to the size of the array...therefore it could be a big search

const search = function(array,item) {
  let index = null;
 
  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) {
      index = i;
      break;
    }
  }
  return index;
};

// Binary Search

const binarySearch = function(array,item) {
  let min = 0;
  let max = array.length - 1;

  while (true) {
    const middleIndex = Math.floor((min + max) / 2.0);
    const currentItem = array[middleIndex];

    if (currentItem === item) {
      // Found it
      return middleIndex;
    } else if (currentItem < item) {
      // Look at the right side
      min = middleIndex + 1;
    } else {
      // Look at the left side
      max = middleIndex - 1;
    }

    if (min > max) {
      return null;
    }
  }
};

