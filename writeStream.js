const fs = require('fs');

let writeStream = fs.createWriteStream('demo.txt');

writeStream.write("added text is here using writeStream", (error) => {
    if (error) return error;
    console.log(" data written successfully!!")
});