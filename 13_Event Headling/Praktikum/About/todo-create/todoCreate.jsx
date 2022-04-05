import './todoCreate.css'
import { useState } from 'react';

const TodoCreate = (props) =>{
    const [getInputTodo, setInputTodo] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault()
        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            title: getInputTodo,
            kondisi: getInputTodo
        }
        props.onCreateTodo(newTodo)

        setInputTodo('')

    }
    const handleInputTodo  = (event) =>{
        setInputTodo(event.target.value)
        console.log(getInputTodo)
    }

    return(
        <form className="m-2" onSubmit={handleSubmit}>
            <input className='m-2' type="text" placeholder='Masukin Apa Saja' value={getInputTodo} onChange={handleInputTodo}/>
            <button className='border-2 border-indigo-300 rounded-lg bg-green-600' type="submit">Tambah</button>
        </form>
    )
}

export default TodoCreate;