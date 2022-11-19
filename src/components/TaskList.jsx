import React from 'react';
import '../styles/main.css';

export const TaskList = (props) => {
    let todoData = props.todoList;
    console.log(todoData);
  return (
    <div className='container flex flex-col flex-wrap justify-center mx-auto items-center space-x-6 space-y-4 md:flex-row p-6'>
        {todoData.map((todo) => (
            <div key={todo.ID} className='container flex flex-col items-center justify-center rounded-xl space-y-5 bg-green-600 w-[20vw] h-[18vh]'>
                <h1 className='text-white font-bold text-xl text-center'>{todo.Task}</h1>
                <h1 className='text-white font-semibold text-[16px] text-center'>Urgency : {todo.Priority ? 'URGENT!' : "Not Urgent"}</h1>
            </div>
        ))}
    </div>
  )
}
