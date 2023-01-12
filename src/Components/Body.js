import React, { useState, useEffect, useRef } from 'react'
import ReactToPrint from 'react-to-print'
import Section from './Section'
import Forms from './Forms'

function Body(props) {
  // Reference of Resume Component
  const ResumeRef = useRef()
  const [activeKey, setActiveKey] = useState("profile")
  return (
    <div className='flex flex-col gap-7 p-4 md:p-7 xl:px-16 items-center pt-0'>
      <p className='text-center text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold'>Resume Builder</p>
      <div className='w-full flex md:gap-10 justify-end items-center'>
        <ReactToPrint
          trigger={() => {
            return (<button className="items-center bg-blue-500 hover:bg-blue-700 text-sm md:text-xl lg:text-2xl px-2 py-1 font-bold rounded inline-flex">
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
              <span>Download</span>
            </button>)
          }}
          content={() => ResumeRef.current}></ReactToPrint>
      </div>
      <div className='grid gap-10 place-items-center'>
        <div className='flex flex-row min-w-[90vw] md:min-w-[90vw] lg:min-w-[90vw] min-h-[85vh]'>
          <Section activeKey={activeKey} setActiveKey={setActiveKey}></Section>
          <Forms activeKey={activeKey}></Forms>
        </div>
      </div>
    </div>
  )
}

export default Body