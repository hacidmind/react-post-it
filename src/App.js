import './css/App.css';
import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import GetStarted from './pages/GetStarted';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/getstarted" element={<GetStarted />} />
        </Routes>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
