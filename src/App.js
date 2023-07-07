import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Projects from './pages/Projects';
import About from './pages/About';
import OtherProjects from './pages/OtherProjects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <body>

          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/misc" element={<OtherProjects />} />
        </Routes>
        </body>
        
        <footer>
          <Footer />
        </footer>
      </Router>

    </div>
  );
}

export default App;
