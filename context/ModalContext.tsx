"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import BookVisitModal from '@/components/shared/BookVisitModal';

interface ModalContextType {
  isBookVisitOpen: boolean;
  openBookVisit: () => void;
  closeBookVisit: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isBookVisitOpen, setIsBookVisitOpen] = useState(false);

  const openBookVisit = () => setIsBookVisitOpen(true);
  const closeBookVisit = () => setIsBookVisitOpen(false);

  React.useEffect(() => {
    // Initial popup after 8 seconds
    const initialTimer = setTimeout(() => {
      openBookVisit();
    }, 8000);

    // Repeated popup every 4 minutes (240,000 ms)
    const repeatTimer = setInterval(() => {
      openBookVisit();
    }, 240000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(repeatTimer);
    };
  }, []);

  return (
    <ModalContext.Provider value={{ isBookVisitOpen, openBookVisit, closeBookVisit }}>
      {children}
      <BookVisitModal isOpen={isBookVisitOpen} onClose={closeBookVisit} />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
