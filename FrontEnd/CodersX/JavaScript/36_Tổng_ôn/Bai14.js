/* Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi 
thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmmp"
// Tham số:
// - String: chuỗi nhập vào ban đầu.
*/
function toNextChar(str) {
  // viết code ở đây.	
  var splitStr = str.split("");
  
  for(var i = 0 ; i < splitStr.length ; i++){
      splitStr[i] = String.fromCharCode(str.charCodeAt(i)+1);
  }
  var resultStr = splitStr.join("");
  return resultStr;
}