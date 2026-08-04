import React from 'react';
import './WhyChooseUs.css';

// Custom SVG Icons matching Figma designs
const LightbulbIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="card-icon-svg"
  >
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.7.8 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);

const HourglassIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="card-icon-svg"
  >
    <path d="M5 2h14" />
    <path d="M5 22h14" />
    <path d="M19 2v4c0 2.5-2 4.5-4.5 5.5a2.5 2.5 0 0 0 0 1c2.5 1 4.5 3 4.5 5.5v4" />
    <path d="M5 2v4c0 2.5 2 4.5 4.5 5.5a2.5 2.5 0 0 0 0 1C7 13.5 5 15.5 5 18v4" />
  </svg>
);

const ProcessIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="card-icon-svg"
  >
    {/* Interconnected loops style for transparent process */}
    <path d="M12 22a10 10 0 1 0-10-10" strokeDasharray="3 3" />
    <path d="M22 12a10 10 0 0 1-10 10" />
    <circle cx="12" cy="12" r="3" />
    <path d="m16 8-4 4-4-4" />
  </svg>
);

const ClockIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="card-icon-svg"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const TrendUpIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="card-icon-svg"
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <path d="M3 20h18" />
    <path d="m3 12 5-5 4 4 6-6" />
    <path d="M14 5h4v4" />
  </svg>
);

const HeadsetIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="card-icon-svg"
  >
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg 
    width="34" 
    height="34" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="arrow-icon"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.15 24.9998C9.50083 23.5327 9.16587 21.9459 9.16663 20.3415C9.16663 14.1698 14.0166 9.1665 20 9.1665C25.9833 9.1665 30.8333 14.1715 30.8333 20.3432C30.8338 21.947 30.4989 23.5332 29.85 24.9998" stroke="#6C63FF" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M20 3.33325V4.99992M36.6666 19.9999H35M4.99998 19.9999H3.33331M31.7833 8.21325L30.605 9.39159M9.39498 9.39325L8.21665 8.21492M24.195 32.1766C25.8783 31.6316 26.555 30.0899 26.745 28.5399C26.8016 28.0766 26.42 27.6916 25.9533 27.6916H14.1283C14.0144 27.6898 13.9013 27.7122 13.7966 27.7573C13.692 27.8024 13.5981 27.8693 13.5212 27.9534C13.4443 28.0376 13.3862 28.1371 13.3506 28.2454C13.3151 28.3536 13.3029 28.4682 13.315 28.5816C13.5016 30.1282 13.9716 31.2599 15.755 32.1766M24.195 32.1766H15.755M24.195 32.1766C23.9933 35.4182 23.0566 36.7016 20.0116 36.6649C16.755 36.7249 16.005 35.1382 15.755 32.1766" stroke="#6C63FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Creative Thinking',
      description: 'Fresh ideas that help your brand stand out.'
    },
    {
      id: 2,
      icon: <img src="/images/portfolio/Strategic.png" alt="Strategic Approach" className="card-icon-img" />,
      title: 'Strategic Approach',
      description: 'Every decision is backed by research and purpose.'
    },
    {
      id: 3,
      icon: <img src="/images/portfolio/Transparent.png" alt="Transparent Process" className="card-icon-img" />,
      title: 'Transparent Process',
      description: 'Clear communication from start to finish.'
    },
    {
      id: 4,
      icon: <ClockIcon />,
      title: 'One-Time Delivery',
      description: 'We value your time and always meet deadlines.'
    },
    {
      id: 5,
      icon: <img src="/images/portfolio/Startup.png" alt="Startup Friendly" className="card-icon-img" />,
      title: 'Startup Friendly',
      description: 'Flexible solutions tailored for growing businesses.'
    },
    {
      id: 6,
      icon: <img src="/images/portfolio/Dedicated.png" alt="Dedicated support" className="card-icon-img" />,
      title: 'Dedicated support',
      description: "We're with you even after the project goes live."
    }
  ];

  return (
    <section className="why-choose-us-section" id="about">
      <div className="why-choose-us-container">
        
        {/* Left Side: Content Column */}
        <div className="why-choose-us-content">
          <span className="why-choose-us-subtitle">WHY CHOOSE US</span>
          <h2 className="why-choose-us-title">
            Strategy. Creativity.<br />Results.
          </h2>
          <p className="why-choose-us-description">
            We don't just create beautiful designs—we build experiences and solutions that help businesses grow.
          </p>
        </div>

        {/* Right Side: Grid Column */}
        <div className="why-choose-us-grid">
          {features.map((feature) => (
            <div key={feature.id} className="why-choose-us-card">
              <div className="why-choose-us-card-icon">
                {feature.icon}
              </div>
              <div className="why-choose-us-card-info">
                <h3 className="why-choose-us-card-title">{feature.title}</h3>
                <p className="why-choose-us-card-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
