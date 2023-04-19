const { log } = require("console");
const fs = require("fs");
try {
  //   fs.chmodSync("./task13.txt", 0o444);

  fs.chmod("task13.txt", 0o444, (error) => {
    log(error);
  });
  
  let result = fs.writeFileSync("task13.txt", "utf-8");
  log(result);
} catch (error) {
  log(error);
}
