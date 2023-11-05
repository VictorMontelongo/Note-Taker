const router = require("express").Router();
const { isUtf8 } = require("buffer");
const Model = require("../../db/User")
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");



// Get one note 
router.get("/api/notes", async (req, res) => {
  try {
    const payload = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    res.status(200).json({ status: "nice", payload })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
})
// Creating a new note
router.post("/", async (req, res) => {
  try {
    const payload = await res.sendFile(path.join(__dirname, '../public/index.html'));;
    res.status(200).json({ status: "nice", payload })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
})
// Update a record with a route
router.put("/:id", async (req, res) => {
  try {
    const payload = await Model.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.status(200).json({ status: "nice", payload })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
})
// delete a record
router.delete("/api/notes/:id", async (req, res) => {
  try {
    const payload = await Model.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ status: "its all gone man" })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
})

module.exports = router;