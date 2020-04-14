/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/

//Viết hàm đếm số lần xuất hiện của phần tử trong mảng

function countOccurrences(arr) {
  // viết code ở đây.
  return arr.reduce(function(listCount, word) {
    if (word in listCount) {
      listCount[word]++;
    } else {
      listCount[word] = 1;
    }
    return listCount;
  }, {});
}