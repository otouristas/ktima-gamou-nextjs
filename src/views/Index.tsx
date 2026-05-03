'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import { Navigation } from '@/components/Navigation';
import { homepageFaqs } from '@/data/homepage-faqs';
import { Hero } from '@/components/Hero';
import { Description } from '@/components/Description';
import { Features } from '@/components/Features';

// Lazy load non-critical components
const HomeGallery = lazy(() => import('@/components/HomeGallery').then(module => ({ default: module.HomeGallery })));
const Services = lazy(() => import('@/components/Services').then(module => ({ default: module.Services })));
const About = lazy(() => import('@/components/About').then(module => ({ default: module.About })));
const Churches = lazy(() => import('@/components/Churches').then(module => ({ default: module.Churches })));
const Testimonials = lazy(() => import('@/components/Testimonials').then(module => ({ default: module.Testimonials })));
const Contact = lazy(() => import('@/components/Contact').then(module => ({ default: module.Contact })));
const Footer = lazy(() => import('@/components/Footer').then(module => ({ default: module.Footer })));
const Partners = lazy(() => import('@/components/Partners').then(module => ({ default: module.Partners })));
const BackToTop = lazy(() => import('@/components/BackToTop').then(module => ({ default: module.BackToTop })));
const ContactFAB = lazy(() => import('@/components/ContactFAB').then(module => ({ default: module.ContactFAB })));
const FAQ = lazy(() => import('@/components/FAQ').then(module => ({ default: module.FAQ })));
const NearbyChurches = lazy(() => import('@/components/NearbyChurches').then(module => ({ default: module.NearbyChurches })));
const CookieConsent = lazy(() => import('@/components/CookieConsent').then(module => ({ default: module.CookieConsent })));

const Index = () => {
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
      <Navigation isScrolled={isScrolled} isTransparent={true} />
      <Hero />
      <Description />
      <Features />
      <Suspense fallback={<div className="section-padding"><div className="container-max text-center">Loading...</div></div>}>
        <HomeGallery />
        <Services />
        <About />
        <Churches />
        <Testimonials />
        <FAQ items={[...homepageFaqs]} title="Συχνές Ερωτήσεις" />
        <NearbyChurches />
        <Partners />
        <Contact />
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <BackToTop />
        <ContactFAB />
        <CookieConsent />
      </Suspense>
    </div>
  );
};

export default Index;
