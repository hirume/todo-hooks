import React from "react";
import {TodoItem} from './TodoItem';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';



export const TodoList = ({ todos }) => (

    <List>
      {todos.map(todo => (
          
        <TodoItem key={todo.id} todo={todo} />
        
      ))}
    </List>

  );

