// Viết hàm lấy extension của một file
// Example
// getExtensionFilename("abc.mp3") // "mp3"



function getExtensionFilename(filename) {
  // viết code ở đây.
  var ext = "";
  
  for(var i = 0 ; i < filename.length ; i++){
      if(filename[i] === '.'){
          ext = filename.slice(i+1,filename.length);
      }
  }
  return ext;
}
