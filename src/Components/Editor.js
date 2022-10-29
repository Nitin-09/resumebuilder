import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import InputControl from './InputControl'

function Editor(props) {
    const sections = props.sections
    const information = props.information
    const [activekey, setactivekey] = useState(Object.keys(sections)[0])
    const [activeInformation, setactiveInformation] = useState(information[sections[Object.keys(sections)[0]]])
    const handelSave=()=>{
        console.log(value);
    }
    const generateBody = () => {
        switch (sections[activekey]) {
            case sections.basicInfo: return BasicInfoBody;
            case sections.education: return EducationBody;
            case sections.workExp: return WorkExpBody;
            case sections.projext: return ProjectBody;
            case sections.skill: return SkillsBody;
            case sections.summary: return SummaryBody;
            case sections.other: return OtherBody;
        }
    }
    const [value, setvalue] = useState({
        firstName: activeInformation?.detail?.firstName || "",
        lastName: activeInformation?.detail?.Lastame || "",
        title: activeInformation?.detail?.title || "",
        email: activeInformation?.detail?.email || "",
        phoneNumber: activeInformation?.detail?.phoneNumber || "",
        address: activeInformation?.detail?.address || "",
        city: activeInformation?.detail?.city || "",
        state: activeInformation?.detail?.state || "",
        zipCode: activeInformation?.detail?.zipCode || "",
    })
    const BasicInfoBody = (
        <div className='w-full flex flex-col gap-2'>
            <div className='flex'>
                <InputControl label="First Name" type="text" placeholder="E.g. Sakshi" defaultValue={value.firstName} onChange={(event)=> setvalue((prev)=>({...prev,firstName:event.target.value}))}></InputControl>
                <InputControl label="Last Name" type="text" placeholder="E.g. Galgale" defaultValue={value.lastName} onChange={(event)=> setvalue((prev)=>({...prev,lastName:event.target.value}))}></InputControl>
            </div>
            <div>
                <InputControl label="Title" type="text" placeholder="E.g. Web Developer" defaultValue={value.title} onChange={(event)=> setvalue((prev)=>({...prev,title:event.target.value}))}></InputControl>
            </div>
            <div>
                <InputControl label="Email" type="email" placeholder="E.g. Sakshi@gmail.com" defaultValue={value.email} onChange={(event)=> setvalue((prev)=>({...prev,email:event.target.value}))}></InputControl>
            </div>
            <div>
                <InputControl label="Phone Number" type="tel" placeholder="E.g. +91 1234-987654" defaultValue={value.phoneNumber} onChange={(event)=> setvalue((prev)=>({...prev,phoneNumber:event.target.value}))}></InputControl>
            </div>
            <div>
                <InputControl label="Address" type="text" placeholder="E.g. 123 Main Street" defaultValue={value.address} onChange={(event)=> setvalue((prev)=>({...prev,address:event.target.value}))}></InputControl>
            </div>
            <div className='flex'>
                <InputControl label="City" type="text" placeholder="E.g. Mumbai" defaultValue={value.city} onChange={(event)=> setvalue((prev)=>({...prev,city:event.target.value}))}></InputControl>
                <InputControl label="State" type="text" placeholder="E.g. Maharashtra " defaultValue={value.state} onChange={(event)=> setvalue((prev)=>({...prev,state:event.target.value}))}></InputControl>
                <InputControl label="Zip Code" type="number" placeholder="E.g. 400029" defaultValue={value.zipCode} onChange={(event)=> setvalue((prev)=>({...prev,zipCode:event.target.value}))}></InputControl>
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
            <div><InputControl label="Degree" type="text" placeholder="E.g. Bachelors in Computer Science"></InputControl></div>
            <div className='flex'>
                <div className='group'>
                    <InputControl label="Start Date" input="no"></InputControl>
                    <div className='flex'>
                        <InputControl type="text" placeholder="E.g. May"></InputControl>
                        <InputControl type="text" placeholder="E.g. 2019"></InputControl>
                    </div>
                </div>
                <div className='group'>
                    <InputControl label="End Date" input="no"></InputControl>
                    <div className='flex'>
                        <InputControl type="text" placeholder="E.g. April"></InputControl>
                        <InputControl type="text" placeholder="E.g. 2020"></InputControl>
                    </div>
                </div>

            </div>
        </div>
    )
    const WorkExpBody = (
        <div className='w-full flex flex-col gap-2'>
            <div className='flex'>
                <InputControl label="Title" placeholder="E.g. Graphics Designer"></InputControl>
            </div>
            <div>
                <InputControl label="Company" placeholder="E.g. Google"></InputControl>
            </div>
            <div className='flex'>
                <InputControl label="City" placeholder="E.g. Bangalore"></InputControl>
                <InputControl label="Country" placeholder="E.g. India"></InputControl>
            </div>
            <div className='flex'>
                <div className='group'>
                    <InputControl label="Start Date" input="no"></InputControl>
                    <div className='flex'>
                        <InputControl type="text" placeholder="E.g. May"></InputControl>
                        <InputControl type="text" placeholder="E.g. 2019"></InputControl>
                    </div>
                </div>
                <div className='group'>
                    <InputControl label="End Date" input="no"></InputControl>
                    <div className='flex'>
                        <InputControl type="text" placeholder="E.g. April"></InputControl>
                        <InputControl type="text" placeholder="E.g. 2020"></InputControl>
                    </div>
                </div>
            </div>
        </div>
    )
    const ProjectBody = (
        <div className='w-full flex flex-col gap-2'>
            <div className='flex'>
                <InputControl label="Project Title" type="text" placeholder="E.g. Face Recognition"></InputControl>
            </div>
            <div>
                <InputControl label="Project Summary" type='textarea' input="no" placeholder="E.g. Facial recognition is a technique for recognizing or verifying a person’s identification by looking at their face. This technology can recognize persons in photographs, videos, and in real-time. A type of biometric security is facial recognition. Although there is growing interest in other applications, the technology is mostly employed for security and law enforcement. Typically, face recognition does not need a large database of images to identify an individual’s identification; rather, it merely identifies and recognizes one person as the device’s only owner, while restricting access to others." rows='5'></InputControl>
            </div>
            <div>
                <InputControl label="Project Link" type="url" placeholder="https://github.com/user002/faceRecognition"></InputControl>
            </div>
        </div>
    )
    const SkillsBody = (
        <div className='w-full flex flex-col gap-2'>
            <InputControl label="Skill" placeholder="E.g. Java"></InputControl>
        </div>
    )
    const SummaryBody = (
        <div className='w-full flex flex-col gap-2'>
            <div className='flex'>
                <InputControl label="Professional Summary" input='no' type='textarea' rows='4' placeholder="Creative graphic designer with innovative ideas and a unique approach to visuals. More than seven years of experience developing designs for print media, online websites, video, and advertising. Solid understanding of marketing principles and advertising techniques. Great attention to detail and a talent for creating memorable visual designs. Enthusiastic team player who is committed to delivering top results on time and within the budget. Passion for keeping clients satisfied with each project."></InputControl>
            </div>
        </div>
    )
    const OtherBody = (
        <div className='w-full flex flex-col gap-2'>
            <div className='flex'>
                <InputControl label="Platform Name" type='text' placeholder="E.g. Facebook"></InputControl>
            </div>
            <div className='flex'>
                <InputControl label="Link" type='url' placeholder="E.g. facebook.com/user"></InputControl>
            </div>
        </div>
    )
    useEffect(() => {
        setactiveInformation(information[sections[activekey]])
    }, [activekey])

    return (
        <div className='flex flex-col md:gap-7 items-center min-h-[540px] md:min-w-[80%] shadow-xl pt-1 pb-6 border border-slate-100'>
            <div className='flex flex-wrap overflow-x-auto border-b '>{
                Object.keys(sections)?.map(key =>
                    <button className={`px-3 py-1 text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl whitespace-nowrap cursor-pointer ${key === activekey ? "text-blue-500 underline" : null} `} onClick={() => { setactivekey(key) }} key={key}>{sections[key]}</button>
                )}
            </div>
            <div className='flex flex-wrap gap-5'>
                {activeInformation?.details ? activeInformation?.details?.map((item, index) => (
                    <div key={item.id + index} className='cursor-pointer flex gap-3 items-center bg-blue-400 px-3 rounded-3xl justify-center hover:bg-blue-500'>
                        <p className='text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl'>{sections[activekey]} {index + 1}</p>
                        <span className='pb-1 font-sans text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl hover:font-bold'>x</span>
                    </div>
                )) : ""}
            </div>
            {generateBody()}
            <button onClick={handelSave} className="bg-blue-500 hover:bg-blue-700 text-sm md:text-xl lg:text-2xl px-2 py-1 font-bold rounded inline-flex items-center">
                <span>Save</span>
            </button>
        </div>
    )
}

export default Editor