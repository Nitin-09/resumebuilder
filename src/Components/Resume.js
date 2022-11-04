import React, { useEffect, useState } from 'react'

function Resume(props) {
    const information = props.information
    const sections = props.sections
    const [column, setcolumn] = useState([[], []])
    const info = {
        basicInfo: information[sections.basicInfo],
        education: information[sections.education],
        workExp: information[sections.workExp],
        project: information[sections.project],
        skill: information[sections.skill],
        summary: information[sections.summary],
        other: information[sections.other]
    }
    const sectionDiv = {
        [sections.workExp]:
            (<div key="WorkExp" draggable>
                <div className='text-lg font-bold w-full border-b-4 border-black'>
                    {info.workExp.sectionTitle}
                </div>
                {info.workExp.details?.map((item) => (
                    <div key={item.workTitle} className='flex flex-col p-2'>
                        <span className='font-bold text-lg'>{item.workTitle}</span>
                        <span className='font-medium text-base text-blue-500'>{item.company}, {item.companyCity}, {item.companyCountry}</span>
                        <span className='font-medium text-base'>{item.workStartDate} to {item.workEndDate}</span>
                    </div>
                ))}
            </div>),
        [sections.education]: (
            <div key="Education" draggable>
                <div className='text-lg font-bold w-full border-b-4 border-black'>
                    {info.education.sectionTitle}
                </div>
                {info.education.details?.map((item) => (
                    <div key={item.degree} className='flex flex-col p-2'>
                        <span className='font-medium text-lg' >{item.degree}</span>
                        <span className='font-bold text-base text-blue-500'>{item.schoolName}</span>
                        <span className='font-medium text-xs'>{item.schoolLocation}</span>
                        <span className='font-medium text-base'>{item.schoolStartDate} to {item.schoolEndDate}</span>
                    </div>))}
            </div>
        ),
        [sections.project]: (
            <div key="project" draggable>
                <div className='text-lg font-bold w-full border-b-4 border-black'>
                    {info.project.sectionTitle}
                </div>
                {info.project.details?.map((item) => (
                    <div key={item.projectTitle} className='flex flex-col p-2'>
                        <span className='font-bold text-lg'>{item.projectTitle}</span>
                        <a className='font-medium underline text-base text-blue-500' href={item.projectLink}>{item.projectLink}</a>
                        <p className='font-medium text-base'>{item.projectSummary}</p>
                    </div>))}
            </div>
        ),
        [sections.summary]: (
            <div key="Summary" draggable>
                <div className='text-lg font-bold w-full border-b-4 border-black'>
                    {info.summary.sectionTitle}
                </div>
                <div className='p-2'>
                    <p>{info.summary.about}</p>
                </div>
            </div>
        ),
        [sections.skill]: (
            <div key="Skill" draggable>
                <div className='text-lg font-bold w-full border-b-4 border-black'>
                    {info.skill.sectionTitle}
                </div>
                <div className='flex gap-3 p-2'>
                    {info.skill.details.length>0&&info.skill.details?.map((item) => (
                        <span key={item.skill} className='bg-blue-300 text-center text-lg p-4 rounded-full' >{item.skill}</span>
                    ))}
                </div>
            </div>
        ),
        [sections.other]: (
            <div key="Other" draggable>
                <div className='text-lg font-bold w-full border-b-4 border-black'>
                    others
                </div>
                {info.other.details?.map((item) => (
                    <div key={item.platform} className='flex p-2'>
                        <span className='text-base font-semibold'>{item.platform} : </span>
                        <a className='text-base font-semibold text-blue-500 underline' href={item.platformLink}>{item.platformLink}</a>
                    </div>))}
            </div>
        ),
    }
    useEffect(() => {
        setcolumn([
            [sections.project, sections.education, sections.other],
            [sections.summary, sections.workExp, sections.skill,]
        ])
    }, [])

    return (
        <div className='flex flex-col min-w-[50%] w-3/4 p-5 min-[900px] shadow-lg'>
            <div className='flex flex-col gap-3'>
                <p className='text-6xl capitalize font-medium'>{info.basicInfo.detail.firstName} {info.basicInfo.detail.lastName}</p>
                <p className='text-lg capitalize font-medium text-blue-500'>{info.basicInfo.detail.title}</p>

                <div className='mt-7 flex gap-5 flex-1 gap-y-2'>
                    <a className='text-sm font-semibold text-blue-500 underline' href={info.basicInfo.detail.email}>{info.basicInfo.detail.email}</a>
                    <span className='text-sm font-semibold text-blue-500 underline'>{info.basicInfo.detail.phoneNumber}</span>
                    <span className='text-sm font-semibold text-blue-500 underline'>{info.basicInfo.detail.address}, {info.basicInfo.detail.city}, {info.basicInfo.detail.state}, {info.basicInfo.detail.zipCode}</span>
                </div>
            </div>
            <div className='flex gap-6'>
                <div className='flex flex-col gap-7 w-1/2 p-3'>
                    {column[0].map((item) =>
                        sectionDiv[item]
                    )}
                </div>
                <div className='flex flex-col gap-7 w-1/2 p-3'>
                    {column[1].map((item) =>
                        sectionDiv[item]
                    )}
                </div>
            </div>

        </div>
    )
}

export default Resume
