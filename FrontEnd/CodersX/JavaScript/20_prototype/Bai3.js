/**
 * Chạy đoạn code phía dưới và giải thích kết quả
 * Link run code: https://repl.it/@maithedung/DroopyPaltryKeygenerator
 */

function answer() {
  return `
  // Ghi câu trả lời ở đây
  Ở đây, thuộc tính prototype là sing.Vậy nên sẽ cùng trả 1 kết quả \`Là lá la...\` thôi 
  `
}

function Person(name, age) {
  this.type = "person";
  this.name = name;
  this.age = age;
}

Person.prototype.sing = function() {
  console.log(`Là lá la...`);
};

const mrThinh = new Person("Pham Thinh", 33);
const mrDung = new Person("The Dung", 19);

mrThinh.sing === mrDung.sing
