import React, { useState } from 'react';
import { Utensils, Sparkles, Eye, ArrowRight, Wine } from 'lucide-react';
import { featuredDishes } from '../data/restaurantData';
import './FeaturedDishes.css';

export default function FeaturedDishes({ onSelectDish, onOpenMenuModal }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Signatures' },
    { id: 'mains', label: 'Land & Hearth' },
    { id: 'seafood', label: 'Sea & Hearth' },
    { id: 'pasta', label: 'Artisanal Pasta' },
    { id: 'starters', label: 'Starters' },
    { id: 'desserts', label: 'Patisserie' }
  ];

  const filteredDishes = activeCategory === 'all' 
    ? featuredDishes 
    : featuredDishes.filter(dish => dish.category === activeCategory);

  return (
    <section className="featured-section section-padding" id="featured-dishes">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Culinary Masterpieces</span>
          </div>
          <h2 className="section-title">
            Our Signature <span className="text-gold-gradient">Degustation Creations</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Each creation is an exquisite equilibrium of temperature, texture, and aroma—born from 
            ancient wood embers and plated with artistic precision.
          </p>

          {/* Category Filter Tabs */}
          <div className="category-tabs-container">
            <div className="category-tabs">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  className={`category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                  id={`cat-filter-${cat.id}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dishes Cards Grid */}
        <div className="dishes-grid">
          {filteredDishes.map((dish) => (
            <article 
              key={dish.id} 
              className="dish-card glass-card"
              onClick={() => onSelectDish(dish)}
            >
              {/* Dish Image Box with Hover Quick View */}
              <div className="dish-img-container">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="dish-img" 
                  loading="lazy"
                />
                <div className="dish-img-overlay">
                  <span className="quick-view-badge">
                    <Eye size={15} />
                    <span>Quick View & Pairing</span>
                  </span>
                </div>

                {/* Top Badge */}
                <span className="dish-tag-badge">
                  {dish.tag}
                </span>

                {/* Price Pill */}
                <div className="dish-price-pill">
                  {dish.price}
                </div>
              </div>

              {/* Dish Info */}
              <div className="dish-info">
                <div className="dish-category-label">
                  {dish.categoryName}
                </div>

                <h3 className="dish-title font-serif">
                  {dish.name}
                </h3>

                <p className="dish-desc">
                  {dish.shortDesc}
                </p>

                {/* Wine Pairing Snippet */}
                <div className="dish-wine-snippet">
                  <Wine size={14} className="text-gold" />
                  <span>Pairing: {dish.winePairing.split(',')[0]}</span>
                </div>

                {/* Card Footer with Dietary & Details Button */}
                <div className="dish-card-footer">
                  <div className="dish-dietary-tags">
                    {dish.dietary.map((tag, idx) => (
                      <span key={idx} className="dietary-tag">{tag}</span>
                    ))}
                  </div>

                  <button 
                    type="button" 
                    className="dish-view-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectDish(dish);
                    }}
                    aria-label={`View details for ${dish.name}`}
                  >
                    <span>Details</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View Full Menu CTA Banner */}
        <div className="menu-cta-banner glass-panel">
          <div className="menu-cta-content">
            <div className="menu-cta-icon">
              <Utensils size={28} />
            </div>
            <div>
              <h3 className="menu-cta-title font-serif">Seeking the Complete Degustation Tasting Menu?</h3>
              <p className="menu-cta-desc">
                Discover our multi-course seasonal dinner journey, raw bar selections, and sommelier reserve list.
              </p>
            </div>
          </div>
          <button 
            type="button" 
            className="btn btn-primary-gold btn-lg menu-cta-btn"
            onClick={onOpenMenuModal}
            id="view-full-menu-cta-btn"
          >
            <span>View Full Digital Menu</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
