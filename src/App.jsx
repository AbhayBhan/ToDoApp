import React, {useEffect , useReducer} from 'react';
import './styles/main.css';
import { Navbar } from './components/Navbar';
import TaskForm from './components/TaskForm';


const reducer = (todos, action) => {
  switch(action.payload.Key){
    case 0:
      return ([...todos, addNewTodo(action.payload.Task, action.payload.Priority)]);
    case 1:
      return todos.filter(todo => todo.ID !== action.payload.DelID);
    default:
      return todos;
  }
}

const addNewTodo = (task, priority) => {
  return {ID : Date.now(), Task : task, Priority : priority};
}



function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  const retData = (task,priority) => {
    dispatch({payload: {Task : task, Priority : priority, Key : 0}});
  }

  useEffect(() => {
    TaskList();
  },[todos]);

  const TaskList = () => {
    return(
      <>
      {todos.map((todo) => (
        <div key={todo.ID} className='container flex flex-col flex-wrap items-center justify-center mt-4 ml-6 rounded-xl space-y-5 bg-green-600 w-[60vw] h-[20vh] md:w-[20vw] md:h-[18vh]'>
            <h1 className='text-white font-bold text-xl text-center'>{todo.Task}</h1>
            <h1 className='text-white font-semibold text-[16px] text-center'>Urgency : {todo.Priority ? 'URGENT!' : "Not Urgent"}</h1>
            <button onClick={dispatch({payload: {DelID : todo.ID, Key : 1}})} className='text-red-500 ml-[250px] font-bold'>del</button>
        </div>
      ))}
      </>
    )
  }
  
  return (
    <div>
      <Navbar />
      <TaskForm retData={retData} />
      <div className='container flex flex-col flex-wrap justify-center mx-auto items-center space-x-6 mt-10 space-y-4 md:flex-row p-6'>
        <TaskList />
      </div>
    </div>
  )
}

export default App
