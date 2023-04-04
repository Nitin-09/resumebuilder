import { useForm } from "react-hook-form";
import Config from "../config.js";
import { useEffect, useContext, useState } from "react";
import ProgressBar from "./ProgressBar.js";
import ResumeContext from "../context/Resume/ResumeContext.js";

export default function Forms(props) {
    const { Information, setInformation, activeKey, ResumeId } = props
    const context = useContext(ResumeContext)
    const { submitDetails } = context

    const [skillProgress, setskillProgress] = useState(1)
    const [activeChipIndex, setactiveChipIndex] = useState(0)

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({ mode: "all" });
    const onSubmit = (data) => {
        let Obj = {}
        Config[activeKey][0].input?.forEach(element => {
            Obj[element.name] = data[element.name]
        });
        if (Obj["checkEducation"] && activeKey === 'education') Obj["schoolEndDate"] = "Present";
        if (Obj["checkWork"] && activeKey === 'workExperience') Obj["workEndDate"] = "Present";
        if (watch("checkBar") && activeKey === 'skills') Obj["skillRating"] = skillProgress;
        if (!Information[activeKey][0].details) {
            let Data = Information
            Data[activeKey][0] = Obj
            setInformation({})
            setInformation(Data)
        }
        else {
            let Data = Information
            Data[activeKey][0].details[activeChipIndex] = Obj
            setInformation({})
            setInformation(Data)
        }
        submitDetails(Information, ResumeId)
        // console.log(Information)
        props.showAlert(`${activeKey} data subbmitted successfully`, "success")
    }

    const handelAdd = () => {
        const details = Information[activeKey][0]?.details
        // console.log(details);
        if (!details) return;
        const lastDetail = details.slice(-1)[0]
        if (!Object.keys(lastDetail).length) return;
        details?.push({})
        // console.log(details);
        // console.log(Information)
        setInformation((prev) => ({ ...prev, [activeKey]: { ...Information[activeKey] } }))
        setactiveChipIndex(details?.length - 1)
    }
    const handelDelete = (index) => {
        const details = Information[activeKey][0]?.details
        if (!details) return;
        details.splice(index, 1)
        setInformation((prev) => ({ ...prev, [activeKey]: { ...Information[activeKey][0], details: details } }))
        setactiveChipIndex((prev) => (prev === index ? 0 : prev - 1))
    }

    useEffect(() => {
        Config.education[0]?.input[5]?.condition(watch("checkEducation"))
        Config.workExperience[0]?.input[5]?.condition(watch("checkWork"))
        Config.skills[0]?.input[3]?.condition(watch("checkBar"))
        // eslint-disable-next-line
    }, [watch("checkEducation"), watch("checkWork"), watch("checkBar"), activeKey])

    useEffect(() => {
        let value = ""
        Config[activeKey][0].input.forEach(element => {
            if (!element.value) {
                if (!Information[activeKey][0].details) {
                    value = Information[activeKey][0][element.name] ? Information[activeKey][0][element.name] : ""
                }
                if (Information[activeKey][0]?.details) {
                    value = Information[activeKey][0].details[activeChipIndex] ? Information[activeKey][0].details[activeChipIndex][element.name] ? Information[activeKey][0].details[activeChipIndex][element.name] : "" : ""
                }
                setValue(element.name, value)
            }
        })
        // eslint-disable-next-line
    }, [activeKey, Information, activeChipIndex])

    useEffect(() => {
        setactiveChipIndex(0)
    }, [activeKey])



    return (
        <div className="items-center basis-9/12 pt-1 pb-3 h-fit">
            <form id="data" className="grid grid-cols-6 gap-2 w-full h-fit md:mt-10 px-3 md:px-10" onSubmit={handleSubmit(onSubmit)}>
                <div className='col-span-6 flex flex-wrap items-center gap-2 md:gap-5 mb-4'>
                    {Information[activeKey][0]?.details?.map((item, index) => (
                        <div key={activeKey + index} className={`${activeChipIndex === index ? 'bg-blue-500' : 'bg-gray-400'} cursor-pointer flex gap-2 md:gap-4 items-center px-2 md:px-3 rounded-3xl justify-center'`} onClick={() => setactiveChipIndex(index)}>
                            <p className='capitalize text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl'>{`${activeKey} ${index + 1}`}</p>
                            <span className='pb-1 font-sans text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl hover:font-bold' onClick={(event) => { event.stopPropagation(); handelDelete(index) }} >x</span>

                        </div>

                    ))}
                    {Information[activeKey][0]?.details?.length > 0 ?
                        <div className='text-blue-800 font-extrabold cursor-pointer' onClick={handelAdd}>+New</div> : ""}
                </div>

                {
                    Config[activeKey][0].input.map((element) => {
                        const InputClasses = "block py-2.5 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer appearance-none m-1 autofill:m-1"
                        const LabelClasses = "text-xs block peer-focus:font-medium absolute md:text-sm text-black duration-300 transform -translate-y-6 scale-100 top-3 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        let divc = ""
                        if (element.span === 6)
                            divc = "relative mb-6 inline-block col-span-6"
                        else if (element.span === 3)
                            divc = "relative mb-6 inline-block col-span-6 md:col-span-3"
                        else
                            divc = "relative mb-6 inline-block col-span-6 md:col-span-2"
                        return (
                            <span key={element.name} id={element.name} className={divc}>

                                {element.type === "textarea" &&
                                    <textarea
                                        id={element.name + activeChipIndex}
                                        defaultValue={element.value}
                                        type={element.type}
                                        className={element.inputClassConfig ? element.inputClassConfig : InputClasses} accept={element.accept}

                                        {...register(element.name,
                                            {
                                                required: element.required,
                                                pattern: element.pattern &&
                                                {
                                                    value: new RegExp(element.pattern.value),
                                                    message: element.pattern.message
                                                },
                                            },)} />
                                }
                                {element.type !== "textarea" && element.type !== "progressBar" &&
                                    <input
                                        id={element.name}
                                        required={element.required ? true : false}
                                        defaultValue={element.value}
                                        type={element.type}
                                        className={element.inputClassConfig ? element.inputClassConfig : InputClasses} accept={element.accept}
                                        {...register(element.name,
                                            {
                                                required: element.required,
                                                pattern: element.pattern &&
                                                {
                                                    value: new RegExp(element.pattern.value),
                                                    message: element.pattern.message
                                                },
                                            },)} />

                                }
                                {element.type === "progressBar" &&
                                    <ProgressBar setskillProgress={setskillProgress} />
                                }
                                <label htmlFor={element.name} className={element.labelClassConfig ? element.labelClassConfig : LabelClasses} >{element.label}</label>
                                {errors[element.name] && <span className="text-red-400 text-xs p-2">{errors[element.name].message}</span>}
                            </span>
                        )
                    }
                    )
                }
                <div className="flex justify-center items-center col-span-6">
                    <input className="shadow-md shadow-gray-700 focus:shadow-sm focus:translate-y-1 p-2 m-2 disabled:cursor-not-allowed cursor-pointer bg-black hover:bg-blue-600 disabled:hover:bg-black text-white font-bold py-2 px-4 rounded" type="submit" />
                    <input className=" shadow-md shadow-gray-700 focus:shadow-sm focus:translate-y-1 p-2 m-2 disabled:cursor-not-allowed cursor-pointer bg-black hover:bg-blue-600 disabled:hover:bg-black text-white font-bold py-2 px-4 rounded" type="button" onClick={() => { document.getElementById('my-modal').classList.remove('hidden') }} value='View Resume' />
                </div>
            </form >
        </div >
    );
}