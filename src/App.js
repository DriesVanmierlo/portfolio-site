import "./App.css";
import Header from "./components/header/Header";
import BannerScreen from "./screens/BannerScreen";
import AboutScreen from "./screens/AboutScreen";
import ServicesScreen from "./screens/ServicesScreen";
import PortfolioScreen from "./screens/PortfolioScreen";
import ContactScreen from "./screens/ContactScreen";
import Landing from "./saveme/screens/Landing";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app-container">
              <Header />
              <BannerScreen className="banner-screen" />
              <AboutScreen />
              <ServicesScreen />
              <PortfolioScreen />
              <ContactScreen />
            </div>
          }
        />
        <Route path="/saveme" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
