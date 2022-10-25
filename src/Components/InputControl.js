import React from 'react'

function InputControl({label,...props}) {
  return (
    <div className='flex flex-col gap-1 w-full px-10 group'>
        {label && <label htmlFor={label} className='font-medium text-lg cursor-pointer group-focus-within:text-blue-800'>{label}</label>}
        <input id={label} className='border-black border h-11 outline-none p-3 rounded-sm focus:border-blue-500' type="text" {...props} placeholder='' />
    </div>
  )
}

export default InputControl
