import './App.css';
import BannerScreen from './screens/BannerScreen';
import Header from './components/header/Header';

function App() {
  return (
    <div className="app-container">
      <Header />
      <BannerScreen className='banner-screen' />
    </div>
  );
}

export default App;
