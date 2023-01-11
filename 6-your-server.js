const other=require('./other')

// const result=other.sub(5,4)
// console.log(result);

// const sum=other.sum(5,4)
// console.log(sum);


// core module 
const  http = require('http');

const server=http.createServer((req,res)=>{
    res.end('Hello Node.js ')
    console.log(req.url);
})

const PORT=5000;
server.listen(PORT)

console.log(`server is running at ${PORT}`);