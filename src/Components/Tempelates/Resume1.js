import React, { useEffect, useState } from 'react'
import { forwardRef } from 'react'
import Img from './Profile_Images/profile1.png'

const Resume1 = forwardRef((props, ref) => {
    const sectionDiv = {
        ["profile"]: (
            <>
                <div class='mt-20 z-20 relative flex flex-col border-2 border-emerald-500 bg-white w-[570px] h-24 items-center justify-center'>
                    <p class='text-4xl capitalize font-medium text-emerald-500'>Jonathan Jonhson</p>
                    <p class='text-base capitalize font-medium text-black'>Computer Application Specialist</p>
                </div>
                <div class='p-4 flex flex-col gap-3'>
                    <div class='flex flex-col gap-2'>
                        <span class='text-white font-bold text-lg'>Contact</span>
                        <hr />
                    </div>
                    <div class='flex flex-col'>
                        <span class='text-white font-semibold text-base'>Address</span>
                        <span class='text-sm capitalize font-medium text-white'>4181 Faitrade Road Aswain Wisconsin</span>
                    </div>
                    <div class='flex flex-col'>
                        <span class='text-white font-semibold text-base'>Phone</span>
                        <span class='text-sm font-medium text-white'>(053) 123 4567</span>
                    </div>
                    <div class='flex flex-col'>
                        <span class='text-white font-semibold text-base'>Email</span>
                        <a class='text-sm font-medium text-white' href='/'>Jonathan.1@gmail.com</a>
                    </div>
                </div>
            </>),
        ["workExperience"]: (<>
            <div class='flex flex-col gap-y-1'>
                <div class='flex flex-col w-full'>
                    <span class='text-emerald-500 font-bold text-lg'>Work Experience</span>
                    <hr class='border-2 bg-emerald-500 border-emerald-500' />
                </div><div class='mt-4'>
                    <div class='flex justify-between'>
                        <span class='font-semibold text-base text-black'>Apps Center lowa</span>
                        <span class='font-semibold text-lg text-emerald-500'>2019</span>
                    </div>
                    <span class='font-normal text-base text-gray-400'>App Developer</span>
                </div>
                <div class='mt-4'>
                    <div class='flex justify-between'>
                        <span class='font-semibold text-base text-black'>Google LLC</span>
                        <span class='font-semibold text-lg text-emerald-500'>2022</span>
                    </div>
                    <span class='font-normal text-base text-gray-400'>Graphic Designer </span>
                </div>
                <div class='mt-4'>
                    <div class='flex justify-between'>
                        <span class='font-semibold text-base text-black'>UI | UX Designer OJT</span>
                        <span class='font-semibold text-lg text-emerald-500'>2016</span>
                    </div>
                    <span class='font-normal text-base text-gray-400'>REACT.JS Developer</span>
                </div>
            </div>
        </>
        ),
        ["education"]: (
            <>
                <div class='flex flex-col gap-y-1'>
                    <div class='flex flex-col w-full'>
                        <span class='text-emerald-500 font-bold text-lg'>Education</span>
                        <hr class='border-2 bg-emerald-500 border-emerald-500' />
                    </div>
                    <div class='mt-2'>
                        <div class='flex justify-between'>
                            <span class='font-semibold text-base text-black'>Wisconsin State University</span>
                            <span class='font-semibold text-lg text-emerald-500'>2018 - 2019</span>
                        </div>
                        <span class='font-normal text-base text-gray-400'>High School</span>
                    </div>
                    <div class='mt-2'><div class='flex justify-between'>
                        <span class='font-semibold text-base text-black'>Southwinds State School</span>
                        <span class='font-semibold text-lg text-emerald-500'>2020 - 2021</span>
                    </div>
                        <span class='font-normal text-base text-gray-400'>Graduation</span>
                    </div>
                </div>
            </>
        ),
        ["project"]: (
            <div class='flex flex-col gap-y-1'>
                <div class='flex flex-col w-full'>
                    <span class='text-emerald-500 font-bold text-lg'>Project</span>
                    <hr class='border-2 bg-emerald-500 border-emerald-500' />
                </div>
                <div class='mt-2'>
                    <div class='flex justify-between'>
                        <span class='font-semibold text-base text-black'>Resume Builder</span>
                        <span class='font-semibold text-lg text-emerald-500'>github.com</span>
                    </div>
                    <span class='font-normal text-base text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempora quisquam nesciunt nam facere rerum provident nulla fugiat? Quibusdam, sequi.</span>
                </div>
            </div>
        ),
        ["summary"]: (
            <>

                <div class='flex flex-col w-full'>
                    <span class='text-emerald-500 font-bold text-lg'>About</span>
                    <hr class='border-2 bg-emerald-500 border-emerald-500' />
                </div>
                <div class='pt-1'>
                    <p class='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis et perspiciatis, optio consequuntur rem adipisci laudantium itaque qui quibusdam labore earum sequi libero ea odio, amet asperiores officiis. Harum eaque suscipit nihil adipisci aperiam. Lorem ipsum dolor, sit amet consectetur adidi quo inventore. Unde animi tempore rerum consequuntur temporibus doloribus odit.</p>
                </div>
            </>),
        ["skill"]: (
            <>
                <div class='p-4 flex flex-col gap-3'>
                    <div class='flex flex-col gap-2'>
                        <span class='text-white font-bold text-lg'>Skills</span>
                        <hr />
                    </div>
                    <div class='flex flex-col gap-5 text-base font-medium text-white'>
                        <div class='flex flex-col gap-5 text-base font-medium text-white'>
                            <span>Dreamweaver</span>
                            <span>Photoshop</span>
                            <span>Flash</span>
                            <span>Wordpress</span>
                        </div>
                    </div>
                </div>
            </>
        ),
        ["other"]: (
            <div class='p-4 flex flex-col gap-3'>
                <div class='flex flex-col gap-2'>
                    <span class='text-white font-bold text-lg'>Social Links</span>
                    <hr />
                </div>
                <div class='flex flex-col gap-5 text-base font-medium text-white'>
                    <div class='flex flex-col gap-5 text-base font-medium text-white'>
                        <div>
                            <span>Facebook : </span>
                            <span class='underline'>facebook.com</span>
                        </div>
                        <div>
                            <span>Facebook : </span>
                            <span class='underline'>facebook.com</span>
                        </div>
                        <div>
                            <span>Facebook : </span>
                            <span class='underline'>facebook.com</span>
                        </div>
                    </div>
                </div>
            </div>
        ),
    }

    return (
        <div ref={ref} className='flex'>
            <div className='bg-emerald-500 w-72 min-h-[100%]'>
                {sectionDiv["profile"]}
                {sectionDiv["skill"]}
                {sectionDiv["other"]}
            </div>
            <div className='w-full bg-white px-5 flex flex-col gap-y-2'>
                <div className='mt-5 self-end'>
                    <img className='h-52 rounded-md' src={Img} alt="" />
                </div>
                {sectionDiv["summary"]}
                {sectionDiv["workExperience"]}
                {sectionDiv["education"]}
                {sectionDiv["project"]}
            </div>
        </div>
    )
});

export default Resume1
