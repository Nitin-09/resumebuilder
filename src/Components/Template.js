import React, { useContext, useEffect, useState } from 'react'
import ResumeContext from "../context/Resume/ResumeContext.js";
import { useNavigate } from 'react-router-dom'
import axios from "axios";


function Template() {
  let navigate = useNavigate()
  const context = useContext(ResumeContext)
  const { getTempelates } = context
  const [Templatedata, setTemplatedata] = useState({})
  const createResume = (tid) => {
    //api
    const response = axios.post(`https://resumeforgebkend.netlify.app/.netlify/functions/api/resume/createresume`, { tid }, {
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
    getTempelates(setTemplatedata)
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    console.log(Templatedata[0]?.tempelateURL)
  }, [Templatedata])



  return (
    <>
      <div className="flex-col min-w-screen min-h-screen bg-gradient-to-r from-[#5134df] to-[#c056e7] flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 md:mt-10">
          <div className="bg-gray-50 dark:bg-gray-800">
            {Templatedata.length > 0 ? Templatedata.map((element) => {
              return (
                <div key={element._id} className="flex flex-col justify-center items-center relative">
                  <img src={element.tempelateURL} alt="A chair with designed back" />
                  <button className='bg-[#5134df] absolute top-1/2 w-full text-white p-1 shadow-lg shadow-black hover:bg-[#4326d6] focus:bg-green-600' onClick={() => { createResume(element._id) }}>Use This Template</button>
                </div>)
            }) : <></>}


          </div>
        </div>
      </div>
    </>
  )
}

export default Template