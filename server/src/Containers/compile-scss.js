const sass = require("node-sass");
const fs = require("fs");
const path = require("path");

const srcDir = __dirname + "/../Styles";

const distDir = __dirname + "/../../public/styles";

fs.readdir(srcDir, (err, files) => {
  if (err) {
    console.error("Error reading source directory:", err);
    return;
  }

  files.forEach((file) => {
    if (path.extname(file) === ".scss") {
      const inputPath = path.join(srcDir, file);
      const outputPath = path.join(
        distDir,
        path.basename(file, ".scss") + ".css"
      );

      sass.render(
        {
          file: inputPath,
        },
        (error, result) => {
          if (!error) {
            fs.writeFile(outputPath, result.css, (err) => {
              if (!err) {
                console.log("SCSS biên dịch thành công:", inputPath);
              } else {
                console.error("Lỗi biên dịch css:", err);
              }
            });
          } else {
            console.error("lỗi biên dịch SCSS:", error);
          }
        }
      );
    }
  });
});
