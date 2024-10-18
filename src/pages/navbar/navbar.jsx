import {Link} from "react-router-dom"
import { useState } from "react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return(
    <div className="navbar">
      <Link to="/" className="nav-item">Tarot Reading</Link>
      <div className="nav-container">

        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/one-card" className="nav-item">One-Card</Link>
          <Link to="/three-card" className="nav-item">Three-Card</Link>
          <Link to="/celtic-cross" className="nav-item">Celtic Cross</Link>
          <Link to="/yesorno" className="nav-item">Yes/No</Link>
          <Link to="/soulmate" className="nav-item">Soulmate</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;