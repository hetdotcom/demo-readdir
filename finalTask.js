const { log } = require("console");
const fs = require("fs");

try {
  const filename = "./task13.txt";
  log("reading file ", filename);
  log("file content is this");
  log(readFile(filename));
  log("write to file ", filename);

  fs.writeFileSync(filename, "written by writefileSync methode");
  log("write operation is completed");
  log(readFile(filename));

  log("appending content to the file");
  fs.appendFileSync(filename, " 'appended data' ");
  log("append operation is completed");
  log(readFile(filename));

  fs.chmodSync(filename, 0o444);
  fs.writeFileSync(filename, "written even after no permission!!");

  log("error while write to file");

} catch (error) {
  log(error.message);
}

function readFile(filename){
   let fileContent = fs.readFileSync(filename, "utf-8");
   return fileContent;
}


// - reading file <file name> 1
// - file content is this 2
// - <print file content here> 3
// - write to file <file name> 4
// - write operation is completed 5
// - file content after write 6
// - <print file content here> 7
// - appending content to the file 8
// - append operation is completed 9
// - < print file content here> 10
// - change file permission to read only 11
// - trying to write content in file 12
// - error while write to file. 13
