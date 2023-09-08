const connectMongo = require("./db"); // importing db file
const express = require("express"); // importing express
const app = express();
const port = 5000; //setting the port
var cors = require("cors"); // importing cros

connectMongo(); // connecting to mongo
app.use(cors()); // Cross-Origin Resource Sharing is a mechanism by which a front-end client can make requests for resources to an external back-end server.
app.use(express.json()); //use express json formater
app.get("/", (req, res) => {
  //get request
  res.send("Hello pb!");
});

//Available routes
//autharisation
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

//start app
app.listen(port, () => {
  console.log(`iNotebook is  listening on  http://localhost:${port}`);
});
