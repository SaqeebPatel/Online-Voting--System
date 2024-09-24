import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../components/CSS/UserNavbar.css";
import AddCandidate from "../components/Admin/AddCandidates";


function UserNavbar({ role }) {
  const navigate = useNavigate(); 
  const handleNavigation = (path) => {
    navigate(path); 
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {role === "admin" ? (
                <>
                 
                  <li className="nav-item">
                    <button
                      className="nav-link btn"
                      onClick={() => handleNavigation("/addelection")}
                    >
                      Add Election
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link btn"
                      onClick={() => handleNavigation("/addcandidate")}
                    >
                      Add Candidates
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link btn"
                      onClick={() => handleNavigation("/VotesPerElection")}
                    >
                      Vote view
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link btn"
                      onClick={() => handleNavigation("/Login")}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <button
                      className="nav-link btn"
                      onClick={() => handleNavigation("/userinfo")}
                    >
                      Profile Info
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link btn"
                      onClick={() => handleNavigation("/Election")}
                    >
                      Election
                    </button>
                  </li>
                  
                  <li className="nav-item">
                    <button
                      className="nav-link btn"
                      onClick={() => handleNavigation("/Login")}
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default UserNavbar;
