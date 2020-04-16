/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/


function findMostFrequent(arr) {
// Viết code tại đây!
 //   var b = [0,0,0,0,0,0,0,0,0,0,0,0];
     var b = new Array(arr.length).fill(0)
    for(var i = 0 ; i < arr.length ; i++){
        b[arr[i]]++;
    }
    var result = [];
    var max = 0;
    for(var i = 0 ; i < b.length ; i++){
        if(b[i] > max){
            max = b[i];
        }
    }
    
    for(var i = 0 ; i < b.length ; i++){
        if(b[i] == max){
            result.push(i);
        }
    }
  
   return result;
}
