import React from 'react';
import '../CSS/Navbar.css'; // Importing custom CSS
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate(); // Define navigate using useNavigate

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate('/Userpage')}>Profile Info</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate('/Election')}>Election</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate('/Contact')}>Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate('/Vote')}>Vote</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
