import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home";
import Body from "./Components/Body";
import ResumeState from "./context/Resume/ResumeState.js";
import Auth from "./Components/Auth";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert"
import { useState } from "react"
function App() {
  const [alert, setalert] = useState(null)
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);

  }
  return (
    // Container div
    <ResumeState>
      <Router>
        <Navbar></Navbar>
        <Alert alert={alert}></Alert>
        <div className="flex flex-col overflow-hidden select-none">
          <Routes>
            <Route path='/auth/:user' element={<Auth showAlert={showAlert}/>} />
            <Route path='/tempelates' element={<Home/>} />
            <Route path='/newresume' element={<Body/>} />
          </Routes>
        </div>
      </Router>
    </ResumeState>
  );
}

export default App;
