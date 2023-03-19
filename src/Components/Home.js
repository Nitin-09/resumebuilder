import React, { useContext, useEffect,useState } from 'react'
import Svg from "../assets/resume.svg"
import ResumeContext from "../context/Resume/ResumeContext.js";
import { Link,useNavigate } from 'react-router-dom'
import axios from "axios";


function Home() {
  let navigate=useNavigate()
  const context = useContext(ResumeContext)
  const { getTempelates, Tempelatedata } = context
  const createResume = (tid) => {
    //api
    const response = axios.post(`http://localhost:5000/api/resume/createresume`, {tid}, {
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    response.then((data) => {
      const emptyResume = data.data
      navigate(`/newresume/${tid}/${emptyResume._id}`)
    }).catch((err) => {
      console.log(err);
    })

  }
  useEffect(() => {
    getTempelates()
  }, [])
  useEffect(() => {
  }, [Tempelatedata])


  return (
    <div className='h-[200vh]'>
      <div className="px-4 py-6 md:px-8 md:py-12 text-center w-full flex items-center bg-indigo-100  ">
        <div className='basis-2/4'>
          <p className="mx-auto my-0 md:max-w-lg text-sm md:text-3xl lg:text-5xl xl:text-6xl font-bold">The best way to predict
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-600 bg-clip-text text-transparent"> the future</span>
          </p>
          <p className="mx-auto my-0 md:max-w-lg text-sm md:text-3xl lg:text-5xl xl:text-6xl font-bold">is to create
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-600 bg-clip-text text-transparent"> your Resume.</span>
          </p>
        </div>
        <div className=' basis-2/4 flex justify-center '>
          <img className="w-[60%]" src={Svg} alt="" />
        </div>
      </div>
      <div className='mx-3 mt-8 w-full grid grid-cols-4 gap-3'>
        {Tempelatedata.length > 0 ? Tempelatedata.map((element) => {
          return (
            <div key={element.tempelateId} className="flex flex-col justify-center items-center relative">
              <div className="rounded-lg shadow-lg bg-white">
                <img className="rounded-t-lg" src='' alt="Please wait image is loading" />
              </div>
              <button className='absolute p-1 sm:p-2 m-2 shadow-lg shadow-gray-700 focus:shadow-md focus:translate-y-1 bg-black w-full text-white' onClick={() => { createResume(element.tempelateId) }}>Use this Tempelate</button>
            </div>
          )
        }) : <></>}
      </div>
    </div>

  )
}

export default Home