const http = require("http");
const fs = require("fs");
const path = require("path");

const express = require("express");
const app = express();

// const server = http.createServer((req, res) => {
//   const pageName = req.url === "/" ? "index.html" : `${req.url}.html`;
//   const page = path.join(__dirname, "public", pageName);

//   fs.readFile(page, (err, content) => {
//     if (err) {
//       if (err.code === "ENOENT") {
//         fs.readFile(
//           path.join(__dirname, "public", "404.html"),
//           (err, content404) => {
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.end(content404, "utf8");
//           }
//         );
//       } else {
//         res.writeHead(200);
//         res.end(`Server error: ${err.code}`);
//       }
//     } else {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(content, "utf8");
//     }
//   });
// });

app.get("/", (req, res) => {
  const options = {
    root: path.join(__dirname, "public"),
  };

  const fileName = "index.html";
  res.sendFile(fileName, options);
});
app.get("/about", (req, res) => {
  const options = {
    root: path.join(__dirname, "public"),
  };

  const fileName = "about.html";
  res.sendFile(fileName, options);
});
app.get("/contact-me", (req, res) => {
  const options = {
    root: path.join(__dirname, "public"),
  };

  const fileName = "contact-me.html";
  res.sendFile(fileName, options);
});
app.get("*else", (req, res) => {
  const options = {
    root: path.join(__dirname, "public"),
  };

  const fileName = "404.html";
  res.sendFile(fileName, options);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
