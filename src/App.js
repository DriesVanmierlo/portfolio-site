import "./App.css";
import Header from "./components/header/Header";
import BannerScreen from "./screens/BannerScreen";
import AboutScreen from "./screens/AboutScreen";
import ServicesScreen from "./screens/ServicesScreen";
import PortfolioScreen from "./screens/PortfolioScreen";
import ContactScreen from "./screens/ContactScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./saveme/screens/Landing";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="app-container">
            <Header />
            <BannerScreen className="banner-screen" />
            <AboutScreen />
            <ServicesScreen />
            <PortfolioScreen />
            <ContactScreen />
          </div>
        </Route>
        <Route path="/saveme">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
