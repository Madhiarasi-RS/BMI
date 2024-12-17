import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BmiCalculator from './components/BmiCalculator';
import About from './components/About';
import { BmiProvider } from './context/BmiContext';

function App() {
  return (
    <BmiProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<BmiCalculator />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </BmiProvider>
  );
}

export default App;
