import React from 'react'
import Svg from "../assets/login.svg"
import Login from './Login'
import Signup from './Signup'
import { useParams } from 'react-router-dom'

function Auth(props) {
    const { user } = useParams();
    return (
        <>
            <div className='bg-primary pt-5 flex flex-col justify-center items-center overflow-hidden w-full'>
                <p className='z-20 text-4xl p-6 font-heading bg-clip-text text-transparent from-[#100d45] to-[#574fee] bg-gradient-to-r '>Resume is the first step to get your desired job.</p>
                <div className='flex items-center max-h-[76vh] justify-center w-full'>
                    <img className="p-2 basis-[50%] overflow-hidden" src={Svg} alt="" />
                    <div className='flex items-center justify-center min-h-[100vh] px-10 h-5/6 min-h-[85%]: basis-[45%] from-[#d3d1ff] to-[#9d97ff] bg-gradient-to-r rounded-r-full'>
                        {user === 'existing' && <Login showAlert={props.showAlert}></Login>}
                        {user === 'new' && <Signup showAlert={props.showAlert}></Signup>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth
