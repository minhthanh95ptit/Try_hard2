//Viết hàm trả về mảng chỉ chứa số chẵn
// Given an array of numbers, return a new array that only includes the even numbers.

function evensOnly(arr) {
  // your code here!
  return arr.filter(function(num){
      return num % 2 == 0;
  })
}
