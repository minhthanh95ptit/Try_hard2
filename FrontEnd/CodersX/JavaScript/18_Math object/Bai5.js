/** 
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không? 
*/

function rightTriangle(a, b, c) {
  // your code here
  if(a + b > c && a + c > b && b + c > a){
      if(Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2)){
          return true;
      }
  }
  return false;
}