const express = require("express");
const path = require("path");
const apiRoute = require("./routes/api/notes.api.route");
const htmlRoute = require("./routes/html/notes.html.route")
const app = express();



const PORT = process.env.PORT || 3001;


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Homepage route
app.use("/api", (req, res) => {
  res.sendFile(path.join(apiRoute))
});
app.use("/", (req, res) => {
  res.sendFile(path.join(htmlRoute))
});


// app.use("*", routes);
// app.use(routes);

app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT}`);
});

