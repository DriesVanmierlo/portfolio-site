import './App.css';
import Header from './components/header/Header';
import BannerScreen from './screens/BannerScreen';
import AboutScreen from './screens/AboutScreen';

function App() {
  return (
    <div className="app-container">
      <Header />
      <BannerScreen className='banner-screen' />
      <AboutScreen />
    </div>
  );
}

export default App;
