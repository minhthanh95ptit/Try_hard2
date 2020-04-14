var a = 10;

var x = --a + a++;
console.log(x);

// Nhấn Run để chạy code.
// Giải thích vì sao kết quả là 18.
// --a tra ve gia tri sau khi thay doi
// a++ tra ve gia tri truoc khi thay doi
// var x = --a + a++;
// var x = 9 + a++ // a = 9
//var x = 9 + 9 // a = 10
// var x = 18 