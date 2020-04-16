/* Write a function that splits an array (first argument) into groups 
the length of size(second argument) and returns them as a two-dimensional array.
Example
 chunkArrayInGroups(["a", "b", "c", "d", "e"], 2) // [["a", "b"], ["c", "d"], ["e"]]
*/
function chunkArrayInGroups(arr, size){
  // write code here.
  var arr1 = [];
  var arr2 = [];
  
  for (var i = 0 ; i < arr.length ; i++){
      arr1.push(arr[i]);
      if(arr1.length == size || i == arr.length - 1){
          arr2.push(arr1);
          arr1 = [];
      }
  }
  return arr2;
}