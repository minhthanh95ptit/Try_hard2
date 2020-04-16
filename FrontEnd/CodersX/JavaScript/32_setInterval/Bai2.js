/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, trả về promise, promise này resolve sau khi đã đếm xong
 */
function countDown(x) {
  return new Promise(function(res, error){
    if(res !== null){
        var id = setInterval(function(){
          console.log(x);
          --x;
          if(x === 0){
            clearInterval(id);
            res();   
          }
        }, 1000); 
    }
    else{
      error();
    }
  });
}

function sayHappyNewYear() {
  console.log('Happy new year');
}

countDown(5).then(sayHappyNewYear);