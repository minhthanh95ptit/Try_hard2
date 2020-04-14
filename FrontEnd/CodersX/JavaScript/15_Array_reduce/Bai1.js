// Given an array of arrays, flatten them into a single array
//Viết hàm trải đều các phần tử có trong mảng

/**
 * Example: 
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 * 
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */

function flatten(arr) {
  // viết code ở đây.
  return arr.reduce(function(totalStr, currentValue){
      return totalStr.concat(currentValue);
  }, []);
}

