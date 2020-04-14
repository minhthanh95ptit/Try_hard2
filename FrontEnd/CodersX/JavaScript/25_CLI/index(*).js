/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */

var readLineSync = require('readline-sync');
var fs = require('fs');
function menu() {
    console.log('1. Show list of contacts');
    console.log('2. Add a new contacts');
    console.log('3. Save and Exit');

    var option = readLineSync.question('Enter your choice: ');
    switch (option) {
    case '1':
      show();
      menu();
      break;
    case '2':
      add();
      menu();
      break;
    case '3':
      saveAndExit();
      menu();
      break;
    default:
      console.log('Enter again: ');
      menu();
  }
}

var people = [{name: "Thao", phoneNumber: "012345678"}];


function show() {
  for(var person of people) {
    console.log(person.name, person.phoneNumber);
  }
}

function add() {
var name = readLineSync.question('Name: ');
  var phoneNumber = readLineSync.question('Phone number: ');

  var contact = {
    name: name,
    phoneNumber: parseInt(phoneNumber)
  }
  people.push(contact);
}
function saveAndExit() {
  var content = JSON.stringify(people);
  content = fs.writeFileSync('./contact.json', content, {encoding: 'utf8'});
}
function main() {
  menu();

}

main(); 
