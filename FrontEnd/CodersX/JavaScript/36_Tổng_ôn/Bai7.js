//Viết 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================

function equal_pt(str){ 
 // viết code ở đây.
 var demP = 0;
 var demT = 0;
 
 for(var i = 0 ; i < str.length ; i++){
     if(str[i] === 'p'){
         demP++;
     }
     if(str[i] === 't'){
         demT++;
     }
 }
 if(demP == demT){
     return true;
 }
 return false;
}