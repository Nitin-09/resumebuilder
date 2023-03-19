import React, { useContext, useEffect } from 'react'
import ResumeContext from "../context/Resume/ResumeContext.js";
import Resume from './Tempelates/Resume'

function MyResume() {
    const context = useContext(ResumeContext)
    const { fetchAllResume, ResumeData } = context
    useEffect(() => {
        fetchAllResume()
    }, [])
    useEffect(() => {
        console.log(ResumeData)
    }, [ResumeData])
    return (
        <div className='grid grid-cols-2 col-span-1'>            {
            ResumeData.map((element, index) => {
                return (
                    <div className='w-[21cm] h-[29.7cm]'>
                        <Resume Information={element} tid={element.tempelateId}></Resume>
                    </div>
                )
            })}

        </div>

    )
}

export default MyResume
