import { useForm } from "react-hook-form";
import Config from "../config.js";
import { useEffect,useContext } from "react";
import ProgressBar from "./ProgressBar.js";
import ResumeContext from "../context/Resume/ResumeContext.js";

export default function Forms(props) {
    const context = useContext(ResumeContext)
    const { submitDetails } = context
    const InputClasses = "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer appearance-none m-1 autofill:m-1"
    const LabelClasses = "block peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"

    const { register, handleSubmit, watch, formState: { errors }} = useForm({ mode: "all" });
    const onSubmit = data => {
        let Obj={}
        Config[props.activeKey][0].input?.forEach(element => {
            Obj[element.name]=data[element.name]
        });
        submitDetails(Obj,props.activeKey)
        }
    useEffect(() => {
        Config.education[0]?.input[5]?.condition(watch("checkEducation"))
        Config.workExperience[0]?.input[5]?.condition(watch("checkWork"))
        Config.skills[0]?.input[3]?.condition(watch("checkBar"))
    }, [watch("checkEducation"), watch("checkWork"),watch("checkBar"), props.activeKey])

    return (
        <div className="items-center basis-9/12 shadow-xl pt-1 pb-6 border border-slate-100">
            <form className="grid grid-cols-6 gap-2 w-full mt-10 px-5 md:px-10" onSubmit={handleSubmit(onSubmit)}>
                {Config[props.activeKey][0].input.map((element) => {
                    let divc = ""
                    if (element.span === 6)
                        divc = "relative mb-6 inline-block col-span-6"
                    else if (element.span === 3)
                        divc = "relative mb-6 inline-block col-span-3"
                    else
                        divc = "relative mb-6 inline-block col-span-2"
                    return (
                        <span key={element.name} id={element.name} className={divc}>

                            {element.type === "textarea" &&
                                <textarea
                                    id={element.name}
                                    value={element.value}
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
                            {element.type !== "textarea" && element.type !== "progressBar"  &&
                                <input
                                    id={element.name}
                                    value={element.value}
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
                                <ProgressBar />
                            }
                            <label htmlFor={element.name} className={element.labelClassConfig ? element.labelClassConfig : LabelClasses} >{element.label}</label>
                            {errors[element.name] && <span className="text-red-400 text-xs p-2">{errors[element.name].message}</span>}
                        </span>
                    )
                }
                )}
                <input className="col-span-6 block disabled:cursor-not-allowed cursor-pointer bg-black hover:bg-blue-600 disabled:hover:bg-black text-white font-bold py-2 px-4 rounded mx-auto" type="submit" />
            </form>
        </div>
    );
}