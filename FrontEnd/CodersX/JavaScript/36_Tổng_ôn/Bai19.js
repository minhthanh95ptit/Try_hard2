/*
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự 
của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False
*/

function rearrangeChar(str1, str2) {
// Viết code tại đây!
    str1 = str1.split("");
    str1 = str1.sort();
    str1 = str1.join("");
    
    str2 = str2.split("");
    str2 = str2.sort();
    str2 = str2.join("");
    if(str1 === str2){
        return true;
    }
    return false;
}
