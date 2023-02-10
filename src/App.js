import "./App.css";
import Left from "./components/left/Left";
import Right from "./components/right/Right";
function App() {
  return (
    <>
      <Left/>
      <div className="hr-line-container"><div className="hr-line"></div></div>
      <Right/>
    </>
  );
}

export default App;
