var a = 1;

function foo() {
  var a = 2;
  return a;
}

function bar() {
  a = 2;
  return a;
}

foo();
console.log(a); // Kết quả? 
// Khi foo() chạy, biến a trong foo chỉ là local nên k ảnh hưởng tới a ngoài 
bar();
console.log(a); // Kết quả?
// Khi bar() chạy, biến a trong bar là biến global nên a bị thay đổi 
// Giải thích vì sao kết quả dòng 14 lại khác 16 bằng tiếng Việt hoặc tiếng Anh
