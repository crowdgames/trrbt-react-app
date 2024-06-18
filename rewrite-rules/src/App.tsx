import "./App.css";
import Node from "./components/Node";

function App() {
  return (
    <>
      <div className="row">
        <div className="toolsBar">
          <h3>Project Name</h3>
          <div className="">
          <Node icon="0" name="win"/>
          <Node icon="1" name="win"/>
          <Node icon="2" name="win"/>
          </div>
         
        </div>
        <div>
          <div className="workSpace">pretend this is code</div>
          <div className="outputSpace">pretend this is an output</div>
        </div>
      </div>
    </>
  );
}

export default App;
