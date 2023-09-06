import { useContext } from "react";
import React from "react";
import noteContext from "../context/notes/Notescontext";
import Notesitem from "./Notesitem";
const NotesCompo = () => {
  const context = useContext(noteContext);
  const { notes} = context;
  return (
    <div className="container" >
      <h2>Details of notes</h2>
      <div className="row my-3" style={{margintop:"16px"}}>
      {notes.map((notes) => {
        return <Notesitem note={notes} />;
      })}
      </div>
    </div>
  );
};

export default NotesCompo;
