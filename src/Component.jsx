

import React, {useState} from 'react'

export default function Component() {
    const [text,setText]=useState()
    const [updated,setUpdated]=useState()
    
    const textOneChange = (event) => {
        setText(event.target.value)
    } 
    
    const buttonOneChange = (event) => {
        setUpdated(text)
    }    


    return (
    <div>
        <input type='text'value={text} onChange={textOneChange}/>
        <button onClick={buttonOneChange}> Actualizar</button>
        <p>Texto input:{text}</p>
        <p>Texto Actualizar:{updated}</p>


    </div>
)
}

