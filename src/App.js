import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import MainPage from './Components/Pages/MainPage';
import AboutUs from './Components/Pages/AboutUs';
import News from './Components/Pages/News';
import WhatIsDepression from './Components/Pages/WhatIsDepression';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/News' element={<News />} />
        <Route path='/what-is-depression' element={<WhatIsDepression />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
