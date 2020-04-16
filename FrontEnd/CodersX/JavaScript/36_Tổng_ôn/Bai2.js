// Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
// Example
// capitalize("abc") // "Abc"
function capitalize(str) {
	// viết code ở đây
    var newStr = "";
    
    for (var i = 0 ; i < str.length ; i++){
        if(i === 0 || str[i-1] == ' '){
            newStr += str[i].toUpperCase();
        }
        else{
            newStr += str[i];
        }
    }
    return newStr;
    
}

