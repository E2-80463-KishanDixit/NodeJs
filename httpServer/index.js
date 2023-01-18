const http = require('http');
const fs = require('fs');

// const { runInNewContext } = require('vm');

const server = http.createServer((req,res)=>{

    const data = fs.readFileSync('../userAPI/jsondata.json','utf-8');
    const objData = JSON.parse(data);
    // console.log(req.url);

    if(req.url== '/'){
        res.end('Hello from the Home Page');
    }else if(req.url=='/about'){
        res.end('Hello from the About Page');
    }else if(req.url == '/userapi'){
        res.writeHead(200,{'content-type': 'application/json'})
        res.end(objData[0].topic);
    }else{
        res.writeHead(404,{"COntent-type":"text/html"});
        res.end('<h1>Error 404, Request Not Found</h1>');
    }
});

server.listen(3030, "127.0.0.1",()=>{
    console.log("listening at port 3030");
});