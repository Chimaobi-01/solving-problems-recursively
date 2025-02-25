/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here

function flatten(arr) {

  let item = arr[0]

  if (arr.length === 0)
    return []

  if (Array.isArray(item)) {
    return [...flatten(item), ...flatten(arr.slice(1))]
  }

  return [item, ...flatten(arr.slice(1))]
}





/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
