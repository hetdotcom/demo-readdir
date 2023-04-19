const { log } = require("console");
const fs = require("fs");

try {
    // fs.rename("./folder2/demo-file.txt", "./folder1/demo-file.txt", (error) => {
    //   log(error);
    // });

    fs.renameSync("./folder1/demo-file.txt", "./folder2/demo-file.txt");
} catch (error) {
    log(error);
}