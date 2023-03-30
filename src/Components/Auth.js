import React from 'react'
import Svg from "../assets/login.svg"
import Login from './Login'
import Signup from './Signup'
import { useParams } from 'react-router-dom'

function Auth(props) {
    const { user } = useParams();
    return (
        <>
            <div className='flex justify-center overflow-hidden w-full px-10'>
                <div className='w-[60vw]'>
                    <p className='text-black text-xl lg:text-3xl font-oleo p-4'>Resume is the first step to get your desired job.</p>
                    <img className="h-[30vh] lg:h-[70vh]" src={Svg} alt="" />
                </div>
                <div className='flex flex-col w-[40vw]'>
                    <div className='p-10'>
                        {user === 'existing' && <Login showAlert={props.showAlert}></Login>}
                        {user === 'new' && <Signup showAlert={props.showAlert}></Signup>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth
