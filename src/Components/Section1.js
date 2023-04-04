import React from 'react'
import Config from "../config.js";

function Section(props) {
    const configNames = () => {
        let Section = []
        for (let key in Config) {
            let divClass= props.activeKey === key ? "text-blue-500 underline " : "text-white ";
            let buttonClass= props.activeKey === key ? "underline " : "";
            Section.push(
                <div key={key} className={"hover:bg-blue-500 hover:text-black p-1 md:p-3 "+divClass}>
                    <button className={"text-xs capitalize md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-start cursor-pointer w-full "+buttonClass} onClick={() => { props.setActiveKey(key) }}>{key}</button>
                </div>
            )
        }
        return Section
    }
    return (
       
            <div className='flex gap-y-4'>
                {configNames()}
            </div>
    )
}

export default Section
