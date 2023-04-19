const fs = require("fs");
const { log } = require("console");
const prompt = require("prompt-sync")();
let basedir = "C:/Users/91720/Desktop/B-Square";

try {
  let folder = prompt("Enter the folder name: ");
  let extension = prompt("Enter the extention: ");

  getFilesByextension(folder, extension);
} catch (error) {
  log(error);
}

/////////////////////////////////* function */////////////////////////////////////
function getFilesByextension(folder, extension) {
  let basepath = basedir + "/" + folder;
  //   console.log(basepath);
  fs.readdir(basepath, (error, files) => {
    if (error) {
      console.log(error);
    } else {
      let resultantFiles = files.filter((files) => files.endsWith(extension));
      log(resultantFiles);
      console.log(basepath);
    }
  });
}
