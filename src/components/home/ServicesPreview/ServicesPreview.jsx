import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesPreview.css';

// Custom SVG Icons to match Figma designs closely
const SparkleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);

const PenIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Stylized Fountain Pen / Vector Nib */}
    <path d="m12 2 3 5c.5.9.3 2-.5 2.6L12 11l-2.5-1.4c-.8-.6-1-1.7-.5-2.6L12 2Z" fill="currentColor" stroke="none" />
    <path d="M19 13c0 3.9-3 7-7 7s-7-3-7-7" />
    <path d="M12 11v9" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);

const PackagingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="M12 22V12" />
    <path d="M12 12 3 6.8" />
    <path d="M12 12 21 6.8" />
    <path d="M4.3 5.3 12 9.8l7.7-4.5" />
  </svg>
);

const MarketingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="6" />
    <circle cx="16" cy="16" r="6" />
    <path d="M8 6v4" />
    <path d="M16 14v4" />
    <path d="M6 8h4" />
    <path d="M14 16h4" />
  </svg>
);

const VideoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    <path d="m22 8-6 4 6 4V8Z" />
  </svg>
);

const CardArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="card-arrow-svg">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const ServicesPreview = () => {
  const services = [
    {
      id: 'brand-identity',
      icon: <img src="/images/services/Brand.png" alt="Brand Identity" className="service-preview-card-icon-img" />,
      title: <>Brand<br />Identity</>,
      description: 'Brands with character, clarity, and purpose.'
    },
    {
      id: 'creative-design',
      icon: <img src="/images/services/Creative.png" alt="Creative Design" className="service-preview-card-icon-img" />,
      title: <>Creative<br />Design</>,
      description: 'Design that earns attention.'
    },
    {
      id: 'website-design',
      icon: <img src="/images/services/Website.png" alt="Website Design & Development" className="service-preview-card-icon-img" />,
      title: <>Website Design &<br />Development</>,
      description: 'Web experiences built to convert.'
    },
    {
      id: 'packaging-design',
      icon: <img src="/images/services/Packaging.png" alt="Packaging Design" className="service-preview-card-icon-img" />,
      title: <>Packaging<br />Design</>,
      description: 'Packaging that sells before it speaks.'
    },
    {
      id: 'digital-marketing',
      icon: <img src="/images/services/Digital.png" alt="Digital Marketing" className="service-preview-card-icon-img" />,
      title: <>Digital<br />Marketing</>,
      description: 'Marketing driven by insight, not guesswork.'
    },
    {
      id: 'video-motion',
      icon: <img src="/images/services/Video.png" alt="Video & Motion Design" className="service-preview-card-icon-img" />,
      title: <>Video & Motion<br />Design</>,
      description: 'Motion that brings ideas to life.'
    }
  ];

  return (
    <section className="service-preview-section" id="services">
      <div className="service-preview-container">

        {/* Two-Column Section Header */}
        <div className="service-preview-header">
          <div className="service-preview-header-left">
            <span className="service-preview-subtitle">WHAT WE DO</span>
            <h2 className="service-preview-heading">Creative Solutions For<br />Modern Businesses</h2>
          </div>
          <div className="service-preview-header-right">
            <p className="service-preview-header-description">Where creativity meets purpose, and every<br />idea is designed to leave a lasting impression.</p>
            <Link to="/services" className="service-preview-explore-btn">
              Explore All Services
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="service-preview-btn-arrow-icon"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="service-preview-grid">
          {services.map((service) => (
            <div key={service.id} className="service-preview-card">
              <div className="service-preview-card-top">
                <div className="service-preview-icon-box">
                  {service.icon}
                </div>
                <h3 className="service-preview-card-title">{service.title}</h3>
                <div className="service-preview-card-divider"></div>
                <p className="service-preview-card-desc">{service.description}</p>
              </div>
              {/* <div className="service-preview-card-bottom">
                <img src="/images/services/Vector.jpg" alt="Arrow" className="service-preview-card-arrow-icon" />
              </div> */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;
