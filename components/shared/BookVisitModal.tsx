"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Phone, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

interface BookVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookVisitModal: React.FC<BookVisitModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
  });

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      // Reset after animation
      setTimeout(() => setIsSubmitted(false), 500);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6 bg-dark/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[500px] bg-white rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Gradient Background */}
            <div className="relative h-32 bg-primary flex items-end p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
                  Book Site Visit
                </h2>
                <p className="text-white/80 text-sm font-medium tracking-wide">
                  Experience your future home first-hand.
                </p>
              </div>
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/10 text-white hover:bg-black/20 transition-all duration-300"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 pt-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-grey px-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-3.5 bg-grey/5 border border-grey/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium text-dark placeholder:text-dark/40"
                        onChange={handleChange}
                        value={formData.name}
                      />
                    </div>
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-grey px-1">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
                        <input
                          required
                          type="tel"
                          name="phone"
                          placeholder="+91 98765 43210"
                          className="w-full pl-12 pr-4 py-3.5 bg-grey/5 border border-grey/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium text-dark placeholder:text-dark/40"
                          onChange={handleChange}
                          value={formData.phone}
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-grey px-1">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
                        <input
                          type="email"
                          name="email"
                          placeholder="john@example.com"
                          className="w-full pl-12 pr-4 py-3.5 bg-grey/5 border border-grey/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium text-dark placeholder:text-dark/40"
                          onChange={handleChange}
                          value={formData.email}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-grey px-1">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
                      <input
                        required
                        type="date"
                        name="date"
                        className="w-full pl-12 pr-4 py-3.5 bg-grey/5 border border-grey/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium text-dark"
                        onChange={handleChange}
                        value={formData.date}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 bg-primary text-white py-4 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 group"
                  >
                    Confirm Appointment
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[10px] text-center text-grey pt-2 px-4 leading-relaxed">
                    By clicking "Confirm Appointment", you agree to be contacted by our sales team regarding your site visit.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-2">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-dark">Thank You!</h3>
                  <p className="text-grey text-sm max-w-[250px]">
                    Your site visit has been scheduled. Our team will call you shortly to confirm.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookVisitModal;
