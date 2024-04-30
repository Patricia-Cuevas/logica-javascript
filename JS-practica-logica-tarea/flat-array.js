/**
 * Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...
 * let multiDimension = [1, [2, 3, [4, 5, [6]]]];
 * 
var multiArray = [1, [2, 3, [4, 5, [6]]]];
function multiString (multiArray) {
        return multiArray.reduce(
          (acc, val) =>
            Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
          [],
          );
}
flattenDeep(multiArray);
console.log(multiArray)
 */

var multiArray = [1, [2, 3, [4, 5, [6]]]];
function flatten(multiArray) {
    var flattend = [];
    !(function flat(multiArray) {
      multiArray.forEach(function (el) {
        if (Array.isArray(el)) flat(el);
        else flattend.push(el);
      });
    })(multiArray);
    return flattend;
}
console.log(flatten(multiArray))