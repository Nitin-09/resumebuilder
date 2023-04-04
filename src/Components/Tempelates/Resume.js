import React from 'react'
// import Img from './Profile_Images/profile1.png'

function Resume(props) {
    // const { tid, Information } = props;
    // useEffect(() => {
    // }, [Information])
    return (
        <div className='grid grid-cols-2 h-full lg:p-10 bg-white'>
            <div className='h-full flex flex-col gap-2 lg:gap-10 border-r-2'>
                <div className='relative p-4 w-[170px] h-[170px] lg:w-[340px] lg:h-[340px]'>
                    <div className='absolute w-[120px] h-[120px] lg:w-[280px] lg:h-[280px] border-8 border-white m-2 lg:m-3'></div>
                    <img className='w-full h-full' src="./profile2.png" alt="" />
                </div>
                {/* Contacts */}
                <div className='flex flex-col gap-3 lg:gap-5'>
                    <div className='flex items-center'>
                        <h2 className='font-bold px-5 text-xs lg:text-base'>CONTACT</h2>
                        <div className='border-b border-black w-[40%] lg:w-[60%]'></div>
                    </div>
                    <div className='flex flex-col justify-start px-5 gap-3'>
                        <div className='flex items-center'>
                            <div className='w-5 h-5 lg:w-7 lg:h-7 text-xs lg:text-base bg-black rounded-full text-white flex justify-center items-center'><i class="fa-sharp fa-solid fa-phone-volume"></i></div>
                            <span className='ml-4 text-xs lg:text-lg'>+123-456-7890</span>
                        </div>
                        <div className='flex items-center'>
                            <div className='w-5 h-5 lg:w-7 lg:h-7 text-xs lg:text-base bg-black rounded-full text-white flex justify-center items-center'><i class="fa-sharp fa-solid fa-envelope"></i></div>
                            <span className='ml-4 text-xs lg:text-lg'>isabel.12</span>
                        </div>
                        <div className='flex items-center'>
                            <div className='w-5 h-5 lg:w-7 lg:h-7 text-xs lg:text-base bg-black rounded-full text-white flex justify-center items-center'><i class="fa-solid fa-location-dot"></i></div>
                            <span className='ml-4 text-xs lg:text-lg'>ABC Street, Washington</span>
                        </div>
                    </div>
                </div>
                {/* Skills */}
                <div className='flex flex-col gap-3 lg:gap-5'>
                    <div className='flex items-center'>
                        <h2 className='font-bold px-5 text-xs lg:text-base'>MY SKILLS</h2>
                        <div className='border-b border-black  w-[40%] lg:w-[60%]'></div>
                    </div>
                    <div className='flex flex-col justify-start px-5 gap-3'>
                        <div className='flex flex-col justify-center gap-2'>
                            <span className='text-xs lg:text-lg'>Project Management</span>
                            <div className='flex gap-2'>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center gap-2'>
                            <span className='text-xs lg:text-lg'>Problem Solving</span>
                            <div className='flex gap-2'>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center gap-2'>
                            <span className='text-xs lg:text-lg'>Creativity</span>
                            <div className='flex gap-2'>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center gap-2'>
                            <span className='text-xs lg:text-lg'>Leadership</span>
                            <div className='flex gap-2'>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center gap-2'>
                            <span className='text-xs lg:text-lg'>Team Management</span>
                            <div className='flex gap-2'>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center gap-2'>
                            <span className='text-xs lg:text-lg'>Profficient English Speaking</span>
                            <div className='flex gap-2'>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                                <div className='w-2 h-2 lg:w-3 lg:h-3 bg-gray-400'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-full flex flex-col gap-5 lg:gap-10 p-3 lg:px-5'>
                {/* profile */}
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col'>
                        <span className='text-3xl lg:text-5xl'>ISABEL</span>
                        <span className='text-3xl lg:text-5xl font-bold'>MERCADO</span>
                    </div>
                    <span className='bg-gray-300 p-2 text-sm lg:text-xl w-fit lg:px-4'>CREATIVE DESIGNER</span>
                </div>
                {/* Profile */}
                <div className='flex flex-col lg:gap-5 gap-1'>
                    <div className='flex items-center'>
                        <h2 className='font-bold pr-5 text-xs lg:text-base'>PROFILE</h2>
                        <div className='border-b border-black w-[80%]'></div>
                    </div>
                    <div className='flex flex-col justify-start lg:gap-3'>
                        <div className='flex items-center'>
                            <span className='text-xs lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet dicta quos nemo animi quod dolorum velit. Veniam sit dolores consectetur, ipsum amet dignissimos, alias natus</span>
                        </div>
                    </div>
                </div>
                {/* Experience */}
                <div className='flex flex-col lg:gap-5 gap-1'>
                    <div className='flex items-center'>
                        <h2 className='font-bold pr-5 text-xs lg:text-base'>EXPERIENCE</h2>
                        <div className='border-b border-black w-[80%]'></div>
                    </div>
                    <div className='flex flex-col justify-start lg:gap-3'>
                        <div className='flex flex-col justify-center lg:gap-2'>
                            <span className='text-sm lg:text-lg font-bold lg:font-semibold'>Really Great Company</span>
                            <div className='flex flex-col justify-center' >
                                <span className='text-xs font-semibold'>Art Director</span>
                                <span className='text-xs font-semibold'>Oct 2020 - Present</span>
                            </div>
                            <ul className='text-xs list-disc lg:px-4 px-2'>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start lg:gap-3'>
                        <div className='flex flex-col justify-center lg:gap-2'>
                            <span className='text-sm lg:text-lg font-bold lg:font-semibold'>Really Great Company</span>
                            <div className='flex flex-col justify-center' >
                                <span className='text-xs font-semibold'>Project Manager</span>
                                <span className='text-xs font-semibold'>Sep 2010 - Aug 2020</span>
                            </div>
                            <ul className='text-xs list-disc lg:px-4 px-2'>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </div>
                    </div>

                </div>
                {/* Education */}
                <div className='flex flex-col lg:gap-5 gap-1s'>
                    <div className='flex items-center'>
                        <h2 className='font-bold pr-5 text-xs lg:text-base'>Education</h2>
                        <div className='border-b border-black w-[80%]'></div>
                    </div>
                    <div className='flex gap-3'>
                        <span className='text-xs lg:text-lg font-semibold'>2011</span>
                        <div className='flex flex-col'>
                            <span className='text-xs lg:text-lg font-bold lg:font-semibold'>Really Great Company</span>
                            <span className='text-xs'>Bachelor of Arts in Multimedia Arts, 2012</span>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <span className='text-xs lg:text-lg font-semibold'>2011</span>
                        <div className='flex flex-col'>
                            <span className='text-xs lg:text-lg font-bold lg:font-semibold'>Really Great Company</span>
                            <span className='text-xs'>High School Graduate Diploma, 2009</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
