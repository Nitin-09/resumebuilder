import React, { useEffect } from 'react'

function Resume1(props) {
    const information = props.information
    useEffect(() => {
    }, [information])
    return (
        <div className='flex flex-col md:gap-1 items-center w-3/4 md:min-w-[70%] shadow-xl pt-1 border border-slate-100'>
            <div className='justify-end  bg-violet-900 pb-4 text-white w-full flex flex-col items-center h-32 font-mono font-bold'>
                <div className="flex flex-col">
                    <span className='text-3xl'>{information.BasicInfo.detail.firstName && information.BasicInfo.detail.lastName ? information.BasicInfo.detail.firstName + " " + information.BasicInfo.detail.lastName : "Your Name"}</span>
                    <span className='text-2xl'>{information.BasicInfo.detail.title ? information.BasicInfo.detail.title : "Title"}</span>
                </div>
            </div>
            <div className='bg-blue-100 h-fit flex p-3'>
                <div className='flex flex-col min-w-[43%] p-5'>
                    <span>{information.BasicInfo.detail.phoneNumber ? information.BasicInfo.detail.phoneNumber : "12345-67891"}</span>
                    <span>{information.BasicInfo.detail.address && information.BasicInfo.detail.city && information.BasicInfo.detail.state && information.BasicInfo.detail.zipCode ? information.BasicInfo.detail.address + ", " + information.BasicInfo.detail.city + ", " + information.BasicInfo.detail.state + ", " + information.BasicInfo.detail.zipCode : "full address"}</span>
                    <span>{information.BasicInfo.detail.email ? information.BasicInfo.detail.email : "123@gmail.com"}</span>
                    <span>{information.Other.details[0] ? information.Other.details[0].platformLink : "user/facebook.com"}</span>
                </div>
                <div className='bg-white w-3 m-3 rounded-lg'></div>
                <div className='p-3'>
                    <h1 className='font-bold'>Professional Summary</h1>
                    <p>{information.Summary.about ? information.Summary.about : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero ratione animi quas recusandae aliquid quos cum exercitationem tenetur numquam culpa. Quia unde minima laboriosam cupiditate deleniti tempora illum impedit pariatur repellat sit."}</p>
                </div>
            </div>

            <div className='bg-slate-300 h-fit w-full flex p-3'>
                <div className='flex flex-col min-w-[43%] p-5'>
                    <h1 className='font-bold '>EDUCATIONAL HISTORY</h1>
                    {information.Education.details[0]? information.Education.details.map((item, index) => (
                        <div key={`Education+${index}`} className='flex flex-col p-3'>
                            <span className='text-white font-mono font-bold text-lg'>{item.schoolName}</span>
                            <span>{item.degree}</span>
                            <span>{item.schoolStartDate + " to " + item.schoolEndDate}</span>
                        </div>)):(<div className='flex flex-col p-3'>
                        <span className='text-white font-mono font-bold text-lg'>Dhirubhai Ambani International School</span>
                        <span>Btech</span>
                        <span>May to 2020</span>
                    </div>)}
                </div>
                <div className='bg-white w-1 m-3 rounded-lg'></div>
                <div className='flex flex-col p-5'>
                    <h1 className='font-bold'>PROFESSIONAL HISTORY</h1>
                    {information.Education.details[0]? information.Education.details.map((item,index) => (
                        <div key={`WorkExperience+${index}`} className='flex flex-col p-3'>
                        <span className='text-white font-mono font-bold text-lg'>{item.company}</span>
                        <span>{item.workTitle}</span>
                        <span>{item.workStartDate + " to " + item.workEndDate}</span>
                    </div>)):(<div className='flex flex-col p-3'>
                        <span className='text-white font-mono font-bold text-lg'>Google</span>
                        <span>Web Developer</span>
                        <span>May to 2020</span>
                    </div>)}
                </div>
            </div>
            <div className='bg-blue-100 h-fit w-full flex flex-col p-7'>
                <h1 className='font-bold'>SKILLS</h1>
                <div className='flex gap-3 m-2'>
                {information.Education.details[0]? information.Education.details.map((item,index) => (
                    <span key={`Skill+${index}`} className='bg-blue-300 text-center text-lg p-8 rounded-full' >{item.skill}</span>)):
                    <span className='bg-blue-300 text-center text-lg p-8 rounded-full' >JAVA</span>}
                </div>
            </div>
        </div>
    )
}

export default Resume1
