// Refactor following solution
// Return an array without duplicates

'use strict'

const DISTINCT(array) => {

  const arrSet = new Set();
  array.forEach((item) => {
    if (arrSet.has(item)) {
      delete array[item];
    } else {
      arrSet.add(item);
    }
  });

  return array;

}

module.exports = DISTINCT;
