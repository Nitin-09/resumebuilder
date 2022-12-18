import Home from "./Components/Home";
import Body from "./Components/Body";
function App() {
  return (
    // Container div
    <div className="font-serif flex flex-col gap-5 overflow-hidden select-none">
      <Home></Home>
      <Body></Body>
    </div>
  );
}

export default App;
