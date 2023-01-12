import React from 'react'
import Config from "../config.js";

function Section(props) {
    const configNames = () => {
        let Section = []
        for (let key in Config) {
            let buttonClass= props.activeKey === key ? "text-blue-500 underline" : "";
            Section.push(
                <div key={key} className="hover:border box-border p-3">
                    <button className={"px-3 py-1 text-xs capitalize md:text-base lg:text-lg xl:text-xl 2xl:text-2xl whitespace-nowrap cursor-pointer " + buttonClass} onClick={() => { props.setActiveKey(key) }}>{key}</button>
                </div>
            )
        }
        return Section
    }
    return (
       
            <div className='flex flex-col gap-3 items-start shadow-xl basis-1/4 bg-black text-white p-10'>
                {configNames()}
            </div>
    )
}

export default Section
