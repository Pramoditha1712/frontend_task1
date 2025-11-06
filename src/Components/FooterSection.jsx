import React from 'react';
import './FooterSection.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest, FaTelegram, FaGooglePlusG, FaEnvelope } from "react-icons/fa";

function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="container py-5">
        <div className="row text-start">
          <div className="col-md-3 col-6 mb-4">
            <h6 className="footer-title">Hobbycue</h6>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Our Services</li>
              <li>Work with Us</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <h6 className="footer-title">How Do I</h6>
            <ul className="list-unstyled">
              <li>Sign Up</li>
              <li>Add a Listing</li>
              <li>Claim Listing</li>
              <li>Post a Query</li>
              <li>Add a Blog Post</li>
              <li>Other Queries</li>
            </ul>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <h6 className="footer-title">Quick Links</h6>
            <ul className="list-unstyled">
              <li>Listings</li>
              <li>Blog Posts</li>
              <li>Shop / Store</li>
              <li>Community</li>
            </ul>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <h6 className="footer-title">Social Media</h6>
            <div className="social-icons mb-3">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaPinterest />
              <FaGooglePlusG />
              <FaYoutube />
              <FaTelegram />
              <FaEnvelope />
            </div>

            <h6 className="footer-title">Invite Friends</h6>
            <div className="invite-box d-flex">
              <input type="email" placeholder="Email ID" className="form-control invite-input" />
              <button className="invite-btn">Invite</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center py-3">
        © Purple Cues Private Limited
      </div>
    </footer>
  );
}

export default FooterSection;
