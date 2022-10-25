import React from 'react'

function Body() {
    const color=["bg-orange-500","bg-green-500","bg-yellow-500","bg-blue-500 "]
  return (
    <div className='m-4'>
        <p className='text-center font-bold text-md'>Resume Builder</p>
        <div>
            <div className='flex space-x-2'>
                {color.map(item=>
                <span key={item} className={`${item} flex p-3 rounded-full cursor-pointer hover:border border-black`}></span>)}
            </div>
            <div><button>Download</button></div>
        </div>
    </div>
  )
}

export default Body