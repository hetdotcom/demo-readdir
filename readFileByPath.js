const { log } = require("console");
const fs = require("fs");
const prompt = require("prompt-sync")();

try {
  let path = prompt("Enter the path: ");
  readFilebyPath(path);
} catch (error) {
  log(error.message);
}

function readFilebyPath(path) {
//   fs.readFile(path, "utf-8", (err, data) => {
//     if (err) {
//       log(err);
//     } else {
//       log(data);
//     }
//   });

  let a = fs.readFileSync(path, { encoding: "utf8", flag: "r" });
  log(a);
}
