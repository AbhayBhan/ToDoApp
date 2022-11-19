import React, {useState} from 'react';
import '../styles/main.css';

const TaskForm = ({retData}) => {
    const onTriggerSub = (e) => {
        e.preventDefault();
        retData(task,priority);
        setTask('');
        setPriority(false);
    }
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState(false);

    const handlePriority = () => {
        if(priority){
            setPriority(false);
        }
        else{
            setPriority(true);
        }
    }
  return (
    <div className='container block mx-auto border-green-900 border-8 mb-10 rounded-lg w-[70vw] h-[50vh] md:w-[50vw] md:h-[40vh]'>
        <form onSubmit={onTriggerSub} className='flex flex-col space-y-4 p-3 items-start'>
            <h1 className='text-3xl font-bold text-green-800'>ADD A NEW TASK</h1>
            <h3 className='text-xl border-green-500 font-semibold'>Task Description</h3>
            <input value={task} onChange={(e) => {setTask(e.target.value)}} className='border-2 border-gray-800 rounded-lg px-1 w-[40vw]' type="text" required></input>
            <h3 className='text-xl border-green-500 font-semibold'>Urgent?</h3>
            <input value={priority} onChange={handlePriority} className='w-5 h-5' type="checkbox" checked={priority}></input>
            <button className='px-4 py-1 bg-green-700 font-semibold text-white rounded-xl hover:text-green-700 hover:bg-white' type='submit'>Add Task</button>
        </form>
    </div>
  )
}

export default TaskForm