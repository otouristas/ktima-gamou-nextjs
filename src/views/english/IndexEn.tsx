'use client';

import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroEn } from '@/components/english/HeroEn';
import { DescriptionEn } from '@/components/english/DescriptionEn';
import { FeaturesEn } from '@/components/english/FeaturesEn';
import { HomeGalleryEn } from '@/components/english/HomeGalleryEn';
import { ServicesEn } from '@/components/english/ServicesEn';
import { AboutEn } from '@/components/english/AboutEn';
import { ChurchesEn } from '@/components/english/ChurchesEn';
import { TestimonialsEn } from '@/components/english/TestimonialsEn';
import { ContactEn } from '@/components/english/ContactEn';
import { FooterEn } from '@/components/english/FooterEn';
import { PartnersEn } from '@/components/english/PartnersEn';
import { BackToTop } from '@/components/BackToTop';
import { ContactFAB } from '@/components/ContactFAB';
import { FAQEn } from '@/components/english/FAQEn';
import { NearbyChurchesEn } from '@/components/english/NearbyChurchesEn';
import { PopularSearchesEn } from '@/components/english/PopularSearchesEn';
import { CookieConsentEn } from '@/components/english/CookieConsentEn';

const IndexEn = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const homepageFAQs = [
    { question: "Where is Ktima Orion located?", answer: "Ktima Orion is located in Keratea, Attica, in an ideal location with easy access from Attiki Odos. It is approximately 45 minutes from Athens city center and close to seaside chapels." },
    { question: "What types of events can I organize at Ktima Orion?", answer: "We host weddings, baptisms, corporate events, birthday parties, engagement parties, and any other special celebration. Our venue adapts to your needs." },
    { question: "How many guests can the venue accommodate?", answer: "Ktima Orion can host events of various sizes. We have both an air-conditioned indoor space and outdoor area for large celebrations." },
    { question: "Is there parking for guests?", answer: "Yes, we have a huge free parking area with over 100 spaces for all your guests, which is rare for venues in the area." },
    { question: "Can I visit the venue before booking?", answer: "Absolutely! We encourage you to visit Ktima Orion and see the magical environment. Contact us to schedule a free tour." },
    { question: "What services do you provide?", answer: "We offer comprehensive services: catering, decoration, lighting, sound, professional photographer (Studio Alpha), and complete event coordination." },
    { question: "Are there churches nearby for the ceremony?", answer: "Yes, we are very close to 4 picturesque seaside chapels (5-15 minutes): Agios Alexandros Daskaleio, Profitis Ilias Thoriko, Agios Panteleimonas, and Panagia Gkarika." },
    { question: "Is the venue air-conditioned?", answer: "Yes, we have a fully air-conditioned hall and also a magical semi-outdoor space, ideal for all seasons." },
    { question: "Can I bring my own vendors?", answer: "Of course! You are free to bring your own vendors or use our experienced partners." },
    { question: "How far in advance should I book the venue?", answer: "We recommend booking at least 6-12 months in advance, especially for summer months and weekends. Popular dates fill up quickly." },
    { question: "What does catering include?", answer: "Catering includes a complete menu customized to your preferences, with options for all ages, including special children's menu for baptisms." },
    { question: "Is there a playground for children?", answer: "Yes, we have a safe outdoor area where children can play under supervision, ideal for family events like baptisms." }
  ];

  return (
    <div className="min-h-screen">
      <Navigation isScrolled={isScrolled} isTransparent={true} />
      <HeroEn />
      <DescriptionEn />
      <FeaturesEn />
      <HomeGalleryEn />
      <ServicesEn />
      <AboutEn />
      <ChurchesEn />
      <TestimonialsEn />
      <FAQEn items={homepageFAQs} title="Frequently Asked Questions" />
      <NearbyChurchesEn />
      <PartnersEn />
      <ContactEn />
      <FooterEn />
      <BackToTop />
      <ContactFAB />
      <CookieConsentEn />
    </div>
  );
};

export default IndexEn;
