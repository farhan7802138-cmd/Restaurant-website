import React, { useState } from 'react';
import { Sparkles, Check, Calendar, ArrowRight } from 'lucide-react';
import { diningExperiences } from '../data/restaurantData';
import './Experience.css';

export default function Experience({ onOpenReservationModal }) {
  const [activeExpId, setActiveExpId] = useState('grand-hall');

  const currentExperience = diningExperiences.find(exp => exp.id === activeExpId) || diningExperiences[0];

  return (
    <section className="experience-section section-padding" id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Atmospheres & Spaces</span>
          </div>
          <h2 className="section-title">
            The Clean Creations <span className="text-gold-gradient">Dining & Wellness Experience</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From the electric intimacy of the chef's counter to our candlelit private salons, 
            discover bespoke environments crafted to elevate every conversation and course.
          </p>

          {/* Experience Switcher Tabs */}
          <div className="exp-tabs-nav">
            {diningExperiences.map(exp => (
              <button
                key={exp.id}
                type="button"
                className={`exp-tab-button ${activeExpId === exp.id ? 'active' : ''}`}
                onClick={() => setActiveExpId(exp.id)}
                id={`exp-tab-${exp.id}`}
              >
                <span>{exp.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Experience Showcase Card */}
        <div className="experience-showcase glass-card">
          <div className="exp-media-pane">
            <img 
              src={currentExperience.image} 
              alt={currentExperience.title} 
              className="exp-hero-img" 
            />
            <div className="exp-img-glow"></div>
            <div className="exp-image-tag">
              <span>{currentExperience.subtitle}</span>
            </div>
          </div>

          <div className="exp-details-pane">
            <span className="exp-kicker text-gold">Curated Setting</span>
            <h3 className="exp-title font-serif">
              {currentExperience.title}
            </h3>
            <p className="exp-desc">
              {currentExperience.desc}
            </p>

            <div className="exp-features-grid">
              {currentExperience.features.map((feature, idx) => (
                <div key={idx} className="exp-feature-chip">
                  <Check size={16} className="text-gold flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="exp-action-row">
              <button 
                type="button" 
                className="btn btn-primary-gold"
                onClick={onOpenReservationModal}
                id="exp-book-space-btn"
              >
                <Calendar size={17} />
                <span>Reserve This Space</span>
              </button>
              <a href="#contact" className="btn btn-secondary-outline">
                <span>Inquire Private Events</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
