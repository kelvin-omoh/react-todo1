import './App.css';
import {useState} from 'react'
import Task from './Task';

function App() {

  const [todoList,settodoList]=useState([])
  const [newtask,setnewtask]=useState("");

const handlechange=(e)=>{
setnewtask(e.target.value)
}

const addTask=()=>{

  const task={
    id: todoList==0?1: todoList[todoList.length-1].id + 1,
    taskName: newtask, 
    completed:false,
  }
  settodoList([...todoList,task])
}

const completedTask = (id)=>{
settodoList(
  todoList.map((task)=>{
    if(task.id===id){
      return {...task,completed:true}
    }
    else{
      return task;
    }
  })
)
}

const deleteTask=(id)=>{
   settodoList(todoList.filter((task)=>task.id!==id))
};
  return (
    <div className="App">
      <div className="head">
      <header>
        <h1>TO DO LIST</h1>
      </header>
      <div className="addTask inputs">
        <input onChange={handlechange} type="text" />
        <button onClick={addTask} >Add-Task</button>
      </div>
      </div>
          <div className="list">
            {todoList.map((task)=>{
           return <Task key= {task.id} deleteTask={deleteTask}  completed={task.completed} completedTask={completedTask} taskName={task.taskName} id={task.id} />
            })}
          </div>
    </div>
  );
}

export default App;
