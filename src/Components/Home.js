import React from 'react'
import Svg from "../assets/resume.svg"
function Home() {
  return (
    <>
    {/* Logo design */}
      <div className="px-4 py-6 md:px-8 md:py-12 text-center w-full flex gap-4 items-center justify-evenly bg-indigo-100 min-h-fit">
      <div className=''>
        <p className="mx-auto my-0 md:max-w-lg text-sm md:text-3xl lg:text-5xl xl:text-6xl font-bold">The best way to predict
          <span className="bg-gradient-to-r from-cyan-300 to-indigo-600 bg-clip-text text-transparent"> the future</span>
        </p>
        <p className="mx-auto my-0 md:max-w-lg text-sm md:text-3xl lg:text-5xl xl:text-6xl font-bold">is to create
          <span className="bg-gradient-to-r from-cyan-300 to-indigo-600 bg-clip-text text-transparent"> your Resume.</span>
        </p>
      </div>

      <div className=''>
        <img className="w-40 md:w-60 xl:w-96" src={Svg} alt="" />
      </div>
      </div>
    </>
  )
}

export default Home