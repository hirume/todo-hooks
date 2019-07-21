import React, { useReducer } from "react";
import uuid from "uuid/v4";
import { filterReducer, todoReducer } from './reducers';
import {TodoContext} from './TodoItem';
import {AddTodo} from './AddTodo';
import { FilterTodos } from "./FilterTodos";
import { TodoList } from './TodoList';
import {AppBar, Toolbar, Typography} from '@material-ui/core';



const initialTodos = [
  {
    id: uuid(),
    text: "Wash the cat",
    complete: true,
    editing: false
  }
];


const App = () => {
  const [filter, dispatchFilter] = useReducer(filterReducer, "ALL");
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);

  const filteredTodos = todos.filter(todo => {
    if (filter === "ALL") {
      return true;
    }

    if (filter === "COMPLETE" && todo.complete) {
      return true;
    }

    if (filter === "ACTIVE" && !todo.complete) {
      return true;
    }

    return false;
  });

  return (
    <TodoContext.Provider value={dispatchTodos}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>
      <AddTodo />
      {todos.length > 0 ? <FilterTodos dispatch={dispatchFilter} /> : null }
      <TodoList todos={filteredTodos} />
    </TodoContext.Provider>
  );
};

export default App;
