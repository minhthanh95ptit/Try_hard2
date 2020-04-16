// viết hàm tạo mới một 1 string từ n ký tự từ vị trí đầu và cuối của chuỗi cũ
// newString("1wyg5yhd45", 2) // "1w45"
function newString(str, n){
// viết code ở đây.
    var dau = str.slice(0,n);
    var cuoi = str.slice(str.length - n, str.length);
    
    return dau + cuoi;
}