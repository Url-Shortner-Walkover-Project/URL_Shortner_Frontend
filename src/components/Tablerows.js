import React from 'react'

const Tablerows = (props) => {

    const { note } = props;
    return (
        <>
     
           
            <tr>

            

                <td><a href={note.full}>{note.full}</a></td>
                <td><a href={note.full}>{note.short} </a></td>
                <td>{note.clicks}</td>
            </tr>
        </>
    )
}

export default Tablerows
