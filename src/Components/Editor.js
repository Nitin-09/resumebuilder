import React, { useState, useEffect } from 'react'
import InputControl from './InputControl';
import Picker from 'react-month-picker'
function Editor(props) {
    const sections = props.sections
    const information = props.information
    const [activekey, setactivekey] = useState(Object.keys(sections)[0])
    const [activeInformation, setactiveInformation] = useState(information[sections[Object.keys(sections)[0]]])
    const [sectionTitle, setsectionTitle] = useState(sections[Object.keys(sections)[0]])
    const [activeChipIndex, setactiveChipIndex] = useState(0);
    const Labeldetails = {
        profile: "First Name,Last Name,Title,Profile,Address,City,State,Zip Code,Email,Phone Number,",
        education: "School Name,School Location,Start Date,End Date,Degree,Field of Study,",
        workExp: "Position,Company Name,Start Date,End Date,",
        project: "Project Name,Description,Project Link,",
        skill: "Skill,Skill Rating,",
        summary: "About You,",
        other: "Label,Value,"
    };
    const [validInformation, setValidInformation] = useState(Labeldetails.profile)
    const handelDelete = (index) => {
        document.getElementById(key).classList.add("invisible")
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
    const [values, setvalues] = useState({
        firstName: activeInformation?.detail?.firstName || "",
        lastName: activeInformation?.detail?.lastName || "",
        title: activeInformation?.detail?.title || "",
        profile: activeInformation?.detail?.profile || "",
        address: activeInformation?.detail?.address || "",
        city: activeInformation?.detail?.city || "",
        state: activeInformation?.detail?.state || "",
        zipCode: activeInformation?.detail?.zipCode || "",
        email: activeInformation?.detail?.email || "",
        phoneNumber: activeInformation?.detail?.phoneNumber || "",

        schoolName: activeInformation?.details ? activeInformation.details[0]?.schoolName || "" : "",
        schoolLocation: activeInformation?.details ? activeInformation.details[0]?.schoolLocation || "" : "",
        schoolStartDate: activeInformation?.details ? activeInformation.details[0]?.schoolStartDate || "" : "",
        schoolEndDate: activeInformation?.details ? activeInformation.details[0]?.schoolEndDate || "" : "",
        degree: activeInformation?.details ? activeInformation.details[0]?.degree || "" : "",
        fieldOfStudy: activeInformation?.details ? activeInformation.details[0]?.fieldOfStudy || "" : "",
        schoolDescription: activeInformation?.details ? activeInformation.details[0]?.schoolDescription || "" : "",

        position: activeInformation?.details ? activeInformation.details[0]?.position || "" : "",
        companyName: activeInformation?.details ? activeInformation.details[0]?.companyName || "" : "",
        workStartDate: activeInformation?.details ? activeInformation.details[0]?.workStartDate || "" : "",
        workEndDate: activeInformation?.details ? activeInformation.details[0]?.workEndDate || "" : "",
        workDescription: activeInformation?.details ? activeInformation.details[0]?.workDescription || "" : "",

        projectName: activeInformation?.details ? activeInformation.details[0]?.projectName || "" : "",
        projectDescription: activeInformation?.details ? activeInformation.details[0]?.projectDescription || "" : "",
        projectLink: activeInformation?.details ? activeInformation.details[0]?.projectLink || "" : "",

        skillName: activeInformation?.details ? activeInformation.details[0]?.skill || "" : "",
        skillRating: activeInformation?.details ? activeInformation.details[0]?.skillRating || "" : "",

        aboutMe: activeInformation?.summary?.aboutMe || "",

        label: activeInformation?.details ? activeInformation.details[0]?.label || "" : "",
        value: activeInformation?.details ? activeInformation.details[0]?.value || "" : "",
    })

    const handelSave = (e) => {
        e.preventDefault()
        switch (sections[activekey]) {
            case sections.profile: {
                const tempDetail = {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    title: values.title,
                    profile: values.profile,
                    address: values.address,
                    city: values.city,
                    state: values.state,
                    zipCode: values.zipCode,
                    email: values.email,
                    phoneNumber: values.phoneNumber,

                }
                props.setinformation((prev) => ({ ...prev, [sections.profile]: { ...prev[sections.profile], detail: tempDetail, sectionTitle } }))
                break;
            };
            case sections.education: {
                const tempDetail = {
                    schoolName: values.schoolName,
                    schoolLocation: values.schoolLocation,
                    schoolStartDate: values.schoolStartDate,
                    schoolEndDate: values.schoolEndDate,
                    degree: values.degree,
                    fieldOfStudy: values.fieldOfStudy,
                    schoolDescription: values.schoolDescription,

                }
                const tempDetails = [...information[sections.education]?.details];
                tempDetails[activeChipIndex] = tempDetail
                props.setinformation((prev) => ({ ...prev, [sections.education]: { ...prev[sections.education], details: tempDetails, sectionTitle } }))
                break;
            };
            case sections.workExp: {
                const tempDetail = {
                    position: values.position,
                    companyName: values.companyName,
                    workStartDate: values.workStartDate,
                    workEndDate: values.workEndDate,
                    workDescription: values.workDescription,
                }
                const tempDetails = [...information[sections.workExp]?.details];
                tempDetails[activeChipIndex] = tempDetail
                props.setinformation((prev) => ({ ...prev, [sections.workExp]: { ...prev[sections.workExp], details: tempDetails, sectionTitle } }))
                break;
            };
            case sections.project: {
                const tempDetail = {
                    projectName: values.projectName,
                    projectDescription: values.projectDescription,
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
                    skillRating: values.skillRating,
                }
                const tempDetails = [...information[sections.skill]?.details];
                tempDetails[activeChipIndex] = tempDetail
                props.setinformation((prev) => ({ ...prev, [sections.skill]: { ...prev[sections.skill], details: tempDetails, sectionTitle } }))
                break;
            };
            case sections.summary: {
                const tempabout = values.aboutMe
                props.setinformation((prev) => ({ ...prev, [sections.summary]: { ...prev[sections.summary], about: tempabout, sectionTitle } }))
                break;
            };
            case sections.other: {
                const tempDetail = {
                    label: values.label,
                    value: values.value,
                }
                const tempDetails = [...information[sections.other]?.details];
                tempDetails[activeChipIndex] = tempDetail
                props.setinformation((prev) => ({ ...prev, [sections.other]: { ...prev[sections.other], details: tempDetails, sectionTitle } }))
                break;
            };
        }
    }

    useEffect(() => {
        setactiveInformation(information[sections[activekey]])
        setsectionTitle(sections[activekey])
        setvalues({
            firstName: activeInformation?.detail?.firstName || "",
            lastName: activeInformation?.detail?.lastName || "",
            title: activeInformation?.detail?.title || "",
            profile: activeInformation?.detail?.profile || "",
            address: activeInformation?.detail?.address || "",
            city: activeInformation?.detail?.city || "",
            state: activeInformation?.detail?.state || "",
            zipCode: activeInformation?.detail?.zipCode || "",
            email: activeInformation?.detail?.email || "",
            phoneNumber: activeInformation?.detail?.phoneNumber || "",

            schoolName: activeInformation?.details ? activeInformation.details[0]?.schoolName || "" : "",
            schoolLocation: activeInformation?.details ? activeInformation.details[0]?.schoolLocation || "" : "",
            schoolStartDate: activeInformation?.details ? activeInformation.details[0]?.schoolStartDate || "" : "",
            schoolEndDate: activeInformation?.details ? activeInformation.details[0]?.schoolEndDate || "" : "",
            degree: activeInformation?.details ? activeInformation.details[0]?.degree || "" : "",
            fieldOfStudy: activeInformation?.details ? activeInformation.details[0]?.fieldOfStudy || "" : "",
            schoolDescription: activeInformation?.details ? activeInformation.details[0]?.schoolDescription || "" : "",

            position: activeInformation?.details ? activeInformation.details[0]?.position || "" : "",
            companyName: activeInformation?.details ? activeInformation.details[0]?.companyName || "" : "",
            workStartDate: activeInformation?.details ? activeInformation.details[0]?.workStartDate || "" : "",
            workEndDate: activeInformation?.details ? activeInformation.details[0]?.workEndDate || "" : "",
            workDescription: activeInformation?.details ? activeInformation.details[0]?.workDescription || "" : "",

            projectName: activeInformation?.details ? activeInformation.details[0]?.projectName || "" : "",
            projectDescription: activeInformation?.details ? activeInformation.details[0]?.projectDescription || "" : "",
            projectLink: activeInformation?.details ? activeInformation.details[0]?.projectLink || "" : "",

            skillName: activeInformation?.details ? activeInformation.details[0]?.skill || "" : "",
            skillRating: activeInformation?.details ? activeInformation.details[0]?.skillRating || "" : "",

            aboutMe: activeInformation?.summary?.aboutMe || "",

            label: activeInformation?.details ? activeInformation.details[0]?.label || "" : "",
            value: activeInformation?.details ? activeInformation.details[0]?.value || "" : "",
        })
        setValidInformation(Labeldetails[activekey])
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
            schoolStartDate: activeInfo.details[activeChipIndex]?.schoolStartDate || "",
            schoolEndDate: activeInfo.details[activeChipIndex]?.schoolEndDate || "",
            degree: activeInfo.details[activeChipIndex]?.degree || "",
            fieldOfStudy: activeInfo.details[activeChipIndex]?.fieldOfStudy || "",
            schoolDescription: activeInfo.details[activeChipIndex]?.schoolDescription || "",

            position: activeInfo.details[activeChipIndex]?.position || "",
            companyName: activeInfo.details[activeChipIndex]?.companyName || "",
            workStartDate: activeInfo.details[activeChipIndex]?.workStartDate || "",
            workEndDate: activeInfo.details[activeChipIndex]?.workEndDate || "",
            workDescription: activeInfo.details[activeChipIndex]?.workDescription || "",

            projectName: activeInfo.details[activeChipIndex]?.projectName || "",
            projectDescription: activeInfo.details[activeChipIndex]?.projectDescription || "",
            projectLink: activeInfo.details[activeChipIndex]?.projectLink || "",

            skillName: activeInfo.details[activeChipIndex]?.skillName || "",
            skillRating: activeInfo.details[activeChipIndex]?.skillRating || "",

            label: activeInfo.details[activeChipIndex]?.label || "",
            value: activeInfo.details[activeChipIndex]?.value || "",
        })
    }, [activeChipIndex])
    const profileBody = (
        <>
            <div className='flex gap-1'>
                <InputControl label="First Name" type="text" value={values.firstName || ""} pattern={/[A-Za-z]{3,}/g} setValue={(value) => { setvalues({ ...values, firstName: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
                <InputControl label="Last Name" type="text" value={values.lastName || ""} pattern={/[A-Za-z]{3,}/g} setValue={(value) => { setvalues({ ...values, lastName: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
            </div>
            <div className='flex gap-2'>
                <InputControl label="Title" type="text" value={values.title || ""} pattern={/[A-Za-z\s]{3,}/g} setValue={(value) => { setvalues({ ...values, title: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
                <div className='flex w-full justify-center items-baseline'>
                    <div className="flex flex-col gap-1 relative z-0 mb-6 w-full group">
                        <input id="Profile" name="Profile" type="file" accept='image/png, image/jpeg' className='mt-3 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 cursor-pointer peer' onChange={(e) => { setvalues({ ...values, profile: URL.createObjectURL(e.target.files[0]) }); if (!values.profile) { setValidInformation(validinformation => validinformation.replaceAll("Profile,", "")) } }} ></input>
                        <label htmlFor="Profile" className=" peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Profile</label>
                    </div>
                    {values.profile ? <i className="fa-solid fa-check text-blue-400 -left-2 relative"></i> : <></>}
                </div>
            </div>
            <InputControl label="Address" type="text" value={values.address || ""} pattern={/[\w,\s]{5,}/g} setValue={(value) => { setvalues({ ...values, address: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
            <div className='flex gap-1'>
                <InputControl label="City" type="text" value={values.city || ""} pattern={/[A-Za-z\s]+/g} setValue={(value) => { setvalues({ ...values, city: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
                <InputControl label="State" type="text" value={values.state || ""} pattern={/[A-Za-z\s]+/g} setValue={(value) => { setvalues({ ...values, state: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
                <InputControl label="Zip Code" type="number" value={values.zipCode || ""} pattern={/(^\d{6}$)|(^\d{5}-\d{4}$)/} setValue={(value) => { setvalues({ ...values, zipCode: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
            </div>
            <div className='flex gap-1'>
                <InputControl label="Email" type="email" value={values.email || ""} pattern={/^[\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/} setValue={(value) => { setvalues({ ...values, email: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
                <InputControl label="Phone Number" type="number" value={values.phoneNumber || ""} pattern={c} setValue={(value) => { setvalues({ ...values, phoneNumber: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
            </div>

        </>
    )
    const EducationBody = (
        <>
            <div className='flex gap-1'>
                <InputControl label="School Name" type="text" value={values.schoolName || ""} pattern={/[A-Za-z\s]{3,}/g} setValue={(value) => { setvalues({ ...values, schoolName: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
                <InputControl label="School Location" type="text" value={values.schoolLocation || ""} pattern={/[\w,\s]{5,}/g} setValue={(value) => { setvalues({ ...values, schoolLocation: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
            </div>
            <div className='flex gap-2'>
                <div className='basis-2/5'>
                    <InputControl label="Start Date" type="month" value={values.schoolStartDate || ""} max={(new Date).getFullYear() + "-" + (((new Date).getMonth() < 10) ? "0" + ((new Date).getMonth() + 1) : (new Date).getMonth() + 1)} pattern={/[\d]{4,}[-][\d]{2,}/g} setValue={(value) => { setvalues({ ...values, schoolStartDate: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
                </div>
                <div className='w-full flex items-center basis-3/5'>
                    <label htmlFor='check' className="text-sm text-gray-500 cursor-pointer order-2 ">I am currently studying here.</label>
                    <input id='check' name='check' type="checkbox" className='cursor-pointer peer order-1 mx-3' onChange={() => { setvalues((prev) => ({ ...prev, schoolEndDate: "Present" })); setValidInformation(validinformation => validinformation.replaceAll("End Date,", "")) }} />
                    <div className='peer-checked:invisible block w-full basis-3/5'>
                        <InputControl label="End Date" value={values.schoolEndDate || ""} type="month" max={(new Date).getFullYear() + "-" + (((new Date).getMonth() < 10) ? "0" + ((new Date).getMonth() + 1) : (new Date).getMonth() + 1)} pattern={/[\d]{4,}[-][\d]{2,}/g} setValue={(value) => { setvalues({ ...values, schoolEndDate: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
                    </div>
                </div>
            </div>
            <InputControl label="Degree" type="text" value={values.degree || ""} pattern={/[A-Za-z\s]+/g} setValue={(value) => { setvalues({ ...values, degree: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
            <InputControl label="Field of Study" type="text" value={values.fieldOfStudy || ""} pattern={/[A-Za-z\s]+/g} setValue={(value) => { setvalues({ ...values, fieldOfStudy: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
            <InputControl label="Description" type="textarea" value={values.schoolDescription || ""} pattern={/[\w,\s]*/g} setValue={(value) => { setvalues({ ...values, schoolDescription: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
        </>
    )
    const WorkExpBody = (
        <>
            <InputControl label="Position" type="text" value={values.position || ""} pattern={/[A-Za-z\s]{3,}/g} setValue={(value) => { setvalues({ ...values, position: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
            <InputControl label="Company Name" type="text" value={values.companyName || ""} pattern={/[A-Za-z\s]{3,}/g} setValue={(value) => { setvalues({ ...values, companyName: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
            <div className='flex gap-2'>
                <div className='w-full basis-2/5'>
                    <InputControl label="Start Date" type="month" value={values.workStartDate || ""} max={(new Date).getFullYear() + "-" + (((new Date).getMonth() < 10) ? "0" + ((new Date).getMonth() + 1) : (new Date).getMonth() + 1)} pattern={/[\d]{4,}[-][\d]{2,}/g} setValue={(value) => { setvalues({ ...values, workStartDate: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
                </div>
                <div className='w-full flex items-center basis-3/5'>
                    <label htmlFor='check' className="text-sm text-gray-500 cursor-pointer order-2 ">I am currently Working here.</label>
                    <input id='check' name='check' type="checkbox" className='cursor-pointer peer order-1 mx-3' onChange={() => { setvalues((prev) => ({ ...prev, workEndDate: "Present" })); setValidInformation(validinformation => validinformation.replaceAll("End Date,", "")) }} />
                    <div className='peer-checked:invisible block w-full basis-1/2'>
                        <InputControl label="End Date" type="month" value={values.workEndDate || ""} max={(new Date).getFullYear() + "-" + (((new Date).getMonth() < 10) ? "0" + ((new Date).getMonth() + 1) : (new Date).getMonth() + 1)} pattern={/[\d]{4,}[-][\d]{2,}/g} setValue={(value) => { setvalues({ ...values, workEndDate: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
                    </div>
                </div>
            </div>
            <InputControl label="Description" type="textarea" value={values.workDescription || ""} pattern={/[\w\s]*/g} setValue={(value) => { setvalues({ ...values, workDescription: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
        </>
    )
    const ProjectBody = (
        <div className='w-full flex flex-col gap-2'>
            <>
                <InputControl label="Project Name" type="text" value={values.projectName || ""} pattern={/[A-Za-z\s]{3,}/g} setValue={(value) => { setvalues({ ...values, projectName: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
                <InputControl label="Description" type="textarea" value={values.projectDescription || ""} pattern={/[\w\s]*/g} setValue={(value) => { setvalues({ ...values, projectDescription: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
                <InputControl label="Project Link" type="url" value={values.projectLink || ""} pattern={/(https:\/\/|http:\/\/|www.)[\w\/.\D]+/g} setValue={(value) => { setvalues({ ...values, projectLink: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>

            </>
        </div >
    )
    const [star, setStar] = useState(0)
    const handelRating = (e) => {
        setStar(e.target.id)
        setvalues((prev) => ({ ...prev, skillRating: e.target.id }))
        setValidInformation(validinformation => validinformation.replaceAll("Skill Rating,", ""))
    }
    const SkillsBody = (
        <div className='w-full flex flex-col gap-2'>
            <InputControl label="Skill" type="text" value={values.skillName || ""} pattern={/[\s\w\D]{2,}/g} setValue={(value) => { setvalues({ ...values, skillName: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
            <div className='w-full flex items-center'>
                <label htmlFor='check' className="text-sm text-gray-500 cursor-pointer order-2 ">Hide rating in resume, Show only skill name.</label>
                <input id='check' name='check' type="checkbox" className='cursor-pointer peer order-1 mx-3' onChange={() => { setValidInformation(validinformation => validinformation.replaceAll("End Date,", "")); setvalues((prev) => ({ ...prev, skillRating: false })) }} />
                <div className='peer-checked:invisible block w-full basis-1/2'>
                    {[1, 2, 3, 4, 5].map(i => <i id={i} className={i <= star ? 'fa-solid fa-star' : 'fa-regular fa-star'} key={i} onClick={handelRating}></i>)}

                </div>
            </div>

        </div>
    )
    const SummaryBody = (
        <div className='w-full flex flex-col gap-2'>
            <InputControl label="About You" rows='8' cols='9' type="textarea" value={values.aboutMe || ""} pattern={/[\w\s\D]{10,}/g} setValue={(value) => { setvalues({ ...values, aboutMe: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
        </div>
    )
    const OtherBody = (
        <div className='w-full flex flex-col gap-2'>
            <InputControl label="Label" type="text" value={values.label || ""} pattern={/[\w\s]+v/g} setValue={(value) => { setvalues({ ...values, label: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
            <InputControl label="Value" type="text" value={values.value || ""} pattern={/[\w\D\s]+/g} setValue={(value) => { setvalues({ ...values, value: value }) }} validinfromation={validInformation} setvalidinformation={setValidInformation} ></InputControl>
        </div>
    )
    const generateBody = () => {
        switch (sections[activekey]) {
            case sections.profile: return profileBody;
            case sections.education: return EducationBody;
            case sections.workExp: return WorkExpBody;
            case sections.project: return ProjectBody;
            case sections.skill: return SkillsBody;
            case sections.summary: return SummaryBody;
            case sections.other: return OtherBody;
        }
    }
    return (
        <div className='flex min-w-[90vw] md:min-w-[90vw] lg:min-w-[90vw] min-h-[85vh]'>
            <div className='flex flex-col gap-3 items-start shadow-xl basis-1/4 bg-black text-white p-10'>
                {
                    Object.keys(sections)?.map(key =>
                        <div key={key} className='hover:border box-border p-3'>
                            <button className={`px-3 py-1 text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl whitespace-nowrap cursor-pointer ${key === activekey ? "text-blue-500 underline" : null} `} onClick={() => { setactivekey(key) }} >{sections[key]}</button>
                        </div>
                    )}
            </div>
            <div className='flex flex-col items-center basis-9/12 shadow-xl pt-1 pb-6 border border-slate-100'>

                <form action="" className='w-full flex flex-col gap-2 mt-10 px-5 md:px-10'>
                    <InputControl label='Section Title' value={sectionTitle} pattern={/[A-Za-z]+/g} setValue={(value) => { setsectionTitle(value) }} ></InputControl>
                    <div className='min-h-[60vh]'>
                        <div className='flex flex-wrap items-center gap-5 mb-9'>
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
                    </div>
                    {validInformation === (null || undefined || "") ?
                        <button onClick={handelSave} type='submit' className="disabled:cursor-not-allowed bg-black hover:bg-blue-600 disabled:hover:bg-black text-white font-bold py-2 px-4 rounded">
                            <span>Save</span>
                        </button> : <button onClick={handelSave} type='submit' disabled className="disabled:cursor-not-allowed bg-black hover:bg-blue-600 disabled:hover:bg-black text-white font-bold py-2 px-4 rounded">
                            <span>Save</span>
                        </button>}
                </form>

            </div>
        </div>
    )
}

export default Editor
