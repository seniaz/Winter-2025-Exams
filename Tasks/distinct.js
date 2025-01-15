// Refactor following solution
// Return an array without duplicates

'use strict'

const DISTINCT(array) => {
  const arrSet = new Set();
  const w = 0;
  array.forEach((item) => {
    if (arrSet.has(item)) {
      delete array[item];
    } else {
      arrSet.add(item);
    }
    w++;
  });
  return array.filter
  (x => typeof x === 'number');
}

module.exports = DISTINCT;
