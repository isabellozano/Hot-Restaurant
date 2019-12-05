//dependencies
const express = require("express");
const http = require("http");

//express app
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function handleRequest(request, response) {

    response.end("Path Hit: " + request.url);
    }
    var server = http.createServer(handleRequest);
  
    server.listen(PORT, function() {

    console.log("Server listening on: http://localhost:" + PORT);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

//servers
function serverRequest(request, response) {

    fs.readFile(__dirname + "/index.html", function(err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
  
  // Starts our server
  server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
});
  

//Routing
app.get("/", function(req, res) {
  res.send("");
});

app.get("/", function(req, res) {
  res.json();
});

app.get("/", function(req, res) {
  res.json();
});

//APIs

//AJAX (GET and POST Requests)