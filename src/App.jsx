import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedDishes from './components/FeaturedDishes';
import WhyChooseUs from './components/WhyChooseUs';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import ReservationSection from './components/ReservationSection';
import FinalCta from './components/FinalCta';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DishModal from './components/DishModal';
import MenuModal from './components/MenuModal';
import ReservationModal from './components/ReservationModal';
import './App.css';

export default function App() {
  const [selectedDish, setSelectedDish] = useState(null);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Sticky Header with Navigation and CTAs */}
      <Navbar 
        onOpenMenuModal={() => setIsMenuModalOpen(true)}
        onOpenReservationModal={() => setIsReservationModalOpen(true)}
      />

      {/* Main Homepage Flow */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero 
          onOpenMenuModal={() => setIsMenuModalOpen(true)}
          onOpenReservationModal={() => setIsReservationModalOpen(true)}
        />

        {/* 2. About Restaurant */}
        <About 
          onOpenReservationModal={() => setIsReservationModalOpen(true)}
        />

        {/* 3. Featured Signature Dishes */}
        <FeaturedDishes 
          onSelectDish={(dish) => setSelectedDish(dish)}
          onOpenMenuModal={() => setIsMenuModalOpen(true)}
        />

        {/* 4. Why Choose Clean Creations */}
        <WhyChooseUs />

        {/* 5. Restaurant Dining Experience & Spaces */}
        <Experience 
          onOpenReservationModal={() => setIsReservationModalOpen(true)}
        />

        {/* 6. Customer Testimonials & Critics Reviews */}
        <Reviews />

        {/* 7. Dedicated Table Reservation Section */}
        <ReservationSection />

        {/* 8. Final High-Impact CTA */}
        <FinalCta 
          onOpenMenuModal={() => setIsMenuModalOpen(true)}
          onOpenReservationModal={() => setIsReservationModalOpen(true)}
        />

        {/* 9. Contact & Sanctuary Location */}
        <ContactSection />
      </main>

      {/* 10. Brand Footer */}
      <Footer 
        onOpenMenuModal={() => setIsMenuModalOpen(true)}
        onOpenReservationModal={() => setIsReservationModalOpen(true)}
      />

      {/* Quick View Dish Details Modal */}
      <DishModal 
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onOpenReservationModal={() => setIsReservationModalOpen(true)}
      />

      {/* Full Digital Tasting Carte Modal */}
      <MenuModal 
        isOpen={isMenuModalOpen}
        onClose={() => setIsMenuModalOpen(false)}
        onOpenReservationModal={() => setIsReservationModalOpen(true)}
      />

      {/* Popup Table Booking Modal */}
      <ReservationModal 
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </div>
  );
}
