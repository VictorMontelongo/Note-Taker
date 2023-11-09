const router = require("express").Router();
// import all api route files here
const userApiRoutes = require("./api/notes.api.route.js");
const userHtmlRoutes = require("./html/notes.html.route.js")

//add api routes to the router
router.use("/api", userApiRoutes);


// Add html routes to the router
router.use("/", userHtmlRoutes);



module.exports = router