import React from 'react'
import { useForm } from "react-hook-form";
import { Link ,useNavigate} from 'react-router-dom';

function Login(props) {
    let navigate=useNavigate()
    const host="http://localhost:5000"
    const { register, handleSubmit ,watch, formState: { errors } } = useForm({ mode: "all" });
    const onSubmit = async (data) => {
            const response=await fetch(`${host}/api/auth/login`,{
                method:'POST',
                headers:{
                  'Content-Type':'application/json',
                },
                body:JSON.stringify({email:data.username,password:data.password})
               });
               const json=await response.json()
               if(json.Status){
                   localStorage.setItem('token',json.authtoken)
                   navigate('/tempelates')
                   props.showAlert("Login Sucessfull","Succes")
               }
               else{
                props.showAlert("Invalid credentials","danger")
               }
    }
    return (
        <form className='grid grid-col-2 w-full gap-2 mt-10 px-5 md:px-10' onSubmit={handleSubmit(onSubmit)}>
            <span className='col-span-2 w-full relative mb-3 inline-block'>
                <input
                    id="username"
                    type="email"
                    className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-2 rounded-xl border-black focus:outline-none focus:ring-0 focus:border-blue-600 peer appearance-none m-1 autofill:m-1"
                    {...register("username",
                        {
                            required: "Please enter a valid username",
                        },)} />
                < label htmlFor="username" className="mx-6 px-1 bg-[#c4c1fe] block peer-focus:font-medium absolute text-sm text-gray-800 duration-300 transform -translate-y-6 scale-100 top-4 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Email</label>
                {errors["username"] && <span className="inline-block w-full text-red-600 text-xs ml-1">{errors["username"].message}</span>}
            </span>
            <span className='col-span-2 w-full relative mb-3 inline-block'>
                 <input
                     id="password"
                     type={watch("showPassword")?"text":"password"}
                     className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-2 rounded-xl border-black focus:outline-none focus:ring-0 focus:border-blue-600 peer appearance-none m-1 autofill:m-1"
                     {...register("password",
                         {
                             required: "Please enter a valid passowrd",
                         },)} />
                 < label htmlFor="username" className="mx-6 px-1 bg-[#c4c1fe] block peer-focus:font-medium absolute text-sm text-gray-800 duration-300 transform -translate-y-6 scale-100 top-4 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Password</label>
                 {errors["password"] && <span className="inline-block w-full text-red-600 text-xs ml-1">{errors["password"].message}</span>}
             </span>
            <span className='flex justify-start items-center col-span-2 w-full mb-3'>
                 <input
                     id="showPassword"
                     type="checkbox"
                     className="cursor-pointer peer mx-2 bg-transparent"
                     {...register("showPassword",)} />
                <label htmlFor="showPassword" className='text-sm text-gray-800 peer-hover:underline hover:underline hover:text-blue-900 cursor-pointer'>Show Password</label>
             </span>
            <a className='ml-1 col-span-2 text-base mb-3 text-blue-700 hover:underline hover:text-blue-900' href="/">Forget password?</a>
            <input className="ml-1 block disabled:cursor-not-allowed cursor-pointer bg-black hover:bg-blue-600 disabled:hover:bg-black text-white font-bold py-2 px-4 rounded mx-auto" type="submit" value="Login"/>
            <Link className="ml-1 block disabled:cursor-not-allowed cursor-pointer bg-black hover:bg-blue-600 disabled:hover:bg-black text-white font-bold py-2 px-4 rounded mx-auto" to='/auth/new' >Create New Account</Link> 
        </form>
    )
}

export default Login
