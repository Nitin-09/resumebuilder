import Home from "./Components/Home";
import Body from "./Components/Body";
import ResumeState from "./context/Resume/ResumeState.js";

function App() {
  return (
    // Container div
    <ResumeState>
      <div className="font-serif flex flex-col gap-5 overflow-hidden select-none">
        <Home></Home>
        <Body></Body>
      </div>
    </ResumeState>
  );
}

export default App;
