const router = require('express').Router();
const note = require("../models/note");

router.get("/notes", (req, res) => {
    note
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err))
})

router.post("/notes", (req, res) => {
    note
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err))
})

router.delete("/notes/:id", (req, res) => {
    note
    .deleteNote(req.params.id)
    .then(() => res.json({ok: true}))
    .catch(err => res.status(500).json(err))
})

module.exports = router;