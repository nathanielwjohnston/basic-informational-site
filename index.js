const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const pageName = req.url === "/" ? "index.html" : `${req.url}.html`;
  const page = path.join(__dirname, "public", pageName);

  fs.readFile(page, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content404) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content404, "utf8");
          }
        );
      } else {
        res.writeHead(200);
        res.end(`Server error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content, "utf8");
    }
  });
});

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`Running on port ${port}`);
});
