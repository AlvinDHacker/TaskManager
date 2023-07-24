import React from 'react'
import alric from '../assets/alric.png'
import alston from '../assets/alston.png'
import alvin from '../assets/alvin.png'

const About = () => {
  return (
    <div className='mx-5'>
      <h1 className='font-bold text-4xl'>Code Of Duty</h1>
        <p className='text-2xl'>Making it our duty to create and build for the world</p>
        <div className="container text-center my-5">
            <div className="grid md:grid-cols-3">
                <div>
                    <div className="mx-5">
                        <img className='rounded-full m-auto w-[300px] shadow-md hover:shadow-2xl' src={alric}/>
                        <div className="rounded">
                            <h5 className='font-bold text-lg'>Alric D'Souza</h5>
                            <p>S.K Somaiya College</p>
                            <p>alric.dsouza@somaiya.edu</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" mx-5">
                        <img className='rounded-full m-auto w-[300px] shadow-md hover:shadow-2xl' src={alston}/>
                        <div className="rounded">
                            <h5 className='font-bold text-lg'>Alston Soares</h5>
                            <p>Thakur College of Engineering and Technology</p>
                            <p>alstonsoares17@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mx-5">
                        <img className='rounded-full m-auto w-[300px] shadow-md hover:shadow-2xl' src={alvin}/>
                        <div className="rounded">
                            <h5 className='font-bold text-lg'>Alvin D'Souza</h5>
                            <p>Fr. Conceicao Rodrigues College of Engineering</p>
                            <p>alvindsouza2204@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col"></div>
        </div>
    </div>
  )
}

export default About
