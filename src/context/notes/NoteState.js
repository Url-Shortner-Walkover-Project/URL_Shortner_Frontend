import React, { useState } from "react";
import NoteContext from "./NoteContext";



const NoteState = (props) => {

    const host = "http://localhost:6500"



    const notesInitial = [];

    const [notes, setNotes] = useState(notesInitial)


    //Add a Note

    const addNote = async(fullurl) => {

        ///Api call
        getNotes();
        const response = await fetch(`${host}/adddata/short`, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')

            },
            body: JSON.stringify({fullUrl:fullurl})
        });
        const note = response.json();
       setNotes(notes.concat(note))


    }

    // Get a note function
    const getNotes=async()=>{

        const response = await fetch(`${host}/fetchdata`, {
            method: 'GET',

            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')

            },
           
        });

        const json = await response.json();

        setNotes(json)

    }



    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote,getNotes }} >

            {props.children}

        </NoteContext.Provider>
    )




}


export default NoteState