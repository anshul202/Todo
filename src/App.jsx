import { useRef, useState } from 'react'
import './index.css'
import { IoMdAddCircle } from "react-icons/io";


const App=()=>{
  const [Tasks, setTasks] = useState([]);
  const [TaskStatus, setTaskStatus] = useState([])
  const input=useRef(null);
  const handleClick=()=>{
    let name=input.current.value;
    if(name){
      setTasks([...Tasks,name])
      setTaskStatus([...TaskStatus,false])
    }else{
      alert('Please enter a task')
    }
  }
  return (
    <>
    <div className='max-w-fit p-15 ml-auto mr-auto mt-4 flex flex-col'>
      <h2 className='poppin text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Get back to growth with <span class="text-blue-600 dark:text-blue-500 overflow-hidden'>My Todo List</h2>
      <div className='task-container'>
        {Tasks.map((task,index)=>{
          return(
            <div key={index} className='ml-3 flex items-center'>
              <input type='checkbox' className='h-5 w-5 mr-2' onChange={()=>{
                let newtaskstatus=[...TaskStatus]
                newtaskstatus[index]=!newtaskstatus[index];
                setTaskStatus(newtaskstatus);
              }} 
              />
              <h3 className={`rounded-lg text-lg my-3 poppins text-center p-3 border-black border-2 ${TaskStatus[index] && 'line-through'}`}>
            {task}
          </h3>
          </div> )})}
        </div>
      <div className='flex justify-end'>
        <input className="grow p-4 rounded-l-lg border-black/50 border-2 " type='text' placeholder='Add a task' ref={input}></input>
        <button className='border-black/50 rounded-r-lg border-2 hover:bg-slate-300'
        onClick={handleClick} onKeyDown={(e)=>{
          if(e.key=='enter'){
            handleClick();
          }
        }}><IoMdAddCircle  size={'2em'} width={'3em'}/></button>
      </div>
    </div>
    </>      
  )
}

export default App
