import React, { useState, useRef, useEffect } from 'react';
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
  const [totalDots, setTotalDots] = useState(2);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const isHovered = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  // Auto-play interval to slide automatically
  useEffect(() => {
    const interval = setInterval(() => {
      if (isDragging.current || isHovered.current) return;
      
      const totalCards = projects.length;
      let nextPage;
      
      if (totalDots === 2) {
        // Desktop: Toggle page index
        nextPage = currentPage < 3 ? 3 : 0;
      } else {
        // Mobile/Tablet: move card-by-card
        nextPage = (currentPage + 1) % totalCards;
        
        // Wrap around at max scroll bounds
        if (sliderRef.current) {
          const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
          if (sliderRef.current.scrollLeft >= maxScroll - 10 && nextPage > currentPage) {
            nextPage = 0;
          }
        }
      }
      
      scrollToCard(nextPage);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentPage, totalDots]);

  // Determine dynamic dot counts depending on window resize
  useEffect(() => {
    const updateDotsCount = () => {
      if (window.innerWidth >= 992) {
        setTotalDots(2); // Desktop: 6 cards, 3 visible -> 2 pages
      } else if (window.innerWidth >= 600) {
        setTotalDots(5); // Tablet: 6 cards, 2 visible -> 5 steps
      } else {
        setTotalDots(6); // Mobile: 6 cards, 1 visible -> 6 steps
      }
    };

    updateDotsCount();
    window.addEventListener('resize', updateDotsCount);
    return () => window.removeEventListener('resize', updateDotsCount);
  }, []);

  const handleMouseEnter = () => {
    isHovered.current = true;
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    handleMouseUpOrLeave();
  };

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

      // Snap to closest card
      const scrollLeft = sliderRef.current.scrollLeft;
      const cards = sliderRef.current.querySelectorAll('.project-card');
      let closestIndex = 0;
      let minDistance = Infinity;

      cards.forEach((card, idx) => {
        const cardLeft = card.offsetLeft - sliderRef.current.offsetLeft;
        const distance = Math.abs(cardLeft - scrollLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      });

      if (cards[closestIndex]) {
        const targetScroll = cards[closestIndex].offsetLeft - sliderRef.current.offsetLeft;
        sliderRef.current.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
        setCurrentPage(closestIndex);
      }
    }
  };

  // Click card page scrolling
  const scrollToCard = (index) => {
    if (sliderRef.current) {
      const cards = sliderRef.current.querySelectorAll('.project-card');
      if (cards && cards[index]) {
        const targetScroll = cards[index].offsetLeft - sliderRef.current.offsetLeft;
        sliderRef.current.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
        setCurrentPage(index);
      }
    }
  };

  // Native Scroll Listener to update dots when swiping on touch devices
  const handleScroll = () => {
    if (sliderRef.current && !isDragging.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const cards = sliderRef.current.querySelectorAll('.project-card');
      let closestIndex = 0;
      let minDistance = Infinity;

      cards.forEach((card, idx) => {
        const cardLeft = card.offsetLeft - sliderRef.current.offsetLeft;
        const distance = Math.abs(cardLeft - scrollLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      });

      if (closestIndex !== currentPage) {
        setCurrentPage(closestIndex);
      }
    }
  };

  const handleDotClick = (dotIdx) => {
    if (totalDots === 2) {
      scrollToCard(dotIdx * 3);
    } else {
      scrollToCard(dotIdx);
    }
  };

  const isDotActive = (dotIdx) => {
    if (totalDots === 2) {
      const activeDot = currentPage < 3 ? 0 : 1;
      return dotIdx === activeDot;
    } else {
      return dotIdx === currentPage;
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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
          {Array.from({ length: totalDots }).map((_, idx) => (
            <button 
              key={idx}
              className={`portfolio-dot ${isDotActive(idx) ? 'active' : ''}`}
              onClick={() => handleDotClick(idx)}
              aria-label={`View page ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioPreview;
