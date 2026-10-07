import React, { useState } from 'react';
import { Calendar, Users, Clock, Sparkles, Check, Info, ShieldCheck } from 'lucide-react';
import './ReservationSection.css';

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    date: '2025-10-15',
    time: '19:30',
    guests: '2',
    seating: 'Main Dining Room',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  const timeSlots = [
    '17:30', '18:00', '18:30', '19:00', '19:30', '20:15', '20:45', '21:15'
  ];

  const seatingOptions = [
    'Main Dining Room',
    "Chef's Hearth Counter",
    'Sommelier Wine Cellar',
    'Private VIP Salon'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please provide your name and email to secure the table reservation.');
      return;
    }
    const code = 'AUR-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(code);
    setBookingConfirmed(true);
  };

  const handleReset = () => {
    setBookingConfirmed(false);
    setFormData({
      date: '2025-10-15',
      time: '19:30',
      guests: '2',
      seating: 'Main Dining Room',
      name: '',
      email: '',
      phone: '',
      notes: ''
    });
  };

  return (
    <section className="reservation-section section-padding" id="reservation">
      <div className="container">
        <div className="reservation-wrapper glass-card">
          <div className="reservation-grid">
            {/* Left Column: Hospitality Context */}
            <div className="reservation-info-col">
              <div className="section-badge">
                <Calendar size={14} />
                <span>Reserve An Evening</span>
              </div>

              <h2 className="reservation-title font-serif">
                Join Us at the <span className="text-gold-gradient">Hearth & Table</span>
              </h2>

              <p className="reservation-lead">
                Reservations are released 30 days in advance. For parties exceeding 8 guests or bespoke private buyouts, 
                our sommelier concierge is at your dedicated service.
              </p>

              <div className="reservation-perks">
                <div className="perk-item">
                  <Check size={18} className="text-gold flex-shrink-0" />
                  <span>Complimentary Valet Parking upon arrival</span>
                </div>
                <div className="perk-item">
                  <Check size={18} className="text-gold flex-shrink-0" />
                  <span>Dietary accommodations curated by Barbara Bolotte Blank</span>
                </div>
                <div className="perk-item">
                  <Check size={18} className="text-gold flex-shrink-0" />
                  <span>Instant digital & SMS confirmation concierge</span>
                </div>
              </div>

              <div className="concierge-box glass-panel">
                <Info size={18} className="text-gold flex-shrink-0" />
                <div>
                  <strong>Direct Dining Concierge</strong>
                  <p>Prefer to speak directly? Call (504) 309-5427 or email catering@cleancreations.net</p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Booking Form */}
            <div className="reservation-form-col">
              {!bookingConfirmed ? (
                <form className="booking-form" onSubmit={handleSubmit}>
                  <h3 className="form-heading font-serif">Table Reservation</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="res-guests">
                        <Users size={15} />
                        <span>Party Size</span>
                      </label>
                      <select 
                        id="res-guests" 
                        value={formData.guests}
                        onChange={(e) => setFormData({...formData, guests: e.target.value})}
                        className="form-input"
                      >
                        <option value="1">1 Guest (Solo Culinary)</option>
                        <option value="2">2 Guests (Table for Two)</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests (Dining Booth)</option>
                        <option value="5">5 Guests</option>
                        <option value="6">6 Guests (Hearth Round)</option>
                        <option value="8">8 Guests (Chef's Feast)</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="res-date">
                        <Calendar size={15} />
                        <span>Date</span>
                      </label>
                      <input 
                        type="date" 
                        id="res-date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  {/* Seating Area Selection */}
                  <div className="form-group">
                    <label>
                      <Sparkles size={15} />
                      <span>Preferred Seating Environment</span>
                    </label>
                    <div className="seating-pills">
                      {seatingOptions.map((seat) => (
                        <button
                          key={seat}
                          type="button"
                          className={`seating-pill ${formData.seating === seat ? 'active' : ''}`}
                          onClick={() => setFormData({...formData, seating: seat})}
                        >
                          {seat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="form-group">
                    <label>
                      <Clock size={15} />
                      <span>Seating Time Slot</span>
                    </label>
                    <div className="time-slots-grid">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          className={`time-slot-btn ${formData.time === time ? 'active' : ''}`}
                          onClick={() => setFormData({...formData, time})}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Guest Contact Details */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="res-name">Full Name *</label>
                      <input 
                        type="text" 
                        id="res-name" 
                        placeholder="e.g. Eleanor Vance" 
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="res-email">Email Address *</label>
                      <input 
                        type="email" 
                        id="res-email" 
                        placeholder="eleanor@example.com" 
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="res-phone">Mobile Phone (for SMS updates)</label>
                    <input 
                      type="tel" 
                      id="res-phone" 
                      placeholder="+1 (555) 000-0000" 
                      className="form-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="res-notes">Dietary Notes / Special Occasions</label>
                    <input 
                      type="text" 
                      id="res-notes" 
                      placeholder="e.g. Celebrating Anniversary, Nut Allergy, Gluten-Free" 
                      className="form-input"
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary-gold btn-lg w-full submit-reservation-btn"
                    id="submit-table-booking-btn"
                  >
                    <Sparkles size={18} />
                    <span>Confirm & Hold Table</span>
                  </button>
                </form>
              ) : (
                <div className="booking-success-box animate-fade-in">
                  <div className="success-crest">
                    <ShieldCheck size={54} className="text-gold" />
                  </div>
                  <h3 className="success-title font-serif">Reservation Confirmed</h3>
                  <p className="success-subtitle">
                    We look forward to welcoming you to Clean Creations, <strong>{formData.name}</strong>.
                  </p>

                  <div className="confirmation-ticket glass-panel">
                    <div className="ticket-header">
                      <span>Booking Reference</span>
                      <strong className="code-text">{confirmationCode}</strong>
                    </div>
                    <div className="ticket-details">
                      <div className="ticket-row">
                        <span>Date & Time:</span>
                        <strong>{formData.date} at {formData.time}</strong>
                      </div>
                      <div className="ticket-row">
                        <span>Party Size:</span>
                        <strong>{formData.guests} Guests</strong>
                      </div>
                      <div className="ticket-row">
                        <span>Seating Area:</span>
                        <strong>{formData.seating}</strong>
                      </div>
                      {formData.notes && (
                        <div className="ticket-row">
                          <span>Special Notes:</span>
                          <em>{formData.notes}</em>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="confirmation-notice">
                    A confirmation email has been dispatched to <strong>{formData.email}</strong>. 
                    Our maître d' will reconfirm 24 hours prior.
                  </p>

                  <button 
                    type="button" 
                    className="btn btn-secondary-outline btn-sm"
                    onClick={handleReset}
                  >
                    Make Another Booking
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
