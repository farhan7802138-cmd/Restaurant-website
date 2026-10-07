import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, UtensilsCrossed, Sparkles, PhoneCall } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenMenuModal, onOpenReservationModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Accolade Bar */}
      <div className="navbar-top-bar">
        <div className="container top-bar-content">
          <span className="top-bar-item">
            <Sparkles size={13} className="text-gold" />
            <span>New Orleans Healthy Gourmet Meal Prep & Dining</span>
          </span>
          <span className="top-bar-divider">•</span>
          <span className="top-bar-item highlight">Fresh Scratch Kitchen • Retail Cafe & Gourmet Delivery</span>
          <span className="top-bar-divider">•</span>
          <a href="tel:5043095427" className="top-bar-item phone-link">
            <PhoneCall size={12} />
            <span>(504) 309-5427</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="navbar-main">
        <div className="container navbar-container">
          {/* Logo Area */}
          <a href="#" className="nav-logo" onClick={closeMobileMenu}>
            <span className="logo-emblem">🌿</span>
            <div className="logo-text-group">
              <span className="logo-brand">CLEAN CREATIONS</span>
              <span className="logo-sub">New Orleans Healthy Gourmet Kitchen</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links desktop-only">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#featured-dishes" className="nav-link">Signature Dishes</a></li>
            <li><a href="#why-choose-us" className="nav-link">Why Clean Creations</a></li>
            <li><a href="#experience" className="nav-link">Experiences</a></li>
            <li><a href="#reviews" className="nav-link">Reviews</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>

          {/* Action CTAs */}
          <div className="nav-actions desktop-only">
            <button 
              type="button"
              className="btn btn-secondary-outline btn-sm nav-menu-btn"
              onClick={onOpenMenuModal}
              id="header-view-menu-btn"
            >
              <UtensilsCrossed size={16} />
              <span>Full Menu</span>
            </button>
            <button 
              type="button"
              className="btn btn-primary-gold btn-sm nav-reserve-btn"
              onClick={onOpenReservationModal}
              id="header-reserve-table-btn"
            >
              <Calendar size={16} />
              <span>Reserve Table</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            type="button"
            className="mobile-toggle-btn mobile-only"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            id="mobile-nav-toggle-btn"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-inner">
          <ul className="mobile-nav-links">
            <li>
              <a href="#about" onClick={closeMobileMenu}>
                <span className="mobile-link-num">01</span>
                <span>About Clean Creations</span>
              </a>
            </li>
            <li>
              <a href="#featured-dishes" onClick={closeMobileMenu}>
                <span className="mobile-link-num">02</span>
                <span>Signature Dishes</span>
              </a>
            </li>
            <li>
              <a href="#why-choose-us" onClick={closeMobileMenu}>
                <span className="mobile-link-num">03</span>
                <span>Why Choose Us</span>
              </a>
            </li>
            <li>
              <a href="#experience" onClick={closeMobileMenu}>
                <span className="mobile-link-num">04</span>
                <span>Dining & Cafe Experiences</span>
              </a>
            </li>
            <li>
              <a href="#reviews" onClick={closeMobileMenu}>
                <span className="mobile-link-num">05</span>
                <span>Customer Reviews</span>
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMobileMenu}>
                <span className="mobile-link-num">06</span>
                <span>Contact & Hours</span>
              </a>
            </li>
          </ul>

          <div className="mobile-drawer-actions">
            <button 
              type="button"
              className="btn btn-secondary-outline btn-lg w-full"
              onClick={() => { closeMobileMenu(); onOpenMenuModal(); }}
              id="mobile-view-menu-btn"
            >
              <UtensilsCrossed size={18} />
              <span>Explore Full Menu</span>
            </button>
            <button 
              type="button"
              className="btn btn-primary-gold btn-lg w-full"
              onClick={() => { closeMobileMenu(); onOpenReservationModal(); }}
              id="mobile-reserve-table-btn"
            >
              <Calendar size={18} />
              <span>Reserve a Table</span>
            </button>
          </div>

          <div className="mobile-drawer-info">
            <p>1105 Lafayette St, Gretna, LA 70053</p>
            <p className="text-gold">(504) 309-5427</p>
          </div>
        </div>
      </div>
    </header>
  );
}
