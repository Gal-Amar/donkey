import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Center } from '@mantine/core';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Clouds from './backgroundWrap'
import LOGO from './assets/donkey.png'
import THEME from './assets/donkeyAndFriends.png'
import HomeCarousel from './components/HomeCarousel.js'



const App = () => {
  return (
    <Router>
      <header>
        <Link to='/'><img src={LOGO} alt='logo' className='nav-logo' /></Link>
        <Navbar />
      </header>
        <Clouds />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

    </Router>
  )
}

export default App