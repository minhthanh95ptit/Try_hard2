//Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
//Lưu ý cho chuỗi 'abcd' :
// 		element    'a'|'b'|'c'|'d'
//		index 	    0	|	1	|	2	|	3
//  n = 1 ------------------- 'acd'
//  n = 2 ------------------- 'abd'

function omitCharAt(str, n) {
  // viết code ở đây.	
  var newStr = "";
  for(var i = 0 ; i < str.length ; i++){
      if(i != n){
          newStr += str[i];
      }
      else{
          continue;
      }
  }
  return newStr;
}