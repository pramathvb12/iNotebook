import { useContext, useState } from "react";
import React from "react";
import noteContext from "../context/notes/Notescontext"; //import notecontext model from notescontext.
//Addnote function for adding note.
const Addnote = (props) => {
  //Usecontext hook usage
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleclick = (e) => {
    //close the reload of pages
    e.preventDefault();
    //call addnote ith title,description,tag.
    addNote(note.title, note.description, note.tag);
    //use setstate to set notes
    setNote({ title: " ", description: " ", tag: " " });
    props.showAlert("Added note Sucessful", "success");
  };
  const onChange = (e) => {
    //onchange for changing in the client-side
    setNote({ ...note, [e.target.name]: [e.target.value] });
  };
  return (
    <div>
      <div className="container">
        <h2>Add Note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
              placeholder="Enter the title of your note"
              minLength={5}
              required
              value={note.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              placeholder="Enter the description of your note"
              minLength={5}
              required
              value={note.description}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
              placeholder="Enter the tag of your note"
              value={note.tag}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleclick}
            disabled={note.title < 5 || note.description < 5}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addnote;
