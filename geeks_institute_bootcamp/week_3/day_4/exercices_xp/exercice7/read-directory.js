const fs = require("fs");
const path = require("path");

// directory to read ('.' = current folder)
const directoryPath = ".";

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  console.log("Files in directory:");
  files.forEach(file => {
    console.log(file);
  });
});