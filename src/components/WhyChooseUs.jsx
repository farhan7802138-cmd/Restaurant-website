import React from 'react';
import { Leaf, Flame, Award, Sparkles, Wine, ShieldCheck, Check } from 'lucide-react';
import { whyChooseUsFeatures } from '../data/restaurantData';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Leaf': return <Leaf size={24} />;
      case 'Flame': return <Flame size={24} />;
      case 'Award': return <Award size={24} />;
      case 'Sparkles': return <Sparkles size={24} />;
      case 'Wine': return <Wine size={24} />;
      case 'ShieldCheck': return <ShieldCheck size={24} />;
      default: return <Sparkles size={24} />;
    }
  };

  return (
    <section className="why-us-section section-padding" id="why-choose-us">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <div className="section-badge">
            <Award size={14} />
            <span>The Clean Creations Standard</span>
          </div>
          <h2 className="section-title">
            Why Health-Conscious Diners <span className="text-gold-gradient">Choose Clean Creations</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Our relentless dedication to made-from-scratch healthy gourmet meals, cold-pressed oils, and zero artificial ingredients sets the benchmark for wholesome living.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="features-grid">
          {whyChooseUsFeatures.map((feature, idx) => (
            <div key={feature.id} className="feature-card glass-card">
              <div className="feature-card-header">
                <div className="feature-icon-wrapper">
                  {getIcon(feature.icon)}
                </div>
                <span className="feature-number">0{idx + 1}</span>
              </div>

              <h3 className="feature-title font-serif">
                {feature.title}
              </h3>

              <p className="feature-description">
                {feature.desc}
              </p>

              <div className="feature-highlight-pill">
                <Check size={14} className="text-gold" />
                <span>{feature.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="commitment-strip glass-panel">
          <div className="commitment-item">
            <span className="commitment-icon">🌿</span>
            <div>
              <strong>Pure Organic Terroir</strong>
              <p>Certified farm-to-table traceability for 100% of our seasonal harvests.</p>
            </div>
          </div>
          <div className="commitment-divider"></div>
          <div className="commitment-item">
            <span className="commitment-icon">⚖️</span>
            <div>
              <strong>Ethical Sourcing</strong>
              <p>Wild-caught certified seafood and pasture-raised humanely treated livestock.</p>
            </div>
          </div>
          <div className="commitment-divider"></div>
          <div className="commitment-item">
            <span className="commitment-icon">🥂</span>
            <div>
              <strong>Unmatched Hospitality</strong>
              <p>Every guest treated as an honored friend in our culinary home.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
