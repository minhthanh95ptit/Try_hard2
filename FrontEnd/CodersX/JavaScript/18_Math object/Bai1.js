// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

function powerup(arr) {
  // your code here!
  return arr.map(function(num){
      if(num % 2 ===0 ){
          return Math.pow(num,2);
      }
      else{
          return num;
      }
    });
  
}