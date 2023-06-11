import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import MainPage from './Components/Pages/MainPage';
import AboutUs from './Components/Pages/AboutUs';
import News from './Components/Pages/News';
import Report from './Components/Pages/Report';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/News' element={<News />} />
        <Route path='/Report' element={<Report />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
