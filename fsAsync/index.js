const fs = require('fs');

// fs.writeFile("read.txt", "Today is a awesome day :)",(err)=>{
//     console.log('file is created');
//     console.log(err);
// });

// fs.appendFile('read.txt', "So enjoy this joyfull day. Best wishes for your journey",(err)=>{
//     console.log("File is appended");
//     console.log(err);
// });

fs.readFile('read.txt','utf-8', (err,data)=>{
    console.log(data);
    console.log(err);
});

