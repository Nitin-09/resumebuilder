import React from 'react'
import { useState } from 'react'
import InputControl from './InputControl'

function Editor(props) {
    const sections = props.sections
    const [activekey, setactivekey] = useState(Object.keys(sections)[0])
    const generateBody = () => {
        switch (sections[activekey]) {
            case sections.basicInfo: return BasicInfoBody;
            case sections.education: return EducationBody;
            case sections.workExp: return WorkExpBody;
            case sections.projext: return ProjectBody;
            case sections.achivements: return AchivementsBody;
            case sections.summary: return SummaryBody;
            case sections.other: return OtherBody;
        }
    }
    const BasicInfoBody = (
        <div className='w-full flex flex-col gap-2'>
            <div className='flex'>
                <InputControl label="First Name" placeholder="Enter your First Name"></InputControl>
                <InputControl label="Last Name" placeholder="Enter your Last Name"></InputControl>
            </div>
            <div>
                <InputControl label="Email" placeholder="Enter your Email Address"></InputControl>
            </div>
            <div>
                <InputControl label="Phone Number" placeholder="Enter your Phone Number"></InputControl>
            </div>
            <div>
                <InputControl label="Address" placeholder="Enter your Address"></InputControl>
            </div>
            <div className='flex'>
                <InputControl label="City" placeholder="Enter your City"></InputControl>
                <InputControl label="State" placeholder="Enter your State"></InputControl>
                <InputControl label="Zip Code" placeholder="Enter your Zip Code"></InputControl>
            </div>
        </div>
    )
    const EducationBody = (
        <div className='w-full flex flex-col gap-2'>
            <div className='flex'>
                <InputControl label="School Name" placeholder="Enter your School Name"></InputControl>
            </div>
            <div>
                <InputControl label="School Location" placeholder="Enter your School Address"></InputControl>
            </div>
            <div className='flex'>
                <InputControl label="City" placeholder="Enter School City"></InputControl>
                <InputControl label="State" placeholder="Enter School State"></InputControl>
                <InputControl label="Zip Code" placeholder="Enter School Zip Code"></InputControl>
            </div>
            <div className='flex flex-col w-full  group'>
                <label htmlFor="" className='px-10 font-medium text-lg cursor-pointer group-focus-within:text-blue-800'>Graduation Date</label>
            <div className='flex'>
                <InputControl label="Month" placeholder="Enter Month"></InputControl>
                <InputControl label="State" placeholder="Enter Year"></InputControl>
            </div>
            </div>
        </div>
    )
    const WorkExpBody = (
        <div className='w-full flex flex-col gap-2'>
            <div className='flex'>
                <InputControl label="Title" placeholder="What was Your Title?"></InputControl>
            </div>
            <div>
                <InputControl label="Company" placeholder="Enter your Company Name"></InputControl>
            </div>
            <div className='flex'>
                <InputControl label="City" placeholder="Enter City"></InputControl>
                <InputControl label="Country" placeholder="Enter Country"></InputControl>
            </div>
            <div className='flex'>
                <InputControl label="Start Date" placeholder=""></InputControl>
                <InputControl label="End" placeholder="Date"></InputControl>
            </div>
        </div>
    )
    const ProjectBody = (
        <div className='w-full flex flex-col gap-2'>
            <div className='flex'>
                <InputControl label="Project Title" placeholder="Enter Project Title"></InputControl>
            </div>
            <div>
                <InputControl label="Project Summary" placeholder="Enter Project Summary"></InputControl>
            </div>
            <div>
                <InputControl label="Project Link" placeholder="Enter Project Link"></InputControl>
            </div>
            </div>
    )
    const AchivementsBody = (
        <div className='w-full flex flex-col gap-2'>
            <div className='flex'>
                <InputControl label="School Name" placeholder="Enter your School Name"></InputControl>
            </div>
            <div>
                <InputControl label="Email" placeholder="Enter your Email Address"></InputControl>
            </div>
            <div>
                <InputControl label="Phone Number" placeholder="Enter your Phone Number"></InputControl>
            </div>
            <div>
                <InputControl label="Address" placeholder="Enter your Address"></InputControl>
            </div>
            <div className='flex'>
                <InputControl label="City" placeholder="Enter your City"></InputControl>
                <InputControl label="State" placeholder="Enter your State"></InputControl>
                <InputControl label="Zip Code" placeholder="Enter your Zip Code"></InputControl>
            </div>
        </div>
    )
    const SummaryBody = (
        <div className='w-full flex flex-col gap-2'>
            <div className='flex'>
                <InputControl label="School Name" placeholder="Enter your School Name"></InputControl>
            </div>
            <div>
                <InputControl label="Email" placeholder="Enter your Email Address"></InputControl>
            </div>
            <div>
                <InputControl label="Phone Number" placeholder="Enter your Phone Number"></InputControl>
            </div>
            <div>
                <InputControl label="Address" placeholder="Enter your Address"></InputControl>
            </div>
            <div className='flex'>
                <InputControl label="City" placeholder="Enter your City"></InputControl>
                <InputControl label="State" placeholder="Enter your State"></InputControl>
                <InputControl label="Zip Code" placeholder="Enter your Zip Code"></InputControl>
            </div>
        </div>
    )
    const OtherBody = (
        <div className='w-full flex flex-col gap-2'>
            <div className='flex'>
                <InputControl label="School Name" placeholder="Enter your School Name"></InputControl>
            </div>
            <div>
                <InputControl label="Email" placeholder="Enter your Email Address"></InputControl>
            </div>
            <div>
                <InputControl label="Phone Number" placeholder="Enter your Phone Number"></InputControl>
            </div>
            <div>
                <InputControl label="Address" placeholder="Enter your Address"></InputControl>
            </div>
            <div className='flex'>
                <InputControl label="City" placeholder="Enter your City"></InputControl>
                <InputControl label="State" placeholder="Enter your State"></InputControl>
                <InputControl label="Zip Code" placeholder="Enter your Zip Code"></InputControl>
            </div>
        </div>
    )
    return (
        <div className='flex flex-col md:gap-7 items-center min-h-screen md:min-w-[80%] shadow-xl pt-1 border border-slate-100'>
            <div className='flex flex-wrap overflow-x-auto border-b '>{
                Object.keys(sections)?.map(key =>
                    <button className={`px-3 py-1 text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl whitespace-nowrap cursor-pointer ${key === activekey ? "text-blue-500 underline" : null} `} onClick={() => { setactivekey(key) }} key={key}>{sections[key]}</button>
                )}
            </div>
            {generateBody()}

        </div>
    )
}

export default Editor