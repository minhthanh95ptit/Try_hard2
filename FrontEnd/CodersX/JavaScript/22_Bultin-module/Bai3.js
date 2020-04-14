/**
 * https://github.com/sindresorhus/awesome-nodejs
 * Đây là một trang tổng hợp nhiều node module rất hay (không phải là tất cả)
 * Hãy thử học cách dùng 1 module mà bạn hiểu, tạo 1 ví dụ và giải thích về nó.
 * Sau này bạn sẽ cần phải google rất nhiều, học cách đọc tài liệu sẽ giúp cho công việc của bạn trong tương lai.
 */

var dateFormat = require('dateformat');
var now = new Date();
console.log(now);

/*
Module chứa module về xử lý thời gian, có thể cho ta biết được nhiều thứ như :
- thời điểm hiện tại 
- đưa ra các thông số với định dạng mong muốn
*/