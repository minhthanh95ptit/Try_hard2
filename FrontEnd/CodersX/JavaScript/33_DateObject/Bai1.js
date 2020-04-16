/**
 * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD 
 * trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật), 
 * ngược lại trả về false
 */

function isWeekend(dateString) {
  // Write code here...
  var day = new Date(dateString);
  var dayOfWeek = day.getDay();
  if(dayOfWeek == 6 || dayOfWeek == 0){
      return true;
  }
  return false;
}