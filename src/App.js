import React, { useReducer } from "react";
import uuid from "uuid/v4";
import { filterReducer, todoReducer } from "./reducers";
import { TodoContext } from "./TodoItem";
import { AddTodo } from "./AddTodo";
import { FilterTodos } from "./FilterTodos";
import { TodoList } from "./TodoList";
import { AppBar, Container, Paper, Toolbar, Typography } from "@material-ui/core";
import { useTheme } from '@material-ui/styles';


const initialTodos = [
  {
    id: uuid(),
    text: "Wash the cat",
    complete: true,
    editing: false
  }
];

const App = () => {
  const theme = useTheme();
  const [filter, dispatchFilter] = useReducer(filterReducer, "ALL");
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);

  const filteredTodos = todos.filter(todo => {
   return  (filter === "ALL")  || (filter === "COMPLETE" && todo.complete) || (filter === "ACTIVE" && !todo.complete)
  });

  return (
    <TodoContext.Provider value={dispatchTodos}>
      <Container maxWidth="md">
        <Paper>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Todo App
            </Typography>
          </Toolbar>
        </AppBar>
        <AddTodo />
        {todos.length > 0 ? <FilterTodos dispatch={dispatchFilter} /> : null}
        <TodoList todos={filteredTodos} />
        </Paper>
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
