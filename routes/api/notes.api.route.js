const router = require("express").Router();
const Model = require("../../db/db.json")
const uuid = require("uuid");



// Get one note 
router.get("/notes", async (req, res) => {
  try {
    // const payload = await JSON.parse(Model, "utf8");
    console.log(Model)
    res.status(200).json(Model)
  } catch (err) {
    res.status(500).json({ status: "BOOOOOO", Model: err.message })
  }
})
// Creating a new note
router.post("/notes", async (req, res) => {
  const newTitle = req.body.title;
  const newNote = req.body.text;
  if (!newTitle || !newNote) {
    res.status(500).json({ status: "please add a title and text to the note" })
  } else {
    const newJSON = {
      id: uuid.v4(),
      title: newTitle,
      text: newNote
    };
    Model.push(newJSON);
    console.log("post", newJSON)
    res.json(Model);
  };
});

// delete a record
router.delete("/notes/:id", async (req, res) => {
  console.log("delete", req.params)
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