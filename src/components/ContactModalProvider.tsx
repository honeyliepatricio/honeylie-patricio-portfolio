"use client";

import { createContext, useCallback, useContext, useState } from "react";
import type { ReactNode } from "react";
import ContactModal from "./ContactModal";

type ContactModalContextValue = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(
  null
);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </ContactModalContext.Provider>
  );
}

/**
 * Use this hook from any client component to open the shared contact modal,
 * e.g. the navbar CTA, the Hero CTA, or any CTASection instance.
 */
export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error(
      "useContactModal must be used within a ContactModalProvider"
    );
  }
  return ctx;
}
