const fs = require('fs');

// fs.mkdir('Kishan',(err)=>{
//     console.log('Folder Created');
// });

// fs.writeFile('./Kishan/Bio.txt',"Hii my name is Kishan Dixit!!!", (err)=>{
//     console.log("file Created");
// })

// fs.appendFile('./Kishan/Bio.txt',"I am a React Developer", ()=>{});

// fs.readFile('./Kishan/Bio.txt','utf-8',(err,data)=>{console.log(data)});

// fs.rename('./Kishan/Bio.txt','./Kishan/MyBio.txt',(err)=>{console.log(err)});

// fs.unlink('./Kishan/MyBio.txt',(err)=>{
//     console.log("file deleted");
// });

fs.rmdir('./Kishan',(err)=>{console.log('File Deleted')});