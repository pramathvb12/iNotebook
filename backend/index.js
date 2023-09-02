const connectMongo = require("./db"); // importing db file
const express = require("express"); // importing express
const app = express();
const port = 5000; //setting the port
connectMongo(); // connecting to mongo
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
  console.log(`Example app listening on  http://localhost:${port}`);
});
