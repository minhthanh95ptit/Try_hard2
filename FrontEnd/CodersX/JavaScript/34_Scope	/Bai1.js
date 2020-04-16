var a = 1;

var b = {
  a: 2,
  foo: function() {
    console.log(this.a);
  }
};

b.foo();

var fooCopy = b.foo;
fooCopy();

// Chạy code và giải thích vì sao kết quả dòng 10 khác dòng 13
/* Giải thích

Tại object b , thì có foo, trong foo có this.a thì a này sẽ là a của object từ a = 2 vậy nên kq là 2
Còn khi fooCopy copy method foo của object b , do không có a:2 nên this.a này chỉ tới a trên dòng 1 (global)
*/
