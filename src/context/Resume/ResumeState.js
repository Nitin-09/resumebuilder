import ResumeContext from "./ResumeContext.js"
import { useState } from "react";
import axios from "axios";

const ResumeState = (props) => {
  const [ResumeId, setResumeId] = useState("")
  const host = "http://localhost:5000"
  //Create Resume 
  const createResume = () => {
    //api
    const response = axios.post(`${host}/api/resume/createresume`, {
      headers: {
        'Content-Type': 'application/json',
        // 'auth-token': localStorage.getItem('token')
      },
    });
    response.then((data)=>
    {
      const emptyResume = data.data()
      setResumeId(emptyResume._id)
      console.log(data);
    }).catch((err)=>
    {
      console.log(err);
    })

  }

  //add a note
  const submitDetails = (Obj, activeKey) => {
    //api
    const obj = { [activeKey]: Obj }
    console.log(obj)
    const response = axios.post(`${host}/api/resume/submitdetails/63bff62e5e7c6cf279d02c93`, {
      headers: {
        'Content-Type': 'application/json',
        'auth-token:':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiZmFlMjUwOWFlNDU4YThhZjk3NWE1In0sImlhdCI6MTY3MzUwNjM0MX0.7gHOFZglcRn9nDGJufXHskUnC5vkWmneXA-3VpXK6-I'
      },
      body: JSON.stringify(obj)
    });
    response.then((data)=>{
      console.log(data);
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
      <ResumeContext.Provider value={{ createResume, submitDetails }}>
        {props.children}
      </ResumeContext.Provider>
    )
  }
  export default ResumeState