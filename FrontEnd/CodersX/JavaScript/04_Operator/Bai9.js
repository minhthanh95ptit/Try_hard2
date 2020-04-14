var a = {
  foo: 'bar'
};

var b = {
  foo: 'bar'
};

console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 object có vẻ giống nhau. Viết câu trả lời ở dưới đây.
//Khi khởi tạo object a và b thì chúng sẽ được lưu vào 2 ô địa chỉ khác nhau, mặc dù trông có vẻ giống nhau nhưng về bản chất nó thực sự là khác nhau 