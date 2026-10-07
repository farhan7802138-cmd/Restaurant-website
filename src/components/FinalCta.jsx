import React from 'react';
import { Calendar, UtensilsCrossed, PhoneCall, Sparkles } from 'lucide-react';
import './FinalCta.css';

export default function FinalCta({ onOpenMenuModal, onOpenReservationModal }) {
  return (
    <section className="final-cta-section">
      <div className="final-cta-backdrop">
        <div className="final-cta-glow"></div>
      </div>

      <div className="container">
        <div className="final-cta-card glass-panel text-center">
          <div className="section-badge mx-auto">
            <Sparkles size={14} />
            <span>An Evening to Remember</span>
          </div>

          <h2 className="final-cta-title font-serif">
            Your Table at the Hearth <span className="text-gold-gradient">Awaits</span>
          </h2>

          <p className="final-cta-desc mx-auto">
            Whether honoring a milestone, hosting esteemed guests, or indulging in an unhurried romantic escape, 
            allow us to compose an extraordinary culinary symphony for you.
          </p>

          <div className="final-cta-buttons">
            <button 
              type="button" 
              className="btn btn-primary-gold btn-lg"
              onClick={onOpenReservationModal}
              id="final-cta-reserve-btn"
            >
              <Calendar size={18} />
              <span>Reserve a Table</span>
            </button>

            <button 
              type="button" 
              className="btn btn-secondary-outline btn-lg"
              onClick={onOpenMenuModal}
              id="final-cta-menu-btn"
            >
              <UtensilsCrossed size={18} />
              <span>Explore Tasting Menu</span>
            </button>
          </div>

          <div className="final-cta-contact-strip">
            <span>Direct Concierge Assistance:</span>
            <a href="tel:+15043095427" className="cta-phone-link">
              <PhoneCall size={15} />
              <span>(504) 309-5427</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
