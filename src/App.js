import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ParkList from "./pages/ParkList.js";
import ParkSingle from "./pages/ParkSingle.js";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>I am the navbar</nav>
        <Switch>
          <Route exact path="/parks">
            <ParkList />
          </Route>
          <Route path="/parks/:id">
            <ParkSingle />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
