import ResumeContext from "./ResumeContext.js"
import { useState } from "react";
import axios from "axios";
const ResumeState = (props) => {
  const [ResumeId, setResumeId] = useState("")
  const host = "http://localhost:5000"
  //Create Resume 
  const createResume = () => {
    //api
    const response = axios.post(`${host}/api/resume/createresume`, {}, {
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    response.then((data)=>
    {
      const emptyResume = data.data()
      setResumeId(emptyResume._id)
    }).catch((err)=>
    {
      console.log(err);
    })

  }

  //add a note
  const submitDetails = (details) => {
    //api
    const response = axios.post(`${host}/api/resume/submitdetails/63c78fdfeb97a2c1063bfcce`, details, {
      headers: {
        'content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
      },

    });
    response.then((data)=>{
      console.log(data);
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
      <ResumeContext.Provider value={{createResume,submitDetails }}>
        {props.children}
      </ResumeContext.Provider>
    )
  }
  export default ResumeState