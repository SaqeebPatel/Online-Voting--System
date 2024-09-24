import React from "react";
import "../CSS/Contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Contact() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-column contact-info">
          <h5>Contact:</h5>
          <hr />
          <p>1800 9090 32</p>
          <p>1800 9000 64</p>
          <br />
          <h5>Helpline Number:</h5>
          <hr />
          <p>9090 1234 46</p>
          <p>9090 1234 47</p>
          <br />
          <h5>Email:</h5>
          <hr />
          <p>saqeeb@electionindia.gov.in</p>
          <p>info@electionindia.gov.in</p>
          <br />
        </div>
        <div className="footer-column">
          <h5>Get In:</h5>

          <hr />
          <div className="auth-links">
            <a href="#" className="auth-link">
              Register
            </a>
            <a href="#" className="auth-link">
              Login
            </a>
          </div>

          <br />
          <br />
          <h5>Know More:</h5>
          <hr />
          <div className="info-links">
            <a href="#" className="info-link">
              Features
            </a>
            <a href="#" className="info-link">
              About
            </a>
            <a href="#" className="info-link">
              Steps
            </a>
          </div>

          <br />
          <br />
          <h5>Follow Us:</h5>
          <hr />
          <div className="social-links">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>

          <br />
        </div>
        <div className="footer-column quick-feedback">
          <h5>Quick Feedback:</h5>
          <input type="text" placeholder="Your Name" />
          <textarea placeholder="Your Feedback"></textarea>
          <button className="btn btn-primary">Send</button>
        </div>
      </div>
      <p className="copyright">© Saqeeb. Patel</p>
    </footer>
  );
}

export default Contact;
