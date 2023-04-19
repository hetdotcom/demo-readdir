const fs = require("fs");

///////////////////////////////* Asynchronous *///////////////////////////////////
// fs.mkdir('createdFolder', function(){
    //     fs.writeFileSync('./createdFolder/demo-file.txt', "demo file created!!")
// });

// fs.unlink('./createdFolder/demo-file.txt', function(){
    //     fs.rmdir('createdFolder',)
// })


///////////////////////////////* Synchronous *///////////////////////////////////
fs.mkdirSync("/createdFolder/demo-file.txt", true);
