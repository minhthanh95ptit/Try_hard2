/**
 * Điểm khác nhau giữa 2 vòng lặp for...of và for...in, viết code ví dụ
 
 for of cho ta các value
 for in cho ta các key
 */
//Ví dụ for of
var arr = [1,2,3];
console.log("Value:");
for(var i of arr){
  console.log(i);
}
//Ví dụ for in
console.log("Key");
for(var i in arr){
  console.log(i);
}