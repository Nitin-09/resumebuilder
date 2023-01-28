import React, { useEffect, useState } from 'react'
import { forwardRef } from 'react'
import Img from './Profile_Images/profile1.png'

const Resume = forwardRef((props, ref) => {
    const sectionDiv = {
        ["workExperience"]:
            (
                <div>
                    <div className='text-lg font-bold w-full border-b-4 border-black'>
                        Work Experience
                    </div>
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
                </div>
            ),
        ["education"]: (
            <div>
                <div className='text-lg font-bold w-full border-b-4 border-black'>
                    Education
                </div>
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
            </div>
        ),
        ["project"]: (
            <div>
                <div className='text-lg font-bold w-full border-b-4 border-black'>
                    Project
                </div>
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
            </div>
        ),
        ["summary"]: (
            <div>
                <div className='text-lg font-bold w-full border-b-4 border-black'>
                    Summary
                </div>
                <div className='p-2'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusantium iure ex? Minus unde debitis placeat rerum eum? Ducimus temporibus quia, magnam expedita in iure eveniet voluptatem a nemo voluptas!</p>
                </div>
            </div>
        ),
        ["skills"]: (
            <div>
                <div className='text-lg font-bold w-full border-b-4 border-black'>
                    Skill
                </div>
                <div className='flex gap-3 p-2 flex-wrap'>
                    <span className='bg-blue-300 text-center text-lg p-4 rounded-full' >Java</span>
                    <span className='bg-blue-300 text-center text-lg p-4 rounded-full' >Python</span>
                    <span className='bg-blue-300 text-center text-lg p-4 rounded-full' >C/C++</span>
                    <span className='bg-blue-300 text-center text-lg p-4 rounded-full' >React</span>
                    <span className='bg-blue-300 text-center text-lg p-4 rounded-full' >HTML</span>
                </div>
            </div>
        ),
        ["others"]: (
            <div>
                <div className='text-lg font-bold w-full border-b-4 border-black'>
                    Social Links
                </div>
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
            </div>
        ),
    }
    return (
        <div className='flex p-2 flex-col shadow-md bg-stone-300 '>
            <div className='flex flex-col gap-3 p-3'>
                <div className='flex items-center'>
                    <div className='basis-4/5'>
                        <p className='text-6xl capitalize font-medium'>Jonathan Jonhson</p>
                        <p className='text-lg capitalize font-medium text-blue-500'>Computer Application Specialist</p>
                    </div>
                    <div className='mt-5'>
                        <img className='h-52 rounded-md' src={Img} alt="" />
                    </div>
                </div>

                <div className='mt-7 flex gap-5 flex-1 gap-y-2'>
                    <a className='text-sm font-semibold text-blue-500 underline' href=''>Jonathan.1@gmail.com</a>
                    <span className='text-sm font-semibold text-blue-500 underline'>(053) 123 4567</span>
                    <span className='text-sm font-semibold text-blue-500 underline'>4181 Faitrade Road Aswain Wisconsin</span>
                </div>
            </div>
            <div className='flex gap-6 '>
                <div className=' flex flex-col gap-7 w-1/2 p-3 '>
                    {sectionDiv["profile"]}
                    {sectionDiv["education"]}
                    {sectionDiv["workExperience"]}
                    {sectionDiv["skills"]}


                </div>
                <div className='flex flex-col gap-7 w-1/2 p-3'>
                    {sectionDiv["summary"]}
                    {sectionDiv["project"]}
                    {sectionDiv["others"]}
                </div>
            </div>

        </div>
    )
});

export default Resume
