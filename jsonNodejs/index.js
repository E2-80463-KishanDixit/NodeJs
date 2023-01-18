const fs = require('fs');

const bioData = {
    name : "Kishan",
    age : 22,
    channel : "Kishan Dixit"
};

const jsonData = JSON.stringify(bioData);

fs.writeFile('jsonDataa',jsonData,(err)=>{
    console.log(err);
});

fs.readFile("jsonDataa",'utf-8',(err,data)=>{
    console.log(data);
});

const objData = JSON.parse(jsonData);
console.log(objData);


