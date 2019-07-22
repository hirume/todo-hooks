import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoItem";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import './index.css';

export const AddTodo = () => {
  const dispatch = useContext(TodoContext);

  const [text, setText] = useState("");

  const handleSubmit = event => {
    if (text) {
      dispatch({ type: "ADD_TODO", text });
    }

    setText("");

    event.preventDefault();
  };

  const handleChange = event => setText(event.target.value);

  return (
    <form onSubmit={handleSubmit} className='edit-form'>
      <TextField
        name="text"
        label="New Todo"
        value={text}
        onChange={handleChange}
        fullWidth
      />
      <Button type="submit" color="secondary" variant="contained">
      Add
      </Button>
    </form>
  );
};
