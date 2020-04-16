/* Viết hàm pyString để tạo chuỗi mới thêm "Py" trước chuỗi nhập vào. 
Nếu chuỗi đã cho đã bắt đầu bằng "Py" thì hãy trả về chuỗi gốc (không cần thêm).
Tham số:
- String: chuỗi nhập vào lúc đầu.
*/

function pyString(String) {
  // viết code ở đây.
  var beginStr = String.slice(0,2);
  if(beginStr === 'Py'){
      return String;
  }
  return "Py" + String;
}
