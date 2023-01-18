const http = require('http');
const fs = require('fs');

// const { runInNewContext } = require('vm');

const server = http.createServer((req,res)=>{
    // console.log(req.url);

    if(req.url== '/'){
        res.end('Hello from the Home Page');
    }else if(req.url=='/about'){
        res.end('Hello from the About Page');
    }else if(req.url == '/userapi'){
        fs.readFile('jsondata.json','utf-8',(err,data)=>{
            console.log(data);
        })
        res.end("Hello from the user API")
    }else{
        res.writeHead(404,{"COntent-type":"text/html"});
        res.end('<h1>Error 404, Request Not Found</h1>');
    }
});

server.listen(8000, "127.0.0.1",()=>{
    console.log("listening at port 8000");
});