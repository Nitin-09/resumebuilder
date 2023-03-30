import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home";
// import Body from "./Components/Body";
import ResumeState from "./context/Resume/ResumeState.js";
import Auth from "./Components/Auth";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert"
import Footer from "./Components/Footer"
// import Profile from "./Components/Profiles"
import { useState } from "react"
// import MyResume from "./Components/MyResume";
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
              {/* <Route path='/tempelates' element={<Home />} /> */}
              {/* <Route path='/newresume/:tid/:rid' element={<Body showAlert={showAlert} />} /> */}
              {/* <Route path='/profile' element={<Profile showAlert={showAlert} />} /> */}
              {/* <Route path='/myresume' element={<MyResume showAlert={showAlert} />} /> */}
            </Routes>
            <Footer></Footer>
          </div>
        </div>
      </Router>

    </ResumeState >
  );
}

export default App;
