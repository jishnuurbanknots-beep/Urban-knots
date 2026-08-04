import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
// Cloudinary Video CDN URLs
const productionVideo = "https://res.cloudinary.com/g40pmnhj/video/upload/Reel-one_xxqvqk.mp4";
const productionVideoTwo = "https://res.cloudinary.com/g40pmnhj/video/upload/Reel-three_eyq0ud.mp4";
import arrowLeftIcon from '../../assets/icons/Vector-left.png';
import arrowRightIcon from '../../assets/icons/Vector-right.png';

// Reusable SVG Icons
const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
  </svg>
);

const ArrowDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="m8 12 4 4 4-4" /><path d="M12 8v8" />
  </svg>
);

const VideoGridItem = ({ src }) => {
  const videoRef = React.useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        // Prevent console errors from autoplay policies or fast hovering
        console.log("Video play request was interrupted or prevented:", err);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const isEmbed = src.includes('embed') || src.includes('player.cloudinary.com');

  if (isEmbed) {
    return (
      <iframe
        src={src}
        className="category-grid-img"
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      controls
      muted
      loop
      playsInline
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="category-grid-img"
      style={{ objectFit: 'cover', width: '100%', height: '100%', display: 'block', cursor: 'pointer' }}
    />
  );
};

// Reusable Component for Image Grid Sections (Print, Packaging, etc.)
const CategorySection = ({ title, description, images, isVertical = false }) => {
  const gridRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  const checkScroll = () => {
    if (gridRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = gridRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  React.useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [images]);

  const scroll = (direction) => {
    if (gridRef.current) {
      const container = gridRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="category-section">
      <div className="category-header">
        <div className="category-text">
          <h2>{title}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{description}</p>
        </div>
        <div className="category-nav">
          <button
            className="nav-arrow"
            aria-label="Previous"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
          >
            <img src={arrowLeftIcon} alt="Previous" className="nav-arrow-icon" />
          </button>
          <button
            className="nav-arrow"
            aria-label="Next"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
          >
            <img src={arrowRightIcon} alt="Next" className="nav-arrow-icon" />
          </button>
        </div>
      </div>
      <div
        ref={gridRef}
        className={`category-grid ${isVertical ? 'vertical-grid' : ''}`}
        onScroll={checkScroll}
      >
        {images.map((img, index) => {
          const isVideo = typeof img === 'string' && (img.endsWith('.mp4') || img.includes('dummy.mp4') || img.includes('video') || img.includes('Reel'));
          return (
            <div key={index} className={`grid-image-container ${isVideo ? 'grid-video-container' : 'grid-img-container'}`}>
              {isVideo ? (
                <VideoGridItem src={img} />
              ) : typeof img === 'string' ? (
                <img src={img} alt={`${title} ${index + 1}`} className="category-grid-img" />
              ) : (
                <div className="image-placeholder">Image {index + 1}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default function Portfolio() {
  // Sample data for the categories
  const categories = [
    {
      title: "Print media",
      description: "From brochures and flyers to posters, menus, and marketing collateral,\nwe create print materials that communicate clearly while leaving a\nlasting impression.",
      images: [
        "/images/clients/Rectangle-new-two.png",
        "/images/clients/Rectangle-new.png",
        "/images/clients/escape.jpg",
        "/images/clients/Rectangle-new-three.jpg",
        "/images/clients/Rectangle-new-four.jpg"
      ]
    },
    {
      title: "Packaging",
      description: "Packaging solutions that balance aesthetics, functionality, and shelf \nimpact,helping products stand out while reinforcing the brand story.",
      images: [
        "/images/clients/Packaging-one.png",
        "/images/clients/Packaging-two.png",
        "/images/clients/Packaging-three.png",
        "/images/clients/Packaging-four.jpg",
        "/images/clients/Packaging-five.jpg"
      ]
    },
    {
      title: "Social media",
      description: "Creative content designed to engage audiences, strengthen brand\npresence, and drive meaningful interactions across digital platforms.",
      images: [
        "/images/clients/socail-media-one.png",
        "/images/clients/social-media-two.png",
        "/images/clients/social-media-three.png",
        "/images/clients/social-media-four.jpg",
        "/images/clients/social-media-five.jpg",
        "/images/clients/social-media-six.jpg",
        "/images/clients/social-media-seven.jpg",
        "/images/clients/social-media-eight.jpg"
      ]
    },
    {
      title: "Production",
      description: "High-quality visual storytelling tailored to different communication goals.\nProfessional photography that captures your brand with clarity,\ncreativity, and purpose.",
      images: [productionVideo, productionVideoTwo],
      isVertical: true
    },
    {
      title: "Photography",
      description: "Professional photography that captures your brand with clarity, creativity,\nand purpose.",
      images: [
        "/images/clients/photography-one.jpg",
        "/images/clients/photography-two.jpg",
        "/images/clients/photography-three.jpg",
        "/images/clients/photography-four.jpg",
        "/images/clients/photography-five.jpg",
        "/images/clients/photography-six.jpg",
        "/images/clients/photography-seven.jpg",
        "/images/clients/photography-eight.jpg",
        "/images/clients/photography-nine.jpg",
        "/images/clients/photography-ten.jpeg",
        "/images/clients/photography-eleven.jpeg",

      ]
    }
  ];

  return (
    <div className="portfolio-page">

      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <span className="subtitle-blue">OUR WORK</span>
          <h1>Our Recent Projects</h1>
          <p>Every project is an opportunity to solve a problem, build <br />a brand, and create meaningful digital experiences. <br />Here's a selection of our recent work.</p>
        </div>

        <div className="scroll-indicator" onClick={() => {
          const introSection = document.querySelector('.showcase-intro');
          if (introSection) {
            introSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}>
          <span>Explore Our Work</span>
          <ArrowDown />
        </div>
      </section>

      {/* 2. INTRO & BRAND IDENTITY */}
      <div className="container">
        <section className="showcase-intro">
          <span className="subtitle-blue">LATEST WORKS</span>
          <h2>Creative Showcase</h2>
          <p>Explore a curated collection of work where creativity meets strategy. Every project is thoughtfully <br />crafted to solve business challenges, build memorable brands, and create meaningful experiences <br />across digital and print.</p>
        </section>

        <section className="brand-identity-feature">
          <div className="feature-image">
            <img src="/images/clients/Rectangle.png" alt="Brand Identity Showcase" className="brand-identity-img" />
          </div>
          <div className="feature-content">
            <h2>Brand Identity</h2>
            <p>Strategic brand identities that build recognition, trust, and lasting <br />connections through distinctive visual systems, consistent messaging <br />and purposeful design.</p>
            <Link to="/branding" className="btn-talk btn-solid-talk-dark">
              View All Projects <img src="/images/clients/Vector.png" alt="Arrow" className="btn-talk-icon" />
            </Link>
          </div>
        </section>

        {/* 3. CATEGORY GRIDS */}
        {categories.map((cat, index) => (
          <CategorySection
            key={index}
            title={cat.title}
            description={cat.description}
            images={cat.images}
            isVertical={cat.isVertical}
          />
        ))}
      </div>

      {/* 4. CALL TO ACTION */}
      <section className="portfolio-cta-section">
        <span className="subtitle-blue">HAVE A PROJECT IN MIND ?</span>
        <h2>Ready to Build <br />Something Amazing?</h2>
        <p>Whether you're launching a startup, scaling your business, or refreshing your brand, <br />we're here to create meaningful experiences that leave a lasting impression.</p>
        <Link to="/contact" className="btn-outline-dark">
          Start Your Project <ArrowRight />
        </Link>
      </section>

    </div>
  );
}