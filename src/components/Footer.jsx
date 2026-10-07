import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Award, ArrowUp } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';
import './Footer.css';

// Clean SVG Brand Icons
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function Footer({ onOpenMenuModal, onOpenReservationModal }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setNewsletterEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      {/* Newsletter Strip */}
      <div className="footer-newsletter-strip">
        <div className="container newsletter-container">
          <div className="newsletter-text">
            <span className="newsletter-kicker text-gold">The Clean Creations Newsletter</span>
            <h3 className="newsletter-title font-serif">Receive Seasonal Menu Releases & Wholesome Inspiration</h3>
            <p className="newsletter-sub">Curated scratch-kitchen recipes, seasonal meal specials, and healthy living tips sent weekly.</p>
          </div>

          <div className="newsletter-form-wrapper">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="btn btn-primary-gold btn-sm" id="newsletter-submit-btn">
                  <span>Subscribe</span>
                  <Send size={15} />
                </button>
              </form>
            ) : (
              <div className="newsletter-success">
                <span>🌿 Welcome to Clean Creations. Check your inbox shortly.</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1: Brand & Accolades */}
            <div className="footer-col brand-col">
              <a href="#" className="footer-logo">
                <span className="logo-emblem">🌿</span>
                <div className="logo-text-group">
                  <span className="logo-brand">CLEAN CREATIONS</span>
                  <span className="logo-sub">Healthy Gourmet Kitchen & Dining</span>
                </div>
              </a>

              <p className="footer-about-text">
                New Orleans premier scratch kitchen serving health-conscious gourmet meals crafted with whole foods, cold-pressed oils, and zero artificial ingredients.
              </p>

              <div className="footer-accolade-badge">
                <Award size={18} className="text-gold" />
                <span>Greater New Orleans Healthy Dining Excellence</span>
              </div>

              {/* Social Links */}
              <div className="footer-social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-btn">
                  <InstagramIcon />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon-btn">
                  <FacebookIcon />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon-btn">
                  <TwitterIcon />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Navigation */}
            <div className="footer-col">
              <h4 className="footer-heading font-serif">Navigation</h4>
              <ul className="footer-links">
                <li><a href="#about">About Our Story</a></li>
                <li><a href="#featured-dishes">Signature Dishes</a></li>
                <li><a href="#why-choose-us">The Clean Standard</a></li>
                <li><a href="#experience">Dining Spaces</a></li>
                <li><a href="#reviews">Guest Reviews</a></li>
                <li><a href="#reservation">Table Reservation</a></li>
                <li><a href="#contact">Contact & Hours</a></li>
              </ul>
            </div>

            {/* Column 3: Contact & Location */}
            <div className="footer-col">
              <h4 className="footer-heading font-serif">Kitchen & Cafe Address</h4>
              <div className="footer-contact-details">
                <p className="contact-line">
                  <MapPin size={16} className="text-gold flex-shrink-0" />
                  <span>{restaurantInfo.address.street}, {restaurantInfo.address.city}</span>
                </p>
                <p className="contact-line">
                  <Phone size={16} className="text-gold flex-shrink-0" />
                  <a href={`tel:${restaurantInfo.phone}`}>{restaurantInfo.phone}</a>
                </p>
                <p className="contact-line">
                  <Mail size={16} className="text-gold flex-shrink-0" />
                  <a href={`mailto:${restaurantInfo.email}`}>{restaurantInfo.email}</a>
                </p>
              </div>

              <div className="footer-actions">
                <button 
                  type="button" 
                  className="btn btn-secondary-outline btn-sm w-full"
                  onClick={onOpenMenuModal}
                >
                  View Digital Menu
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary-gold btn-sm w-full"
                  onClick={onOpenReservationModal}
                >
                  Book A Table
                </button>
              </div>
            </div>

            {/* Column 4: Service Hours */}
            <div className="footer-col">
              <h4 className="footer-heading font-serif">Service Hours</h4>
              <ul className="footer-hours-list">
                {restaurantInfo.hours.map((h, idx) => (
                  <li key={idx} className="footer-hour-item">
                    <span className="hour-days">{h.days}</span>
                    <span className="hour-meal text-gold">{h.meal}</span>
                    <span className="hour-time">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Copyright & Back to Top */}
          <div className="footer-bottom">
            <p className="copyright-text">
              © 2025 Clean Creations. All rights reserved. Crafted with passion for healthy gourmet living.
            </p>

            <div className="footer-legal-links">
              <a href="#privacy">Privacy Policy</a>
              <span>•</span>
              <a href="#terms">Terms of Dining</a>
              <span>•</span>
              <a href="#accessibility">Accessibility</a>
            </div>

            <button 
              type="button" 
              className="back-to-top-btn" 
              onClick={scrollToTop}
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
