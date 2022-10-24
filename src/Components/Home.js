import React from 'react'
import Svg from "../assets/resume.svg"
function Home() {
  return (
    <div className="p-6 text-center w-full flex justify-center items-center space-x-16 bg-indigo-100">
        <div className='p-6 w-1/2 text-sm md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-8xl 2xl:mx-32 '>
          <p className="font-bold max-w-md 2xl:max-w-4xl">The best way to predict 
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-600 bg-clip-text text-transparent"> the future</span>
          </p>
          <p className="font-bold max-w-md 2xl:max-w-4xl">is to create 
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-600 bg-clip-text text-transparent"> your Resume.</span>
          </p>
        </div>

        <div className='w-1/2'>
          <img className=" w-5/6" src={Svg} alt="" />
        </div>
      </div>
  )
}

export default Home