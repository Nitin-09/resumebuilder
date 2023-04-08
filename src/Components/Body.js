import React, { useState, useRef, useContext, useEffect } from 'react'
import Forms from './Forms'
import Section from './Section'
import Resume from './Tempelates/Resume'
import { useParams } from 'react-router-dom'
import ResumeContext from "../context/Resume/ResumeContext.js";
import { exportComponentAsJPEG } from 'react-component-export-image';
function Body() {
    const ResumeRef = useRef()
    const context = useContext(ResumeContext)
    const { fetchResume } = context
    const [activeKey, setActiveKey] = useState("profile")
    const { tid, rid } = useParams();
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
        <div className='bg-form bg-no-repeat bg-cover'>
            <div className="p-4">
                <Section activeKey={activeKey} setActiveKey={setActiveKey}></Section>
            </div>
            <div className='mt-8 p-4 h-full'>
                <Forms Information={Information} setInformation={setInformation} activeKey={activeKey} ResumeId={rid}></Forms>
            </div>

            <div className="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-[200]" id="my-modal" >
                <div className="relative top-0 mx-auto p-3 border w-fit shadow-lg rounded-md bg-white">
                    <div className='justify-between flex p-3'>
                        <div className='flex gap-3'>
                            <button onClick={() => exportComponentAsJPEG(ResumeRef)} className="flex items-center justify-center gap-3 shadow-md shadow-gray-700 focus:shadow-sm focus:translate-y-1 p-2 col-span-6 disabled:cursor-not-allowed cursor-pointer bg-black hover:bg-blue-600 disabled:hover:bg-black text-white font-bold py-2 px-4 w-fit rounded-md">
                                <i className="fa-solid fa-image"></i>
                                <span>Save as JPEG</span>
                            </button>
                        </div>
                        <button className='p-2 text-right text-2xl hover:text-blue-500' onClick={() => document.getElementById("my-modal").classList.add('hidden')}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <div id='Resume' ref={ResumeRef} className='w-[21cm] h-[29.7cm] border-2 border-black'>
                        <Resume tid={tid} Information={Information}></Resume>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Body
