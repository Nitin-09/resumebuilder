import React from 'react'
import { useEffect } from 'react';
import Img from './Profile_Images/profile1.png'
import Img2 from './Profile_Images/profile2.png'

function Resume(props) {
    const { tid, Information } = props;
    useEffect(() => {
    }, [Information])

    const Resume = {
        // eslint-disable-next-line
        ["6444abed5ef328290f190143"]: (<div className='grid grid-cols-2 h-full lg:p-8 bg-white'>
            <div className='h-full flex flex-col gap-2 lg:gap-5 border-r-2'>
                <div className='relative p-4 w-[170px] h-[170px] lg:w-[340px] lg:h-[340px]'>
                    <div className='absolute w-[120px] h-[120px] lg:w-[280px] lg:h-[280px] border-8 border-white m-2 lg:m-3'></div>
                    <img className='w-full h-full' src={Information.profile[0].URL ? Information.profile[0].URL : Img2} alt="" />
                </div>
                {/* Contacts */}
                <div className='flex flex-col gap-3 lg:gap-5'>
                    <div className='flex items-center'>
                        <h2 className='font-bold px-5 text-xs lg:text-base'>CONTACT</h2>
                        <div className='border-b border-black w-[40%] lg:w-[60%]'></div>
                    </div>
                    <div className='flex flex-col justify-start px-5 gap-3'>
                        <div className='flex items-center'>
                            <div className='w-5 h-5 lg:w-7 lg:h-7 text-xs lg:text-base bg-black rounded-full text-white flex justify-center items-center'><i className="fa-sharp fa-solid fa-phone-volume"></i></div>
                            <span className='ml-4 text-xs lg:text-lg'>{Information.profile[0].phoneNumber ? Information.profile[0].phoneNumber : "+123-456-7890"}</span>
                        </div>
                        <div className='flex items-center'>
                            <div className='w-5 h-5 lg:w-7 lg:h-7 text-xs lg:text-base bg-black rounded-full text-white flex justify-center items-center'><i className="fa-sharp fa-solid fa-envelope"></i></div>
                            <span className='ml-4 text-xs lg:text-lg'>{Information.profile[0].email ? Information.profile[0].email : "isabel.12"}</span>
                        </div>
                        <div className='flex items-center'>
                            <div className='w-5 h-5 lg:w-7 lg:h-7 text-xs lg:text-base bg-black rounded-full text-white flex justify-center items-center'><i className="fa-solid fa-location-dot"></i></div>
                            <span className='ml-4 text-xs lg:text-lg'>{Information.profile[0].address ? Information.profile[0].address : "ABC Street, Washington"}</span>
                        </div>
                    </div>
                </div>
                {/* Skills */}
                <div className='flex flex-col gap-3 lg:gap-5'>
                    <div className='flex items-center'>
                        <h2 className='font-bold px-5 text-xs lg:text-base'>MY SKILLS</h2>
                        <div className='border-b border-black  w-[40%] lg:w-[60%]'></div>
                    </div>
                    <div className='grid grid-cols-2 justify-start px-5 gap-3'>
                        {Information?.skills[0]?.details.length > 0 ? Information.skills[0].details.map((element) => {
                            return (
                                <div className='flex flex-col justify-center gap-2'>
                                    <span className='text-xs lg:text-lg capitalize'>{element.skillName}</span>
                                    <div className='flex gap-2'>
                                        <div className={`w-2 h-2 lg:w-3 lg:h-3 ${element.skillRating > 1 ? "bg-blue-400" : "bg-gray-400"}  `}></div>
                                        <div className={`w-2 h-2 lg:w-3 lg:h-3 ${element.skillRating > 2 ? "bg-blue-400" : "bg-gray-400"}  `}></div>
                                        <div className={`w-2 h-2 lg:w-3 lg:h-3 ${element.skillRating > 3 ? "bg-blue-400" : "bg-gray-400"}  `}></div>
                                        <div className={`w-2 h-2 lg:w-3 lg:h-3 ${element.skillRating > 4 ? "bg-blue-400" : "bg-gray-400"}  `}></div>
                                        <div className={`w-2 h-2 lg:w-3 lg:h-3 ${element.skillRating > 5 ? "bg-blue-400" : "bg-gray-400"}  `}></div>
                                    </div>
                                </div>
                            )
                        })
                            : (
                                <>
                                    <div className='flex flex-col justify-center gap-2'>
                                        <span className='text-xs lg:text-lg'>Project Management</span>
                                        <div className='flex gap-2'>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center gap-2'>
                                        <span className='text-xs lg:text-lg'>Problem Solving</span>
                                        <div className='flex gap-2'>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center gap-2'>
                                        <span className='text-xs lg:text-lg'>Creativity</span>
                                        <div className='flex gap-2'>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center gap-2'>
                                        <span className='text-xs lg:text-lg'>Leadership</span>
                                        <div className='flex gap-2'>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center gap-2'>
                                        <span className='text-xs lg:text-lg'>Team Management</span>
                                        <div className='flex gap-2'>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center gap-2'>
                                        <span className='text-xs lg:text-lg'>Profficient English Speaking</span>
                                        <div className='flex gap-2'>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                            <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                        </div>
                                    </div>
                                </>)}
                    </div>
                </div>
                <div className='flex flex-col gap-3 lg:gap-5'>
                    <div className='flex items-center'>
                        <h2 className='font-bold px-5 text-xs lg:text-base'>PROJECT</h2>
                        <div className='border-b border-black w-[40%] lg:w-[60%]'></div>
                    </div>
                    <div className='flex flex-col px-5 gap-3'>
                        {Information?.project[0]?.details.length > 0 ? Information.project[0].details.map((element) => {
                            return (
                                <div>
                                    <div className='flex gap-4'>
                                        <span className='text-xs lg:text-sm font-semibold'>{element.projectName}</span>
                                        <span className='text-xs lg:text-sm font-bold lg:font-semibold text-blue-400 whitespace-nowrap overflow-x-hidden'>{element.projectLink}</span>
                                    </div>
                                    <ul className='text-xs list-disc'>
                                        {element.projectDescription}
                                    </ul>
                                </div>

                            )
                        }) : <>
                            <div>
                                <div className='flex gap-4'>
                                    <span className='text-xs lg:text-base font-semibold'>Really Great Project</span>
                                    <span className='text-xs lg:text-base font-bold lg:font-semibold text-blue-400'>www.github.com</span>
                                </div>
                                <ul className='text-xs list-disc'>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </div>
                            <div>
                                <div className='flex gap-4'>
                                    <span className='text-xs lg:text-base font-semibold'>Really Great Project</span>
                                    <span className='text-xs lg:text-base font-bold lg:font-semibold text-blue-400'>www.github.com</span>
                                </div>
                                <ul className='text-xs list-disc'>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </div>
                        </>}
                    </div>
                </div>
            </div>
            <div className='h-full flex flex-col gap-5 lg:gap-10 p-3 lg:px-5'>
                {/* profile */}
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col'>
                        <span className='text-3xl lg:text-5xl'>{Information.profile[0].firstName ? Information.profile[0].firstName : "ISABEL"}</span>
                        <span className='text-3xl lg:text-5xl font-bold'>{Information.profile[0].lastName ? Information.profile[0].lastName : "MERCADO"}</span>
                    </div>
                    <span className='bg-gray-300 p-2 text-sm lg:text-xl w-fit lg:px-4'>{Information.profile[0].title ? Information.profile[0].title : "CREATIVE DESIGNER"}</span>
                </div>
                {/* Profile */}
                <div className='flex flex-col lg:gap-3 gap-1'>
                    <div className='flex items-center'>
                        <h2 className='font-bold pr-5 text-xs lg:text-base'>PROFILE</h2>
                        <div className='border-b border-black w-[80%]'></div>
                    </div>
                    <div className='flex flex-col justify-start lg:gap-1'>
                        <div className='flex items-center'>
                            <span className='text-xs lg:text-sm'>{Information.summary[0].aboutMe ? Information.summary[0].aboutMe : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet dicta quos nemo animi quod dolorum velit. Veniam sit dolores consectetur, ipsum amet dignissimos, alias natus"}</span>
                        </div>
                    </div>
                </div>
                {/* Experience */}
                <div className='flex flex-col lg:gap-5 gap-1'>
                    <div className='flex items-center'>
                        <h2 className='font-bold pr-5 text-xs lg:text-base'>EXPERIENCE</h2>
                        <div className='border-b border-black w-[80%]'></div>
                    </div>
                    {Information?.workExperience[0]?.details.length > 0 ? Information.workExperience[0].details.map((element) => {
                        return (
                            <div className='flex flex-col justify-start lg:gap-3'>
                                <div className='flex flex-col justify-center lg:gap-2'>
                                    <span className='text-sm lg:text-lg font-bold lg:font-semibold'>{element.companyName}</span>
                                    <div className='flex flex-col justify-center' >
                                        <span className='text-xs font-semibold'>{element.position}</span>
                                        <span className='text-xs font-semibold'>{element.workStartDate} - {element.workEndDate}</span>
                                    </div>
                                    <ul className='text-xs list-disc lg:px-4 px-2'>
                                        {element.workDescription}
                                    </ul>
                                </div>
                            </div>
                        )
                    }) : <>
                        <div className='flex flex-col justify-start lg:gap-3'>
                            <div className='flex flex-col justify-center lg:gap-2'>
                                <span className='text-sm lg:text-lg font-bold lg:font-semibold'>Really Great Company</span>
                                <div className='flex flex-col justify-center' >
                                    <span className='text-xs font-semibold'>Art Director</span>
                                    <span className='text-xs font-semibold'>Oct 2020 - Present</span>
                                </div>
                                <ul className='text-xs list-disc lg:px-4 px-2'>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-col justify-start lg:gap-3'>
                            <div className='flex flex-col justify-center lg:gap-2'>
                                <span className='text-sm lg:text-lg font-bold lg:font-semibold'>Really Great Company</span>
                                <div className='flex flex-col justify-center' >
                                    <span className='text-xs font-semibold'>Project Manager</span>
                                    <span className='text-xs font-semibold'>Sep 2010 - Aug 2020</span>
                                </div>
                                <ul className='text-xs list-disc lg:px-4 px-2'>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </div>
                        </div>
                    </>}


                </div>
                {/* Education */}
                <div className='flex flex-col lg:gap-5 gap-1s'>
                    <div className='flex items-center'>
                        <h2 className='font-bold pr-5 text-xs lg:text-base'>Education</h2>
                        <div className='border-b border-black w-[80%]'></div>
                    </div>
                    {Information?.education[0]?.details.length > 0 ? Information.education[0].details.map((element) => {
                        return (
                            <div className='flex gap-3'>
                                <span className='text-xs lg:text-lg font-semibold'>{element.schoolStartDate.substring(0, 4)} - {element.schoolEndDate !== 'Present' ? element.schoolEndDate.substring(0, 4) : element.schoolEndDate}</span>
                                <div className='flex flex-col'>
                                    <span className='text-xs lg:text-lg font-bold lg:font-semibold'>{element.schoolName}</span>
                                    <span className='text-xs'>{element.degree}, {element.fieldOfStudy}</span>
                                </div>
                            </div>
                        )
                    }) : <> <div className='flex gap-3'>
                        <span className='text-xs lg:text-lg font-semibold'>2011</span>
                        <div className='flex flex-col'>
                            <span className='text-xs lg:text-lg font-bold lg:font-semibold'>Really Great School</span>
                            <span className='text-xs'>Bachelor of Arts in Multimedia Arts, 2012</span>
                        </div>
                    </div>
                        <div className='flex gap-3'>
                            <span className='text-xs lg:text-lg font-semibold'>2011</span>
                            <div className='flex flex-col'>
                                <span className='text-xs lg:text-lg font-bold lg:font-semibold'>Really Great Company</span>
                                <span className='text-xs'>High School Graduate Diploma, 2009</span>
                            </div>
                        </div></>}

                </div>
            </div>
        </div >),
        ["6448eba23a1d446b623a8812"]:
            (<div className='flex flex-col justify-end h-full'>
                <div className='h-[20vh] bg-[#9f0f0f] flex px-4'>
                    <div className='w-[50%]'>
                        <img className='m-7 h-48 w-48 rounded-full' src={Information.profile[0].URL ? Information.profile[0].URL : Img} alt="" />
                    </div>
                    <div className='flex flex-col justify-center w-[70%]'>
                        <span className='text-4xl font-extrabold text-white'>{Information.profile[0].firstName ? Information.profile[0].firstName : "HOWARD"} {Information.profile[0].lastName ? Information.profile[0].lastName : "ONG"} </span>
                        <span className='text-2xl font-semibold text-white'>{Information.profile[0].title ? Information.profile[0].title : "Financial Analyst"}</span>
                    </div>
                </div>
                <div className='flex h-full'>
                    <div className='px-16 pt-28 w-[50%] flex flex-col gap-3'>
                        <div>
                            <h1 className='text-[#9f0f0f] font-bold text-lg'>My Contact</h1>
                            <hr className=' border-b-2 border-[#9f0f0f] mt-2' />
                            <div className='flex flex-col gap-2 mt-2'>
                                <div className='flex items-center'>
                                    <i className="fa-sharp fa-solid fa-phone-volume"></i>
                                    <span className='ml-4 text-xs lg:text-base'>{Information.profile[0].phoneNumber ? Information.profile[0].phoneNumber : "+123-456-7890"}</span>
                                </div>
                                <div className='flex items-center'>
                                    <i className="fa-sharp fa-solid fa-envelope"></i>
                                    <span className='ml-4 text-xs lg:text-base'>{Information.profile[0].email ? Information.profile[0].email : "isabel.12"}</span>
                                </div>
                                <div className='flex items-center'>
                                    <i className="fa-solid fa-location-dot"></i>
                                    <span className='ml-4 text-xs lg:text-base'>{Information.profile[0].address ? Information.profile[0].address : "ABC Street, Washington"}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-[#9f0f0f] font-bold text-lg'>Skills</h1>
                            <hr className=' border-b-2 border-[#9f0f0f] mt-2' />
                            <div className='flex flex-col gap-2 mt-2'>
                                <ul className='list-disc px-4'>
                                    {Information?.skills[0]?.details.length > 0 ? Information.skills[0].details.map((element) => {
                                        return (
                                            <li className='capitalize'>{element.skillName}</li>
                                        )
                                    })
                                        : (
                                            <>
                                                <li>Financial modeling and reporting</li>
                                                <li>Data mining and analysis</li>
                                                <li>Financial accounting</li>
                                                <li>Business valuation</li>
                                                <li>Advanced SAS proficiency</li>
                                            </>)}

                                </ul>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-[#9f0f0f] font-bold text-lg'>Education</h1>
                            <hr className=' border-b-2 border-[#9f0f0f] mt-2' />
                            <div className='flex flex-col gap-2 mt-2'>
                                <ul className='list-disc px-4'>
                                    {Information?.education[0]?.details.length > 0 ? Information.education[0].details.map((element) => {
                                        return (
                                            <li className='mb-4'>{element.schoolName}
                                                <br />
                                                <span className='italic'>{element.degree}, {element.fieldOfStudy}</span>
                                                <br />
                                                <span>Completed in {element.schoolEndDate}</span>
                                            </li>
                                        )
                                    })
                                        : (
                                            <>
                                                <li className='mb-4'>Borcelle Business School
                                                    <br />
                                                    <span className='italic'>Masters in Accounting</span>
                                                    <br />
                                                    <span>Completed in 2016</span>
                                                </li>
                                                <li className='mb-4'>Larana Business School
                                                    <br />
                                                    <span className='italic'>Certificate in Financial Management, Financial Analysis, and Public Budgeting</span>
                                                    <br />
                                                    <span>Completed in 2014</span>
                                                </li>
                                                <li>Borcelle Business School
                                                    <br />
                                                    <span className='italic'> Bachelor of Economics, Major in Finance, Minor in Data Analytics</span>
                                                    <br />
                                                    <span>Completed in 2012</span>
                                                </li>
                                            </>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='pt-5 flex flex-col gap-3 px-2 w-[60%]'>
                        <div>
                            <h1 className='text-[#9f0f0f] font-bold text-lg'>About Me</h1>
                            <hr className=' border-b-2 border-[#9f0f0f] mt-2' />
                            <p className='py-3'>{Information.summary[0].aboutMe ? Information.summary[0].aboutMe : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, porro, consequuntur asperiores architecto ut ex voluptates beatae alias autem tenetur a rerum voluptas facilis recusandae similique amet tempore eaque libero voluptate repudiandae quas iste. Omnis nulla, illo non reiciendis incidunt praesentium veniam delectus odio quo sunt!"}</p>
                        </div>

                        <div>
                            <h1 className='text-[#9f0f0f] font-bold text-lg'>Professional Experience</h1>
                            <hr className=' border-b-2 border-[#9f0f0f] mt-2' />
                            <div className='flex flex-col gap-2 mt-2'>
                                {Information?.workExperience[0]?.details.length > 0 ? Information.workExperience[0].details.map((element) => {
                                    return (
                                        <div>
                                            <span>{element.companyName} | {element.position}</span>
                                            <br />
                                            <span>{element.workStartDate} - {element.workEndDate}</span>
                                            <p className='text-xs'>{element.workDescription}</p>
                                        </div>
                                    )
                                })
                                    : (
                                        <>
                                            <div>
                                                <span>Ginyard International Co. | Financial Analyst</span>
                                                <br />
                                                <span>2020 - Present</span>
                                                <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, dolores! Laboriosam, unde quaerat atque consectetur ducimus inventore fuga nihil nesciunt.</p>
                                            </div>
                                            <div>
                                                <span>Ingoude Company| Junior/Investment Analyst</span>
                                                <br />
                                                <span>2015 - 2020</span>
                                                <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, dolores! Laboriosam, unde quaerat atque consectetur ducimus inventore fuga nihil nesciunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste?</p>
                                            </div>
                                            <div>
                                                <span>Timmerman Industries | Financial Analyst Intern</span>
                                                <br />
                                                <span>2012 - 2014</span>
                                                <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, dolores! Laboriosam, unde quaerat atque consectetur ducimus inventore fuga nihil nesciunt.</p>
                                            </div>
                                        </>)}
                            </div>
                        </div>
                        <div>
                            <h1 className='text-[#9f0f0f] font-bold text-lg'>Achievements</h1>
                            <hr className=' border-b-2 border-[#9f0f0f] mt-2' />
                            <div className='flex flex-col gap-2 mt-2'>
                                {Information?.workExperience[0]?.details.length > 0 ? Information.workExperience[0].details.map((element) => {
                                    return (
                                        <div>
                                            <span>{element.companyName} | {element.position}</span>
                                            <br />
                                            <span>{element.workStartDate} - {element.workEndDate}</span>
                                            <p className='text-xs'>{element.workDescription}</p>
                                        </div>
                                    )
                                })
                                    : (
                                        <>
                                            <div className='flex'>
                                                <span className='basis-[50%]' >2012 - 2014</span>
                                                <span>Reduced the production cost by 20% in the second year of internship</span>
                                            </div>
                                            <div className='flex'>
                                                <span className='basis-[40%]'>2015 - 2020</span>
                                                <span>2015 - 2020 Managed five projects worth over $100million</span>
                                            </div>
                                        </>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#9f0f0f] h-[6vh] p-4'></div>
            </div>)
    }
    return (
        <>{Resume[tid]}</>
    )
}

export default Resume
