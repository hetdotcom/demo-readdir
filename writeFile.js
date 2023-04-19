const { log } = require("console");
const fs = require("fs");

try {
  // fs.writeFileSync("./demo-file.txt", "written synchronously");


  fs.writeFile("./demo-file.txt", "written asynchronously", (error) => {
    if (error) {
      log(error);
    } else {
      log("written data successfully!!");
    }
  });
} catch (error) {
  log(error);
}
