import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from '../src/pages/home/Home';
import About from './pages/about/About';
import Login from './pages/login/Login';
import Contact from './pages/contact/Contact';
import Register from './pages/register/Register';

function App() {

  return (
    <div className="App"> 

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>    
    </div>
  );
}

export default App;