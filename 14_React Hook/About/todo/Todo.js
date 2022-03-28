import './Todo.css';
import { useState } from 'react';
import TodoList from "../todo-list/TodoList";
import TodoCreate from '../todo-create/todoCreate';

const Todo = () =>{
    const [getTodos, setTodos] = useState([
        { id: 1, title: 'Eat', kondisi: true},
        { id: 2, title: 'Sleep',kondisi: false},
        { id: 3, title: 'Code',kondisi: true},
    ])

    const  eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
        console.log(getTodos)
    }
    return (
        <div>
            <h3>Masukan Nilai</h3>
           <TodoCreate onCreateTodo={eventCreateTodo}  />
            <TodoList dataTodos={getTodos}/>
        </div>
    )
}
export default Todo