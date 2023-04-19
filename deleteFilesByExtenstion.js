const { log } = require("console");
const fs = require("fs");
const prompt = require("prompt-sync")();

let basedir = "C:/Users/91720/Desktop/B-Square/Day-7(fs)";

try {
  let path = prompt("Enter folder name: ");
  let extention = prompt("Enter file extention: ");

  getFiles(path, extention);
} catch (error) {
  console.log(error);
}

function getFiles(path, extension) {
  let basepath = basedir + "/" + path + '/';
  console.log(basepath);
  fs.readdir(basepath, (error, files) => {
    if (error) {
      console.log(error);
    } else {
      let resultantFiles = files.filter((files) => files.endsWith(extension));
      console.log(resultantFiles);
      
      resultantFiles.forEach((file) => {
        console.log(file);
        fs.unlink(basepath+file, (error) => {
            log(error);
        });
      });
    }
  });
}
