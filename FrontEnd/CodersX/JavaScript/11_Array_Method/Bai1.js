/*
	Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/

//C1
function removeEnd(arr, n) {
  // your code here!
  arr = arr.slice(0,arr.length - n);
  return arr;
}
//C2
function removeEnd(arr, n){
    for(var i = 0 ; i < n ; i++){
        arr.pop();
    }
    return arr;
}