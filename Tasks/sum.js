
'use strict'

const sum = (array) => {
  let res = 0;
  for (const element of array) {
    if (typeof element === 'number') {
      res += element;
      }
    }
  return res;
};

module.exports = sum;