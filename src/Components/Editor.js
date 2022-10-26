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
                <InputControl label="First Name" type="text" placeholder="E.g. Sakshi"></InputControl>
                <InputControl label="Last Name" type="text" placeholder="E.g. Galgale"></InputControl>
            </div>
            <div>
                <InputControl label="Title" type="text" placeholder="E.g. Web Developer"></InputControl>
            </div>
            <div>
                <InputControl label="Email" type="email" placeholder="E.g. Sakshi@gmail.com"></InputControl>
            </div>
            <div>
                <InputControl label="Phone Number" type="tel" placeholder="E.g. +91 1234-987654"></InputControl>
            </div>
            <div>
                <InputControl label="Address" type="text" placeholder="E.g. 123 Main Street"></InputControl>
            </div>
            <div className='flex'>
                <InputControl label="City" type="text" placeholder="E.g. Mumbai"></InputControl>
                <InputControl label="State" type="text" placeholder="E.g. Maharashtra "></InputControl>
                <InputControl label="Zip Code" type="number" placeholder="E.g. 400029"></InputControl>
            </div>
        </div>
    )
    const EducationBody = (
        <div className='w-full flex flex-col gap-2'>
            <div className='flex'>
                <InputControl label="School Name" type="text" placeholder="E.g. Dhirubhai Ambani International School"></InputControl>
            </div>
            <div>
                <InputControl label="School Location" type="text" placeholder="E.g. g block, 46, Trident Road, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400098"></InputControl>
            </div>
            <div className='flex flex-col w-full  group'>
                <InputControl label="Gradutation Date" input="no"></InputControl>
                <div className='flex'>
                    <div className=''>
                        <InputControl label="Start" input="no"></InputControl>
                        <div className='flex'>
                            <InputControl label="Month" type="text" placeholder="E.g. May"></InputControl>
                            <InputControl label="Year" type="text" placeholder="E.g. 2019"></InputControl>
                        </div>
                    </div>
                    <div>
                        <InputControl label="End" input="no"></InputControl>
                        <div className='flex'>
                            <InputControl label="Month" type="text" placeholder="E.g. April"></InputControl>
                            <InputControl label="Year" type="text" placeholder="E.g. 2020"></InputControl>
                        </div>
                    </div>
                </div>
                <InputControl label="Description" type="text" placeholder=""></InputControl>
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
        <div className='flex flex-col md:gap-7 items-center min-h-[540px] md:min-w-[80%] shadow-xl pt-1 pb-6 border border-slate-100'>
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