import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Award, Sparkles, CheckCircle } from 'lucide-react';
import { customerReviews } from '../data/restaurantData';
import './Reviews.css';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? customerReviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === customerReviews.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(nextReview, 6500);
    return () => clearInterval(interval);
  }, [isAutoplay, currentIndex]);

  const activeReview = customerReviews[currentIndex];

  return (
    <section 
      className="reviews-section section-padding" 
      id="reviews"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Honored Accolades & Memories</span>
          </div>
          <h2 className="section-title">
            Words From Our <span className="text-gold-gradient">Cherished Guests</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Every day, our culinary team strives to bring you flavorful, clean nutrition. 
            Here is what critics and cherished guests share about Clean Creations.
          </p>
        </div>

        {/* Trust Badges Bar */}
        <div className="reviews-trust-bar glass-card">
          <div className="trust-metric">
            <div className="trust-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#8ed444" color="#8ed444" />
              ))}
            </div>
            <span className="trust-score">4.9 / 5.0</span>
            <span className="trust-source">OpenTable Diners Choice</span>
          </div>

          <div className="trust-divider"></div>

          <div className="trust-metric">
            <Award size={22} className="text-gold" />
            <span className="trust-score">Top 100</span>
            <span className="trust-source">US Fine Dining Excellence</span>
          </div>

          <div className="trust-divider"></div>

          <div className="trust-metric">
            <CheckCircle size={22} className="text-gold" />
            <span className="trust-score">99%</span>
            <span className="trust-source">Recommend to Friends</span>
          </div>
        </div>

        {/* Featured Testimonial Slider */}
        <div className="testimonial-slider-container">
          <div className="testimonial-card glass-card">
            <div className="quote-watermark">
              <Quote size={80} />
            </div>

            <div className="testimonial-content">
              {/* Rating stars */}
              <div className="testimonial-rating">
                {[...Array(activeReview.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#8ed444" color="#8ed444" />
                ))}
              </div>

              {/* Title */}
              <h3 className="testimonial-title font-serif">
                "{activeReview.title}"
              </h3>

              {/* Comment */}
              <blockquote className="testimonial-quote">
                "{activeReview.comment}"
              </blockquote>

              {/* Author & Occasion */}
              <div className="testimonial-author-block">
                <div className="author-avatar-badge">
                  {activeReview.avatar}
                </div>
                <div>
                  <h4 className="author-name">{activeReview.name}</h4>
                  <p className="author-role">{activeReview.role} • <em>{activeReview.occasion}</em></p>
                  <span className="author-date">{activeReview.date}</span>
                </div>
              </div>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="testimonial-nav-controls">
              <button 
                type="button" 
                className="testimonial-nav-btn" 
                onClick={prevReview}
                aria-label="Previous testimonial"
                id="reviews-prev-btn"
              >
                <ChevronLeft size={22} />
              </button>
              <button 
                type="button" 
                className="testimonial-nav-btn" 
                onClick={nextReview}
                aria-label="Next testimonial"
                id="reviews-next-btn"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="testimonial-dots">
            {customerReviews.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`dot-indicator ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Jump to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
