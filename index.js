// class-8: explore url

const  http = require('http');
const  url = require('url');

const server=http.createServer((req,res)=>{
    const address_url="http://localhost:5000/contact?name=razu&country=banglsdesh";
    
    const parsed_url=url.parse(address_url,true)
    // console.log(parsed_url);
    const queryObject=parsed_url.query 
    console.log(queryObject);
})

const PORT=5000;
server.listen(PORT)

console.log(`server is running at ${PORT}`);


// 3 minuit done