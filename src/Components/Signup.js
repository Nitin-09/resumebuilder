import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"

function SignUp(props) {
    let navigate = useNavigate()
    const host = "http://localhost:5000"
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: "all" });
    const onSubmit = async (data) => {
        const response = await fetch(`${host}/api/auth/createUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: data.name, email: data.username, password: data.password })
        });
        const json = await response.json()
        if (json.Status) {
            localStorage.setItem('token', json.authtoken)
            navigate('/tempelates')
            props.showAlert("SignUp Sucessfull","Succes")
        }
        else {
            props.showAlert("Invalid credentials","danger")
        }
    }
    const [Otp, setOtp] = useState(0)
    const sendOtp = async () => {
        if (watch("username") && !errors.username) {
            const response = await fetch(`${host}/api/auth/getOtp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email: watch("username") })
            });
            const json = await response.json()
            if (json.Status) {
                setOtp(json.OTP);
                props.showAlert("OTP sent sucessfully","Succes")
            }
            else {
                response.status===400?props.showAlert("Email address already exist","danger"):props.showAlert("Some error occurred.","danger")
            }
        }
        else{
            props.showAlert("Please enter a valid email address","danger")
        }
    }
    return (
        <form className='grid grid-col-2 w-full gap-1 mr-10 px-5 md:px-10' onSubmit={handleSubmit(onSubmit)}>
            <span className='col-span-2 w-full relative mb-3 block'>
                <input
                    id="name"
                    type="text"
                    className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-2 rounded-xl border-black focus:outline-none focus:ring-0 focus:border-blue-600 peer appearance-none m-1 autofill:m-1"
                    {...register("name",
                        {
                            required: "Name is a required field",
                            pattern:
                            {
                                value: new RegExp("[A-Za-z\s]{3,}"),
                                message: "Name must be at least 3 characters long"
                            },
                        },)} />
                < label htmlFor="name" className="mx-6 px-1 bg-[#c4c1fe] block peer-focus:font-medium absolute text-sm text-gray-800 duration-300 transform -translate-y-6 scale-100 top-4 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Name</label>
                {errors["name"] && <span className="inline-block w-full text-red-600 text-xs ml-1">{errors["name"].message}</span>}
            </span>
            <span className='col-span-2 w-full relative mb-3 inline-block'>
                <input
                    id="username"
                    type="email"
                    className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-2 rounded-xl border-black focus:outline-none focus:ring-0 focus:border-blue-600 peer appearance-none m-1 autofill:m-1"
                    {...register("username",
                        {
                            required: "Please enter a valid username",
                            pattern:
                            {
                                value: new RegExp("[\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$"),
                                message: "Please enter a valid email address"
                            },
                        },)} />
                < label htmlFor="username" className="mx-6 px-1 bg-[#c4c1fe] block peer-focus:font-medium absolute text-sm text-gray-800 duration-300 transform -translate-y-6 scale-100 top-4 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Email</label>
                {errors["username"] && <span className="inline-block w-full text-red-600 text-xs ml-1">{errors["username"].message}</span>}
            </span>
            <span className='col-span-2 w-full relative mb-3 inline-block'>
                <div className=''>
                    <input
                        id="otp"
                        type="number"
                        className='border-2 border-r-0 border-black bg-transparent w-1/2 py-2 px-2 focus:outline-none focus:ring-0 rounded-tl-xl rounded-bl-xl'
                        {...register("otp",
                            {
                                required: "OTP cannot be blank",
                                pattern:
                                {
                                    value: new RegExp("(^\\d{6}$)"),
                                    message: "Please enter a valid six digit OTP"
                                },
                                validate: (val) => {
                                    if (Otp!= val) {
                                        return "OTP invalid!";
                                    }
                                },
                                
                            },)}
                    />
                    <input className='hover:bg-blue-600 font-bold cursor-pointer text-white border-2 border-black bg-black w-1/2 py-2 px-4 focus:outline-none focus:ring-0 rounded-tr-xl rounded-br-lg' type='button' onClick={sendOtp} value="Get OTP" />
                </div>

                < label htmlFor="otp" className="mx-6 px-1 bg-[#c4c1fe] block peer-focus:font-medium absolute text-sm text-gray-800 duration-300 transform -translate-y-6 scale-100 top-4 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >OTP</label>
                {errors["otp"] && <span className="inline-block w-full text-red-600 text-xs ml-1">{errors["otp"].message}</span>}
            </span>
            <span className='col-span-2 w-full relative mb-3 inline-block'>
                <input
                    id="password"
                    type={watch("showPassword") ? "text" : "password"}
                    className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-2 rounded-xl border-black focus:outline-none focus:ring-0 focus:border-blue-600 peer appearance-none m-1 autofill:m-1"
                    {...register("password",
                        {
                            required: "Please enter a valid passowrd",
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters long'
                            },
                            pattern:
                            {
                                value: new RegExp("(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}"),
                                message: `Password must contain at least one letter, one number and must be minimum 8 characters long`
                            },
                        },)} />
                < label htmlFor="username" className="mx-6 px-1 bg-[#c4c1fe] block peer-focus:font-medium absolute text-sm text-gray-800 duration-300 transform -translate-y-6 scale-100 top-4 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Password</label>
                {errors["password"] && <span className="inline-block w-full text-red-600 text-xs ml-1">{errors["password"].message}</span>}
            </span>
            <span className='col-span-2 w-full relative mb-3 inline-block'>
                <input
                    id="confirmPassword"
                    type={watch("showPassword") ? "text" : "password"}
                    className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-2 rounded-xl border-black focus:outline-none focus:ring-0 focus:border-blue-600 peer appearance-none m-1 autofill:m-1"
                    {...register("confirmPassword",
                        {
                            required: "Password cannot be blank",
                            validate: (val) => {
                                if (watch('password') != val) {
                                    return "Your passwords do no match";
                                }
                            },
                        },)} />
                < label htmlFor="username" className="mx-6 px-1 bg-[#c4c1fe] block peer-focus:font-medium absolute text-sm text-gray-800 duration-300 transform -translate-y-6 scale-100 top-4 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Confirm Password</label>
                {errors["confirmPassword"] && <span className="inline-block w-full text-red-600 text-xs ml-1">{errors["confirmPassword"].message}</span>}
            </span>
            <span className='flex justify-start items-center col-span-2 w-full mb-3'>
                <input
                    id="showPassword"
                    type="checkbox"
                    className="cursor-pointer peer mx-2 bg-transparent"
                    {...register("showPassword",)} />
                <label htmlFor="showPassword" className='text-sm text-gray-800 peer-hover:underline hover:underline hover:text-blue-900 cursor-pointer'>Show Password</label>
            </span>
            <input className="ml-1 block disabled:cursor-not-allowed cursor-pointer bg-black hover:bg-blue-600 disabled:hover:bg-black text-white font-bold py-2 px-4 rounded mx-auto" type="submit" value="Signup" />
            <Link className="ml-1 block disabled:cursor-not-allowed cursor-pointer bg-black hover:bg-blue-600 disabled:hover:bg-black text-white font-bold py-2 px-4 rounded mx-auto" to='/auth/existing'>Login</Link>
        </form>
    )
}
export default SignUp
