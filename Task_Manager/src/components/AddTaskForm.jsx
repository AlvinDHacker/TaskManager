import React from 'react'

const AddTaskForm = () => {
  return (
    <div>
        <form>
          <div className='flex flex-col m-3'>
            <label className='uppercase py-2'>Task</label>
            <input className='rounded hover:shadow-xl shadow-md  p-3' name='task' type='text' placeholder='What is your task for today?'/>
          </div>
        </form>
      
    </div>
  )
}

export default AddTaskForm
