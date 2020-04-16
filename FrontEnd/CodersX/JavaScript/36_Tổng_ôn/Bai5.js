// viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 
function startWith(str){
  // viết code ở đây.
  var beginStr = str.slice(0,4);
  if(beginStr === 'Java'){
      return true;
  }
  return false;
}