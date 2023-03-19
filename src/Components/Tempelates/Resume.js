import React, { useEffect } from 'react'
import Img from './Profile_Images/profile1.png'

function Resume(props) {
    const { tid, Information } = props;
    useEffect(() => {
    }, [Information])

    const sectionDiv = {
        ["1--3B-I-A5_6BGOkwTaU-eMZpnDNP9pY6"]: {
            ["profile"]: (
                <div className='flex flex-col gap-3 w-full'>
                    <div className='flex items-center'>
                        <div className='basis-4/5'>
                            <p className='text-6xl capitalize font-medium'>{Information?.profile[0]?.firstName ? Information?.profile[0]?.firstName : "Jonathan"} {Information?.profile[0]?.lastName ? Information?.profile[0]?.lastName : "Jonhson"}</p>
                            <p className='text-lg capitalize font-medium text-blue-500'>{Information?.profile[0]?.title ? Information?.profile[0]?.title : "Computer Application Specialist"}</p>
                        </div>
                        <div className='mt-5'>
                            <img className='h-52 rounded-md' src={Img} alt="" />
                        </div>
                    </div>

                    <div className='mt-7 flex gap-5 flex-1 gap-y-2'>
                        <a className='text-sm font-semibold text-blue-500 underline' href=''>{Information?.profile[0]?.email ? Information?.profile[0]?.email : "Jonathan.1@gmail.com"}</a>
                        <span className='text-sm font-semibold text-blue-500 underline'>{Information?.profile[0]?.phoneNumber ? Information?.profile[0]?.phoneNumber : "(053) 123 4567"}</span>
                        <span className='text-sm font-semibold text-blue-500 underline'>{Information?.profile[0]?.address ? Information?.profile[0]?.address : "4181 Faitrade Road Aswain Wisconsin"}{Information?.profile[0]?.city ? ", " + Information?.profile[0]?.city : ""}{Information?.profile[0]?.state ? ", " + Information?.profile[0]?.state : ""}{Information?.profile[0]?.zipCode ? ", " + Information?.profile[0]?.zipCode : ""}</span>
                    </div>
                </div>),
            ["workExperience"]:
                (
                    <div>
                        <div className='text-lg font-bold w-full border-b-4 border-black'>
                            {Information?.workExperience[0]?.details[0]?.sectionTitleWorkExp ? Information?.workExperience[0]?.details[0]?.sectionTitleWorkExp : "Work Experience"}
                        </div>
                        {Information?.workExperience[0]?.details.length > 0 ?
                            Information?.workExperience[0]?.details.map((element, index) => {
                                return (
                                    <div key={"Work" + index} className='flex flex-col p-2'>
                                        <span className='font-bold text-lg'>{element.position}</span>
                                        <span className='font-medium text-base text-blue-500'>{element.companyName}</span>
                                        <span className='font-medium text-base'>{element.workStartDate} - {element.workEndDate}</span>
                                    </div>
                                )
                            }) : (
                                <>
                                    <div className='flex flex-col p-2'>
                                        <span className='font-bold text-lg'>App Developer</span>
                                        <span className='font-medium text-base text-blue-500'>Apps Center lowa</span>
                                        <span className='font-medium text-base'>05-2019 to 07-2019</span>
                                    </div>
                                    <div className='flex flex-col p-2'>
                                        <span className='font-bold text-lg'>Graphic Designer</span>
                                        <span className='font-medium text-base text-blue-500'>Google LLC</span>
                                        <span className='font-medium text-base'>04-2020 to 06-2020</span>
                                    </div>
                                    <div className='flex flex-col p-2'>
                                        <span className='font-bold text-lg'>REACT.JS Developer</span>
                                        <span className='font-medium text-base text-blue-500'>UI | UX Designer OJT</span>
                                        <span className='font-medium text-base'>11-2020 to 12-2020</span>
                                    </div>
                                </>)
                        }
                    </div>
                ),
            ["education"]: (
                <div>
                    <div className='text-lg font-bold w-full border-b-4 border-black'>
                        {Information?.education[0]?.details[0]?.sectionTitleEducation ? Information?.education[0]?.details[0]?.sectionTitleEducation : "Education"}
                    </div>
                    {Information?.education[0]?.details.length > 0 ?
                        Information?.education[0]?.details.map((element, index) => {
                            return (
                                <div key={'education' + index} className='flex flex-col p-2'>
                                    <span className='font-medium text-lg' >{element.degree}, {element.fieldOfStudy}</span>
                                    <span className='font-bold text-base text-blue-500'>{element.schoolName}</span>
                                    <span className='font-medium text-base'>{element.schoolStartDate} - {element.schoolEndDate}</span>
                                </div>
                            )
                        }) : (
                            <>
                                <div className='flex flex-col p-2'>
                                    <span className='font-medium text-lg' >High School</span>
                                    <span className='font-bold text-base text-blue-500'>Wisconsin State University</span>
                                    <span className='font-medium text-base'>2018 to 2019</span>
                                </div>
                                <div className='flex flex-col p-2'>
                                    <span className='font-medium text-lg' >Graduation</span>
                                    <span className='font-bold text-base text-blue-500'>Southwinds State School</span>
                                    <span className='font-medium text-base'>2019 to 2020</span>
                                </div>
                            </>)}
                </div>
            ),
            ["project"]: (
                <div>
                    <div className='text-lg font-bold w-full border-b-4 border-black'>
                        {Information?.project[0]?.details[0]?.sectionTitleProject ? Information?.project[0]?.details[0]?.sectionTitleProject : "Project"}
                    </div>
                    {Information?.project[0]?.details.length > 0 ?
                        Information?.project[0]?.details.map((element, index) => {
                            return (
                                <div key={'project' + index} className='flex flex-col p-2'>
                                    <span className='font-bold text-lg'>{element.projectName}</span>
                                    <a className='font-medium underline text-base text-blue-500' href={element.projectLink}>{element.projectLink}</a>
                                    <p className='font-medium text-base'>{element.projectDescription}</p>
                                </div>

                            )
                        }) : (
                            <>
                                <div className='flex flex-col p-2'>
                                    <span className='font-bold text-lg'>Resume Builder</span>
                                    <a className='font-medium underline text-base text-blue-500' href="">github.com</a>
                                    <p className='font-medium text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis tenetur et facere quas in deserunt voluptas excepturi dolorem sequi quae.</p>
                                </div>
                                <div className='flex flex-col p-2'>
                                    <span className='font-bold text-lg'>Sudoku Game</span>
                                    <a className='font-medium underline text-base text-blue-500' href="">github.com</a>
                                    <p className='font-medium text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis tenetur et facere quas in deserunt voluptas excepturi dolorem sequi quae.</p>
                                </div>
                            </>)}
                </div>
            ),
            ["summary"]: (
                <div>
                    <div className='text-lg font-bold w-full border-b-4 border-black'>
                        {Information?.summary[0]?.sectionTitleSummary
                            ? Information?.summary[0]?.sectionTitleSummary
                            : "About"}
                    </div>
                    <div className='p-2'>
                        <p>{Information?.summary[0]?.aboutMe
                            ? Information?.summary[0]?.aboutMe
                            : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis et perspiciatis, optio consequuntur rem adipisci laudantium itaque qui quibusdam labore earum sequi libero ea odio, amet asperiores officiis. Harum eaque suscipit nihil adipisci aperiam. Lorem ipsum dolor, sit amet consectetur adidi quo inventore. Unde animi tempore rerum consequuntur temporibus doloribus odit."}</p>
                    </div>
                </div>
            ),
            ["skills"]: (
                <div>
                    <div className='text-lg font-bold w-full border-b-4 border-black'>
                        {Information?.skills[0]?.details[0]?.sectionTitleSkills ? Information?.skills[0]?.details[0]?.sectionTitleSkills : "Skills"}
                    </div>
                    <div className='flex gap-3 p-2 flex-wrap'>
                        {Information?.skills[0]?.details.length > 0 ?
                            Information?.skills[0]?.details.map((element, index) => {
                                return (
                                    <span className='bg-blue-300 text-center text-lg p-4 rounded-full' key={'skill' + index}>{element.skillName}</span>
                                )
                            }) : (
                                <>
                                    <span className='bg-blue-300 text-center text-lg p-4 rounded-full' >Java</span>
                                    <span className='bg-blue-300 text-center text-lg p-4 rounded-full' >Python</span>
                                    <span className='bg-blue-300 text-center text-lg p-4 rounded-full' >C/C++</span>
                                    <span className='bg-blue-300 text-center text-lg p-4 rounded-full' >React</span>
                                    <span className='bg-blue-300 text-center text-lg p-4 rounded-full' >HTML</span>
                                </>)}
                    </div>
                </div>
            ),
            ["others"]: (
                <div>
                    <div className='text-lg font-bold w-full border-b-4 border-black'>
                        {Information?.others[0]?.details[0]?.sectionTitleOthers ? Information?.others[0]?.details[0]?.sectionTitleOthers : "Social Links"}
                    </div>
                    {Information?.others[0]?.details.length > 0 ?
                        Information?.others[0]?.details.map((element, index) => {
                            return (
                                <div key={'other' + index} className='flex p-2'>
                                    <span className='text-base font-semibold px-2'>{element.label} : </span>
                                    <a className='text-base font-semibold text-blue-500 underline' >{element.value}</a>
                                </div>
                            )
                        }) : (
                            <>
                                <div className='flex p-2'>
                                    <span className='text-base font-semibold px-2'>Linkdln : </span>
                                    <a className='text-base font-semibold text-blue-500 underline' >Url</a>
                                </div>
                                <div className='flex p-2'>
                                    <span className='text-base font-semibold px-2'>Facebook : </span>
                                    <a className='text-base font-semibold text-blue-500 underline' >Url</a>
                                </div>
                                <div className='flex p-2'>
                                    <span className='text-base font-semibold px-2'>Facebook : </span>
                                    <a className='text-base font-semibold text-blue-500 underline' >Url</a>
                                </div>
                                <div className='flex p-2'>
                                    <span className='text-base font-semibold px-2'>Facebook : </span>
                                    <a className='text-base font-semibold text-blue-500 underline' >Url</a>
                                </div>
                            </>)}
                </div>
            ),
        },
        ["1-6AQBNc2pmoNbf5YmvveNJhxCCPm5gkm"]: {
            ["profile"]: (
                <>
                    <div className='mt-20 z-20 relative flex flex-col border-2 border-emerald-500 bg-white w-[570px] h-24 items-center justify-center'>
                        <p className='text-4xl capitalize font-medium text-emerald-500'>{Information?.profile[0]?.firstName ? Information?.profile[0]?.firstName : "Jonathan"} {Information?.profile[0]?.lastName ? Information?.profile[0]?.lastName : "Jonhson"}</p>
                        <p className='text-base capitalize font-medium text-black'>{Information?.profile[0]?.title ? Information?.profile[0]?.title : "Computer Application Specialist"}</p>
                    </div>
                    <div className='p-4 flex flex-col gap-3'>
                        <div className='flex flex-col gap-2'>
                            <span className='text-white font-bold text-lg'>Contact</span>
                            <hr />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-white font-semibold text-base'>Address</span>
                            <span className='text-sm capitalize font-medium text-white'>{Information?.profile[0]?.address ? Information?.profile[0]?.address : "4181 Faitrade Road Aswain Wisconsin"}{Information?.profile[0]?.city ? ", " + Information?.profile[0]?.city : ""}{Information?.profile[0]?.state ? ", " + Information?.profile[0]?.state : ""}{Information?.profile[0]?.zipCode ? ", " + Information?.profile[0]?.zipCode : ""} </span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-white font-semibold text-base'>Phone</span>
                            <span className='text-sm font-medium text-white'>{Information?.profile[0]?.phoneNumber ? Information?.profile[0]?.phoneNumber : "(053) 123 4567"}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-white font-semibold text-base'>Email</span>
                            <a className='text-sm font-medium text-white' href='/'>{Information?.profile[0]?.email ? Information?.profile[0]?.email : "Jonathan.1@gmail.com"}</a>
                        </div>
                    </div>
                </>),
            ["workExperience"]: (<>
                <div className='flex flex-col gap-y-1'>
                    <div className='flex flex-col w-full'>
                        <span className='text-emerald-500 font-bold text-lg'>{Information?.workExperience[0]?.details[0]?.sectionTitleWorkExp ? Information?.workExperience[0]?.details[0]?.sectionTitleWorkExp : "Work Experience"}</span>
                        <hr className='border-2 bg-emerald-500 border-emerald-500' />
                    </div>
                    {Information?.workExperience[0]?.details.length > 0 ?
                        Information?.workExperience[0]?.details.map((element, index) => {
                            return (
                                <div key={"Work" + index} className='mt-4'>
                                    <div className='flex justify-between'>
                                        <span className='font-semibold text-base text-black'>{element.companyName}</span>
                                        <span className='font-semibold text-lg text-emerald-500'>{element.workStartDate} - {element.workEndDate}</span>
                                    </div>
                                    <span className='font-normal text-base text-gray-400'>{element.position}</span>
                                </div>
                            )
                        }) : (
                            <>
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
                            </>)}
                </div>
            </>
            ),
            ["education"]: (
                <>
                    <div className='flex flex-col gap-y-1'>
                        <div className='flex flex-col w-full'>
                            <span className='text-emerald-500 font-bold text-lg'>{Information?.education[0]?.details[0]?.sectionTitleEducation ? Information?.education[0]?.details[0]?.sectionTitleEducation : "Education"}</span>
                            <hr className='border-2 bg-emerald-500 border-emerald-500' />
                        </div>
                        {Information?.education[0]?.details.length > 0 ?
                            Information?.education[0]?.details.map((element, index) => {
                                return (
                                    <div key={'education' + index} className='mt-2'>
                                        <div className='flex justify-between'>
                                            <span className='font-semibold text-base text-black'>{element.schoolName}</span>
                                            <span className='font-semibold text-lg text-emerald-500'>{element.schoolStartDate} - {element.schoolEndDate}</span>
                                        </div>
                                        <span className='font-normal text-base text-gray-400'>{element.degree}, {element.fieldOfStudy}</span>
                                    </div>
                                )
                            }) : (
                                <>
                                    <div className='mt-2'>
                                        <div className='flex justify-between'>
                                            <span className='font-semibold text-base text-black'>Wisconsin State University</span>
                                            <span className='font-semibold text-lg text-emerald-500'>2018 - 2019</span>
                                        </div>
                                        <span className='font-normal text-base text-gray-400'>High School</span>
                                    </div>
                                    <div className='mt-2'><div className='flex justify-between'>
                                        <span className='font-semibold text-base text-black'>Southwinds State School</span>
                                        <span className='font-semibold text-lg text-emerald-500'>2020 - 2021</span>
                                    </div>
                                        <span className='font-normal text-base text-gray-400'>Graduation</span>
                                    </div>
                                </>
                            )}
                    </div>
                </>
            ),
            ["project"]: (
                <div className='flex flex-col gap-y-1'>
                    <div className='flex flex-col w-full'>
                        <span className='text-emerald-500 font-bold text-lg'>{Information?.project[0]?.details[0]?.sectionTitleProject ? Information?.project[0]?.details[0]?.sectionTitleProject : "Project"}</span>
                        <hr className='border-2 bg-emerald-500 border-emerald-500' />
                    </div>
                    {Information?.project[0]?.details.length > 0 ?
                        Information?.project[0]?.details.map((element, index) => {
                            return (
                                <div key={'project' + index} className='mt-2'>
                                    <div className='flex justify-between'>
                                        <span className='font-semibold text-base text-black '>{element.projectName}</span>
                                        <a href={element.projectLink} className='break-words font-semibold text-md text-emerald-500 w-40'>{element.projectLink}</a>
                                    </div>
                                    <span className='font-normal text-base text-gray-400'>{element.projectDescription}</span>
                                </div>
                            )
                        }) : (
                            <>
                                <div className='mt-2'>
                                    <div className='flex justify-between'>
                                        <span className='font-semibold text-base text-black'>Resume Builder</span>
                                        <span className='font-semibold text-lg text-emerald-500'>github.com</span>
                                    </div>
                                    <span className='font-normal text-base text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempora quisquam nesciunt nam facere rerum provident nulla fugiat? Quibusdam, sequi.</span>
                                </div>
                            </>)}
                </div>
            ),
            ["summary"]: (
                <>

                    <div className='flex flex-col w-full'>
                        <span className='text-emerald-500 font-bold text-lg'>{Information?.summary[0]?.sectionTitleSummary
                            ? Information?.summary[0]?.sectionTitleSummary
                            : "About"}</span>
                        <hr className='border-2 bg-emerald-500 border-emerald-500' />
                    </div>
                    <div className='pt-1'>
                        <p className='break-words text-justify'>{Information?.summary[0]?.aboutMe
                            ? Information?.summary[0]?.aboutMe
                            : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis et perspiciatis, optio consequuntur rem adipisci laudantium itaque qui quibusdam labore earum sequi libero ea odio, amet asperiores officiis. Harum eaque suscipit nihil adipisci aperiam. Lorem ipsum dolor, sit amet consectetur adidi quo inventore. Unde animi tempore rerum consequuntur temporibus doloribus odit."}</p>
                    </div>
                </>),
            ["skill"]: (
                <>
                    <div className='p-4 flex flex-col gap-3'>
                        <div className='flex flex-col gap-2'>
                            <span className='text-white font-bold text-lg'>{Information?.skills[0]?.details[0]?.sectionTitleSkills ? Information?.skills[0]?.details[0]?.sectionTitleSkills : "Skills"}</span>
                            <hr />
                        </div>
                        <div className='flex flex-col gap-5 text-base font-medium text-white'>
                            <div className='flex flex-col gap-5 text-base font-medium text-white'>
                                {Information?.skills[0]?.details.length > 0 ?
                                    Information?.skills[0]?.details.map((element, index) => {
                                        return (
                                            <span key={'skill' + index}>{element.skillName}</span>
                                        )
                                    }) : (
                                        <>
                                            <span>Dreamweaver</span>
                                            <span>Photoshop</span>
                                            <span>Flash</span>
                                            <span>Wordpress</span>
                                        </>)}
                            </div>
                        </div>
                    </div>
                </>
            ),
            ["other"]: (
                <div className='p-4 flex flex-col gap-3'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-white font-bold text-lg'>{Information?.others[0]?.details[0]?.sectionTitleOthers ? Information?.others[0]?.details[0]?.sectionTitleOthers : "Social Links"}</span>
                        <hr />
                    </div>
                    <div className='flex flex-col gap-5 text-base font-medium text-white'>
                        <div className='flex flex-col gap-5 text-base font-medium text-white'>
                            {Information?.others[0]?.details.length > 0 ?
                                Information?.others[0]?.details.map((element, index) => {
                                    return (
                                        <div key={'other' + index}>
                                            <span>{element.label} : </span>
                                            <span className='underline'>{element.value}</span>
                                        </div>
                                    )
                                }) : (
                                    <>
                                        <div>
                                            <span>Facebook : </span>
                                            <span className='underline'>facebook.com</span>
                                        </div>
                                        <div>
                                            <span>Facebook : </span>
                                            <span className='underline'>facebook.com</span>
                                        </div>
                                        <div>
                                            <span>Facebook : </span>
                                            <span className='underline'>facebook.com</span>
                                        </div>
                                    </>)}
                        </div>
                    </div>
                </div>
            ),
        }
    }
    const display = {
        ["1--3B-I-A5_6BGOkwTaU-eMZpnDNP9pY6"]: (
            <div id='print' className='flex flex-col shadow-md bg-stone-300 p-3 w-[21cm]'>
                {sectionDiv["1--3B-I-A5_6BGOkwTaU-eMZpnDNP9pY6"].profile}
                <div className='flex gap-6 '>
                    <div className=' flex flex-col gap-7 w-1/2 p-3 '>
                        {sectionDiv["1--3B-I-A5_6BGOkwTaU-eMZpnDNP9pY6"].education}
                        {sectionDiv["1--3B-I-A5_6BGOkwTaU-eMZpnDNP9pY6"].workExperience}
                        {sectionDiv["1--3B-I-A5_6BGOkwTaU-eMZpnDNP9pY6"].skills}


                    </div>
                    <div className='flex flex-col gap-7 w-1/2 p-3'>
                        {sectionDiv["1--3B-I-A5_6BGOkwTaU-eMZpnDNP9pY6"].summary}
                        {sectionDiv["1--3B-I-A5_6BGOkwTaU-eMZpnDNP9pY6"].project}
                        {sectionDiv["1--3B-I-A5_6BGOkwTaU-eMZpnDNP9pY6"].others}
                    </div>
                </div>
            </div>
        ),
        ["1-6AQBNc2pmoNbf5YmvveNJhxCCPm5gkm"]: (
            <div id='print' className='flex h-full'>
                <div className='bg-emerald-500 w-[32%]'>
                    {sectionDiv["1-6AQBNc2pmoNbf5YmvveNJhxCCPm5gkm"].profile}
                    {sectionDiv["1-6AQBNc2pmoNbf5YmvveNJhxCCPm5gkm"].skill}
                    {sectionDiv["1-6AQBNc2pmoNbf5YmvveNJhxCCPm5gkm"].other}
                </div>
                <div className='w-full bg-white px-5 flex flex-col gap-y-2'>
                    <div className='mt-5 self-end'>
                        <img className='h-52 rounded-md' src={Img} alt="" />
                    </div>
                    {sectionDiv["1-6AQBNc2pmoNbf5YmvveNJhxCCPm5gkm"].summary}
                    {sectionDiv["1-6AQBNc2pmoNbf5YmvveNJhxCCPm5gkm"].workExperience}
                    {sectionDiv["1-6AQBNc2pmoNbf5YmvveNJhxCCPm5gkm"].education}
                    {sectionDiv["1-6AQBNc2pmoNbf5YmvveNJhxCCPm5gkm"].project}
                </div>
            </div>
        )
    }
    return (
        <>
            {display[tid]}
        </>
    )
}

export default Resume
