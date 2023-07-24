import React from 'react'
import Weekday from './Weekday'
import Tasks from './Tasks'
import FloatingButton from './FloatingButton'

const Home = () => {
  return (
    <>
    <FloatingButton/>
    <div className='md:block hidden'>
      <div className='grid grid-cols-6'>
        <div>
            <Weekday/>
        </div>
        <div className='col-span-3'><Tasks/></div>
      </div>
    </div>
    <div className='md:hidden '>
      <div>
        <Weekday/>
        <div className='mx-10'>
          <Tasks/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
