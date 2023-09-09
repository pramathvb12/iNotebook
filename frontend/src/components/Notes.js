import { useContext, useEffect, useRef, useState } from "react";
import React from "react";
import noteContext from "../context/notes/Notescontext";
import Notesitem from "./Notesitem";
import Addnote from "./Addnote";
import { useHistory } from "react-router-dom";
const NotesCompo = (props) => {
  const context = useContext(noteContext);
  let history = useHistory();
  const { notes, fetchNote, editNote } = context; //get context components from import
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  useEffect(() => {
    //If token exists then only show the notes
    if (localStorage.getItem("token")) {
      fetchNote();
    } else {
      history.push("/login");
    }
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const ref = useRef(null);
  const refClose = useRef(null);
  const handleclick = (e) => {
    // e.preventDefault(); not required because out of form content
    console.log("updating the note", note);
    //call edit notes
    editNote(note.id, note.etitle, note.edescription, note.etag);
    props.showAlert("Updated note Sucessful", "success");
    refClose.current.click();
    // setNote({title: "", description: "", tag: ""})
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: [e.target.value] });
  };

  return (
    <>
      <Addnote showAlert={props.showAlert} />
      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    placeholder="Enter the title of updated"
                    value={note.etitle}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    onChange={onChange}
                    placeholder="Enter the description to be updated"
                    value={note.edescription}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    onChange={onChange}
                    placeholder="Enter the description to be updated"
                    value={note.etag}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                onClick={handleclick}
                type="button"
                className="btn btn-primary"
                disabled={notes.etitle < 5 || notes.edescription < 5}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2
          className="container my-4"
          style={{
            textAlign: "center",
            color: "white",
            textShadow: "2px 2px black",
          }}
        >
          Details of Added Notes
        </h2>
        <div className="row my-3" style={{ margintop: "16px" }}>
          <div
            className="container mx-4"
            style={{ textAlign: "center", color: "white" }}
          >
            {notes.length === 0 && "No Notes to Display"}
          </div>
          {notes.map((notes) => {
            return (
              <Notesitem
                note={notes}
                key={notes._id}
                updateNote={updateNote}
                showAlert={props.showAlert}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NotesCompo;
