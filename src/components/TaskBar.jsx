import React from 'react'
import './TaskBar.scss'
const TaskBar = () => {
  return (
    <div id='taskbar'>
        <div className='taskbar-content'>
            <h3>List of Users: </h3>
            <button className='rounded-30 btn-light-green'>+ Create User</button>
        </div>
      
    </div>
  )
}

export default TaskBar
