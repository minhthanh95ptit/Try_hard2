/* Write a function return maximum possible sum of some of its k consecutive numbers 
(numbers that follow each other in order.) of a given array of positive integers
*/
//Viết hàm tính tổng lớn nhất của k phần tử trong mảng


function maxOfSumChain(arr,k){
  // write code here.
  arr = arr.sort();
  arr = arr.reverse();
  var sum = 0;
  for (var i = 0 ; i < k ; i++){
      sum += arr[i];
  }
  return sum;
}