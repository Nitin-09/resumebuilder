import React, { useEffect, useState } from 'react'
import { forwardRef } from 'react'

const Resume = forwardRef((props, ref) => {
    const information = props.information
    const sections = props.sections
    const info = {
        profile: information[sections.profile],
        education: information[sections.education],
        workExp: information[sections.workExp],
        project: information[sections.project],
        skill: information[sections.skill],
        summary: information[sections.summary],
        other: information[sections.other]
    }
    const sectionDiv = {
        [sections.profile]: (
            <>
                <div className='mt-20 flex flex-col border-2 border-emerald-500 bg-white w-[570px] h-24 items-center justify-center'>
                    <p className='text-4xl capitalize font-medium text-emerald-500'>{info.profile.detail.firstName ? info.profile.detail.firstName : "Jonathan"} {info.profile.detail.lastName ? info.profile.detail.lastName : "Jonhson"}</p>
                    <p className='text-base capitalize font-medium text-black'>{info.profile.detail.title ? info.profile.detail.title : "Computer Application Specialist"}</p>
                </div>
                <div className='mt-2 p-4 flex flex-col gap-5'>
                    <div className='flex flex-col gap-3'>
                        <span className='text-white font-bold text-lg'>Contact</span>
                        <hr />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-white font-semibold text-base'>Address</span>
                        <span className='text-sm capitalize font-medium text-white'>{info.profile.detail.address ? info.profile.detail.address : "4181 Faitrade Road"}, {info.profile.detail.city ? info.profile.detail.city : "Aswain"}, {info.profile.detail.state ? info.profile.detail.state : "Wisconsin"}{info.profile.detail.zipCode ? "," + info.profile.detail.zipCode : ""}</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-white font-semibold text-base'>Phone</span>
                        <span className='text-sm font-medium text-white'>{info.profile.detail.phoneNumber ? info.profile.detail.phoneNumber : "(053) 123 4567"}</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-white font-semibold text-base'>Email</span>
                        <a className='text-sm font-medium text-white' href={info.profile.detail.email}>{info.profile.detail.email ? info.profile.detail.email : "j.jonhson@gmail.com"}</a>
                    </div>
                </div>
            </>
        ),
        [sections.workExp]:
            <>
                <div className='flex flex-col w-full'>
                    <span className='text-emerald-500 font-bold text-lg'>{info.workExp.sectionTitle ? info.workExp.sectionTitle : "Work Experience"}</span>
                    <hr className='border-2 bg-emerald-500 border-emerald-500' />
                </div>
                {info.workExp.details.length > 0 ? info.workExp.details?.map((item, index) => (
                    <div key={item.company + item.index} className='mt-2'>
                        <div className='flex justify-between'>
                            <span className='font-semibold text-base text-black'>{item.company}</span>
                            <span className='font-semibold text-lg text-emerald-500'>{item.workStartDate}-{item.workEndDate}</span>
                        </div>
                        <span className='font-normal text-base text-gray-400'>{item.workTitle}</span>
                    </div>

                )) : <>
                    <div className='mt-4'>
                        <div className='flex justify-between'>
                            <span className='font-semibold text-base text-black'>Apps Center lowa</span>
                            <span className='font-semibold text-lg text-emerald-500'>2019</span>
                        </div>
                        <span className='font-normal text-base text-gray-400'>App Developer</span>
                    </div>
                    <div className='mt-4'>
                        <div className='flex justify-between'>
                            <span className='font-semibold text-base text-black'>Google LLC</span>
                            <span className='font-semibold text-lg text-emerald-500'>2022</span>
                        </div>
                        <span className='font-normal text-base text-gray-400'>Graphic Designer </span>
                    </div>
                    <div className='mt-4'>
                        <div className='flex justify-between'>
                            <span className='font-semibold text-base text-black'>UI | UX Designer OJT</span>
                            <span className='font-semibold text-lg text-emerald-500'>2016</span>
                        </div>
                        <span className='font-normal text-base text-gray-400'>REACT.JS Developer</span>
                    </div>
                </>
                }
            </>,
        [sections.education]: (
            <>
                <div className='flex flex-col w-full'>
                    <span className='text-emerald-500 font-bold text-lg'>{info.workExp.sectionTitle ? info.education.sectionTitle : "Education"}</span>
                    <hr className='border-2 bg-emerald-500 border-emerald-500' />
                </div>
                {info.education.details.length > 0 ? info.education.details?.map((item) => (
                    <div key={item.degree} className='mt-2'>
                        <div className='flex justify-between'>
                            <span className='font-semibold text-base text-black'>{item.schoolName}</span>
                            <span className='font-semibold text-lg text-emerald-500'>{item.schoolStartDate} - {item.schoolEndDate}</span>
                        </div>
                        <span className='font-normal text-base text-gray-400'>{item.degree}</span>
                    </div>)) : <>
                    <div className='mt-2'>
                        <div className='flex justify-between'>
                            <span className='font-semibold text-base text-black'>Wisconsin State University</span>
                            <span className='font-semibold text-lg text-emerald-500'>2018 - 2019</span>
                        </div>
                        <span className='font-normal text-base text-gray-400'>High School</span>
                    </div>
                    <div className='mt-2'>
                        <div className='flex justify-between'>
                            <span className='font-semibold text-base text-black'>Southwinds State School</span>
                            <span className='font-semibold text-lg text-emerald-500'>2020 - 2021</span>
                        </div>
                        <span className='font-normal text-base text-gray-400'>Graduation</span>
                    </div>
                </>
                }
            </>
        ),
        //     [sections.project]: (
        //         <div key="project" draggable onDragOver={() => settarget(info.project?.id)} onDragEnd={() => setsource(info.project?.id)}>
        //             <div className='text-lg font-bold w-full border-b-4 border-black'>
        //                 {info.project.sectionTitle}
        //             </div>
        //             {info.project.details?.map((item) => (
        //                 <div key={item.projectTitle} className='flex flex-col p-2'>
        //                     <span className='font-bold text-lg'>{item.projectTitle}</span>
        //                     <a className='font-medium underline text-base text-blue-500' href={item.projectLink}>{item.projectLink}</a>
        //                     <p className='font-medium text-base'>{item.projectSummary}</p>
        //                 </div>))}
        //         </div>
        //     ),
        [sections.summary]: (
            <>
                <div className='flex flex-col w-full'>
                    <span className='text-emerald-500 font-bold text-lg'>{info.summary.sectionTitle ? info.summary.sectionTitle : "About"}</span>
                    <hr className='border-2 bg-emerald-500 border-emerald-500' />
                </div>
                <div className='p-2'>
                    <p className='text-justify'>{info.summary.about ? info.summary.about : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis et perspiciatis, optio consequuntur rem adipisci laudantium itaque qui quibusdam labore earum sequi libero ea odio, amet asperiores officiis. Harum eaque suscipit nihil adipisci aperiam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ab libero blanditiis voluptatibus hic laboriosam ratione dolore unde commodi! Minus omnis commodi quo inventore. Unde animi tempore rerum consequuntur temporibus doloribus odit."}</p>
                </div>
            </>
        ),
        [sections.skill]: (
            <>
                <div className='mt-2 p-4 flex flex-col gap-5'>
                    <div className='flex flex-col gap-3'>
                        <span className='text-white font-bold text-lg'>{info.skill.sectionTitle ? info.skill.sectionTitle : "Skills"}</span>
                        <hr />
                    </div>
                    <div className='flex flex-col gap-5 text-base font-medium text-white'>
                        {info.skill.details.length > 0 ? info.skill.details?.map((item) => (
                            <span key={item.skill}>{item.skill}</span>
                        )) : <div className='flex flex-col gap-5 text-base font-medium text-white'>
                            <span>Dreamweaver</span>
                            <span>Photoshop</span>
                            <span>Flash</span>
                            <span>Wordpress</span></div>
                        }
                    </div>
                </div>

            </>
        ),
        //                 [sections.other]: (
        //                     <div key="Other" draggable onDragOver={() => settarget(info.other?.id)} onDragEnd={() => setsource(info.other?.id)}>
        //                         <div className='text-lg font-bold w-full border-b-4 border-black'>
        //                             others
        //                         </div>
        //                         {info.other.details?.map((item) => (
        //                             <div key={item.platform} className='flex p-2'>
        //                                 <span className='text-base font-semibold px-2'>{item.platform} : </span>
        //                                 <a className='text-base font-semibold text-blue-500 underline' href={item.platformLink}>{item.platformLink}</a>
        //                             </div>))}
        //                     </div>
        //                 ),
    }

    return (
        <div ref={ref} className='flex min-w-[842px] w-[842px] min-h-[1190px]'>
            <div className='bg-emerald-500 w-72 min-h-[1190px]'>
                {sectionDiv[sections.profile]}
                {sectionDiv[sections.skill]}
            </div>
            <div className='w-full px-5 flex flex-col gap-y-3'>
                <div className='mt-5 self-end'>
                    <img className='h-52 rounded-md' src={info.profile.detail.profile} alt="" />
                </div>
                {sectionDiv[sections.summary]}
                {sectionDiv[sections.workExp]}
                {sectionDiv[sections.education]}
            </div>
        </div>
    )
});

export default Resume
