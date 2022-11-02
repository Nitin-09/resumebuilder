import React,{useState,useEffect} from 'react'
import Editor from './Editor'
import Resume from './Resume'

function Body() {
  const color = ["bg-orange-500", "bg-green-500", "bg-yellow-500", "bg-blue-500 "]
  const sections={
    basicInfo:"Basic Info",
    education:"Education",
    workExp:"Work Experience",
    project:"Project",    
    skill:"Skills",
    summary:"Summary",
    other:"Other"
  };
  const [information, setinformation] = useState({
    [sections.basicInfo]:{
      id:sections.basicInfo,
      detail:{},
    },
    [sections.education]:{
      id:sections.education,
      details:[],
    },
    [sections.workExp]:{
      id:sections.workExp,
      details:[],
    },
    [sections.project]:{
      id:sections.project,
      details:[],
    },
    [sections.skill]:{
      id:sections.skill,
      details:[],
    },
    [sections.summary]:{
      id:sections.summary,
      about:"",
    },
    [sections.other]:{
      id:sections.other,
      details:[],
    },
  })
  useEffect(() => {
    console.log(information);
  }, [information])
  
  return (
    <div className='flex flex-col gap-7 p-4 md:p-7 xl:px-16 items-center pt-0'>
      <p className='text-center text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold'>Resume Builder</p>
      <div className='w-full flex md:gap-10 justify-between items-center'>
        <div className='flex gap-1 md:gap-5 py-0 md:px-7'>
          {color.map(item =>
            <span key={item} className={`${item} h-5 w-5 md:h-9 md:w-9 xl:h-12 xl:w-12 rounded-full hover:border border-black cursor-pointer`}></span>)}
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-sm md:text-xl lg:text-2xl px-2 py-1 font-bold rounded inline-flex items-center">
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
          <span>Download</span>
        </button>
      </div>
      <Editor sections={sections} information={information} setinformation={setinformation}></Editor>
      <Resume></Resume>
    </div>
  )
}

export default Body