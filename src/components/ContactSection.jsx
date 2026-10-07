import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';
import './ContactSection.css';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Dining Inquiry',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert('Please fill out all required fields.');
      return;
    }
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormState({
      name: '',
      email: '',
      phone: '',
      subject: 'General Dining Inquiry',
      message: ''
    });
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <div className="section-badge">
            <Mail size={14} />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="section-title">
            Visit Us or <span className="text-gold-gradient">Reach Our Team</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Whether inquiring about private dining buyouts, dietary specifications, press queries, 
            or personal cellar allocations, our hospitality team is at your prompt disposal.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Contact Form */}
          <div className="contact-form-card glass-card">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="contact-form" id="restaurant-contact-form">
                <h3 className="contact-card-title font-serif">Send Us a Message</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name *</label>
                    <input 
                      type="text" 
                      id="contact-name" 
                      placeholder="e.g. Julian Montgomery"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input 
                      type="email" 
                      id="contact-email" 
                      placeholder="julian@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="contact-phone" 
                      placeholder="(504) 309-5427"
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-subject">Subject</label>
                    <select 
                      id="contact-subject"
                      value={formState.subject}
                      onChange={(e) => setFormState({...formState, subject: e.target.value})}
                      className="form-input"
                    >
                      <option value="General Dining Inquiry">General Dining Inquiry</option>
                      <option value="Private Dining & Buyout">Private Dining & Buyout</option>
                      <option value="Chef's Hearth Counter Booking">Chef's Hearth Counter Booking</option>
                      <option value="Sommelier Wine Pairing Query">Sommelier Wine Pairing Query</option>
                      <option value="Press & Media Relations">Press & Media Relations</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Your Message *</label>
                  <textarea 
                    id="contact-message" 
                    rows="4" 
                    placeholder="Tell us about your occasion, dietary needs, or inquiry..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    required
                    className="form-input form-textarea"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary-gold btn-lg submit-contact-btn"
                  id="submit-contact-form-btn"
                >
                  <Send size={17} />
                  <span>Send Message to Concierge</span>
                </button>
              </form>
            ) : (
              <div className="contact-success-state animate-fade-in">
                <div className="success-icon-badge">
                  <CheckCircle2 size={56} className="text-gold" />
                </div>
                <h3 className="success-heading font-serif">Message Delivered</h3>
                <p className="success-body">
                  Thank you, <strong>{formState.name}</strong>. Our concierge team has received your message regarding "<em>{formState.subject}</em>" 
                  and will respond to <strong>{formState.email}</strong> within 4 business hours.
                </p>
                <button 
                  type="button" 
                  className="btn btn-secondary-outline btn-sm"
                  onClick={handleReset}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Contact Details & Opening Hours & Map */}
          <div className="contact-info-column">
            {/* Direct Info Card */}
            <div className="info-box glass-card">
              <h3 className="info-box-title font-serif">Kitchen & Cafe Details</h3>

              <div className="info-entry">
                <div className="info-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <strong>Location</strong>
                  <p>{restaurantInfo.address.street}</p>
                  <p>{restaurantInfo.address.city} ({restaurantInfo.address.neighborhood})</p>
                  <span className="info-sub-note">{restaurantInfo.address.valetNote}</span>
                </div>
              </div>

              <div className="info-entry">
                <div className="info-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <strong>Telephone</strong>
                  <a href={`tel:${restaurantInfo.phone}`} className="info-link">{restaurantInfo.phone}</a>
                  <p className="info-sub-note">Mon–Fri: 7:00 AM – 7:00 PM | Sat–Sun: 8:00 AM – 4:00 PM</p>
                </div>
              </div>

              <div className="info-entry">
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <strong>Direct Inquiries</strong>
                  <a href={`mailto:${restaurantInfo.email}`} className="info-link">{restaurantInfo.email}</a>
                  <p className="info-sub-note">Catering & events: {restaurantInfo.eventsEmail}</p>
                </div>
              </div>
            </div>

            {/* Hours Box */}
            <div className="info-box glass-card">
              <div className="hours-header">
                <div className="info-icon">
                  <Clock size={20} />
                </div>
                <h3 className="info-box-title font-serif mb-0">Service Hours</h3>
              </div>

              <div className="hours-list">
                {restaurantInfo.hours.map((h, idx) => (
                  <div key={idx} className="hours-row">
                    <div>
                      <strong>{h.days}</strong>
                      <span className="meal-tag">{h.meal}</span>
                    </div>
                    <span className="hours-time">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Map Preview Card */}
            <div className="map-preview-card glass-panel">
              <div className="map-badge">
                <Navigation size={14} />
                <span>Gretna & New Orleans Metro</span>
              </div>
              <p className="map-hint">Conveniently located at 1105 Lafayette St in Gretna, LA</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary-outline btn-sm w-full"
              >
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
