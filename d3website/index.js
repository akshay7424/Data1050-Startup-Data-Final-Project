const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3010;

var index = require("./routes/index");
var creds = require("./routes/creds");
var data = require("./routes/data");
var data2 = require("./routes/data2");
var data3 = require("./routes/data3");
var d3 = require("d3");

// Handle routing
app.use("/", index);
app.use("/creds", creds);
app.use("/data", data);
app.use("/data2", data2);
app.use("/data3", data3);

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("&");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
