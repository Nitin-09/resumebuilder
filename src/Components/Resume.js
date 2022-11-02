import React from 'react'

function Resume() {
    return (
        <div className='flex flex-col md:gap-1 items-center w-3/4 md:min-w-[70%] shadow-xl pt-1 border border-slate-100'>
            <div className='justify-end  bg-violet-900 pb-4 text-white w-full flex flex-col items-center h-32 font-mono font-bold'>
                <div className="flex flex-col">
                    <span className='text-3xl'>Nitin Gangwani</span>
                    <span className='text-2xl'>Web Developer</span>
                </div>
            </div>
            <div className='bg-blue-100 h-fit flex p-3'>
                <div className='flex flex-col min-w-[43%] p-5'>
                    <span>7000080882</span>
                    <span>Anywhere street, City, State, Country</span>
                    <span>hello@gmail.com</span>
                    <span>Social url</span>
                </div>
                <div className='bg-white w-3 m-3 rounded-lg'></div>
                <div className='p-3'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, aut omnis. Ducimus cumque sequi aspernatur quo illum quae odio consequuntur obcaecati, adipisci quibusdam magni fugit corrupti accusamus illo perspiciatis placeat reprehenderit vitae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, voluptatum?</p>
                    <h1 className='font-bold'>AREA OF EXPERTISE</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero ratione animi quas recusandae aliquid quos cum exercitationem tenetur numquam culpa. Quia unde minima laboriosam cupiditate deleniti tempora illum impedit pariatur repellat sit.</p>
                </div>
            </div>

            <div className='bg-slate-300 h-fit w-full flex p-3'>
                <div className='flex flex-col min-w-[43%] p-5'>
                    <h1 className='font-bold '>EDUCATIONAL HISTORY</h1>

                    <div className='flex flex-col p-3'>
                        <span className='text-white font-mono font-bold text-lg'>Institute of Technology and Management</span>
                        <span>BTech</span>
                        <span>12-2020 to Present</span>
                    </div>
                    <div className='flex flex-col p-3'>
                        <span className='text-white font-mono font-bold text-lg'>Institute of Technology and Management</span>
                        <span>BTech</span>
                        <span>12-2020 to Present</span>
                    </div>
                    <div className='flex flex-col p-3'>
                        <span className='text-white font-mono font-bold text-lg'>Institute of Technology and Management</span>
                        <span>BTech</span>
                        <span>12-2020 to Present</span>
                    </div>
                </div>
                <div className='bg-white w-1 m-3 rounded-lg'></div>
                <div className='flex flex-col p-5'>
                    <h1 className='font-bold'>PROFESSIONAL HISTORY</h1>
                    <div className='flex flex-col p-3'>
                        <span className='text-white font-mono font-bold text-lg'>Google</span>
                        <span>Graphic Designer</span>
                        <span>2030-Present</span>
                    </div>
                    <div className='flex flex-col p-3'>
                        <span className='text-white font-mono font-bold text-lg'>Google</span>
                        <span>Graphic Designer</span>
                        <span>2030-Present</span>
                    </div>
                    <div className='flex flex-col p-3'>
                        <span className='text-white font-mono font-bold text-lg'>Google</span>
                        <span>Graphic Designer</span>
                        <span>2030-Present</span>
                    </div>
                </div>
            </div>
            <div className='bg-blue-100 h-fit w-full flex flex-col p-7'>
            <h1 className='font-bold'>SKILLS</h1>
            <div className='flex gap-3 m-2'>
            <span className='bg-blue-300 text-center text-lg p-8 rounded-full' >Java</span>
            <span className='bg-blue-300 text-center text-lg p-8 rounded-full'>C++</span>
            <span className='bg-blue-300 text-center text-lg p-8 rounded-full'>HTML</span>
            <span className='bg-blue-300 text-center text-lg p-8 rounded-full'>CSS</span>
            <span className='bg-blue-300 text-center text-lg p-8 rounded-full'>Javascript</span>
            </div>
            </div>
        </div>
    )
}

export default Resume
