const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser"); //importing fetchuser file
const Notes = require("../models/Notes"); //importing notes schema
const { body, validationResult } = require("express-validator"); //importing express-validator module

//Route :1 Get all notes
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

//Route:2 Adding new notes from users : post /api/note/addnotes
router.post(
  "/addnotes",
  fetchuser,
  [
    body("title", "Enter a Valid title").isLength({ min: 1 }),
    body("description", "Description must be more than 1").isLength({ min: 1 }),
  ],
  async (req, res) => {
    try {
      //Destructuring the request data
      const { title, description, tag } = req.body;
      //any errors handle it
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      //create note from note schema
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      //save the notes into db
      const savednote = await note.save();
      res.json(savednote);
    } catch (error) {
      //handle error
      console.log(error);
      res.status(500).send("Internal server error");
    }
  }
);
//Route :3 Updating notes using: put /api/note/updatenotes/id
router.put(
  "/updatenotes/:id",
  fetchuser,
  [
    body("title", "Enter a Valid title").isLength({ min: 1 }),
    body("description", "Description must be more than 1").isLength({ min: 1 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      //Create note
      const newNote = {};
      //If any updates with other note
      if (title) {
        newNote.title = title;
      }
      if (description) {
        newNote.description = description;
      }
      if (tag) {
        newNote.tag = tag;
      }

      //find the note to be updated
      let note = await Notes.findById(req.params.id);
      if (!note) {
        return res.status(404).send("Not Found");
      }
      //only that user can modify his notes
      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
      }
      //Update note which is matched
      note = await Notes.findByIdAndUpdate(
        req.params.id,
        { $set: newNote },
        { new: true }
      );
      res.json({ note });
    } catch (error) {
      //handle error
      console.log(error);
      res.status(500).send("Internal server error");
    }
  }
);

//Route :4 Deleting note : delete /api/note/deletenote
router.delete(
  "/deletenotes/:id",
  fetchuser,
  [
    body("title", "Enter a Valid title").isLength({ min: 3 }),
    body("description", "Description must be more than 5").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      //find the note to be deleted
      let note = await Notes.findById(req.params.id);
      if (!note) {
        return res.status(404).send("Not Found");
      }
      //only that user can delete his notes
      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
      }
      //Delete note which is matched
      note = await Notes.findByIdAndDelete(req.params.id);
      res.json({ Sucess: "the note deleted", note: note });
    } catch (error) {
      //handle error
      console.log(error);
      res.status(500).send("Internal server error");
    }
  }
);
module.exports = router;
