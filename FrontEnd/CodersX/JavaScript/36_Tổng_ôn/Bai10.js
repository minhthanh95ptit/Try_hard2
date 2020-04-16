// Viết hàm nhận vào 2 số a, b
// Trả về số gần 100 nhất
// nearestTo100(89, 180) // 89
function nearestTo100(a, b){
  // viết code ở đây.
  if(Math.abs(b - 100) < Math.abs(a - 100)){
      return b;
  }
  return a;
}