import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { totalItems, setIsOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollTo('hero')}>
          <span className="logo-n">N</span>
          <span className="logo-o">O</span>
          <span className="logo-y">Y</span>
          <span className="logo-a">A</span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><button onClick={() => scrollTo('hero')}>Accueil</button></li>
          <li><button onClick={() => scrollTo('products')}>Produits</button></li>
          <li><button onClick={() => scrollTo('about')}>À propos</button></li>
          <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
        </ul>

        <div className="nav-actions">
          <button className="cart-btn" onClick={() => setIsOpen(true)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
