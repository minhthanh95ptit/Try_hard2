/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ 
 * cách ngày được truyền vào n ngày
 */

var date = new Date("06/10/2019")

function subtractDays(date, n) {
  // Write code here...
  var milisecondDate = date.getTime();
  var milisecondN = n * 24 * 60 * 60 * 1000;
  
  return milisecondDate - milisecondN;
}