/**
 * Sử dụng vòng lặp while để tìm bội số chung lớn nhất của 3 và 5 trong khoảng từ 0 đến 1000
 */
var i = 0;
while (i <= 1000){
  if (i % 3 === 0 && i % 5 === 0){
    bcln = i;
  }
  i++;
}
console.log(bcln);