import React from 'react';
import './Process.css';

// Custom SVG Icons matching Figma designs
const DiscoverIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="step-icon-svg"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const StrategyIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="step-icon-svg"
  >
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.7.8 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);

const DesignIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="step-icon-svg"
  >
    <path d="m12 2 3 5c.5.9.3 2-.5 2.6L12 11l-2.5-1.4c-.8-.6-1-1.7-.5-2.6L12 2Z" fill="currentColor" stroke="none" />
    <path d="M19 13c0 3.9-3 7-7 7s-7-3-7-7" />
    <path d="M12 11v9" />
  </svg>
);

const DevelopIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="step-icon-svg"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const LaunchIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="step-icon-svg"
  >
    <path d="m12 14 4-4" />
    <path d="M3.34 19a18 18 0 0 0 5.48-5.47L17 5.5a2.5 2.5 0 1 1 3.5 3.5l-8 8.13a18 18 0 0 0-5.48 5.47z" />
    <path d="m19 5-3 3" />
    <path d="M11.5 15.5 9 13" />
    <path d="m9 18-3-3" />
  </svg>
);

const GrowIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="step-icon-svg"
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <path d="M3 20h18" />
    <path d="m3 12 5-5 4 4 6-6" />
    <path d="M14 5h4v4" />
  </svg>
);

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      image: '/images/portfolio/Discover.png',
      description: 'Understanding your business, audience, and goals.'
    },
    {
      number: '02',
      title: 'Strategy',
      image: '/images/portfolio/Strategy.png',
      description: 'Researching, analyzing, and planning the right approach.'
    },
    {
      number: '03',
      title: 'Design',
      image: '/images/portfolio/Design.png',
      description: 'Crafting thoughtful visuals and engaging user experiences.'
    },
    {
      number: '04',
      title: 'Develop',
      image: '/images/portfolio/04 Develop.png',
      description: 'Building fast, scalable, and reliable digital solutions.'
    },
    {
      number: '05',
      title: 'Launch',
      image: '/images/portfolio/Launch.png',
      description: 'Testing, refining, and deploying with confidence.'
    },
    {
      number: '06',
      title: 'Grow',
      image: '/images/portfolio/Grow.png',
      description: 'Providing ongoing support and continuous improvements to help your business succeed.'
    }
  ];

  return (
    <section className="process-section" id="process">
      <div className="process-container">
        
        {/* Section Header */}
        <div className="process-header">
          <span className="process-subtitle">OUR PROCESS</span>
          <h2 className="process-title">How We Bring Ideas to Life</h2>
        </div>

        {/* Timeline Container */}
        <div className="process-timeline-wrapper">
          {/* Background Connector Line */}
          <div className="process-connector-line"></div>
          
          {/* Steps List */}
          <div className="process-steps">
            {steps.map((step, index) => (
              <div key={index} className="process-step-item">
                
                {/* Step Badge (Circle with Icon) */}
                <div className="process-step-badge">
                  <img src={step.image} alt={step.title} className="process-step-image" />
                </div>

                {/* Step Content */}
                <div className="process-step-content">
                  <h3 className="process-step-title">
                    <span className="process-step-number">{step.number}</span>
                    {step.title}
                  </h3>
                  <p className="process-step-description">{step.description}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
