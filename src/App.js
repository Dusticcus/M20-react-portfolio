import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from './components/Navbar';

import Home from "./pages/Home";
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
