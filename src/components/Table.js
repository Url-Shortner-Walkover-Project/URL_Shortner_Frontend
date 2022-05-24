import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NoteContext from "../context/notes/NoteContext"
import AddUrl from './AddUrl'
import Tablerows from './Tablerows'

const Table = (props) => {

    const {showAlert} = props;

    const context = useContext(NoteContext)
    const { notes, addNote,getNotes } = context;
    const navigate = useNavigate();
    useEffect(()=>{

        if(localStorage.getItem('token'))
        {
            getNotes()

        }else{
            
           
            navigate('/login')

        }

        
    },[])
    return (
        <>

            <AddUrl showAlert={showAlert} />

            <div className="container">
                <h2 className=" text-center my-3">Your Links</h2>
                <div className="table-responsive">
                    <table className="table table-responsive table-striped my-2">
                        <thead>
                            <tr>

                                <th scope="col">Full Url</th>
                                <th scope="col">Short Url</th>
                                <th scope="col">Click</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {notes.map((note) => {


                                return <Tablerows key={note._id} note={note} />



                            })}




                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default Table
