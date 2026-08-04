import React from 'react';
import { Link } from 'react-router-dom';
import './BrandingWorks.css';

// Reusable SVG Icons
const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const ArrowDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="m8 12 4 4 4-4"/><path d="M12 8v8"/>
  </svg>
);

// Reusable Project Component
const ProjectCase = ({ title, category, description, mainImage, mainImageAlt, children }) => {
  return (
    <div className="branding-works-project-case">
      <div className="branding-works-project-intro">
        <div className="branding-works-project-main-image">
          {mainImage ? (
            <img src={mainImage} alt={mainImageAlt} className="branding-works-project-main-img" />
          ) : (
            <div className="branding-works-img-placeholder">{mainImageAlt}</div>
          )}
        </div>
        <div className="branding-works-project-text">
          <span className="branding-works-subtitle-blue">{category}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="branding-works-project-gallery">
        {children}
      </div>
    </div>
  );
};

export default function BrandingWorks() {
  return (
    <div className="branding-works-page">
      
      {/* 1. HERO SECTION */}
      <section className="branding-works-hero-dark">
        <div className="branding-works-hero-content">
          <span className="branding-works-subtitle-blue">OUR WORK</span>
          <h1>Branding</h1>
          <p>Building memorable brands through strategic thinking, purposeful design, <br/>and cohesive visual identities that communicate clearly, connect with <br/>audiences, and stand the test of time.</p>
        </div>

        <div className="branding-works-scroll-indicator" onClick={() => {
          const projectsSection = document.querySelector('.branding-works-projects-container');
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}>
          <span>Explore Our Work</span>
          <ArrowDown />
        </div>
      </section>

      {/* 2. PROJECTS LIST */}
      <section className="branding-works-projects-container">
        
        {/* Adithya Forestry */}
        <ProjectCase 
          title="Adithya Forestry" 
          category="BRANDING"
          description="The identity for Adithya Forestry was designed around the idea of growth, sustainability, and long-term value. Green was chosen as the primary colour to represent nature, renewal, and trust, while the logo symbol draws inspiration from both a tree and upward growth, subtly reflecting the investment journey. Clean typography and a minimal visual language reinforce credibility, creating an identity that feels professional, reassuring, and rooted in sustainable progress."
          mainImage="/images/branding/adhithya-main.png"
          mainImageAlt="Adithya Forestry Logo"
        >
          <div className="branding-works-grid-3-col">
            <img src="/images/branding/adhithya-sub-one.png" alt="Bag Mockup" className="branding-works-gallery-img" />
            <img src="/images/branding/adhithya-sub-two.jpg" alt="Cards Mockup" className="branding-works-gallery-img" />
            <img src="/images/branding/adhithya-sub-three.jpg" alt="Notebook Mockup" className="branding-works-gallery-img" />
            <img src="/images/branding/adhithya-sub-four.jpg" alt="Letterhead Mockup" className="branding-works-gallery-img" />
            <img src="/images/branding/adhithya-sub-five.jpg" alt="Mug Mockup" className="branding-works-gallery-img" />
            <img src="/images/branding/adhithya-sub-six.png" alt="Box Mockup" className="branding-works-gallery-img" />
          </div>
        </ProjectCase>

        {/* Havnest */}
        <ProjectCase 
          title="Havnest" 
          category="BRANDING"
          description="For Havnest, the identity embraces simplicity, craftsmanship, and modern living. A warm, earthy colour palette reflects natural materials and timeless interiors, while the clean typography and balanced forms convey elegance and reliability. Every visual element was designed to mirror the brand's philosophy of creating furniture that is functional, refined, and made to become a lasting part of everyday spaces."
          mainImage="/images/branding/havnest-main.jpg"
          mainImageAlt="Havnest Logo & Chair"
        >
          <div className="branding-works-grid-custom-havnest">
            <img src="/images/branding/havnest-sub-one.jpg" alt="Outdoor Billboard" className="branding-works-gallery-img branding-works-large-left" />
            <img src="/images/branding/havnest-sub-two.jpg" alt="Stationery" className="branding-works-gallery-img branding-works-top-right" />
            <img src="/images/branding/havnest-sub-three.jpg" alt="Website/Digital" className="branding-works-gallery-img branding-works-bottom-right" />
          </div>
        </ProjectCase>

        {/* Flame'n Feathers */}
        <ProjectCase 
          title="Flame’n Feathers" 
          category="BRANDING"
          description="The identity for Flame'n Feathers was built to be energetic, memorable, and full of personality. Bold reds and warm orange tones were selected to evoke heat, flavor, and appetite, while the playful iconography and expressive typography create a vibrant brand presence. The overall visual system balances fun with clarity, ensuring the brand feels inviting, distinctive, and instantly recognizable across every customer touchpoint."
          mainImage="/images/branding/flame-main.jpg"
          mainImageAlt="Flame'n Feathers Logo & Chicken"
        >
          <div className="branding-works-grid-2-col">
            <img src="/images/branding/flame-sub-one.png" alt="Billboard" className="branding-works-gallery-img" />
            <img src="/images/branding/flame-sub-two.png" alt="Takeaway Bag" className="branding-works-gallery-img" />
            <img src="/images/branding/flame-sub-three.png" alt="Cap & Apron" className="branding-works-gallery-img" />
            <img src="/images/branding/flame-sub-four.png" alt="Staff Uniform" className="branding-works-gallery-img" />
          </div>
        </ProjectCase>

        {/* Tantu */}
        <ProjectCase 
          title="Tantu" 
          category="BRANDING"
          description="The identity for Tantu was inspired by the meaning of connection and craftsmanship. A clean, contemporary visual language paired with a carefully selected colour palette creates a balance between tradition and modernity. The typography, iconography, and overall composition were designed to feel refined yet approachable, giving the brand a distinctive identity that is versatile, memorable, and built for long-term recognition."
          mainImage="/images/branding/tantu-main.png"
          mainImageAlt="Tantu Logo on Fabric"
        >
          <div className="branding-works-grid-3-col">
            <img src="/images/branding/tantu-sub-one.png" alt="Store Display" className="branding-works-gallery-img" />
            <img src="/images/branding/tantu-sub-two.png" alt="Shopping Bag & Box" className="branding-works-gallery-img" />
            <img src="/images/branding/tantu-sub-three.png" alt="Poster/Ad" className="branding-works-gallery-img" />
          </div>
        </ProjectCase>

      </section>

      {/* 3. CALL TO ACTION */}
      <section className="branding-works-cta-section">
        <span className="branding-works-subtitle-blue">HAVE A PROJECT IN MIND ?</span>
        <h2>Let’s Create Something<br/>Amazing Together</h2>
        <p>We're ready to help you turn your ideas into real results.</p>
        <Link to="/contact" className="branding-works-btn-outline-dark">
          Start Your Project <ArrowRight />
        </Link>
      </section>

    </div>
  );
}
