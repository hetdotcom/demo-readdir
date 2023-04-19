const fs = require("fs");

try {
  fs.rename('./task-8.js','./new-example.js',function(error){
      console.log(error)
  })
} catch (error) {
    console.log(error)
}