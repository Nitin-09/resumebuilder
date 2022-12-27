import React, { useState, useEffect } from 'react'
import InputControl from './InputControl';
function Editor(props) {
    const sections = props.sections
    const information = props.information
    const [activekey, setactivekey] = useState(Object.keys(sections)[0])
    const [activeInformation, setactiveInformation] = useState(information[sections[Object.keys(sections)[0]]])
    const [sectionTitle, setsectionTitle] = useState(sections[Object.keys(sections)[0]])
    useEffect(() => {
        setsectionTitle(sections[activekey])
    }, [activekey])


    const profileBody = (
        <>
            <div className='flex gap-1'>
                <InputControl label="First Name" type="text" ></InputControl>
                <InputControl label="Last Name" type="text" ></InputControl>
            </div>
            <div className='flex gap-2'>
                <InputControl label="Title" type="text"  ></InputControl>
                <InputControl label="Profile" type="file" accept='image/png, image/jpeg' className='mt-3 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 cursor-pointer'></InputControl>
            </div>
            <InputControl label="Address" type="text"></InputControl>
            <div className='flex gap-1'>
                <InputControl label="City" type="text" ></InputControl>
                <InputControl label="State" type="text"></InputControl>
                <InputControl label="Zip Code" type="number"></InputControl>
            </div>
            <div className='flex gap-1'>
                <InputControl label="Email" type="email" ></InputControl>
                <InputControl label="Phone Number" type="number"></InputControl>
            </div>

        </>
    )
    const EducationBody = (
        <>
            <div className='flex gap-1'>
                <InputControl label="School Name" type="text" ></InputControl>
                <InputControl label="School Location" type="text"></InputControl>
            </div>
            <div className='flex gap-2'>
                <div className='w-full basis-2/5'>
                    <InputControl label="Start Date" type="month" ></InputControl>
                </div>
                <div className='w-full flex items-center basis-3/5'>
                    <label htmlFor='check' className="text-sm text-gray-500 cursor-pointer order-2 ">I am currently studying here.</label>
                    <input id='check' name='check' type="checkbox" className='cursor-pointer peer order-1 mx-3' />
                    <div className='peer-checked:invisible block w-full basis-1/2'>
                        <InputControl label="End Date" type="month" ></InputControl>
                    </div>
                </div>
            </div>
            <InputControl label="Degree" type="text"></InputControl>
            <InputControl label="Field of Study" type="text" ></InputControl>
            <InputControl label="Description" type="textarea"></InputControl>
        </>
    )
    const WorkExpBody = (
        <>
            <InputControl label="Posiion" type="text" ></InputControl>
            <InputControl label="Company Name" type="text"  ></InputControl>
            <div className='flex gap-2'>
                <div className='w-full basis-2/5'>
                    <InputControl label="Start Date" type="month" ></InputControl>
                </div>
                <div className='w-full flex items-center basis-3/5'>
                    <label htmlFor='check' className="text-sm text-gray-500 cursor-pointer order-2 ">I am currently Working here.</label>
                    <input id='check' name='check' type="checkbox" className='cursor-pointer peer order-1 mx-3' />
                    <div className='peer-checked:invisible block w-full basis-1/2'>
                        <InputControl label="End Date" type="month" ></InputControl>
                    </div>
                </div>
            </div>
            <InputControl label="Description" type="textarea"></InputControl>
        </>
    )
    const ProjectBody = (
        <div className='w-full flex flex-col gap-2'>
            <>
                <InputControl label="Project Name" type="text" ></InputControl>
                <InputControl label="Description" type="textarea"></InputControl>
                <InputControl label="Project Link" type="url"></InputControl>

            </>
        </div >
    )
    const [star, setStar] = useState(0)
    const handelRating = (e) => {
        setStar(e.target.id)
    }
    const SkillsBody = (
        <div className='w-full flex flex-col gap-2'>
            <InputControl label="Skill" type="text" ></InputControl>
            <div className='w-full flex items-center'>
                <label htmlFor='check' className="text-sm text-gray-500 cursor-pointer order-2 ">Hide rating in resume, Show only skill name.</label>
                <input id='check' name='check' type="checkbox" className='cursor-pointer peer order-1 mx-3' />
                <div className='peer-checked:invisible block w-full basis-1/2'>
                    {[1, 2, 3, 4, 5].map(e => <i id={e} className={e <= star ? 'fa-solid fa-star' : 'fa-regular fa-star'} key={e} onClick={handelRating}></i>)}
                </div>
            </div>

        </div>
    )
    const SummaryBody = (
        <div className='w-full flex flex-col gap-2'>
            <InputControl label="About You" rows='8' cols='9' type="textarea"></InputControl>
        </div>
    )
    const OtherBody = (
        <div className='w-full flex flex-col gap-2'>
            <InputControl label="Label" type="text"></InputControl>
            <InputControl label="Value" type="text"></InputControl>
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
                    <InputControl label='Section Title' value={sectionTitle} onChange={(event) => setsectionTitle(event.target.value)}></InputControl>
                    <div className='min-h-[60vh]'>
                    {generateBody()}
                    </div>
                    <input type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' value='Save' />
                </form>

            </div>
        </div>
    )
}

export default Editor
