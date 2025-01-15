// Refactor following solution
// Return an array without duplicates

'use strict'

const DISTINCT = (array) => {

  const res = [];
  array.forEach((item) => {
    if (!res.includes(item)) {
      res.push(item);
    }
  });

  return res;

}

module.exports = DISTINCT;
