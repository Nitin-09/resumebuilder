import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ResumeContext from "../context/Resume/ResumeContext.js";

function Profiles() {
    let navigate = useNavigate()
    const context = useContext(ResumeContext)
    const { fetchAllResume, ResumeData } = context
    useEffect(() => {
        fetchAllResume()
        // eslint-disable-next-line
    }, [])
    useEffect(() => {
        console.log(ResumeData)
    }, [ResumeData])
    const calculatePercentage =(element) => {
    let i=0;
    if(element.profile[0].firstName)
    i=i+1
    if(element.education[0].details.length>0)
    i=i+1
    if(element.workExperience[0].details.length>0)
    i=i+1
    if(element.project[0].details.length>0)
    i=i+1
    if(element.skills[0].details.length>0)
    i=i+1
    if(element.summary[0].aboutMe)
    i=i+1
    return Math.floor((i*100)/6)
    }

    return (
        <div className='flex flex-wrap justify-center gap-5 h-fit bg-gradient-to-r from-[#5134df] to-[#c056e7] p-5 lg:p-10 overflow-hidden'>
            {
                ResumeData.map((element, index) => {
                    return (
                        <section class="w-64 mx-auto bg-[#0b2d54] rounded-2xl px-8 py-6 shadow-lg">
                            <div class="flex items-center justify-between">
                                <span class="text-gray-400 text-sm">2d ago</span>
                                <span class="text-emerald-400">
                                   <button className='hover:underline' onClick={()=>{navigate(`/newresume/${element.tempelateId}/${element._id}`)}}>Edit Resume</button>
                                </span>
                            </div>
                            <div class="mt-6 w-fit mx-auto">
                                <img src={element.profile[0].URL} class="rounded-full w-44 h-44 " alt="profile picture" srcset="" />
                            </div>

                            <div class="mt-8 ">
                                <h2 class="text-white font-bold text-2xl tracking-wide">{element.profile[0].firstName} <br /> {element.profile[0].lastName}</h2>
                            </div>
                            <p class="text-emerald-400 font-semibold mt-2.5" >
                                Profile Incomplete
                            </p>

                            <div class="h-1 w-full bg-black mt-8 rounded-full">
                                <div class={`h-1 rounded-full w-[${calculatePercentage(element)}%] bg-yellow-500 `}></div>
                            </div>
                            <div class="mt-3 text-white text-sm">
                                <span class="text-gray-400 font-semibold">Status:</span>
                                <span>
                                {calculatePercentage(element)}%
                                </span>
                            </div>

                        </section>
                    )
                })
            }
        </div>
    )
}

export default Profiles