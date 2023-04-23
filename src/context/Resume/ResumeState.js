import ResumeContext from "./ResumeContext.js"
import { useState } from "react";
import axios from "axios";
const ResumeState = (props) => {
  const [ResumeData, setResumeData] = useState([])
  const host =  "https://resumeforgebkend.netlify.app/.netlify/functions/"
  //Create Resume 
  const submitDetails = (details, ResumeId) => {
    //api
    const response = axios.post(`${host}/api/resume/submitdetails/${ResumeId}`, details, {
      headers: {
        'content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },

    });
    response.then((data) => {
      console.log(data)
    }).catch((err) => {
      console.log(err);
    })
  }
  const getTempelates = (setTemplatedata) => {
    //api
    const response = axios.get(`${host}/api/tempelates/getTempelates`, {}, {
      headers: {
      },

    });
    response.then((data) => {
      setTemplatedata(data.data)
    }).catch((err) => {
      console.log(err);
    })
  }
  const fetchAllResume = () => {
    //api
    const response = axios.post(`${host}/api/resume/fetchAllResume`, {}, {
      headers: {
        'content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },

    });
    response.then((data) => {
      setResumeData(data.data)
    }).catch((err) => {
      console.log(err);
    })
  }
  const fetchResume = (rid, setSavedInformation) => {
    //api
    const response = axios.post(`${host}/api/resume/fetchResume`, { "rid": rid }, {
      headers: {
        'content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },

    });
    response.then((data) => {
      setSavedInformation(data.data[0]);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <ResumeContext.Provider value={{ submitDetails, getTempelates, fetchResume, ResumeData, fetchAllResume }}>
      {props.children}
    </ResumeContext.Provider>
  )
}
export default ResumeState