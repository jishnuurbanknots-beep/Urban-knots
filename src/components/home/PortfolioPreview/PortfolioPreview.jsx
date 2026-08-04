import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './PortfolioPreview.css';

const ViewAllProjectsIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="btn-arrow-icon">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const PortfolioPreview = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  // Disable snap & smooth scroll on drag start
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollStart.current = sliderRef.current.scrollLeft;
    
    // Disable snapping temporarily for free dragging
    sliderRef.current.style.scrollSnapType = 'none';
    sliderRef.current.style.scrollBehavior = 'auto';
    sliderRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // multiplier for scrolling sensitivity
    sliderRef.current.scrollLeft = scrollStart.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grab';
      sliderRef.current.style.scrollSnapType = 'x mandatory';
      sliderRef.current.style.scrollBehavior = 'smooth';

      // Snap to closest page
      const scrollLeft = sliderRef.current.scrollLeft;
      const pageWidth = sliderRef.current.clientWidth;
      const pageIndex = Math.round(scrollLeft / pageWidth);
      
      sliderRef.current.scrollTo({
        left: pageIndex * pageWidth,
        behavior: 'smooth'
      });
      setCurrentPage(pageIndex);
    }
  };

  // Click dot page scrolling
  const scrollToPage = (pageIndex) => {
    if (sliderRef.current) {
      const pageWidth = sliderRef.current.clientWidth;
      sliderRef.current.scrollTo({
        left: pageIndex * pageWidth,
        behavior: 'smooth'
      });
      setCurrentPage(pageIndex);
    }
  };

  // Native Scroll Listener to update dots when swiping on touch devices
  const handleScroll = () => {
    if (sliderRef.current && !isDragging.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const pageWidth = sliderRef.current.clientWidth;
      if (pageWidth > 0) {
        const pageIndex = Math.round(scrollLeft / pageWidth);
        // Prevent state spam
        if (pageIndex !== currentPage && pageIndex >= 0 && pageIndex <= 1) {
          setCurrentPage(pageIndex);
        }
      }
    }
  };

  const projects = [
    // Page 1
    {
      id: 1,
      title: 'Branding',
      category: 'Branding, Identity',
      image: '/images/portfolio/Branding.png',
      page: 0
    },
    {
      id: 2,
      title: 'Website',
      category: 'Web Design, Devlopment',
      image: '/images/portfolio/Web.jpg',
      page: 0
    },
    {
      id: 3,
      title: 'Digital Marketing',
      category: 'Social Media Management, SEO, Etc.',
      image: '/images/portfolio/Marketing.jpg',
      page: 0
    },
    // Page 2
    {
      id: 4,
      title: 'Print Designs',
      category: 'Banners, Marketing metrials Etc.',
      image: '/images/portfolio/Print Design.jpg',
      page: 1
    },
    {
      id: 5,
      title: 'Production',
      category: 'Videography, Photoshoots',
      image: '/images/portfolio/Production.jpeg',
      page: 1
    },
    {
      id: 6,
      title: 'Package Designs',
      category: 'All type of package designs',
      image: '/images/portfolio/Packaging.png',
      page: 1
    }
  ];

  return (
    <section className="portfolio-section" id="projects">
      <div className="portfolio-container">
        
        {/* Section Header */}
        <div className="portfolio-header">
          <div className="portfolio-header-left">
            <span className="portfolio-subtitle">OUR WORKS</span>
            <h2 className="portfolio-heading">Featured Projects</h2>
          </div>
          <div className="portfolio-header-right">
            <p className="portfolio-header-description">
              Every project is driven by our passion for creativity, strategy, and solving real business challenges. Explore some of our recent work.
            </p>
            <Link to="/branding" className="view-all-projects-btn">
              View All Projects
              <ViewAllProjectsIcon />
            </Link>
          </div>
        </div>

        {/* Carousel Slider Outer Track */}
        <div 
          className="portfolio-slider-outer"
          ref={sliderRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
        >
          <div className="portfolio-slider-inner">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-card-image-box">
                  <img src={project.image} alt={project.title} className="project-card-img" />
                </div>
                <div className="project-card-details">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-category">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="portfolio-dots">
          <button 
            className={`portfolio-dot ${currentPage === 0 ? 'active' : ''}`}
            onClick={() => scrollToPage(0)}
            aria-label="View page 1"
          />
          <button 
            className={`portfolio-dot ${currentPage === 1 ? 'active' : ''}`}
            onClick={() => scrollToPage(1)}
            aria-label="View page 2"
          />
        </div>

      </div>
    </section>
  );
};

export default PortfolioPreview;
