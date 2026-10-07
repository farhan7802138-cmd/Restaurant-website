import React, { useState } from 'react';
import { X, Calendar, Sparkles, ChefHat } from 'lucide-react';
import { fullMenuSections } from '../data/restaurantData';
import './Modals.css';

export default function MenuModal({ isOpen, onClose, onOpenReservationModal }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content menu-modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close digital menu"
          id="close-menu-modal-btn"
        >
          <X size={20} />
        </button>

        <div className="menu-modal-header text-center">
          <div className="section-badge mx-auto">
            <Sparkles size={14} />
            <span>Handcrafted Kitchen Menu</span>
          </div>
          <h2 className="modal-main-title font-serif">Clean Creations Chef Carte</h2>
          <p className="modal-sub-title mx-auto">
            All meals made from scratch daily with fresh, wholesome ingredients, cold-pressed oils, and no artificial additives.
          </p>

          {/* Tasting Menu Banner */}
          <div className="tasting-journey-banner glass-panel">
            <div className="tasting-banner-left">
              <ChefHat size={24} className="text-gold" />
              <div>
                <strong>Signature Clean Creations Experience</strong>
                <p>Barbara Bolotte Blank's Scratch Gourmet Selection with Fresh Cold-Pressed Juice</p>
              </div>
            </div>
            <div className="tasting-banner-pricing">
              <span className="tasting-price">Fresh Gourmet</span>
              <span className="tasting-wine-add">Gluten-Free, Keto & Paleo Ready</span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="menu-modal-tabs">
            {fullMenuSections.map((section, idx) => (
              <button
                key={idx}
                type="button"
                className={`menu-modal-tab-btn ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Content */}
        <div className="menu-modal-body">
          <div className="menu-items-grid">
            {fullMenuSections[activeTab].items.map((item, i) => (
              <div key={i} className="menu-carte-card glass-panel">
                <div className="menu-carte-top">
                  <div className="menu-carte-title-row">
                    <h4 className="carte-item-name font-serif">{item.name}</h4>
                    <span className="carte-item-tag">{item.tag}</span>
                  </div>
                  <span className="carte-item-price">{item.price}</span>
                </div>
                <p className="carte-item-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Action */}
        <div className="menu-modal-footer">
          <div className="menu-modal-notice">
            <span>Gluten-free, dairy-free, keto, and high-protein custom meal preparations gladly accommodated.</span>
          </div>
          <button 
            type="button" 
            className="btn btn-primary-gold btn-lg"
            onClick={() => {
              onClose();
              onOpenReservationModal();
            }}
            id="menu-modal-book-cta-btn"
          >
            <Calendar size={18} />
            <span>Reserve Table for this Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
}
