import React, { useState } from 'react';
import { Award, Heart, Leaf, Compass, ArrowRight, X } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';
import './About.css';

export default function About({ onOpenReservationModal }) {
  const [isPhilosophyModalOpen, setIsPhilosophyModalOpen] = useState(false);

  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Image & Floating Accolade Column */}
          <div className="about-image-column">
            <div className="about-image-wrapper">
              <img 
                src="/images/about-restaurant.jpg" 
                alt="Clean Creations Founder Barbara Bolotte Blank preparing fresh gourmet ingredients" 
                className="about-primary-img"
              />
              <div className="about-img-glow"></div>

              {/* Floating Prestige Badge */}
              <div className="about-floating-badge glass-panel">
                <div className="badge-crest">🌿</div>
                <div>
                  <h4 className="badge-title">Barbara Bolotte Blank</h4>
                  <p className="badge-subtitle">Founder & Culinary Director</p>
                  <span className="badge-subtext">New Orleans Healthy Dining Pioneer</span>
                </div>
              </div>

              {/* Decorative Geometric Frame */}
              <div className="about-frame-border"></div>
            </div>
          </div>

          {/* Text & Content Column */}
          <div className="about-text-column">
            <div className="section-badge">
              <Compass size={14} />
              <span>Our Culinary Story</span>
            </div>

            <h2 className="section-title">
              Crafting Wellness Through <span className="text-gold-gradient">Scratch Cooking</span> & Whole Ingredients
            </h2>

            <p className="about-paragraph lead">
              Founded on the belief that healthy eating should be effortless, vibrant, and extraordinarily flavorful, 
              Clean Creations brings chef-prepared gourmet nutrition directly to Greater New Orleans.
            </p>

            <p className="about-paragraph">
              Every dish is composed from scratch daily in our Gretna kitchen without shortcuts, refined sugars, 
              or artificial additives. From our bustling retail cafe and juice bar to our doorstep meal prep service, 
              our culinary team balances wholesome macro nutrition with the unforgettable soul and seasoning of Louisiana.
            </p>

            {/* Key Pillars Checklist */}
            <div className="about-features-list">
              <div className="about-feature-item">
                <div className="feature-icon-box">
                  <Leaf size={18} />
                </div>
                <div>
                  <strong>100% Real Whole Food</strong>
                  <p>Fresh whole vegetables, healthy non-GMO oils, and pasture-raised lean proteins.</p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="feature-icon-box">
                  <Heart size={18} />
                </div>
                <div>
                  <strong>Nutritionist-Approved Balance</strong>
                  <p>Chef-designed meals tailored for Gluten-Free, Keto, Paleo, and High-Protein lifestyles.</p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="feature-icon-box">
                  <Award size={18} />
                </div>
                <div>
                  <strong>Locally Owned in Gretna</strong>
                  <p>Proudly fueling Louisiana athletes, busy families, and wellness seekers since day one.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="about-actions">
              <button 
                type="button" 
                className="btn btn-primary-gold"
                onClick={() => setIsPhilosophyModalOpen(true)}
                id="about-learn-more-btn"
              >
                <span>Read Founder's Story</span>
                <ArrowRight size={17} />
              </button>

              <button 
                type="button" 
                className="btn btn-secondary-outline"
                onClick={onOpenReservationModal}
                id="about-reserve-btn"
              >
                <span>Reserve A Table</span>
              </button>
            </div>
          </div>
        </div>

        {/* Accolades & Statistics Bar */}
        <div className="about-stats-strip glass-card">
          {restaurantInfo.stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <span className="stat-number text-gold-gradient">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-subtext">{stat.subtext}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy & Founder's Story Modal */}
      {isPhilosophyModalOpen && (
        <div className="modal-overlay" onClick={() => setIsPhilosophyModalOpen(false)}>
          <div className="modal-content philosophy-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="modal-close-btn" 
              onClick={() => setIsPhilosophyModalOpen(false)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="philosophy-modal-body">
              <div className="section-badge">
                <Award size={14} />
                <span>The Clean Creations Mission</span>
              </div>
              <h3 className="modal-title font-serif">Nourishing Lives Without Sacrificing Flavor</h3>
              
              <div className="philosophy-modal-grid">
                <img 
                  src="/images/chef-plating.jpg" 
                  alt="Founder Barbara Bolotte Blank" 
                  className="philosophy-modal-img"
                />
                <div className="philosophy-modal-text">
                  <blockquote className="chef-quote font-serif">
                    "Healthy eating shouldn't feel restrictive or bland. At Clean Creations, we craft fresh gourmet meals 
                    that fuel your ambition, nourish your family, and celebrate the rich, delicious culinary spirit of New Orleans."
                  </blockquote>
                  <p>
                    Founder Barbara Bolotte Blank created Clean Creations to bridge the gap between busy modern schedules 
                    and clean, wholesome nutrition. What started as cooking for local fitness enthusiasts has blossomed into 
                    a premier New Orleans culinary brand with a full retail cafe in Gretna and doorstep meal delivery.
                  </p>
                  <p>
                    Every recipe is rigorously tested to ensure optimal macronutrients, balanced calories, and extraordinary 
                    satisfaction. We invite you to experience how delicious healthy living can be.
                  </p>

                  <div className="modal-actions-bar">
                    <button 
                      type="button" 
                      className="btn btn-primary-gold"
                      onClick={() => { setIsPhilosophyModalOpen(false); onOpenReservationModal(); }}
                    >
                      Dine With Us at Clean Creations
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
