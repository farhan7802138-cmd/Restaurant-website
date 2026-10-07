import React from 'react';
import { Calendar, UtensilsCrossed, ChevronDown, Award, Sparkles, Leaf, ShieldCheck } from 'lucide-react';
import './Hero.css';

export default function Hero({ onOpenMenuModal, onOpenReservationModal }) {
  return (
    <section className="hero-section" id="home">
      {/* Background Image Container with Gradient Overlays */}
      <div className="hero-backdrop">
        <img 
          src="/images/hero-banner.jpg" 
          alt="Clean Creations Healthy Gourmet Dining Ambience" 
          className="hero-bg-img"
        />
        <div className="hero-overlay-gradient"></div>
        <div className="hero-vignette"></div>
      </div>

      <div className="container hero-content-container">
        <div className="hero-content">
          {/* Top Micro-badge */}
          <div className="hero-badge animate-fade-in">
            <span className="badge-glow-dot"></span>
            <Sparkles size={14} className="text-gold" />
            <span>Certified Fresh Scratch Kitchen • Greater New Orleans Healthy Gourmet</span>
          </div>

          {/* Headline */}
          <h1 className="hero-headline font-serif">
            Where <span className="text-gold-gradient">Healthy Living</span> Meets Gourmet Culinary Artistry
          </h1>

          {/* Subtitle / Intro */}
          <p className="hero-description">
            Handcrafted chef-prepared dining made from fresh, whole, scratch ingredients. 
            Founded by Barbara Bolotte Blank in New Orleans to nourish your body and fuel your active lifestyle 
            without sacrificing rich, delicious flavor.
          </p>

          {/* CTAs */}
          <div className="hero-cta-group">
            <button 
              type="button" 
              className="btn btn-primary-gold btn-lg hero-cta-reserve"
              onClick={onOpenReservationModal}
              id="hero-reserve-cta-btn"
            >
              <Calendar size={18} />
              <span>Reserve a Table</span>
            </button>

            <button 
              type="button" 
              className="btn btn-secondary-outline btn-lg hero-cta-menu"
              onClick={onOpenMenuModal}
              id="hero-menu-cta-btn"
            >
              <UtensilsCrossed size={18} />
              <span>Explore Gourmet Menu</span>
            </button>
          </div>

          {/* Quick Highlight Cards */}
          <div className="hero-highlights">
            <div className="highlight-pill">
              <Leaf size={18} className="highlight-icon" />
              <div>
                <strong>100% Scratch Kitchen</strong>
                <span>Fresh Whole Foods</span>
              </div>
            </div>

            <div className="highlight-pill">
              <ShieldCheck size={18} className="highlight-icon" />
              <div>
                <strong>Nutritionist Approved</strong>
                <span>Gluten-Free & Keto Options</span>
              </div>
            </div>

            <div className="highlight-pill">
              <Award size={18} className="highlight-icon" />
              <div>
                <strong>Gretna Cafe & Delivery</strong>
                <span>New Orleans Metro</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <a href="#about" className="hero-scroll-cue" aria-label="Scroll to about section">
        <span>Discover Our Story</span>
        <ChevronDown size={18} className="scroll-chevron" />
      </a>
    </section>
  );
}
