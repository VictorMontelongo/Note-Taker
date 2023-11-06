const express = require("express")
const router = require("express").Router();
const path = require("path");
const fs = require("fs");
// Html page notes
router.get("/notes", (req, res) => {
  // res.sendfile("path to file")
  res.sendFile(path.join(__dirname, '../public/notes.html'));
})

// homepage
router.get("*", (req, res) => {
  // res.sendfile("path to file")
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports = router;