const express = require("express");
const path = require("path");
const app = express();
const routes = require("./routes");


const PORT = process.env.PORT || 3001;


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Homepage route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/assets/index.html"))
})

app.use("*", routes);

