import './App.css';
import Header from './components/header/Header';
import BannerScreen from './screens/BannerScreen';
import AboutScreen from './screens/AboutScreen';
import ServicesScreen from './screens/ServicesScreen';
import PortfolioScreen from './screens/PortfolioScreen';
import ContactScreen from './screens/ContactScreen';

function App() {
  return (
    <div className="app-container">
      <Header />
      <BannerScreen className='banner-screen' />
      <AboutScreen />
      <ServicesScreen />
      <PortfolioScreen />
      <ContactScreen />
    </div>
  );
}

export default App;
