'use client';

import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { ContactFAB } from '@/components/ContactFAB';
import { CookieConsent } from '@/components/CookieConsent';
import { CookieConsentEn } from '@/components/english/CookieConsentEn';

interface LayoutProps {
  children: React.ReactNode;
  isTransparent?: boolean;
  lang?: 'el' | 'en';
}

export const Layout = ({ children, isTransparent = false, lang = 'el' }: LayoutProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation isScrolled={isScrolled} isTransparent={isTransparent} />
      <main>{children}</main>
      <Footer />
      <BackToTop />
      <ContactFAB />
      {lang === 'en' ? <CookieConsentEn /> : <CookieConsent />}
    </div>
  );
};
