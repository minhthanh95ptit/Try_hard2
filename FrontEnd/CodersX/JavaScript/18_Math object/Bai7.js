/** 
 * Viết hàm trigonim để tính 3 giá trị sin cos tan của một số nhập vào
 * Example: trigonim(45) = [ '0.851', '0.525', '1.620' ]
 * Gợi ý: Sử dụng toFixed() method
*/

function trigonim(number) {
  // your code here
  var newArr = [];
  newArr[0] = Math.sin(number).toFixed(3);
  newArr[1] = Math.cos(number).toFixed(3);
  newArr[2] = Math.tan(number).toFixed(3);
  return newArr;
}
