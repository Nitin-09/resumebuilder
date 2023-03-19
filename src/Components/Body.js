import React, { useState, useEffect, useRef, useContext } from 'react'
import ReactToPrint from 'react-to-print'
import Section from './Section'
import Forms from './Forms'
import Resume from './Tempelates/Resume'
import { exportComponentAsJPEG } from 'react-component-export-image';
import { useParams } from 'react-router-dom'
import ResumeContext from "../context/Resume/ResumeContext.js";

function Body(props) {
  const context = useContext(ResumeContext)
  const { fetchResume } = context
  const { tid, rid } = useParams();
  // Reference of Resume Component
  const ResumeRef = useRef()
  const [activeKey, setActiveKey] = useState("profile")

  const [Information, setInformation] = useState({
    "profile": [{ detail: {} }],
    "education": [{ details: [] }],
    "workExperience": [{ details: [] }],
    "project": [{ details: [] }],
    "skills": [{ details: [] }],
    "summary": [{ detail: {} }],
    "others": [{ details: [] }]
  })
  useEffect(() => {
      fetchResume(rid, setInformation)
  }, [])


  return (
    <div className='flex flex-col gap-4 pt-5 p-4 md:p-7 xl:px-16 items-center bg-[#d4d4ff] w-screen h-fit pb-32'>
      <p className='text-center text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold'>Resume Builder</p>
      <div className='flex flex-col w-full gap-3 justify-center items-center'>
        <div className='flex flex-col w-full md:flex-row h-fit'>
          <Section activeKey={activeKey} setActiveKey={setActiveKey}></Section>
          <Forms ResumeId={rid} Information={Information} setInformation={setInformation} activeKey={activeKey} showAlert={props.showAlert}></Forms>
        </div>
        <div className='flex flex-col justify-center items-start gap-0.5'>
          <ReactToPrint
            trigger={() => {
              return (<button className="flex items-center justify-center gap-3 shadow-md shadow-gray-700 focus:shadow-sm focus:translate-y-1 p-2 col-span-6 disabled:cursor-not-allowed cursor-pointer bg-black hover:bg-blue-600 disabled:hover:bg-black text-white font-bold py-2 px-4 rounded mx-auto w-full ">
                <i className="fa-solid fa-print"></i>
                <span>Print</span>
              </button>)
            }}
            content={() => ResumeRef.current}>
          </ReactToPrint>
          <button onClick={() => exportComponentAsJPEG(ResumeRef)} className="flex items-center justify-center gap-3 shadow-md shadow-gray-700 focus:shadow-sm focus:translate-y-1 p-2 col-span-6 disabled:cursor-not-allowed cursor-pointer bg-black hover:bg-blue-600 disabled:hover:bg-black text-white font-bold py-2 px-4 rounded mx-auto w-full ">
            <i className="fa-solid fa-image"></i>
            <span>Save as JPEG</span>
          </button>
          <div ref={ResumeRef} className='w-[21cm] h-[29.7cm]'>
            <Resume Information={Information} tid={tid}></Resume>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body