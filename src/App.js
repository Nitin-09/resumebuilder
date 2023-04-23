import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home";
import Body from "./Components/Body";
import ResumeState from "./context/Resume/ResumeState.js";
import Auth from "./Components/Auth";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert"
import Template from "./Components/Template"
import Footer from "./Components/Footer"
import Profiles from "./Components/Profiles"
import { useState } from "react"
function App() {
  const [alert, setalert] = useState(null)
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);

  }
  return (
    <ResumeState>
      <Router>
        <div className="overflow-x-hidden">
          <div className="bg-pattern bg-contain bg-no-repeat lg:bg-cover h-screen">
            <Navbar></Navbar>
            <Alert alert={alert}></Alert>
            <Routes>
              <Route path='/' element={<Home showAlert={showAlert} />} />
              <Route path='/auth/:user' element={<Auth showAlert={showAlert} />} />
              <Route path='/templates' element={<Template />} />
              <Route path='/newresume/:tid/:rid' element={<Body showAlert={showAlert} />} />
              <Route path='/profiles' element={<Profiles showAlert={showAlert} />} />
            </Routes>
            <Footer></Footer>
          </div>
        </div>
      </Router>

    </ResumeState >
  );
}

export default App;
