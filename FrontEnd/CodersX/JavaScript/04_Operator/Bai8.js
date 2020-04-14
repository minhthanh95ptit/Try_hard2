var a = [1, 2];
var b = [1, 2];
console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau. Viết câu trả lời ở dưới đây.

// array cũng là 1 object, cho nên khi khai báo 1 mảng nó sẽ được lưu tại các địa chỉ khác nhau. Thế nên dù trông có vẻ giống nhau nhưng nó thực sự là khác nhau(về địa chỉ hay bản chất)
