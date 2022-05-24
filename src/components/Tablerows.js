import React from 'react'

const Tablerows = (props) => {

    const { note } = props;
    return (
        <>
     
           
            <tr>

            

                <td><a href={note.full}>{note.full}</a></td>
                <td><a href={`https://shorten-url11.herokuapp.com/${note.short}`}>{note.short} </a></td>
                <td>{note.clicks}</td>
            </tr>
        </>
    )
}

export default Tablerows
