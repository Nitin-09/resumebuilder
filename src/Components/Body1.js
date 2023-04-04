import React, { useRef,useState} from 'react'
// import ReactToPrint from 'react-to-print'
import Section from './Section1'
import Forms from './Forms'
import Resume from './Tempelates/Resume'
import { exportComponentAsJPEG } from 'react-component-export-image';
// import { useParams } from 'react-router-dom'
// import ResumeContext from "../context/Resume/ResumeContext.js";

function Body(props) {
  // const context = useContext(ResumeContext)
  // const { fetchResume } = context
  // const { tid, rid } = useParams();
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
  // useEffect(() => {
  //     fetchResume(rid, setInformation)
  // }, [])


  return (
    <>
      <div className='flex 2xl:flex-row flex-col h-fit'>
        <div className='w-full 2xl:h-[30cm]'>
          <div className='bg-black'>
            <Section activeKey={activeKey} setActiveKey={setActiveKey}></Section>
          </div>
          <div className='h-full'>
            <Forms Information={Information} setInformation={setInformation} activeKey={activeKey} showAlert={props.showAlert}></Forms>
          </div>
        </div>
        <div className='h-full'>
          <div ref={ResumeRef} className='w-[10.5cm] h-[17cm] lg:w-[21cm] lg:h-[29.7cm] border-2 border-black'>
            <Resume tid={"1-6AQBNc2pmoNbf5YmvveNJhxCCPm5gkm"}></Resume>
          </div>

          {/* <ReactToPrint
            trigger={() => {
              return (<button className="flex items-center justify-center gap-3 shadow-md shadow-gray-700 focus:shadow-sm focus:translate-y-1 p-2 col-span-6 disabled:cursor-not-allowed cursor-pointer bg-black hover:bg-blue-600 disabled:hover:bg-black text-white font-bold py-2 px-4 mx-auto w-full ">
                <i className="fa-solid fa-print"></i>
                <span>Print</span>
              </button>)
            }}
            content={() => ResumeRef.current}>
          </ReactToPrint> */}
          <button onClick={() => exportComponentAsJPEG(ResumeRef)} className="flex items-center justify-center gap-3 shadow-md shadow-gray-700 focus:shadow-sm focus:translate-y-1 p-2 col-span-6 disabled:cursor-not-allowed cursor-pointer bg-black hover:bg-blue-600 disabled:hover:bg-black text-white font-bold py-2 px-4 mx-auto w-full ">
            <i className="fa-solid fa-image"></i>
            <span>Save as JPEG</span>
          </button>
        </div>
      </div>

    </>

  )
}

export default Body