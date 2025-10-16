
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Pork from './pages/Pork';
import Beef from './pages/Beef';
import Chicken from './pages/Chicken';
import logo from './pages/images/arada_recipe.png';
import './App.css';

function App() {
  return (
      <Router>
        <header>
          <h1>
            <img className='myLogo' src={logo} alt="My Logo" width="80px" />
            Arada Recipe
          </h1>
        </header>
        <nav>
          <Navbar />
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/pork" element={<Pork />}></Route>
          <Route path="/beef" element={<Beef />}></Route>
          <Route path="/chicken" element={<Chicken />}></Route>
        </Routes>
      </Router>
  );
}

export default App
