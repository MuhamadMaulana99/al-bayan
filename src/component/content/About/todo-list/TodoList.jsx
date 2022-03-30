import Todo from '../todo/Todo';
import './TodoList.css';
import { useState } from 'react';

const TodoList = (props) => {
    // const [list, setList] = useState(Todo);

    // function handleRemove(id) {
    //   const newList = list.filter((todo) => todo.id !== id);
    //   setList(newList);
    // }
    return (
        <ul className='border-4 border-indigo-600 p-3 rounded-lg'>{
            props.dataTodos.map((todo) => {
                return (
                    <div>
                        <li className='' style={{textDecoration : todo.kondisi ?  'line-through' : "none"}} key={todo.id}>{todo.title}</li>
                        <button className='border-2 border-indigo-300 rounded-lg bg-red-400'>Hapus</button>
                        {/* <button className='border-2 border-indigo-300 rounded-lg bg-red-400' onClick={() => handleRemove(todo.id)}>Hapus</button> */}
                    </div>
                )
            })
            }
        </ul>
    )
}

export default TodoList