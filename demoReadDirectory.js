const fs = require("fs");
const url = require("url");
const http = require("http");
const prompt = require("prompt-sync")();
let basedir = "C:/Users/91720/Desktop/B-Square";
let fetchedFiles = [];

//////////////////////////* Input using terminal *////////////////////////////////
try {

let path = prompt("Enter directory name: ");

  getFilesByFolderName(path);

} catch (error) {
  console.log(error);
}

////////////////////////////* Input using POSTMAN *///////////////////////////////
// try {
//   http
//     .createServer((req, res) => {
//       let parsedUrl = url.parse(req.url);
//       let path = parsedUrl.pathname;

//       req.on("end", () => {
//         if (req.method === "GET") {
//           getFilesByFolderName(path);
//         }
//       });
//       res.end(`result: ${fetchedFiles}`);
//     })
//     .listen(8080, () => {
//       console.log("Listening on port 8080");
//     });
// } catch (error) {
//   console.log(error);
// }


/////////////////////////////////* function */////////////////////////////////////
function getFilesByFolderName(path) {
  let basepath = basedir + "/" + path;
  console.log(basepath);
  fs.readdir(basepath, (error, files) => {
    if (error) {
      console.log(error);
    } else {
      files.forEach((file) => {
        // console.log(file)
        fetchedFiles.push(file);
      });
      console.log(fetchedFiles);
    }
  });
}
