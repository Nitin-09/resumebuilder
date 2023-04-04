import React from 'react'

function Section(props) {
    console.log(props.activeKey);
    return (
        <div class="flex items-center gap-2 select-none">
            <div class="flex items-center text-[#5535df] relative cursor-pointer" onClick={()=>{props.setActiveKey('profile')}}>
                <div class={`rounded-full transition duration-500 ease-in-out h-12 w-12 border-2 border-[#5535df] text-3xl flex justify-center items-center ${props.activeKey==='profile'?"bg-[#5535df] text-white":""}`}>
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-[#5535df]">Profile</div>
            </div>
            <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-[#5535df]"></div>
            <div class="flex items-center text-[#5535df] relative cursor-pointer" onClick={()=>{props.setActiveKey('education')}}>
                <div class={`rounded-full transition duration-500 ease-in-out h-12 w-12 border-2 border-[#5535df] text-3xl flex justify-center items-center ${props.activeKey==='education'?"bg-[#5535df] text-white":""}`}>
                    <i class="fa-solid fa-school"></i>
                </div>
                <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-[#5535df]">Education</div>
            </div>
            <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-[#5535df]"></div>
            <div class="flex items-center text-[#5535df] relative cursor-pointer" onClick={()=>{props.setActiveKey('workExperience')}}>
                <div class={`rounded-full transition duration-500 ease-in-out h-12 w-12 border-2 border-[#5535df] text-3xl flex justify-center items-center ${props.activeKey==='workExperience'?"bg-[#5535df] text-white":""}`}>
                <i class="fa-solid fa-briefcase"></i>
                </div>
                <div class="absolute top-0 -ml-3 md:-ml-10 text-center mt-16 w-30 md:w-32 text-xs font-medium uppercase text-[#5535df]">Work Experience</div>
            </div>
            <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-[#5535df]"></div>
            <div class="flex items-center text-[#5535df] relative cursor-pointer" onClick={()=>{props.setActiveKey('project')}}>
                <div class={`rounded-full transition duration-500 ease-in-out h-12 w-12 border-2 border-[#5535df] text-3xl flex justify-center items-center ${props.activeKey==='project'?"bg-[#5535df] text-white":""}`}>
                <i class="fa-solid fa-diagram-project"></i>
                </div>
                <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-[#5535df]">Projects</div>
            </div>
            <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-[#5535df]"></div>
            <div class="flex items-center text-[#5535df] relative cursor-pointer" onClick={()=>{props.setActiveKey('skills')}}>
                <div class={`rounded-full transition duration-500 ease-in-out h-12 w-12 border-2 border-[#5535df] text-3xl flex justify-center items-center ${props.activeKey==='skills'?"bg-[#5535df] text-white":""}`}>
                <i class="fa-solid fa-brain"></i>
                </div>
                <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-[#5535df]">Skills</div>
            </div>
            <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-[#5535df]"></div>
            <div class="flex items-center text-[#5535df] relative cursor-pointer" onClick={()=>{props.setActiveKey('others')}}>
                <div class={`rounded-full transition duration-500 ease-in-out h-12 w-12 border-2 border-[#5535df] text-3xl flex justify-center items-center ${props.activeKey==='others'?"bg-[#5535df] text-white":""}`}>
          <i class="fa-solid fa-bookmark"></i>
                </div>
                <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-[#5535df]">Others</div>
            </div>
        </div>
    )
}

export default Section