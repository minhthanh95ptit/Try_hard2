/*Trả về mảng chứa tất cả key có trong object*/
/**
 * Sử dụng vòng lặp for...in để lấy về tất cả các key của object sau, 
 * in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

var apartment = {
  bedroom: {
    area: 20,
    bed: {
      type: 'twin-bed',
      price: 100
    }
  }
};
var listArr = [];

function getObjectKey(apartment) {
  // Write code here...

  for (var index in apartment) { 
    if (listArr.includes(index)) // check xem listArr chua index chua
      continue; // Bo qua neu da chu
    listArr.push(index); // Them vao neu chua chua
  }
  if (index != null) { // check xem index == null tuc la object
    getObjectKey(apartment[index]);
  }
  return listArr;
}
getObjectKey(apartment);