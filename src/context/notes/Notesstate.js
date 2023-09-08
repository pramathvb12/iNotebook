import { useState } from "react";
import noteContext from "./Notescontext";

const NoteState = (props) => {
  // const state={
  //     "name":"pb",
  //     "class":"7b"
  // }
  const host = "http://localhost:5000";
  const initialState = [];
  const [notes, setNotes] = useState(initialState);

  //Fetch notes
  const fetchNote = async () => {
    //API call
    //api call
    // Example POST method implementation:

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const json = await response.json();
    // console.log(json);
    setNotes(json);
  };

  //Add notes
  const addNote = async (title, description, tag) => {
    //API call
    //api call
    // Example POST method implementation:
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      //Stringify follwing else error
      body: JSON.stringify({
        title: title.join(""),
        description: description.join(""),
        tag: tag.join(""),
      }),

      // body: JSON.stringify({data})// body data type must match "Content-Type" header
    });

    const note = await response.json();
    // console.log(json);
    // const note = await response.json();
    // setNotes(notes.concat(note))
    // console.log("adding a notes");
    // const note = {
    //   _id: "64f213ce69a2f5560da854b8",
    //   user: "64f0be5cd9a2f58228ea9839",
    //   title: title,
    //   description: description,
    //   tag: tag,
    //   date: "2023-09-01T16:39:42.168Z",
    //   __v: 0,
    // };
    setNotes(notes.concat(note));
  };
  //Delete notes
  const deleteNote = async (id) => {
    //api call
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const json = response.json();
    console.log(json);
    // //logic in frontend
    // console.log("note deleted" + id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };
  //update notes
  const editNote = async (id, title, description, tag) => {
    //api call
    // Example POST method implementation:
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        title: title.join(""),
        description: description.join(""),
        tag: tag.join(""),
      }),
    });
    let newNote = JSON.parse(JSON.stringify(notes));
    const json = response.json();
    console.log(json);
    //logic for update
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];

      if (element._id === id) {
        newNote[index].title = title;
        newNote[index].description = description;
        newNote[index].tag = tag;
        break;
      }
    }
    setNotes(newNote);
  };

  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, fetchNote }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
