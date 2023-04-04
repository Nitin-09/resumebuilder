import React, { useState, useRef } from 'react'
import Forms from './Forms'
import Section from './Section'
import Resume from './Tempelates/Resume'
function Body() {
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
    return (
        <div className='bg-form bg-no-repeat bg-cover'>
            <div class="p-4">
                <Section activeKey={activeKey} setActiveKey={setActiveKey}></Section>
            </div>
            <div className='mt-8 p-4 h-full'>
                <Forms Information={Information} setInformation={setInformation} activeKey={activeKey}></Forms>
            </div>
            <div class="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-[200]" id="my-modal" >
                <div class="relative top-0 mx-auto p-3 border w-fit shadow-lg rounded-md bg-white">
                    <div className='justify-end flex'>
                        <button className='p-2 text-right text-2xl hover:text-blue-500' onClick={()=>document.getElementById("my-modal").classList.add('hidden')}><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div ref={ResumeRef} className='w-[10.5cm] h-[17cm] lg:w-[21cm] lg:h-[29.7cm] border-2 border-black'>
                        <Resume tid={"1-6AQBNc2pmoNbf5YmvveNJhxCCPm5gkm"}></Resume>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Body
