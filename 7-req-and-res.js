
// local module
const {add}=require('./other')

// core module 
// const  http = require('http');

// const server = http.createServer(function(req, res){
//     //write code here
//   console.log("server is running");

//   });
//   server.listen(5000); 



// third party module
// const _=require('underscore')
// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// const res=_.pluck(stooges, 'name');

// console.log(res);


const  http = require('http');

const server=http.createServer((req,res)=>{
    if(req.url=== '/'){
        res.writeHead(200, {'Content-Type':'application/json'});
        res.write(JSON.stringify({course:"ACC"}));
        res.end();
    }
    if(req.url=== '/contact'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<p> This is contact page</p>');
        res.end();
    }
    if(req.url=== '/about'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<p> This is about us page</p>');
        res.end();
    }
})

const PORT=5000;
server.listen(PORT);

console.log(`server is running at ${PORT}`)