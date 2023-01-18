const fs = require('fs');

const http = require("http");

const server = http.createServer();

server.on('request',(req,res)=>{

    // fs.readFile('input.txt',(err,data)=>{
    //     if(err) return console.log(err);
    //     res.end(data.toString());
    // });


//**********  stream method *****************

// const rStream = fs.createReadStream('input.txt');

// rStream.on('data',(chunkData)=>{
//     res.write(chunkData);
// });

// rStream.on('end',()=>{
//     res.end();
// });

// rStream.on('error',(err)=>{
//     console.log(err);
//     res.end("Finel not exist");
// });

//******** Optional Method *****************

const rStream = fs.createReadStream('input.txt');

    rStream.pipe(res);
});

server.listen(8000,'127.0.0.1');