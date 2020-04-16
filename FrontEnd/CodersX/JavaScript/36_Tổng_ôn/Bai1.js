// Viết hàm đảo ngược chuỗi
// Example
// reverse('abc') // 'cba'
function reverse(str) {
  // viết code ở đây.
  var splitString = str.split("");
  var reverseString = splitString.reverse();
  var joinString = reverseString.join("");
  return joinString;
}