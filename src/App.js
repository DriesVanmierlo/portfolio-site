import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./saveme/screens/Landing";
import HomeScreen from "./screens/HomeScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route path="/saveme">
          <Landing />
        </Route>
        <Route path="*">
          <NotFoundScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
