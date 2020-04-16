/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */

var ax = require('axios');

function downLinkPromise(link) {
    return new Promise(function (resolve, reject) {
        ax.get(link, function (err, data) {
            if (link == null) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
Promise.all([
    ax.get('https://jsonplaceholder.typicode.com/todos/1'),
    ax.get('https://jsonplaceholder.typicode.com/todos/2'),
    ax.get('https://jsonplaceholder.typicode.com/todos/3')
]).then(function (values) {
    console.log(values);
}).catch(function (err) {
    console.log(err);
})