const http = require("node:http");
const routes = require("./routes.js");
// function rqListener(req, res){
//
// }

// http.createServer(function(req, res){
//
// })

const server = http.createServer(routes);

server.listen(3000);
