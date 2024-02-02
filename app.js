const http = require("http");

const server = http.createServer(function (req, res) {
  console.log("Arpit");
  console.log(req);
});

server.listen(4000, () => {
  console.log("listening");
});
