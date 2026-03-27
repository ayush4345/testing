import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const hamburgerRef = useRef(null)

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [menuOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        if (hamburgerRef.current) {
          hamburgerRef.current.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">MyPortfolio</div>
        <ul className={`nav-links${menuOpen ? ' active' : ''}`} aria-hidden={!menuOpen}>
          <li><NavLink to="/" tabIndex={menuOpen ? 0 : -1}>Home</NavLink></li>
          <li><NavLink to="/about" tabIndex={menuOpen ? 0 : -1}>About</NavLink></li>
          <li><NavLink to="/places" tabIndex={menuOpen ? 0 : -1}>Places</NavLink></li>
          <li><NavLink to="/contact" tabIndex={menuOpen ? 0 : -1}>Contact</NavLink></li>
        </ul>
        <button
          ref={hamburgerRef}
          type="button"
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
