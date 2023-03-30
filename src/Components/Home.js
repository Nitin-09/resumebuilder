import React, { useState } from 'react'
import Img1 from '../assets/Image1.svg'
import Img2 from '../assets/Image2.svg'
import Img3 from '../assets/Image3.svg'
import Img4 from '../assets/Image4.svg'
import Img5 from '../assets/Image5.svg'
import Img6 from '../assets/Image6.svg'
import Img7 from '../assets/Image7.svg'

function Home() {
    let defaultTransform = 0;
    const [activeSlide, setactiveSlide] = useState(1)
    function goNext() {
        defaultTransform = defaultTransform - 398;
        var slider = document.getElementById("slider");
        if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
        slider.style.transform = "translateX(" + defaultTransform + "px)";
    }
    function goPrev() {
        var slider = document.getElementById("slider");
        if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
        else defaultTransform = defaultTransform + 398;
        slider.style.transform = "translateX(" + defaultTransform + "px)";
    }
    setTimeout(() => {
        activeSlide === 3 ? setactiveSlide(1) : setactiveSlide(activeSlide + 1)
    }, [20000]);
    return (

        <div className='flex flex-col gap-10 mx-8'>
            {/* //Banner 1 */}
            <div className='flex justify-end shadow-xl shadow-[#5535df] items-end p-5'>
                <div className='flex flex-col lg:flex-row-reverse justify-center items-center'>
                    <img className='h-[30vh] lg:h-[70vh]' src={Img1} alt="" />
                    <p className='text-black text-2xl  lg:text-4xl font-edu p-5'>
                        <span> Your resume is not just a document,</span><br />
                        <span>it's representation of your skills, experience, and potential.</span> <br />
                        <span>Make it stand out and let it speak for you.</span></p>
                </div>
            </div>
            {/* Banner 2 */}
            <div className='flex justify-end shadow-xl shadow-[#5535df] items-end p-5'>
                <div className='flex flex-col-reverse lg:flex-row justify-center items-center'>
                    <img className='h-[30vh] lg:h-[50vh]' src={Img2} alt="" />
                    <div className=''>
                        <p className='text-black text-2xl lg:text-4xl font-pacifico p-2'>Get hired faster with a well-crafted resume.</p>
                        <hr />
                        <p className='text-black text-xl lg:text-3xl font-oleo p-4'>A well-crafted resume is the key to getting hired faster. In today's competitive job market, employers receive dozens, if not hundreds, of resumes for each open position. A resume that stands out from the crowd can make all the difference in securing an interview and ultimately landing the job. By using our resume builder, you can ensure that your resume showcases your skills, experience, and achievements in the best possible light. With customizable templates and helpful tips, our platform makes it easy to create a resume that is tailored to your unique strengths and the specific requirements of the job you're applying for. Don't let a mediocre resume hold you back- let us help you craft a winning resume that will help you get hired faster.</p>
                    </div>
                </div>
            </div>
            {/* Banner 3 */}
            <div className='flex justify-end shadow-xl shadow-[#5535df] items-end p-5'>
                <div className='flex flex-col lg:flex-row justify-center items-center'>
                    <div className='flex flex-col'>
                        <p className='text-black text-2xl lg:text-2xl font-edu p-3'>Discover your perfect resume template with ease - simply swipe to browse through our vast collections of thousands of free options.</p>
                        <img className='h-[30vh] lg:h-[50vh]' src={Img3} alt="" />
                    </div>
                    <div class="flex items-center justify-center w-full h-full sm:py-8 px-4">
                        <div class="w-full relative flex items-center justify-center">
                            <button aria-label="slide backward" class="absolute z-30 left-0 ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev" onClick={goPrev}>
                                <svg class="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <div class="w-full h-full overflow-x-hidden overflow-y-hidden">
                                <div id="slider" class="h-full flex gap-6 items-center justify-start transition ease-out duration-700">
                                    <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src="./resume/template0.png" alt="" class="h-[50vh] lg:h-[75vh] w-full border-2 border-black" />
                                    </div>
                                    <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src="./resume/template1.png" alt="" class="h-[50vh] lg:h-[75vh] w-full border-2 border-black" />
                                    </div>
                                    <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src="./resume/template2.png" alt="" class="h-[50vh] lg:h-[75vh] w-full border-2 border-black" />
                                    </div>
                                    <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src="./resume/template3.png" alt="" class="h-[50vh] lg:h-[75vh] w-full border-2 border-black" />
                                    </div>
                                    <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src="./resume/template4.png" alt="" class="h-[50vh] lg:h-[75vh] w-full border-2 border-black" />
                                    </div>
                                    <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src="./resume/template5.png" alt="" class="h-[50vh] lg:h-[75vh] w-full border-2 border-black" />
                                    </div>
                                    <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src="./resume/template6.png" alt="" class="h-[50vh] lg:h-[75vh] w-full border-2 border-black" />
                                    </div>
                                    <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src="./resume/template7.png" alt="" class="h-[50vh] lg:h-[75vh] w-full border-2 border-black" />
                                    </div>
                                    <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src="./resume/template8.png" alt="" class="h-[50vh] lg:h-[75vh] w-full border-2 border-black" />
                                    </div>
                                    <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src="./resume/template0.png" alt="" class="h-[50vh] lg:h-[75vh] w-full border-2 border-black" />
                                    </div>
                                    <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src="./resume/template0.png" alt="" class="h-[50vh] lg:h-[75vh] w-full border-2 border-black" />
                                    </div>
                                </div>
                            </div>
                            <button aria-label="slide forward" class="absolute z-30 right-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next" onClick={goNext}>
                                <svg class="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner 4 */}
            <div className='flex flex-col justify-end shadow-xl shadow-[#5535df] p-5'>
                <p className='text-black text-xl lg:text-3xl font-pacifico p-2'>Create a professional resume in minutes with our user-friendly builder in just three simple step.!</p>
                <div className='relative py-10'>
                    <div class="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
                        <button type="button" class={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent ${activeSlide === 1 ? 'bg-blue-700' : 'bg-black'} bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)]motion-reduce:transition-none`} onClick={() => { setactiveSlide(1) }}></button>
                        <button type="button" class={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent ${activeSlide === 2 ? 'bg-blue-700' : 'bg-black'} bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none`} onClick={() => { setactiveSlide(2) }}></button>
                        <button type="button" class={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent ${activeSlide === 3 ? 'bg-blue-700' : 'bg-black'} bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none`} onClick={() => { setactiveSlide(3) }}></button>
                    </div>
                    <div class="relative lg:h-[55vh]">
                        <div id='1' class="relative w-full overflow-hidden ">
                            <div class={`relative float-left -mr-[100%] w-full flex flex-col lg:flex-row transition-transform duration-300 ${activeSlide === 1 ? 'translate-x-0' : 'translate-x-full'}`} >
                                <img className='h-[30vh] lg:h-[50vh]' src={Img4} alt="" />
                                <p className='text-black text-xl lg:text-3xl font-oleo p-2'>At Resume Forge, we believe that selecting the right template is the first step in building a great resume. That's why we offer a wide range of customizable templates to choose from, ensuring that you find the perfect design to showcase your skills and qualifications. Our templates are tailored to specific industries and job levels, so you can be sure that your resume looks professional and relevant to the job you're applying for. Our platform is designed to make the process of selecting a template easy and intuitive, and we provide helpful tips and suggestions to guide you along the way. With Resume Forge, you can start your resume-building journey with confidence, knowing that you have the right template to help you stand out from the crowd.</p>

                            </div>
                            <div id='2' class={`relative float-left -mr-[100%] w-full flex flex-col lg:flex-row transition-transform duration-300 ${activeSlide === 2 ? 'translate-x-0' : 'translate-x-full'}`}>
                                <img className='h-[30vh] lg:h-[50vh]' src={Img5} alt="" />
                                <p className='text-black text-xl lg:text-3xl font-oleo p-2'>At Resume Forge, we know that filling in your information can be a daunting task when building a resume. That's why we've created an intuitive platform that makes the process easy and stress-free. Our resume builder website offers a range of customizable sections, including work experience, education, skills, and achievements, to help you highlight your qualifications and stand out from other applicants. We also provide helpful tips and suggestions throughout the process to ensure that you don't miss any important details or formatting requirements. With Resume Forge, you can create a standout resume that reflects your skills and experience in the best possible light, and increase your chances of landing your dream job.</p>
                            </div>
                            <div id='3' class={`relative float-left -mr-[100%] w-full flex flex-col lg:flex-row transition-transform duration-300 ${activeSlide === 3 ? 'translate-x-0' : 'translate-x-full'}`}>
                                <img className='h-[30vh] lg:h-[50vh]' src={Img6} alt="" />
                                <p className='text-black text-xl lg:text-3xl font-oleo p-2'>Once you've completed your resume using our platform at Resume Forge, the final step is to download your finished product. We make this process quick and easy, allowing you to download your resume in a variety of formats, including PDF, Word, and plain text. Our platform ensures that your resume looks polished and professional, no matter which format you choose. We also provide helpful tips on how to optimize your resume for online submission or printing, so you can be confident that your document is optimized for maximum impact. With Resume Forge, you can create a standout resume and take the next step in your career with confidence.</p>
                            </div>
                        </div>
                        <button class="absolute top-0 bottom-0 left-0 z-[1] flex items-center justify-center text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-blue-500 " type="button" onClick={() => { activeSlide === 1 ? setactiveSlide(3) : setactiveSlide(activeSlide - 1) }}>
                            <span class="inline-block text-2xl">
                                <i class="fa-solid fa-arrow-left"></i>
                            </span>
                        </button>
                        <button class="absolute top-0 bottom-0 right-0 z-[1] flex items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-blue-500 " type="button" onClick={() => { activeSlide === 3 ? setactiveSlide(1) : setactiveSlide(activeSlide + 1) }}>
                            <span class="inline-block text-2xl">
                                <i class="fa-solid fa-arrow-right"></i>
                            </span>
                        </button>
                    </div>

                </div>
            </div>
            {/* //Banner 1 */}
            <div className='flex justify-end shadow-xl shadow-[#5535df] items-end p-5'>
                <div className='flex flex-col-reverse lg:flex-row justify-center items-center'>
                    <img className='h-[30vh] lg:h-[50vh]' src={Img7} alt="" />
                    <p className='text-black text-xl lg:text-3xl font-oleo p-4'>A good resume can make all the difference when it comes to landing your dream job, and there are countless websites out there that offer resume templates and builder tools to help you create a professional-looking document. However, many of these sites require you to pay a premium fee for access to their best templates, which can be expensive and often not worth the investment. That's why Resume Forge proves to be a game-changer, offering a wide range of premium-quality templates for free that are often sold at high rates on other websites. Whether you're a recent graduate or a seasoned professional, RESUME Forge has everything you need to create a standout resume that will help you stand out from the crowd and impress potential employers..</p>

                </div>
            </div>
        </div>

    )
}

export default Home
