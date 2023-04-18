const fs = require("fs");
const url = require("url");
const http = require("http");
const prompt = require("prompt-sync")();
let basedir = "C:/Users/91720/Desktop/B-Square";

//////////////////////////* Input using terminal *////////////////////////////////
// try {

  // let path = prompt("Enter directory name: ");

//   getFilesByFolderName(path);

// } catch (error) {
//   console.log(error);
// }

////////////////////////////* Input using POSTMAN *///////////////////////////////
http.createServer((req, res) => {
  let parsedUrl = url.parse(req.url);
  let path = parsedUrl.pathname;

    // let basepath = basedir + path;
    // console.log(basepath);
  
  // req.on("end", () => {
  //   if (req.method === "GET") {
      getFilesByFolderName(path);
  //   }
  // });
  res.end("files"); 
}).listen(8080, () => {
    console.log("Listening on port 8080");
  });


/////////////////////////////////* function */////////////////////////////////////
function getFilesByFolderName(path) {
  let basepath = basedir + path;
  console.log(basepath);
  // fs.readdir(basepath, (error, files) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //    files.forEach((files) => console.log(files));
  //   //  return files;
  //   }
  // });
  // return files;
}
