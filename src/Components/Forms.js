import { useForm } from "react-hook-form";
import Config from "../config.js";
import { useEffect, useContext, useState } from "react";
import ProgressBar from "./ProgressBar.js";
import ResumeContext from "../context/Resume/ResumeContext.js";

export default function Forms(props) {
    const { Information, setInformation, activeKey } = props
    const context = useContext(ResumeContext)
    const { submitDetails } = context

    const [skillProgress, setskillProgress] = useState(1)
    const [activeChipIndex, setactiveChipIndex] = useState(0)

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({ mode: "all" });

    const onSubmit = (data) => {
        let Obj = {}
        Config[props.activeKey][0].input?.forEach(element => {
            Obj[element.name] = data[element.name]
        });
        if (Obj["checkEducation"] && activeKey === 'education') Obj["schoolEndDate"] = "Present";
        if (Obj["checkWork"] && activeKey === 'workExperience') Obj["workEndDate"] = "Present";
        if (watch("checkBar") && activeKey === 'skills') Obj["skillRating"] = skillProgress;
        if (Information[activeKey].detail) {
            let Data = Information
            Data[activeKey].detail = Obj
            setInformation({})
            setInformation(Data)
        }
        else {
            let Data = Information
            Data[activeKey].details[activeChipIndex] = Obj
            setInformation({})
            setInformation(Data)
        }
        console.log(Information);
        submitDetails(Information)
        localStorage.setItem("Information", JSON.stringify(Information))
    }

    const handelAdd = () => {
        const details = Information[activeKey]?.details
        if (!details) return;
        const lastDetail = details.slice(-1)[0]
        if (!Object.keys(lastDetail).length) return;
        details?.push({})
        setInformation((prev) => ({ ...prev, [activeKey]: { ...Information[activeKey] } }))
        setactiveChipIndex(details?.length - 1)
    }
    const handelDelete = (index) => {
        const details = Information[activeKey]?.details ? [...Information[activeKey]?.details] : "";
        if (!details) return;
        details.splice(index, 1)
        setInformation((prev) => ({ ...prev, [activeKey]: { ...Information[activeKey], details: details } }))
        setactiveChipIndex((prev) => (prev === index ? 0 : prev - 1))
    }

    useEffect(() => {
        Config.education[0]?.input[5]?.condition(watch("checkEducation"))
        Config.workExperience[0]?.input[5]?.condition(watch("checkWork"))
        Config.skills[0]?.input[3]?.condition(watch("checkBar"))
    }, [watch("checkEducation"), watch("checkWork"), watch("checkBar"), activeKey])

    useEffect(() => {
        let value = ""
        Config[activeKey][0].input.forEach(element => {
            if (!element.value) {
                if (Information[activeKey].detail) {
                    value = Information[activeKey].detail[element.name] ? Information[activeKey].detail[element.name] : ""
                }
                if (Information[activeKey].details) {
                    value = Information[activeKey].details[activeChipIndex] ? Information[activeKey].details[activeChipIndex][element.name] ? Information[activeKey].details[activeChipIndex][element.name] : "" : ""
                }
                setValue(element.name, value)
            }
        })

    }, [activeKey, Information, activeChipIndex])



    return (
        <div className="items-center basis-9/12 shadow-xl pt-1 border bg-white border-slate-100 ">
            <form className="grid grid-cols-6 gap-2 w-full h-[100%] md:mt-10 px-3 md:px-10" onSubmit={handleSubmit(onSubmit)}>
                <div className='col-span-6 flex flex-wrap items-center gap-2 md:gap-5 mb-4'>
                    {Information[activeKey]?.details?.map((item, index) => (
                        <div key={activeKey + index} className={`${activeChipIndex === index ? 'bg-blue-500' : 'bg-gray-400'} cursor-pointer flex gap-2 md:gap-4 items-center px-2 md:px-3 rounded-3xl justify-center'`} onClick={() => setactiveChipIndex(index)}>
                            <p className='capitalize text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl'>{`${activeKey} ${index + 1}`}</p>
                            <span className='pb-1 font-sans text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl hover:font-bold' onClick={(event) => { event.stopPropagation(); handelDelete(index) }} >x</span>

                        </div>
                    ))}
                    {Information[activeKey]?.details?.length > 0 ?
                        <div className='text-blue-800 font-extrabold cursor-pointer' onClick={handelAdd}>+New</div> : ""}
                </div>

                {
                    Config[activeKey][0].input.map((element) => {
                        const InputClasses = "block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer appearance-none m-1 autofill:m-1"
                        const LabelClasses = "text-xs block peer-focus:font-medium absolute md:text-sm text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                <input className="justify-self-end place-self-end shadow-md shadow-gray-700 focus:shadow-sm focus:translate-y-1 p-2 m-2 col-span-6 disabled:cursor-not-allowed cursor-pointer bg-black hover:bg-blue-600 disabled:hover:bg-black text-white font-bold py-2 px-4 rounded mx-auto" type="submit" />
            </form >
        </div >
    );
}