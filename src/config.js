const config={
    "profile": [
        {
            "input": [
                {
                    "sequence": 0,
                    "name": "sectionTitle",
                    "label": "Section Title",
                    "type": "text",
                    "required": "Section Title cannot be empty",
                    "pattern": {
                        "value": "[A-Za-z]{3,}",
                        "message": "Section Title must be atleast 3 characters long"
                    },
                    "span": 6,
                    "value": "Profile"
                },
                {
                    "sequence": 1,
                    "name": "firstName",
                    "label": "First Name",
                    "type": "text",
                    "required": "First Name cannot be empty",
                    "pattern": {
                        "value": "[A-Za-z]{3,}",
                        "message": "First Name must be atleast 3 characters long"
                    },
                    "span": 3
                },
                {
                    "sequence": 2,
                    "name": "lastName",
                    "label": "Last Name",
                    "type": "text",
                    "required": "Last Name cannot be empty",
                    "pattern": {
                        "value": "[A-Za-z]{3,}",
                        "message": "Last Name must be atleast 3 characters long"
                    },
                    "span": 3
                },
                {
                    "sequence": 3,
                    "name": "title",
                    "label": "Title",
                    "type": "text",
                    "required": "Title cannot be empty",
                    "pattern": {
                        "value": "[A-Za-z\\s]{3,}",
                        "message": "Title must be atleast 3 characters long"
                    },
                    "span": 3
                },
                {
                    "sequence": 4,
                    "name": "profile",
                    "label": "Profile",
                    "type": "file",
                    "accept": "image/png, image/jpeg",
                    "required": "Please select a profile image",
                    "span": 3,
                    "inputClassConfig": "mt-3 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 cursor-pointer peer"
                },
                {
                    "sequence": 5,
                    "name": "address",
                    "label": "Address",
                    "type": "text",
                    "required": "Address field cannot be empty",
                    "pattern": {
                        "value": "[\\w\\D\\s]{3,}",
                        "message": "Address must be atleast 3 characters long"
                    },
                    "span": 6
                },
                {
                    "sequence": 6,
                    "name": "city",
                    "label": "City ",
                    "type": "text",
                    "required": "City cannot be empty",
                    "pattern": {
                        "value": "[A-Za-z\\s]{3,}",
                        "message": "City must be atleast 3 characters long"
                    },
                    "span": 2
                },
                {
                    "sequence": 7,
                    "name": "state",
                    "label": "State",
                    "type": "text",
                    "required": "State cannot be empty",
                    "pattern": {
                        "value": "[A-Za-z\\s]{3,}",
                        "message": "State must be atleast 3 characters long"
                    },
                    "span": 2
                },
                {
                    "sequence": 8,
                    "name": "zipCode",
                    "label": "Zip Code",
                    "type": "number",
                    "required": "Zip Code cannot be empty",
                    "pattern": {
                        "value": "(^\\d{6}$)|(^\\d{5}-\\d{4}$)",
                        "message": "Please enter a valid zip code"
                    },
                    "span": 2
                },
                {
                    "sequence": 9,
                    "name": "email",
                    "label": "Email",
                    "type": "email",
                    "required": "Email cannot be empty",
                    "pattern": {
                        "value": "^[\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$",
                        "message": "Please enter a valid email address"
                    },
                    "span": 3
                },
                {
                    "sequence": 10,
                    "name": "phoneNumber",
                    "label": "Phone Number",
                    "type": "number",
                    "required": "Phone Number cannot be empty",
                    "pattern": {
                        "value": "(^\\d{10}$)",
                        "message": "Please enter a valid phone number without any country codes"
                    },
                    "span": 3
                }
            ],
            "button": {}
        }
    ],
    "education": [
        {
            "input": [
                {
                    "sequence": 0,
                    "name": "sectionTitle",
                    "label": "Section Title",
                    "type": "text",
                    "required": "Section Title cannot be empty",
                    "pattern": {
                        "value": "[A-Za-z\\s]{3,}",
                        "message": "Section Title must be atleast 3 characters long"
                    },
                    "span": 6,
                    "value": "Education"
                },
                {
                    "sequence": 1,
                    "name": "schoolName",
                    "label": "School Name",
                    "type": "text",
                    "required": "School Name cannot be empty",
                    "pattern": {
                        "value": "[A-Za-z\\s]{3,}",
                        "message": "School Name must be atleast 3 characters long"
                    },
                    "span": 3
                },
                {
                    "sequence": 2,
                    "name": "schoolLocation",
                    "label": "School Location",
                    "type": "text",
                    "required": "School Location cannot be empty",
                    "pattern": {
                        "value": "[\\w,\\s]{5,}",
                        "message": "Section Location must be atleast 5 characters long"
                    },
                    "span": 3
                },
                {
                    "sequence": 3,
                    "name": "schoolStartDate",
                    "label": "Start Date",
                    "type": "month",
                    "required": "Please Select course start date",
                    "span": 2
                },
                {
                    "sequence": 4,
                    "name": "schoolEndDate",
                    "label": "End Date",
                    "type": "month",
                    "required": "Please Select course end date",
                    "span": 2
                },
                {
                    "sequence": 5,
                    "name": "checkEducation",
                    "label": "I am currently studying here.",
                    "type": "checkbox",
                    "span": 2,
                    "inputClassConfig":"cursor-pointer peer mx-3",
                    "labelClassConfig":"text-sm text-gray-500 cursor-pointer ",
                    "condition":(a)=>{
                        let element=document.getElementById("schoolEndDate")
                        if(a){
                        element?.classList.add("opacity-0")

                    }
                        else
                        element?.classList.remove("opacity-0")
                    }
                
                },
                {
                    "sequence": 6,
                    "name": "degree",
                    "label": "Degree",
                    "type": "text",
                    "required": "Degree cannot by empty",
                    "pattern": {
                        "value": "[A-Za-z\\s]{3,}",
                        "message": "Degree must be atleast 3 characters long"
                    },
                    "span": 3
                },
                {
                    "sequence": 7,
                    "name": "fieldOfStudy",
                    "label": "Field Of Study ",
                    "type": "text",
                    "required": "Field of study cannot by empty",
                    "pattern": {
                        "value": "[A-Za-z\\s]{3,}",
                        "message": "Field of study must be atleast 3 characters long"
                    },
                    "span": 3
                },
                {
                    "sequence": 8,
                    "name": "schoolDescription",
                    "label": "School Description",
                    "type": "textarea",
                    "required": false,
                    "pattern": {
                        "value": "[\\d\\w\\s]*",
                        "message": "Please Enter a valid description"
                    },
                    "span": 6
                }
            ],
            "button": {}
        }
    ],
    "workExperience": [
        {
            "input": [
                {
                    "sequence": 0,
                    "name": "sectionTitle",
                    "label": "Section Title",
                    "type": "text",
                    "required": "Section Title cannot be empty",
                    "pattern": {
                        "value": "[A-Za-z\\s]{3,}",
                        "message": "Section Title must be atleast 3 characters long"
                    },
                    "span": 6,
                    "value": "Work Experience"
                },
                {
                    "sequence": 1,
                    "name": "position",
                    "label": "Position",
                    "type": "text",
                    "required": "Position cannot be empty",
                    "pattern": {
                        "value": "[A-Za-z\\s]{3,}",
                        "message": "Position must be atleast 3 characters long"
                    },
                    "span": 3
                },
                {
                    "sequence": 2,
                    "name": "companyName",
                    "label": "Company Name",
                    "type": "text",
                    "required": "Company Name cannot be empty",
                    "pattern": {
                        "value": "[A-Za-z\\s]{3,}",
                        "message": "Company Name must be atleast 3 characters long"
                    },
                    "span": 3
                },
                {
                    "sequence": 3,
                    "name": "workStartDate",
                    "label": "Start Date",
                    "type": "month",
                    "required": "Please Select work start date",
                    "span": 2
                },
                {
                    "sequence": 4,
                    "name": "workEndDate",
                    "label": "End Date",
                    "type": "month",
                    "required": "Please Select work end date",
                    "span": 2
                },
                {
                    "sequence": 5,
                    "name": "checkWork",
                    "label": "I am currently Working here.",
                    "type": "checkbox",
                    "span": 2,
                    "inputClassConfig":"cursor-pointer peer order-1 mx-3",
                    "labelClassConfig":"text-sm text-gray-500 cursor-pointer order-2 ",
                    "condition":(a)=>{
                        let element=document.getElementById("workEndDate")
                        if(a){
                        element?.classList.add("opacity-0")
                    }
                        else
                        element?.classList.remove("opacity-0")
                    }
                },
                {
                    "sequence": 6,
                    "name": "workDescription",
                    "label": "Description",
                    "type": "textarea",
                    "pattern": {
                        "value": "[\\w\\D\\s]*",
                        "message": "Section Title must be atleast 3 characters long"
                    },
                    "span": 6
                }
            ],
            "button": {}
        }
    ],
    "project": [
        {
            "input": [
                {
                    "sequence": 0,
                    "name": "sectionTitle",
                    "label": "Section Title",
                    "type": "text",
                    "required": "Section Title cannot be empty",
                    "pattern": {
                        "value": "[A-Za-z\\s]{3,}",
                        "message": "Section Title must be atleast 3 characters long"
                    },
                    "span": 6,
                    "value":"Project"
                },
                {
                    "sequence": 1,
                    "name": "projectName",
                    "label": "Project Name",
                    "type": "text",
                    "required": "Project name cannot be empty",
                    "pattern": {
                        "value": "[A-Za-z\\s]{3,}",
                        "message": "Project Name must be atleast 3 characters long"
                    },
                    "span": 6
                },
                {
                    "sequence": 2,
                    "name": "projectDescription",
                    "label": "Description",
                    "type": "text",
                    "required": "Project Description cannot be empty",
                    "pattern": {
                        "value": "[\\w\\D\\s]{10,}",
                        "message": "Project Description must be atleast 10 characters long"
                    },
                    "span": 6
                },
                {
                    "sequence": 3,
                    "name": "projectLink",
                    "label": "Project Link",
                    "type": "url",
                    "required": "Project Link cannot be empty",
                    "pattern": {
                        "value": "(https:\/\/|http:\/\/|www.)[\\w\/.\\D]+",
                        "message": "Please Enter a valid URL"
                    },
                    "span": 6
                }
            ],
            "button": {}
        }
    ],
    "skills": [
        {
            "input": [
                {
                    "sequence": 0,
                    "name": "sectionTitle",
                    "label": "Section Title",
                    "type": "text",
                    "required": "Section Title cannot be empty",
                    "pattern": {
                        "value": "[A-Za-z\\s]{3,}",
                        "message": "Section Title must be atleast 3 characters long"
                    },
                    "span": 6,
                    "value": "Skills"
                },
                {
                    "sequence": 1,
                    "name": "skillName",
                    "label": "Skill Name",
                    "type": "text",
                    "required": "Skill Name cannot be empty",
                    "pattern": {
                        "value": "[\\w\\D\\s]+",
                        "message": "Skill Name must be atleast 3 characters long"
                    },
                    "span": 6
                },
                {
                    "sequence": 2,
                    "name": "skillRating",
                    "label": "Rating",
                    "type": "progressBar",
                    "span": 3
                },
                {
                    "sequence": 3,
                    "name": "checkBar",
                    "label": "Hide rating in resume, Show only skill name.",
                    "type": "checkbox",
                    "span": 3,
                    "inputClassConfig":"cursor-pointer peer order-1 mx-3",
                    "labelClassConfig":"text-sm text-gray-500 cursor-pointer order-2 ",
                    "condition":(a)=>{
                        let element=document.getElementById("skillRating")
                        if(a){
                        element?.classList.add("opacity-0")
                    }
                        else
                        element?.classList.remove("opacity-0")
                    }
                },

            ],
            "button": {}
        }
    ],
    "summary": [
        {
            "input": [
                {
                    "sequence": 0,
                    "name": "sectionTitle",
                    "label": "Section Title",
                    "type": "text",
                    "required": "Section Title cannot be empty",
                    "pattern": {
                        "value": "[A-Za-z\\s]{3,}",
                        "message": "Section Title must be atleast 3 characters long"
                    },
                    "span": 6,
                    "value": "Summary"
                },
                {
                    "sequence": 1,
                    "name": "aboutMe",
                    "label": "About Me",
                    "type": "text",
                    "required": "About Me cannot be empty",
                    "pattern": {
                        "value": "[\\w\\D\\s]{10,}",
                        "message": "About Me must be atleast 10 characters long"
                    },
                    "span": 6
                }
            ],
            "button": {}
        }
    ],
    "others": [
        {
            "input": [
                {
                    "sequence": 0,
                    "name": "sectionTitle",
                    "label": "Section Title",
                    "type": "text",
                    "required": "Section Title cannot be empty",
                    "pattern": {
                        "value": "[A-Za-z\\s]{3,}",
                        "message": "Section Title must be atleast 3 characters long"
                    },
                    "span": 6,
                    "value": "Others"
                },
                {
                    "sequence": 1,
                    "name": "label",
                    "label": "Label",
                    "type": "text",
                    "required": "Label",
                    "pattern": {
                        "value": "[\\D\\w\\s]{3,}",
                        "message": "Label must be atleast 3 characters long"
                    },
                    "span": 6
                },
                {
                    "sequence": 2,
                    "name": "value",
                    "label": "Value",
                    "type": "text",
                    "required": "Value cannot be empty",
                    "pattern": {
                        "value": "[\\w\\D\\s]{3,}",
                        "message": "Value must be atleast 3 characters long"
                    },
                    "span": 6
                }
            ],
            "button": {}
        }
    ]
}
export default config;