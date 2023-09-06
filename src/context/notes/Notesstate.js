import { useState } from "react";
import noteContext from "./Notescontext";

const NoteState = (props) => {
  // const state={
  //     "name":"pb",
  //     "class":"7b"
  // }
  const initialState = [
    {
      _id: "64f2120409307c08bca549bb",
      user: "64f0be5cd9a2f58228ea9839",
      title: "my blog2",
      description: "This is my blog2",
      tag: "name1",
      date: "2023-09-01T16:32:04.174Z",
      __v: 0,
    },
    {
      _id: "64f213ce69a2f5560da854b8",
      user: "64f0be5cd9a2f58228ea9839",
      title: "my blog3",
      description: "This is my blog3",
      tag: "name1",
      date: "2023-09-01T16:39:42.168Z",
      __v: 0,
    },
    {
      _id: "64f2120409307c08bca549bb",
      user: "64f0be5cd9a2f58228ea9839",
      title: "my blog2",
      description: "This is my blog2",
      tag: "name1",
      date: "2023-09-01T16:32:04.174Z",
      __v: 0,
    },
    {
      _id: "64f213ce69a2f5560da854b8",
      user: "64f0be5cd9a2f58228ea9839",
      title: "my blog3",
      description: "This is my blog3",
      tag: "name1",
      date: "2023-09-01T16:39:42.168Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(initialState);

  //Add notes
  const addNote = (titel,description,tag)=>{
    //API call
    note = null
    setNotes(notes.push(note))
  }
  //update notes
  const deleteNote = ()=>{
    
  }
  //Delete notes
  const updateNote = ()=>{
    
  }


  return (
    <noteContext.Provider value={{ notes,addNote,deleteNote,updateNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
