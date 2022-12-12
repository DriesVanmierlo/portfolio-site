import './App.css';
import Header from './components/header/Header';
import BannerScreen from './screens/BannerScreen';
import AboutScreen from './screens/AboutScreen';
import ServicesScreen from './screens/ServicesScreen';
import PortfolioScreen from './screens/PortfolioScreen';
import ContactScreen from './screens/ContactScreen';
import { MyComponent } from './screens/MyComponent';

function App() {
  return (
    <div className="app-container">
      <Header />
      <BannerScreen className='banner-screen' />
      <AboutScreen />
      <ServicesScreen />
      <PortfolioScreen />
      <ContactScreen />
      <MyComponent />
    </div>
  );
}

export default App;
