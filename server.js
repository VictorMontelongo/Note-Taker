const express = require("express");
const path = require("path");
const app = express();



const PORT = process.env.PORT || 3001;


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Homepage route
app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./routes/html"))
});

app.use("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./routes/api"))
});

// app.use("*", router);

app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT}`);
});

