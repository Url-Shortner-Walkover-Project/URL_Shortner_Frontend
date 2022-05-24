import React, { useContext, useState } from 'react'
import NoteContext from "../context/notes/NoteContext"

const AddUrl = (props) => {

    const context = useContext(NoteContext)
    const { addNote ,getNotes} = context;


    const[note,setNote] = useState({fullurl:"",})

    const handleClcik=(e)=>{


        e.preventDefault();


        addNote(note.fullUrl)
        getNotes();
        props.showAlert("URL shorten Successfully","success")
        



    }
    const onChange=(e)=>{


        setNote({...note,[e.target.name]: e.target.value})
       




    }
    return (
        <>


            <div className="container my-3">
                <h1 className=" text-center my-3">Url Shortner</h1>

                <div className="mb-3">
                    <form >
                        <div className="mb-3">
                            <label htmlFor="fillurl" className="form-label"><b>Enter the Url</b></label>
                            <input type="url" placeholder="https://getbootstrap.com/" name="fullUrl" onChange={onChange} className="form-control" id="fullUrl"
                                aria-describedby="emailHelp" required/>

                        </div>

                        <button type="submit" onClick={handleClcik} className="btn btn-primary">ShortUrl</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default AddUrl
