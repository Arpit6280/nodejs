const http = require("http");

const server = http.createServer(function (req, res) {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head>");
    res.write("<body>Hii Arpit</body>");
    res.write("</head>");
    res.write("</html>");
    return res.end();
  } else if (url === "/home") {
    res.write("<html>");
    res.write("<head>");
    res.write("<body>Welcome Home </body>");
    res.write("</head>");
    res.write("</html>");
    return res.end();
  } else if (url === "/about") {
    res.write("<html>");
    res.write("<head>");
    res.write("<body> Welcome to About us </body>");
    res.write("</head>");
    res.write("</html>");
    return res.end();
  } else if (url === "/node") {
    res.write("<html>");
    res.write("<head>");
    res.write("<body>Welcome to my node js project </body>");
    res.write("</head>");
    res.write("</html>");
    return res.end();
  }
  console.log("Arpit");
  console.log(req);
});

server.listen(4000, () => {
  console.log("listening");
});
