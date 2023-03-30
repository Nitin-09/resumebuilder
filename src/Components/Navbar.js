import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

function Navbar() {
    const [drawerState, setdrawerState] = useState(false)
    return (
        <>
            <div className='relative z-50'>
                <div className='flex justify-between w-full px-10'>
                    <img className='h-[13vh] lg:h-[22vh]' src={Logo} alt="dfvdfv" />
                    {localStorage.getItem('token') ?
                        <button type='button' className='text-4xl text-white' onClick={() => { setdrawerState(true) }}><i class="fa-solid fa-bars"></i></button> :
                        <div class='flex items-center justify-center my-auto'>
                            <div class="w-fit rounded-xl m-5 shadow-sm">
                                <Link class="px-4 py-2 rounded-l-xl text-white m-0 bg-[#5535df] hover:bg-[#270f91] transition" to='/auth/existing'>Login</Link>
                                <Link class="px-4 py-2 rounded-r-xl bg-neutral-50 hover:bg-neutral-200 transition" to='/auth/new'>Register</Link>
                            </div>
                        </div>}
                </div>
                <div className={`flex h-screen top-0 absolute transition-transform ${drawerState ? "translate-x-0" : "translate-x-full"} duration-500`}>
                    <div className='bg-black w-[50vw] lg:w-[80vw] opacity-40' onClick={() => { setdrawerState(false) }}></div>
                    <div className='bg-white w-[50vw] lg:w-[20vw]'>
                        <div className='mx-4 justify-end flex'>
                            <button className='p-5 text-right text-2xl hover:text-blue-500' onClick={() => { setdrawerState(false) }}><i class="fa-solid fa-xmark"></i></button>
                        </div>
                        <hr className='mx-3 border-b-2 border-black' />
                        <div className='flex flex-col p-2 gap-2 text-lg select-none'>
                            <span className='cursor-pointer hover:bg-[#5535df] border-black hover:text-white hover:underline p-1'>Profile</span>
                            <span className='cursor-pointer hover:bg-[#5535df] border-black hover:text-white hover:underline p-1'>Resume Templates</span>
                            <span className='cursor-pointer hover:bg-[#5535df] border-black hover:text-white hover:underline p-1'>Create New Resume</span>
                            <span className='cursor-pointer hover:bg-[#5535df] border-black hover:text-white hover:underline p-1'>My Resume</span>
                            <Link className='cursor-pointer hover:bg-[#5535df] border-black hover:text-white hover:underline p-1' to='/auth/existing' onClick={() => { localStorage.removeItem('token') }}>Logout</Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
