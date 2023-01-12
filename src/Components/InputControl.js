import React from 'react'
import { useState } from 'react';
function InputControl({ label,validinformation, setvalidinformation,setValue, ...props }) {
  const [showTick, setTick] = useState(false);
  const handleChange = (e) => {
    setTick(false)
    const pattern = props.pattern;
    const value = e.target.value ? e.target.value : "";
    if (pattern == null){
      setTick(true)}
    else {
      setValue(value);
      let a = pattern.exec(value);
      if (a && a[0] === a["input"]) {
        setTick(true);
        setvalidinformation(validinformation=>validinformation.replaceAll(label+",",""))
      }
      else {
        setTick(false);
        setvalidinformation(validinformation=>validinformation+label+",","")
      }
      console.log(showTick);
    }

  }
  return (
    <div className='flex w-full justify-center items-baseline'>
      <div className="flex flex-col relative z-0 mb-6 w-full group">
        {props.input !== "no" && props.type !== "textarea" && <input onChange={handleChange} id={label} name={label} className=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer appearance-none autofill:my-1" placeholder=' ' {...props} />}
        {props.type === "textarea" && <textarea value={props.value} onChange={handleChange} id={label} name={label} rows='5' cols='6' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer' {...props}></textarea>}
        <label htmlFor={label} className=" peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{label}</label>
      </div>
      {showTick ? <i className="fa-solid fa-check text-blue-400 relative -left-10"></i> : <></>}
    </div>
  )
}

export default InputControl
 