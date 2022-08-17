import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/cart' element={<Cart />} />

          <Route path='/about' element={<About />} />

          <Route path='/' element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
