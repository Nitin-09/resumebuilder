import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const handelDrawer = () => {
        let drawer = document.getElementById('drawer')
        drawer?.classList?.toggle('translate-x-full')
        let fadeBg = document.getElementById('fadeBg')
        fadeBg?.classList?.toggle('translate-x-[100vw]')
    }

    useEffect(() => {
    }, [])

    return (
        <div className='flex flex-col'>
            <div className='z-50'>
            <div className='fixed w-full bg-[#6c63ff] flex justify-between items-center px-4 md:px-10 w-fulltext-xs md:text-xl xl:text-2xl '>
                <Link className='p-1 sm:p-2 m-2 shadow-md shadow-gray-700 text-[#070351] hover:text-[#e1e3ff] focus:shadow-sm focus:translate-y-1' to="/tempelates">Resume Templates</Link>
                {localStorage.getItem('token') ?
                    <button type='button' onClick={handelDrawer} className='p-1 sm:p-2 m-2 shadow-md shadow-gray-700 text-[#070351] hover:text-[#e1e3ff] focus:shadow-sm focus:translate-y-1'><i className="fa-solid fa-bars"></i></button> :
                    <Link className='shadow-md shadow-gray-700 p-1 sm:p-2 m-2 text-[#070351] hover:text-[#e1e3ff] focus:shadow-sm focus:translate-y-1' to="/auth/existing">Login / Signup</Link>}
            </div>
            </div>
            <div className='z-40 flex mt-12 sm:mt-14 xl:mt-16'>
                <div id='fadeBg' className='h-screen bg-[black] w-[50%] sm:w-[60%] lg:w-[70%] xl:w-[80%] transition-transform translate-x-[100vw] opacity-20 fixed' onClick={handelDrawer}>
                </div>
                <div id='drawer' className='text-xs md:text-xl xl:text-2xl flex flex-col fixed z-40 h-screen p-4 overflow-y-auto bg-[#d3d1ff] w-[50%] sm:w-[40%] lg:w-[30%] xl:w-[20%] right-0 transition-transform translate-x-full shadow-md'>
                    <Link className='p-1 sm:p-2 m-2 bg-[#6c63ff] shadow-md shadow-gray-700 text-[#070351] hover:text-[#070351] focus:shadow-sm focus:translate-y-1' to='/profile'>Profile</Link>
                    <Link className='p-1 sm:p-2 m-2 bg-[#6c63ff] shadow-md shadow-gray-700 text-[#070351] hover:text-[#070351] focus:shadow-sm focus:translate-y-1' to='/tempelates'>Create New Resume</Link>
                    <Link className='p-1 sm:p-2 m-2 bg-[#6c63ff] shadow-md shadow-gray-700 text-[#070351] hover:text-[#070351] focus:shadow-sm focus:translate-y-1' to='/myresume' >My Resumes</Link>
                    <Link className='p-1 sm:p-2 m-2 bg-[#6c63ff] shadow-md shadow-gray-700 text-[#070351] hover:text-[#070351] focus:shadow-sm focus:translate-y-1' to='/auth/existing' onClick={() => { if (localStorage.getItem('token')) { localStorage.removeItem('token'); handelDrawer() } }}>Logout</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
