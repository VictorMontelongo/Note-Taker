const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const express = require("express")
// Html page for listing all record
router.get("/notes", (req, res) => {
  // res.sendfile("path to file")
  res.sendFile(path.join(__dirname, '../public/notes.html'));
})

// Html page for a single record
router.get("*", (req, res) => {
  // res.sendfile("path to file")
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports = router;