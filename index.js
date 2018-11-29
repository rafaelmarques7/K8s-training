const http = require("http");

const port = 9000;
const myName = process.env.MY_NAME || "pea-RS"
const host = process.env.HOSTNAME || "dunno"

const handler = (request, response) => {  
  response.setHeader('Content-Type', 'application/json');
  response.statusCode = 200;
  response.end(`{"Bob":"The constructor", "accessed": ${host}}`);  
  console.log(`A request has been made to app ${myName}- time: `, new Date());
};

const server = http.createServer(handler);
server.listen(port, (err) => {
  console.log("Listening");
});
