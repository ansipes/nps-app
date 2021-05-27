import "./App.css";
import Park from "./services/Park.js";

function App() {
  return (
    <div className="App">
      <button onClick={() => Park.index()}>Park Index</button>
      <button
        onClick={() => Park.single("77E0D7F0-1942-494A-ACE2-9004D2BDC59E")}
      >
        Park Single
      </button>
      <button onClick={() => Park.singleByParkCode("abli")}>
        Park Single By parkCode
      </button>
    </div>
  );
}

export default App;
