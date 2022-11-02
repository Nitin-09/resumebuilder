import React from 'react'

function InputControl({ label, ...props }) {
  return (
    <div className='flex flex-col gap-1 w-full px-10 group'>
      {label && <label htmlFor={label} className='font-semibold text-lg cursor-pointer group-focus-within:text-blue-800 group-focus-within:pb-5'>{label}</label>}
      {props.input!=="no" && <input id={label} className='border-black border-b h-11 outline-none p-3 rounded-sm focus:border-blue-500' {...props} />}
    {props.type==="textarea" &&<textarea className='border-black border-b outline-none p-3 rounded-sm focus:border-blue-500 overflow-hidden' {...props}></textarea>}
    </div>
  )
}

export default InputControl
