import React from 'react'
import Weekday from './Weekday'
import Tasks from './Tasks'

const Home = () => {
  return (
    <div>
      <div className='grid grid-cols-6'>
        <div>
            <Weekday/>
        </div>
        <div className='col-span-2'><Tasks/></div>
      </div>
    </div>
  )
}

export default Home
