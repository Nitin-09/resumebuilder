import React, { useContext, useEffect, useState } from 'react'
// import Svg from "../assets/resume.svg"
import ResumeContext from "../context/Resume/ResumeContext.js";
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";


function Template() {
  let navigate = useNavigate()
  const context = useContext(ResumeContext)
  const { getTempelates, Tempelatedata } = context
  const createResume = (tid) => {
    //api
    const response = axios.post(`http://localhost:5000/api/resume/createresume`, { tid }, {
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
    <>
      <div className='w-[21cm] h-[29.7cm] bg-black h-screen'>
        sgdds
      </div>
    </>
  )
}

export default Template