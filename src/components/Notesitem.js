import { useContext } from "react";
import React from "react";
import noteContext from "../context/notes/Notescontext";
const Notesitem = (props) => {
  const { note, updateNote } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;
  return (
    <div className="row mx-3">
      <div
        className="card my-3"
        style={{
          color: "black",
          border: "2pt solid black",
          width: "fit-content",
          borderRadius: "15px",
          boxShadow: "10px 10px 5px black",
          textShadow: "2px 2px white",
        }}
      >
        <div className="card-body">
          <h4 className="card-title">{note.title}</h4>
          <p className="card-text">{note.description}</p>
          <p className="card-text">{note.tag}</p>
          <i
            className="fa-solid fa-trash mx-3"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Deleted note Sucessful", "success");
            }}
          ></i>
          <i
            className="fa-solid fa-pen-to-square mx-3"
            onClick={() => updateNote(note)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Notesitem;
