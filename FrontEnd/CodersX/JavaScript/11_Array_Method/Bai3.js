/** 
 * Viết function trả về n phần tử đầu tiên có trong mảng.
*/


// console.log(first([1, 2, 3], 2)); // expect [1, 2]\
//C1
function first(arr, n){
    var newArr = [];
    for(var i = 0 ; i < n ; i++){
        newArr.push(arr.shift());
    }
    return newArr;
}

//C2
function first(arr, n) {
  // your code here...
  
  arr = arr.slice(0,n);
  return arr;
}
