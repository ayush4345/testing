import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      style={{
        boxShadow: scrolled 
          ? '0 4px 12px rgba(0, 0, 0, 0.15)' 
          : '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="container">
        <div className="logo">MyPortfolio</div>
        <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/places">Places</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(m => !m)}
          role="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setMenuOpen(m => !m)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
