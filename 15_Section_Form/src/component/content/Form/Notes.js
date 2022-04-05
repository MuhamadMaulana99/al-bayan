import React, { useEffect, useState } from 'react'

export default function Notes() {
    const [notes, setNotes] = useState('');
    useEffect(() => {
        fetch('http://localhost:8000/datax')
        .then(response => response.json())
        .then( data => setNotes(data))
    }, [])
  return (
    <div>
        {notes.map( note => (
            <p key={note.id}>{note.nama}</p>
        ))}
    </div>
  )
}
