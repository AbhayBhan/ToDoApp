import React, {useState , useReducer} from 'react';
import './styles/main.css';
import { Navbar } from './components/Navbar';
import TaskForm from './components/TaskForm';
import { TaskList } from './components/TaskList';


const reducer = (todos, action) => {
  return ([...todos, addNewTodo(action.payload.Task, action.payload.Priority)]);
}

const addNewTodo = (task, priority) => {
  return {ID : Date.now(), Task : task, Priority : priority};
}



function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  const retData = (task,priority) => {
    dispatch({payload: {Task : task, Priority : priority}});
  }
  return (
    <div>
      <Navbar />
      <TaskForm retData={retData} />
      <TaskList todoList = {todos}/>
    </div>
  )
}

export default App
