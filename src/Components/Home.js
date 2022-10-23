import React from 'react'
import Svg from "../assets/resume.svg"
function Home() {
  return (
    <div className="p-8 text-center w-full flex justify-end items-center bg-indigo-100">
        <div>
          <p className=" font-bold text-5xl max-w-md">
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-600 bg-clip-text text-transparent">A Resume</span> that stand out!
          </p>
          <p className="font-bold text-5xl max-w-md">
            Make your own resume.
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-600 bg-clip-text text-transparent"> It's free</span>
          </p>
        </div>

        <div>
          <img className="w-10/12" src={Svg} alt="" />
        </div>
      </div>
  )
}

export default Home