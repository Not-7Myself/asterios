import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

import StarryBackground from "./starry";
import logo from "./logo.png";
import Plan from "./Plan";
import Home from "./Home";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/extraction" element={<Plan />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Nav() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="menu">
          <Link to="/" className="menu-item">
            Home
          </Link>
          <Link to="/extraction" className="menu-item">
            Extraction
          </Link>
          <Link to="/contact" className="menu-item">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container"></div>
      <div className="bottom">
        <p>&copy; 4948 Asteraios. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default App;
