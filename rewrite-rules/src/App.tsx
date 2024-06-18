import "./styles/App.css";
import Node from "./components/Node";

function App() {
  return (
    <>
      <div className="row">
        <div className="toolsBar">
          <h3>Project Name</h3>
          <div className="">
            <div className="row">
              <Node icon="0" name="Order" />
              <Node icon="1" name="Loop" />
              <Node icon="2" name="Rewrite" />
            </div>
            <div className="row">
              <Node icon="3" name="Player" />
              <Node icon="4" name="Match" />
              <Node icon="5" name="Random" />
            </div>
            <div className="row">
              <Node icon="6" name="win" />
              <Node icon="7" name="lose" />
              <Node icon="8" name="draw" />
            </div>
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
