import http from "http";

const port = 8000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello World<h1>");
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
