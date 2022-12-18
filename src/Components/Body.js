import React, { useState, useEffect,useRef } from 'react'
import Editor from './Editor'
import Resume1 from './Resume1'
import ReactToPrint from 'react-to-print'

function Body() {
  // Reference of Resume Component
  const ResumeRef = useRef()
  // sections to take input in Edidtor component
  const sections = {
    basicInfo: "Basic Info",
    education: "Education",
    workExp: "Work Experience",
    project: "Project",
    skill: "Skills",
    summary: "Summary",
    other: "Other"
  };
  // information the user will enter will store in this state
  const [information, setinformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.skill]: {
      id: sections.skill,
      sectionTitle: sections.skill,
      details: [],
    },
    [sections.summary]: {
      sectionTitle: sections.summary,
      about: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      details: [],
    },
  })
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
          content={() =>ResumeRef.current}></ReactToPrint>
      </div>
      <Editor sections={sections} information={information} setinformation={setinformation}></Editor>
      <Resume1 ref={ResumeRef} sections={sections} information={information}></Resume1>
    </div>
  )
}

export default Body