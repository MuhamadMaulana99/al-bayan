import React, { useState } from "react";
import TodoList from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@material-ui/core";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import {
  addTodo,
  removeTodo,
  todoSelector,
  toggleTodo
} from "../store/todoSlice";
import { nanoid } from "nanoid";

function Home() {
  const [todo, setTodo] = useState({ title: "", done: false });
  // dengan selector untuk mengambil semua data dari redux
  const todoArr = useSelector(todoSelector);
  // const [todoArr, setTodoArr] = useState([]);

  const onChange = event => {
    let { value } = event.target;
    let obj = {};
    obj["title"] = value;
    obj["done"] = false;
    setTodo(obj);
  };

  const dispatch = useDispatch();

  const createTodo = event => {
    const { name } = event.target;
    if (event.key === "Enter" || name === "submit") {
      const newTodo = { id: nanoid(), title: todo.title };
      dispatch(addTodo(newTodo));
      setTodo({ title: "", done: false });
    }
  };

  const completeTodo = i => {
    const editedTodoID = todoArr[i].id;
    dispatch(toggleTodo({ id: editedTodoID }));
  };

  const deleteTodo = i => {
    const editedTodoID = todoArr[i].id;
    dispatch(removeTodo({ id: editedTodoID }));
  };
  const editedTodo = I =>{
    
  }

  return (
    <>
      <div className='box'>
        <div className="">
          <div className='text-end'>
            <h2>TODOS</h2>
            <h4>Tuliskan Apa saja yang kalian Fikirkan</h4>
          </div>
          <div className='flex items-center bg-orange-400'>
            <div className="tombol">
          <TextField 
          id="outlined-basic" 
          label="Add Todo..." 
          variant="outlined" 
          type='text'
          name='todo'
          value={todo.title}
          onKeyPress={createTodo}
          onChange={onChange}
          ></TextField>
            <Button 
            className="btn"
            variant="contained" 
            endIcon={<SendIcon />}
            onClick={createTodo}
            name='submit'
            >
              Kirim
          </Button>
            </div>
          </div>
          </div>
      </div>
      <TodoList
        todoArr={todoArr}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default Home;
