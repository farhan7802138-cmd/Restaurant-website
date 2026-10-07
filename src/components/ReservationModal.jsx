import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Sparkles, ShieldCheck } from 'lucide-react';
import './Modals.css';

export default function ReservationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    date: '2025-10-16',
    time: '19:30',
    guests: '2',
    seating: 'Main Dining Room',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const [confirmed, setConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please provide your name and email to secure your booking.');
      return;
    }
    setBookingRef('AUR-' + Math.floor(100000 + Math.random() * 900000));
    setConfirmed(true);
  };

  const handleClose = () => {
    setConfirmed(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content reservation-modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={handleClose}
          aria-label="Close reservation modal"
          id="close-reservation-modal-btn"
        >
          <X size={20} />
        </button>

        {!confirmed ? (
          <div className="res-modal-inner">
            <div className="text-center mb-4">
              <div className="section-badge mx-auto">
                <Calendar size={14} />
                <span>Instant Table Booking</span>
              </div>
              <h2 className="modal-main-title font-serif">Reserve at Clean Creations</h2>
              <p className="modal-sub-title mx-auto">
                Select your desired date, party size, and setting. We hold tables for 15 minutes past seating time.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="res-modal-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="modal-res-guests">
                    <Users size={15} />
                    <span>Party Size</span>
                  </label>
                  <select 
                    id="modal-res-guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    className="form-input"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests (Table for Two)</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="8">8 Guests (Chef's Feast)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="modal-res-date">
                    <Calendar size={15} />
                    <span>Date</span>
                  </label>
                  <input 
                    type="date"
                    id="modal-res-date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="modal-res-time">
                    <Clock size={15} />
                    <span>Time Slot</span>
                  </label>
                  <select 
                    id="modal-res-time"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="form-input"
                  >
                    <option value="17:30">5:30 PM (Early Dinner)</option>
                    <option value="18:15">6:15 PM</option>
                    <option value="19:00">7:00 PM (Prime Hearth)</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:15">8:15 PM</option>
                    <option value="21:00">9:00 PM (Late Seating)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="modal-res-seating">
                    <Sparkles size={15} />
                    <span>Seating Area</span>
                  </label>
                  <select 
                    id="modal-res-seating"
                    value={formData.seating}
                    onChange={(e) => setFormData({...formData, seating: e.target.value})}
                    className="form-input"
                  >
                    <option value="Main Dining Room">Main Dining Room</option>
                    <option value="Chef's Hearth Counter">Chef's Hearth Counter</option>
                    <option value="Sommelier Wine Cellar">Sommelier Wine Cellar</option>
                    <option value="Private VIP Salon">Private VIP Salon</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="modal-res-name">Full Name *</label>
                  <input 
                    type="text"
                    id="modal-res-name"
                    placeholder="e.g. Alistair Fontaine"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="modal-res-email">Email Address *</label>
                  <input 
                    type="email"
                    id="modal-res-email"
                    placeholder="alistair@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="modal-res-phone">Mobile Phone</label>
                <input 
                  type="tel"
                  id="modal-res-phone"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="modal-res-notes">Dietary Notes / Special Request</label>
                <input 
                  type="text"
                  id="modal-res-notes"
                  placeholder="Allergies, anniversaries, window table preference..."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="form-input"
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary-gold btn-lg w-full mt-3"
                id="modal-submit-reservation-btn"
              >
                <Sparkles size={18} />
                <span>Confirm & Reserve Table</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="res-modal-success text-center animate-fade-in">
            <ShieldCheck size={60} className="text-gold mx-auto mb-3" />
            <h3 className="modal-main-title font-serif">Table Successfully Reserved</h3>
            <p className="success-subtitle">
              Thank you, <strong>{formData.name}</strong>. Your culinary journey is secured.
            </p>

            <div className="confirmation-ticket glass-panel text-left my-4">
              <div className="ticket-header">
                <span>Confirmation Code</span>
                <strong className="code-text">{bookingRef}</strong>
              </div>
              <div className="ticket-details">
                <div className="ticket-row">
                  <span>Date & Time:</span>
                  <strong>{formData.date} at {formData.time}</strong>
                </div>
                <div className="ticket-row">
                  <span>Party:</span>
                  <strong>{formData.guests} Guests ({formData.seating})</strong>
                </div>
              </div>
            </div>

            <p className="confirmation-notice">
              A calendar invite and confirmation details have been sent to <strong>{formData.email}</strong>.
            </p>

            <button 
              type="button" 
              className="btn btn-primary-gold"
              onClick={handleClose}
            >
              Done & Return to Homepage
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
