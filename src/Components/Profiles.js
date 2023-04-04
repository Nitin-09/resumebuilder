import React, { useContext, useEffect } from 'react'
import ResumeContext from "../context/Resume/ResumeContext.js";

function Profiles() {
    const context = useContext(ResumeContext)
    const { fetchAllResume, ResumeData } = context
    useEffect(() => {
        fetchAllResume()
    }, [])
    useEffect(() => {
        console.log(ResumeData)
    }, [ResumeData])
    return (
        <div className='flex items-center gap-10 justify-center bg-gray-300 h-screen'>
            {
                ResumeData.map((element, index) => {
                    return (
                        <div key={index} classname="flex">

                            <div className="w-[20vw]">
                                <div className="bg-white shadow-xl rounded-lg py-3 h-[60vh]">
                                    <div className="photo-wrapper p-2">
                                        <img className="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe" />
                                    </div>
                                    <div className="p-2">
                                        <div className='h-[10vh]'>
                                            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{element.profile[0].firstName} {element.profile[0].lastName}</h3>
                                            <div className="text-center text-gray-400 text-xs font-semibold">
                                                <p>{element.profile[0].title}</p>
                                            </div>
                                            <div className="px-4 text-gray-500 text-xs font-semibold">
                                                <p>{element.summary[0].aboutMe}</p>
                                            </div>
                                        </div>
                                        <table className="text-xs my-3">
                                            <tbody>
                                                <tr>
                                                    <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                                    <td className="px-2 py-2">{element.profile[0].address}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                                    <td className="px-2 py-2">{element.profile[0].phoneNumber}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                                    <td className="px-2 py-2">{element.profile[0].email}</td>
                                                </tr>
                                            </tbody></table>

                                        <div className="text-center my-3">
                                            <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Resume</a>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Profiles