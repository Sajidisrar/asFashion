import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const { cartCount } = useCart()

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <span className="logo-icon">💎</span>
            <span className="logo-text">StyleHub</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="nav">
            <ul className="nav-links">
              <li>
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* Cart and Search */}
          <div className="header-actions">
            <button className="header-btn">
              <span>🔍</span>
            </button>
            <Link to="/cart" className="header-btn" style={{ textDecoration: 'none' }}>
              <span>🛒</span>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
            <button className="header-btn">
              <span>👤</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav">
            <ul className="mobile-nav-links">
              <li>
                <Link 
                  to="/" 
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Mobile Cart and Search */}
          <div className="mobile-actions">
            <button className="mobile-action-btn mobile-search-btn">
              🔍 Search
            </button>
            <Link to="/cart" className="mobile-action-btn mobile-cart-btn" style={{ textDecoration: 'none', textAlign: 'center' }} onClick={() => setIsMenuOpen(false)}>
              🛒 Cart {cartCount > 0 ? `(${cartCount})` : ''}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
