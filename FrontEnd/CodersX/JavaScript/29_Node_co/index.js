/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */
var urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
  'https://jsonplaceholder.typicode.com/todos/5'
  
];

var axios = require('axios');
var co = require('co');

// Cách 1: Sử dụng vòng lặp for



// for(var i = 0 ; i < urls.length ; i++){
//   axios.get(urls[i])
//     .then(function(reponse){
//         console.log(reponse);
//     })
//     .catch(function(error){
//         console.log(error);
//     })
// }

// Cách 2: Sử dụng array.map
// Gợi ý: Có thể yield 1 array các Promise

function downLinkPromise(link) {
    return new Promise(function (resolve, reject) {
        axios.get(link, function (err, data) {
            if (link == null) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};


var downloadUrls = co.wrap(function*(urls){
	var values = yield urls.map(function(url){
		return downLinkPromise(url);
	});
	return values;
});


downloadUrls(urls);