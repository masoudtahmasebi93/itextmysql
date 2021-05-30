var http = require("http");
var mysql = require("mysql");
var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  var message = "It workss!\n",
    version = "NodeJS " + process.versions.node + "\n",
    response = [message, version].join("\n");
  var connection = mysql.createConnection({
    host: "localhost",
    user: "masoudta_dbuser",
    password: "asd123ASD!@#",
    database: "masoudta_wpdb",
  });
  console.error("Hi");
  connection.connect();
  connection.query(
    "SELECT * FROM `sentences`",
    function (error, results, fields) {
      if (error) {
        console.error("error", error);
        response = response + error;
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(JSON.parse(JSON.stringify(results))));
      res.end();
    }
  );
  connection.end();
});
server.listen();
