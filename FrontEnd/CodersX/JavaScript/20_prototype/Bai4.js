/**
 * Chạy đoạn code phía dưới và giải thích kết quả
 * Link run code: https://repl.it/@maithedung/FarflungIdioticExabyte
 */

function answer() {
  return `
  // Ghi câu trả lời ở đây
  Khi ta new 1 đối tượng mới là mrThinh và mrDung , mặc dù giá trị của thuộc tính sing giống nhau,
  nhưng do new đối tượng ra thì địa chỉ khởi tạo sẽ khác nhau cho nên không bằng nhau được mặc dù kết
  quả trông có vẻ giống nhau. 
  Muốn bằng nhau thì thuộc tính sing phải được chia sẻ với nhau tức prototype
  Object thì phải căn cứ vào địa chỉ chứ k chỉ giá trị đơn thuần
  `
}

function Person(name, age) {
  this.type = "person";
  this.name = name;
  this.age = age;

  this.sing = function() {
    console.log(`Là lá la...`);
  };

}

const mrThinh = new Person("Pham Thinh", 33);
const mrDung = new Person("The Dung", 19);

mrThinh.sing === mrDung.sing
