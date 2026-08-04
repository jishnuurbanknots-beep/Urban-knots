import React from 'react';
import Hero from '../../components/home/Hero/Hero';
import ServicesPreview from '../../components/home/ServicesPreview/ServicesPreview';
import PortfolioPreview from '../../components/home/PortfolioPreview/PortfolioPreview';
import WhyChooseUs from '../../components/home/WhyChooseUs/WhyChooseUs';
import Process from '../../components/home/Process/Process';
import TestimonialsFAQ from '../../components/home/Testimonials/TestimonialsFAQ';
import CTA from '../../components/home/CTA/CTA';
import LetsWorkTogetherModal from '../../components/home/LetsWorkTogetherModal/LetsWorkTogetherModal';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <WhyChooseUs />
      <Process />
      <TestimonialsFAQ />
      <CTA />
      <LetsWorkTogetherModal />
    </>
  );
};

export default Home;
