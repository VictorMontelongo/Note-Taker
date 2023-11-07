const express = require('express');
const router = require("express").Router();
const Model = require("../../db/db.json")
const uuid = require("uuid");



// Get one note 
router.get("/api/notes", async (req, res) => {
  try {
    const payload = await JSON.parse(Model, "utf8");
    res.status(200).json({ status: "nice", payload })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
})
// Creating a new note
router.post("/api/notes", async (req, res) => {
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
    data.push(newJSON);
    res.json(Model);
  };
});

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