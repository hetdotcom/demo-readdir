const { log } = require("console");
const fs = require("fs");

try {
  ///////////////////////////////* Asynchronous */////////////////////////////////
  fs.mkdir("createdFolder", function () {
    fs.writeFileSync(
      "./createdFolder/demo-file.txt",
      "demo file created again!!"
    );
    log("demo file created successfully!!");
  }); // it will overwrite the folder if we provide same foder name
  fs.unlink("./createdFolder/demo-file.txt", function () {
    fs.rmdir("createdFolder", function () {
      log("demo file deleted successfully!!");
    });
  }); //why it is not giving any error even we put wron folder name?

//   ////////////////////////////* Synchronous *//////////////////////////////////
  // fs.mkdirSync("./createdFolder"); // it gives error if the file is already exist
  // fs.rmdirSync("./createdFolder"); // it gives error if we provide wrong folder name
  // fs.mkdirSync("./createdFolder/demo-file.txt"); //why here is error? can we not create a direct file inside a folder?
} catch (error) {
    log(error);
}
