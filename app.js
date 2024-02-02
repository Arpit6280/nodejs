const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer(function (req, res) {
  const url = req.url;
  const method = req.method;
  if (url === "/" && method === "GET") {
    const filePath = path.join(__dirname, "message.txt");
    fs.readFile(filePath, "utf-8", function (err, data) {
      if (err) {
        console.log(err);
      }
      console.log("data", data);
      res.write("<html>");
      res.write(`<body> ${data} </body>`);
      res.write(
        "<body> <form action='/' method='POST'><input type='text' name='message' /> <button type='send'>Submit</button>  </form> </body>"
      );
      res.write("</html>");
      return res.end();
    });
  } else if (url === "/" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(parsedBody);
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
});

server.listen(4000, () => {
  console.log("listening");
});
