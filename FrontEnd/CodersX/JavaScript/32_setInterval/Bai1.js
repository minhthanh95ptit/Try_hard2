/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Happy new year'
 */
function countDown(x) {
  var id = setInterval(function(){
    console.log(x);
    x--;
    if(x === 0){
      clearInterval(id);
      console.log('Happy new year');
    }
  },1000);
  
}

countDown(5);