import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="logo">
              <span className="logo-icon">💎</span>
              <span className="logo-text">StyleHub</span>
            </div>
            <p>
              Your one-stop destination for beautiful jewelry, fashionable clothes, and stunning hair accessories.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Pinterest">📌</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Shop</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h3>Categories</h3>
            <ul>
              <li>
                <a href="#">💎 Jewelry</a>
              </li>
              <li>
                <a href="#">👗 Clothes</a>
              </li>
              <li>
                <a href="#">🎀 Hair Accessories</a>
              </li>
              <li>
                <a href="#">🛍️ New Arrivals</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>📧 info@stylehub.com</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>📍 123 Fashion Street, Style City</p>
            <p>🕒 Mon-Fri: 9AM-6PM</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; 2024 StyleHub. All rights reserved.</p>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Shipping Info</a>
            <a href="#">Returns</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
