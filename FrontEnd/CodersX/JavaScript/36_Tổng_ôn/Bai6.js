/*
  - Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
  - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
  - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
  Example: 
  [1, -10, 5, 18, -9, 5] => 27
*/
function findMaxDiff(arr) {
  // viết code ở đây.
    var max = 0;
    
    for(var i = 0 ; i < arr.length ; i++){
        if(Math.abs(arr[i] - arr[i - 1]) > max){
            max = Math.abs(arr[i] - arr[i - 1]);
        }
    }
    return max;
}