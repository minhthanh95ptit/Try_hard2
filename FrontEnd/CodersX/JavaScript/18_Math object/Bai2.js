/** 
 * Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
 * Làm tròn điểm trung bình
 * Ví dụ: [8, 8, 6.75]  => 8
 * Gợi ý: Dùng Math.round 
*/

function average(arr) {
  // your code here!
    var sum = 0 ;
    for ( var i = 0 ; i < arr.length ; i++){
        sum += arr[i];
    }
    return Math.round(sum / arr.length);
}
