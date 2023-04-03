//create simple server
//1. require/import the http module
const http = require("http");

//create server using createServer()
const server = http.createServer((req, res) => {
  console.log(req.url, "request");
  if (req.url === "/") {
    res.end("Welcome to node server");
  }

  if (req.url === "/posts") {
    res.write("Ths s the posts endpont");
    res.end();
  }
});

//listen to request on server
const port = 5000;
server.listen(port, (err) => {
  if (err) {
    console.log("error", err);
    return;
  }
  console.log(`Server s running on port ${port}`);
});
