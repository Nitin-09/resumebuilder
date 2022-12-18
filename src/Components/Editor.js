import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import InputControl from './InputControl'

function Editor(props) {
    const sections = props.sections
    const information = props.information
    const [activekey, setactivekey] = useState(Object.keys(sections)[0])
    const [activeInformation, setactiveInformation] = useState(information[sections[Object.keys(sections)[0]]])
    const [sectionTitle, setsectionTitle] = useState(sections[Object.keys(sections)[0]])
    const [activeChipIndex, setactiveChipIndex] = useState(0)
    const handelDelete = (index) => {
        const details = activeInformation?.details ? [...activeInformation?.details] : ""
        if (!details) return;
        details.splice(index, 1)
        props.setinformation((prev) => ({ ...prev, [sections[activekey]]: { ...information[sections[activekey]], details: details } }))
        setactiveChipIndex((prev) => (prev === index ? 0 : prev - 1))
    }
    const handelAdd = () => {
        const details = activeInformation?.details
        if (!details) return;
        const lastDetail = details.slice(-1)[0]
        if (!Object.keys(lastDetail).length) return
        details?.push({})

        props.setinformation((prev) => ({ ...prev, [sections[activekey]]: { ...information[sections[activekey]] } }))
        setactiveChipIndex(details?.length - 1)
    }
    const handelSave = () => {
        switch (sections[activekey]) {
            case sections.basicInfo: {
                const tempDetail = {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    profile: values.profile,
                    title: values.title,
                    email: values.email,
                    phoneNumber: values.phoneNumber,
                    address: values.address,
                    city: values.city,
                    state: values.state,
                    zipCode: values.zipCode,
                }
                props.setinformation((prev) => ({ ...prev, [sections.basicInfo]: { ...prev[sections.basicInfo], detail: tempDetail, sectionTitle } }))
                break;
            };
            case sections.education: {
                const tempDetail = {
                    schoolName: values.schoolName,
                    schoolLocation: values.schoolLocation,
                    degree: values.degree,
                    schoolStartDate: values.schoolStartDate,
                    schoolEndDate: values.schoolEndDate,
                }
                const tempDetails = [...information[sections.education]?.details];
                tempDetails[activeChipIndex] = tempDetail
                props.setinformation((prev) => ({ ...prev, [sections.education]: { ...prev[sections.education], details: tempDetails, sectionTitle } }))
                break;
            };
            case sections.workExp: {
                const tempDetail = {
                    workTitle: values.workTitle,
                    company: values.company,
                    companyCity: values.companyCity,
                    companyCountry: values.companyCountry,
                    workStartDate: values.workStartDate,
                    workEndDate: values.workEndDate,
                }
                const tempDetails = [...information[sections.workExp]?.details];
                tempDetails[activeChipIndex] = tempDetail
                props.setinformation((prev) => ({ ...prev, [sections.workExp]: { ...prev[sections.workExp], details: tempDetails, sectionTitle } }))
                break;
            };
            case sections.project: {
                const tempDetail = {
                    projectTitle: values.projectTitle,
                    projectSummary: values.projectSummary,
                    projectLink: values.projectLink,
                }
                const tempDetails = [...information[sections.project]?.details];
                tempDetails[activeChipIndex] = tempDetail
                props.setinformation((prev) => ({ ...prev, [sections.project]: { ...prev[sections.project], details: tempDetails, sectionTitle } }))
                break;
            };
            case sections.skill: {
                const tempDetail = {
                    skill: values.skill,
                }
                const tempDetails = [...information[sections.skill]?.details];
                tempDetails[activeChipIndex] = tempDetail
                props.setinformation((prev) => ({ ...prev, [sections.skill]: { ...prev[sections.skill], details: tempDetails, sectionTitle } }))
                break;
            };
            case sections.summary: {
                const tempabout = values.proffsummary
                props.setinformation((prev) => ({ ...prev, [sections.summary]: { ...prev[sections.summary], about: tempabout, sectionTitle } }))
                break;
            };
            case sections.other: {
                const tempDetail = {
                    platform: values.platform,
                    platformLink: values.platformLink,
                }
                const tempDetails = [...information[sections.other]?.details];
                tempDetails[activeChipIndex] = tempDetail
                props.setinformation((prev) => ({ ...prev, [sections.other]: { ...prev[sections.other], details: tempDetails, sectionTitle } }))
                break;
            };
        }
    }
    const generateBody = () => {
        switch (sections[activekey]) {
            case sections.basicInfo: return BasicInfoBody;
            case sections.education: return EducationBody;
            case sections.workExp: return WorkExpBody;
            case sections.project: return ProjectBody;
            case sections.skill: return SkillsBody;
            case sections.summary: return SummaryBody;
            case sections.other: return OtherBody;
        }
    }
    const [values, setvalues] = useState({
        firstName: activeInformation?.detail?.firstName || "",
        lastName: activeInformation?.detail?.lastName || "",
        profile: activeInformation?.detail?.profile || "",
        title: activeInformation?.detail?.title || "",
        email: activeInformation?.detail?.email || "",
        phoneNumber: activeInformation?.detail?.phoneNumber || "",
        address: activeInformation?.detail?.address || "",
        city: activeInformation?.detail?.city || "",
        state: activeInformation?.detail?.state || "",
        zipCode: activeInformation?.detail?.zipCode || "",
        schoolName: activeInformation?.details ? activeInformation.details[0]?.schoolName || "" : "",
        schoolLocation: activeInformation?.details ? activeInformation.details[0]?.schoolLocation || "" : "",
        degree: activeInformation?.details ? activeInformation.details[0]?.degree || "" : "",
        schoolStartDate: activeInformation?.details ? activeInformation.details[0]?.schoolStartDate || "" : "",
        schoolEndDate: activeInformation?.details ? activeInformation.details[0]?.schoolEndDate || "" : "",
        workTitle: activeInformation?.details ? activeInformation.details[0]?.workTitle || "" : "",
        company: activeInformation?.details ? activeInformation.details[0]?.company || "" : "",
        companyCity: activeInformation?.details ? activeInformation.details[0]?.companyCity || "" : "",
        companyCountry: activeInformation?.details ? activeInformation.details[0]?.companyCountry || "" : "",
        workStartDate: activeInformation?.details ? activeInformation.details[0]?.workStartDate || "" : "",
        workEndDate: activeInformation?.details ? activeInformation.details[0]?.workEndDate || "" : "",
        projectTitle: activeInformation?.details ? activeInformation.details[0]?.projectTitle || "" : "",
        projectSummary: activeInformation?.details ? activeInformation.details[0]?.projectSummary || "" : "",
        projectLink: activeInformation?.details ? activeInformation.details[0]?.projectLink || "" : "",
        skill: activeInformation?.details ? activeInformation.details[0]?.skill || "" : "",
        platform: activeInformation?.details ? activeInformation.details[0]?.platform || "" : "",
        platformLink: activeInformation?.details ? activeInformation.details[0]?.platformLink || "" : "",
        proffsummary: activeInformation?.summary?.proffsummary || "",

    })
    const BasicInfoBody = (
        <div className='w-full flex flex-col gap-2'>
            <div className='flex'>
                <InputControl label="First Name" type="text" placeholder="E.g. Sakshi" value={values.firstName || ""} onChange={(event) => setvalues((prev) => ({ ...prev, firstName: event.target.value }))} required></InputControl>
                <InputControl label="Last Name" type="text" placeholder="E.g. Galgale" value={values.lastName || ""} onChange={(event) => setvalues((prev) => ({ ...prev, lastName: event.target.value }))}></InputControl>
            </div>
            <div>
                <InputControl label="Profile" type="file" accept="image/png, image/jpeg" value={values.profile || ""} onChange={(event) => setvalues((prev) => ({ ...prev, profile: event.target.value }))}></InputControl>
            </div>
            <div>
                <InputControl label="Title" type="text" placeholder="E.g. Web Developer" value={values.title || ""} onChange={(event) => setvalues((prev) => ({ ...prev, title: event.target.value }))}></InputControl>
            </div>
            <div>
                <InputControl label="Email" type="email" placeholder="E.g. Sakshi@gmail.com" value={values.email || ""} onChange={(event) => setvalues((prev) => ({ ...prev, email: event.target.value }))}></InputControl>
            </div>
            <div>
                <InputControl label="Phone Number" type="tel" placeholder="E.g. +91 1234-987654" value={values.phoneNumber || ""} onChange={(event) => setvalues((prev) => ({ ...prev, phoneNumber: event.target.value }))}></InputControl>
            </div>
            <div>
                <InputControl label="Address" type="text" placeholder="E.g. 123 Main Street" value={values.address || ""} onChange={(event) => setvalues((prev) => ({ ...prev, address: event.target.value }))}></InputControl>
            </div>
            <div className='flex'>
                <InputControl label="City" type="text" placeholder="E.g. Mumbai" value={values.city || ""} onChange={(event) => setvalues((prev) => ({ ...prev, city: event.target.value }))}></InputControl>
                <InputControl label="State" type="text" placeholder="E.g. Maharashtra " value={values.state || ""} onChange={(event) => setvalues((prev) => ({ ...prev, state: event.target.value }))}></InputControl>
                <InputControl label="Zip Code" type="number" placeholder="E.g. 400029" value={values.zipCode || ""} onChange={(event) => setvalues((prev) => ({ ...prev, zipCode: event.target.value }))}></InputControl>
            </div>
        </div>
    )
    const EducationBody = (
        <div className='w-full flex flex-col gap-2'>
            <div className='flex'>
                <InputControl label="School Name" type="text" placeholder="E.g. Dhirubhai Ambani International School" value={values.schoolName || ""} onChange={(event) => setvalues((prev) => ({ ...prev, schoolName: event.target.value }))}></InputControl>
            </div>
            <div>
                <InputControl label="School Location" type="text" placeholder="E.g. g block, 46, Trident Road, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400098" value={values.schoolLocation || ""} onChange={(event) => setvalues((prev) => ({ ...prev, schoolLocation: event.target.value }))}></InputControl>
            </div>
            <div><InputControl label="Degree" type="text" placeholder="E.g. Bachelors in Computer Science" value={values.degree || ""} onChange={(event) => setvalues((prev) => ({ ...prev, degree: event.target.value }))}></InputControl></div>
            <div className='flex'>
                <InputControl label="Start Date" type="month" value={values.schoolStartDate || ""} onChange={(event) => setvalues((prev) => ({ ...prev, schoolStartDate: event.target.value }))}></InputControl>
                <InputControl label="End Date" type="month" value={values.schoolEndDate || ""} onChange={(event) => setvalues((prev) => ({ ...prev, schoolEndDate: event.target.value }))}></InputControl>
            </div>

        </div>
    )
    const WorkExpBody = (
        <div className='w-full flex flex-col gap-2'>
            <div className='flex'>
                <InputControl label="Title" placeholder="E.g. Graphics Designer" value={values.workTitle || ""} onChange={(event) => setvalues((prev) => ({ ...prev, workTitle: event.target.value }))}></InputControl>
            </div>
            <div>
                <InputControl label="Company" placeholder="E.g. Google" value={values.company || ""} onChange={(event) => setvalues((prev) => ({ ...prev, company: event.target.value }))}></InputControl>
            </div>
            <div className='flex'>
                <InputControl label="City" placeholder="E.g. Bangalore" value={values.companyCity || ""} onChange={(event) => setvalues((prev) => ({ ...prev, companyCity: event.target.value }))}></InputControl>
                <InputControl label="Country" placeholder="E.g. India" value={values.companyCountry || ""} onChange={(event) => setvalues((prev) => ({ ...prev, companyCountry: event.target.value }))}></InputControl>
            </div>
            <div className='flex'>
                <InputControl label="Start Date" type="month" value={values.workStartDate || ""} onChange={(event) => setvalues((prev) => ({ ...prev, workStartDate: event.target.value }))}></InputControl>
                <InputControl label="End Date" type="month" value={values.workEndDate || ""} onChange={(event) => setvalues((prev) => ({ ...prev, workEndDate: event.target.value }))}></InputControl>
            </div>
        </div >
    )
    const ProjectBody = (
        <div className='w-full flex flex-col gap-2'>
            <div className='flex'>
                <InputControl label="Project Title" type="text" placeholder="E.g. Face Recognition" value={values.projectTitle || ""} onChange={(event) => setvalues((prev) => ({ ...prev, projectTitle: event.target.value }))}></InputControl>
            </div>
            <div>
                <InputControl label="Project Summary" type='textarea' input="no" placeholder="E.g. Facial recognition is a technique for recognizing or verifying a person’s identification by looking at their face. This technology can recognize persons in photographs, videos, and in real-time. A type of biometric security is facial recognition. Although there is growing interest in other applications, the technology is mostly employed for security and law enforcement. Typically, face recognition does not need a large database of images to identify an individual’s identification; rather, it merely identifies and recognizes one person as the device’s only owner, while restricting access to others." rows='5' value={values.projectSummary || ""} onChange={(event) => setvalues((prev) => ({ ...prev, projectSummary: event.target.value }))}></InputControl>
            </div>
            <div>
                <InputControl label="Project Link" type="url" placeholder="https://github.com/user002/faceRecognition" value={values.projectLink || ""} onChange={(event) => setvalues((prev) => ({ ...prev, projectLink: event.target.value }))}></InputControl>
            </div>
        </div>
    )
    const SkillsBody = (
        <div className='w-full flex flex-col gap-2'>
            <InputControl label="Skill" placeholder="E.g. Java" value={values.skill || ""} onChange={(event) => setvalues((prev) => ({ ...prev, skill: event.target.value }))}></InputControl>
        </div>
    )
    const SummaryBody = (
        <div className='w-full flex flex-col gap-2'>
            <div className='flex'>
                <InputControl label="Professional Summary" input='no' type='textarea' rows='4' placeholder="Creative graphic designer with innovative ideas and a unique approach to visuals. More than seven years of experience developing designs for print media, online websites, video, and advertising. Solid understanding of marketing principles and advertising techniques. Great attention to detail and a talent for creating memorable visual designs. Enthusiastic team player who is committed to delivering top results on time and within the budget. Passion for keeping clients satisfied with each project." value={values.proffsummary || ""} onChange={(event) => setvalues((prev) => ({ ...prev, proffsummary: event.target.value }))}></InputControl >
            </div>
        </div>
    )
    const OtherBody = (
        <div className='w-full flex flex-col gap-2'>
            <div className='flex'>
                <InputControl label="Platform Name" type='text' placeholder="E.g. Facebook" value={values.platform || ""} onChange={(event) => setvalues((prev) => ({ ...prev, platform: event.target.value }))}></InputControl>
            </div>
            <div className='flex'>
                <InputControl label="Link" type='url' placeholder="E.g. facebook.com/user" value={values.platformLink || ""} onChange={(event) => setvalues((prev) => ({ ...prev, platformLink: event.target.value }))}></InputControl>
            </div>
        </div>
    )
    useEffect(() => {
        const activeInfo = information[sections[activekey]]
        setactiveInformation(activeInfo)
        setsectionTitle(sections[activekey])
        setactiveChipIndex(0)
        setvalues({
            firstName: activeInformation?.detail?.firstName || "",
            lastName: activeInformation?.detail?.lastName || "",
            title: activeInformation?.detail?.title || "",
            email: activeInformation?.detail?.email || "",
            phoneNumber: activeInformation?.detail?.phoneNumber || "",
            address: activeInformation?.detail?.address || "",
            city: activeInformation?.detail?.city || "",
            state: activeInformation?.detail?.state || "",
            zipCode: activeInformation?.detail?.zipCode || "",
            schoolName: activeInformation?.details ? activeInformation.details[0]?.schoolName || "" : "",
            schoolLocation: activeInformation?.details ? activeInformation.details[0]?.schoolLocation || "" : "",
            degree: activeInformation?.details ? activeInformation.details[0]?.degree || "" : "",
            schoolStartDate: activeInformation?.details ? activeInformation.details[0]?.schoolStartDate || "" : "",
            schoolEndDate: activeInformation?.details ? activeInformation.details[0]?.schoolEndDate || "" : "",
            workTitle: activeInformation?.details ? activeInformation.details[0]?.workTitle || "" : "",
            company: activeInformation?.details ? activeInformation.details[0]?.company || "" : "",
            companyCity: activeInformation?.details ? activeInformation.details[0]?.companyCity || "" : "",
            companyCountry: activeInformation?.details ? activeInformation.details[0]?.companyCountry || "" : "",
            workStartDate: activeInformation?.details ? activeInformation.details[0]?.workStartDate || "" : "",
            workEndDate: activeInformation?.details ? activeInformation.details[0]?.workEndDate || "" : "",
            projectTitle: activeInformation?.details ? activeInformation.details[0]?.projectTitle || "" : "",
            projectSummary: activeInformation?.details ? activeInformation.details[0]?.projectSummary || "" : "",
            projectLink: activeInformation?.details ? activeInformation.details[0]?.projectLink || "" : "",
            skill: activeInformation?.details ? activeInformation.details[0]?.skill || "" : "",
            platform: activeInformation?.details ? activeInformation.details[0]?.platform || "" : "",
            platformLink: activeInformation?.details ? activeInformation.details[0]?.platformLink || "" : "",
            proffsummary: activeInformation?.summary?.proffsummary || "",

        });
    }, [activekey])
    useEffect(() => {
        setactiveInformation(information[sections[activekey]])
    }, [information])
    useEffect(() => {
        const details = activeInformation?.details
        if (!details) return;
        const activeInfo = information[sections[activekey]]
        setvalues({
            schoolName: activeInfo.details[activeChipIndex]?.schoolName || "",
            schoolLocation: activeInfo.details[activeChipIndex]?.schoolLocation || "",
            degree: activeInfo.details[activeChipIndex]?.degree || "",
            schoolStartDate: activeInfo.details[activeChipIndex]?.schoolStartDate || "",
            schoolEndDate: activeInfo.details[activeChipIndex]?.schoolEndDate || "",
            workTitle: activeInfo.details[activeChipIndex]?.workTitle || "",
            company: activeInfo.details[activeChipIndex]?.company || "",
            companyCity: activeInfo.details[activeChipIndex]?.companyCity || "",
            companyCountry: activeInfo.details[activeChipIndex]?.companyCountry || "",
            workStartDate: activeInfo.details[activeChipIndex]?.workStartDate || "",
            workEndDate: activeInfo.details[activeChipIndex]?.workEndDate || "",
            projectTitle: activeInfo.details[activeChipIndex]?.projectTitle || "",
            projectSummary: activeInfo.details[activeChipIndex]?.projectSummary || "",
            projectLink: activeInfo.details[activeChipIndex]?.projectLink || "",
            skill: activeInfo.details[activeChipIndex]?.skill || "",
            platform: activeInfo.details[activeChipIndex]?.platform || "",
            platformLink: activeInfo.details[activeChipIndex]?.platformLink || "",
        })
    }, [activeChipIndex])


    return (
        <div className='flex flex-col md:gap-7 items-center min-h-[540px] md:min-w-[80%] shadow-xl pt-1 pb-6 border border-slate-100'>
            <div className='flex flex-wrap overflow-x-auto border-b '>{
                Object.keys(sections)?.map(key =>
                    <button className={`px-3 py-1 text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl whitespace-nowrap cursor-pointer ${key === activekey ? "text-blue-500 underline" : null} `} onClick={() => { setactivekey(key) }} key={key}>{sections[key]}</button>
                )}
            </div>
            <form className='items-center flex flex-col gap-2'>
            <InputControl label='Section Title' placeholder="Enter Section Title" value={sectionTitle} onChange={(event) => setsectionTitle(event.target.value)}></InputControl>
            <div className='flex flex-wrap items-center gap-5'>
                {activeInformation?.details ? activeInformation?.details.map((item, index) => (
                    <div key={item + index} className={`${activeChipIndex === index ? 'bg-blue-500' : 'bg-gray-400'} cursor-pointer flex gap-3 items-center  px-3 rounded-3xl justify-center'`} onClick={() => setactiveChipIndex(index)}>
                        <p className='text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl'>{sections[activekey]} {index + 1}</p>
                        <span className='pb-1 font-sans text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl hover:font-bold' onClick={(event) => { event.stopPropagation(); handelDelete(index) }}>x</span>
                    </div>
                )) : ""}
                {activeInformation?.details && activeInformation?.details?.length > 0 ?
                    <div className='text-blue-800 font-extrabold cursor-pointer' onClick={handelAdd}>+New</div> : ""}
            </div>
            {generateBody()}
            <button onClick={handelSave} className="bg-blue-500 hover:bg-blue-700 text-sm md:text-xl lg:text-2xl px-2 py-1 font-bold rounded inline-flex items-center">
                <span>Save</span>
            </button>
            </form>
        </div>
    )
}

export default Editor