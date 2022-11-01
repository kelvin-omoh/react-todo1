import React from 'react'
const Task = (props) => {
  return (
    <div key={props.id} className='task' style={{background: props.completed ? 'green':'rgb(230, 230, 230)',color:  props.completed? "white":'black'}}>
    <li >{props.taskName}</li>
    <button  style={{background: props.completed ? 'green':'rgb(230, 230, 230)',color:  props.completed? "white":'black'}} className='complete' onClick={()=>props.completedTask(props.id)}  >✔</button>
    <button className='delete' onClick={()=>props.deleteTask(props.id)}>x</button>
   </div>
   
  )
}

export default Task
