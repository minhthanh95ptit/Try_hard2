// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
//Viết hàm trả về mảng chứa phần tử lớn hơn hoặc bằng 5


function fiveAndGreaterOnly(arr) {
  // your code here
  return arr.filter(function(num){
     return num >= 5; 
  });
}
