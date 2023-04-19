const { log } = require("console");
const fs = require("fs");
const prompt = require("prompt-sync")();

let basedir = "C:/Users/91720/Desktop/B-Square/Day-7(fs)";

try {
  let path = prompt("Enter folder name: ");

  getFilesByFolderName(path);
} catch (error) {
  console.log(error);
}

function getFilesByFolderName(path) {
  let basepath = basedir + "/" + path + "/";
  console.log(basepath);
  fs.readdir(basepath, (error, files) => {
    if(error) {
      console.log(error);
    } 
    else{
      files.forEach((file) => {
        fs.unlinkSync(basepath+file);
        log("all files are deleted successfully!!");
      });
    }
  });
}
