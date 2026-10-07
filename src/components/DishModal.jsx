import React from 'react';
import { X, Wine, Calendar, AlertCircle } from 'lucide-react';
import './Modals.css';

export default function DishModal({ dish, onClose, onOpenReservationModal }) {
  if (!dish) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content dish-modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close dish preview"
          id="close-dish-modal-btn"
        >
          <X size={20} />
        </button>

        <div className="dish-modal-grid">
          {/* Dish Image */}
          <div className="dish-modal-media">
            <img 
              src={dish.image} 
              alt={dish.name} 
              className="dish-modal-img" 
            />
            <span className="dish-modal-tag">{dish.tag}</span>
            <div className="dish-modal-price">{dish.price}</div>
          </div>

          {/* Dish Content */}
          <div className="dish-modal-body">
            <span className="dish-modal-category text-gold">{dish.categoryName}</span>
            <h2 className="dish-modal-title font-serif">{dish.name}</h2>

            <div className="dish-modal-dietary">
              {dish.dietary.map((tag, idx) => (
                <span key={idx} className="dietary-badge">{tag}</span>
              ))}
              <span className="calories-badge">{dish.calories}</span>
            </div>

            <p className="dish-modal-desc">
              {dish.fullDesc}
            </p>

            {/* Sommelier Pairing Box */}
            <div className="wine-pairing-card glass-panel">
              <div className="wine-pairing-icon">
                <Wine size={20} className="text-gold" />
              </div>
              <div>
                <span className="wine-pairing-label">Beverage & Elixir Pairing Recommendation</span>
                <strong className="wine-pairing-name">{dish.winePairing}</strong>
                <p className="wine-pairing-note">Curated to naturally enhance fresh flavors and support digestive vitality.</p>
              </div>
            </div>

            {/* Allergens Notice */}
            <div className="allergens-note">
              <AlertCircle size={15} />
              <span>Allergens: Contains {dish.allergens}. Accommodations gladly made upon request.</span>
            </div>

            {/* Modal Actions */}
            <div className="dish-modal-actions">
              <button 
                type="button" 
                className="btn btn-primary-gold btn-lg w-full"
                onClick={() => {
                  onClose();
                  onOpenReservationModal();
                }}
                id="dish-modal-book-table-btn"
              >
                <Calendar size={18} />
                <span>Reserve Table to Taste This Dish</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
