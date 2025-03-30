import Button from "./components/button";
import Display from "./components/display";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="calculator">
        <Display />
        <Button />
      </div>
    </div>
  );
}

export default App;
