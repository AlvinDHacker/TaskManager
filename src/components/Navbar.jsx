import React, {useState} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import logo from '../assets/logo.jpg'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };

  return (
    <>
    <div className='md:hidden sticky backdrop-blur-3xl top-0 z-10'>
      <div className='flex shadow-lg'>
        <div className="flex lg:flex-1 md:hidden m-3">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Task Manager</span>
            <img className="h-8 w-auto" src={logo} alt="" />
          </a>
        </div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden cursor-pointer' />
      </div>
      {
        nav ? (
          <div className='fixed h-screen w-full bg-white flex flex-col justify-center items-center z-20'>
            <a onClick={handleNav} href='/scheduler' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-green-500 shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
              <span className='pl-4'>Scheduler</span>
            </a>
            <a onClick={handleNav} href='/calendar' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-green-500 shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
              <span className='pl-4'>Calendar</span>
            </a>
            <a onClick={handleNav} href='/results' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-green-500 shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
              <span className='pl-4'>Results</span>
            </a>
            <a onClick={handleNav} href='/about' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-green-500 shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
              <span className='pl-4'>About Us</span>
            </a>
            <div className='divide divide-y-2'/>
            <a onClick={handleNav} href='/' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-green-100 shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
              <span className='pl-4'>Home</span>
            </a>
          </div>

        ) :
          ('')
      }
      </div>
      <div className='md:block hidden'>
      <div className='sticky top-0 backdrop-blur-3xl z-10 mx-auto shadow-lg'>
        <div className='flex w-full'>
          <div className="flex lg:flex-1 m-4">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Task Manager</span>
              <img className="h-8 w-auto" src={logo} alt="" />
            </a>
          </div>
          <div className='hidden md:flex md:gap-x-3'>
            <a href='/scheduler' className='font-bold rounded shadow-lg bg-green-500 m-3 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
              Scheduler
            </a>
            <a href='/calendar' className='font-bold rounded shadow-lg bg-green-500 m-3 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
              Calendar
            </a>
            <a href='/results' className='font-bold rounded shadow-lg bg-green-500 m-3 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
              Results
            </a>
            <a href='/about' className='font-bold rounded shadow-lg bg-green-500 m-3 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
              About Us
            </a>
          </div>
          <div className='hidden md:flex md:flex-1 md:justify-end'>
            <a href='/' className='font-bold flex rounded shadow-lg bg-green-500 m-3 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
              Home <BsPerson size={22} />
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
