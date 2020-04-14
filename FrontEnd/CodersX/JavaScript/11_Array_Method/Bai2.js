/**
 * Đọc và dịch các method đã học từ MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * Lấy ví dụ cho các trường hợp input khác nhau của mỗi method
 * Mục đích của bài tập này: Giúp bạn học cách tự tra cứu, đọc tài liệu.
 * Đây là một kĩ năng không thể thiếu của 1 developer.
 */


/*
The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
-Phương thức concat() được dùng để gộp 2 hay nhiều mảng lại. Đây là phương thức không thay đổi mảng đã có nhưng sẽ tạo ra mảng mới.
Ví dụ:
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2)
ouput: Array ["a", "b", "c", "d", "e", "f"]
const array3 = array1.concat(array1).concat(array1).concat(array1).concat(array1).concat(array1);

ouput: Array ["a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c"]


- Phương thức push() thêm 1 hoặc nhiều phần tử vào cuối của mảng và trả về độ dài mới của mảng 
Ví dụ:
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

Phương thức pop() xóa đi phần tử cuối cùng của mảng và trả về giá trị đó. Đây là phương thức thay đổi length của mảng
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
Ví dụ:
console.log(plants.pop());
// expected output: "tomato"
The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
- Phương thức shift() xóa đi phần tử đầu tiên trong mảng và trả về giá trị đó. . Đây là phương thức thay đổi độ dài của mảng
const array1 = [1, 2, 3];

const firstElement = array1.shift(); -> 1
console.log(array1);
// expected output: Array [2, 3]


- Phương thức unshift() thêm 1 hoặc nhiều phần tử vào vị trí đầu tiên của mảng và trả về độ dài mới của mảng 
Ví dụ:
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]

The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.
- Phương thức slice() trả về 1 mảng mới [start,end ) start là vị trí khỏi đầu và end - 1 là vị trí kết thúc
Ví dụ:
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

- Phương thức splice() là phương thức xóa bỏ hoặc thay thế , thêm mới phần tử tại vị trí khai báo 
0: Thêm
1: Thay thế
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
