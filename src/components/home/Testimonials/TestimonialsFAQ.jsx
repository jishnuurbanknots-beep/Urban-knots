import React, { useState, useEffect } from 'react';
import './TestimonialsFAQ.css';
import { User } from 'lucide-react';

// Quote Icon SVG
const QuoteIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="testimonial-quote-icon"
  >
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const TestimonialsFAQ = () => {
  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      text: "Urban Knots understood our vision perfectly and transformed it into a professional brand identity. Their creativity and attention to detail exceeded our expectations.",
      name: "Rohan",
      role: "Startup Founder"
    },
    {
      id: 2,
      text: "The team delivered an outstanding website that has boosted our user engagement by 40%. They are strategic, creative, and highly professional.",
      name: "Priya",
      role: "Marketing Director"
    },
    {
      id: 3,
      text: "Their design process is completely transparent and collaborative. They turned our complex requirements into an elegant, intuitive interface.",
      name: "Kabir",
      role: "Creative Lead"
    }
  ];

  // FAQ Data
  const faqs = [
    {
      question: "How long does a project take?",
      answer: "Most branding projects take 1-3 weeks, while websites typically take 3-8 weeks depending on complexity."
    },
    {
      question: "Do you work with startups?",
      answer: "Yes, we love working with startups! We offer flexible solutions tailored to help new businesses establish a strong market presence and scale efficiently."
    },
    {
      question: "Can you redesign an existing website?",
      answer: "Absolutely. We analyze your current website's performance and design a modernized, conversion-focused interface that aligns with your updated brand strategy."
    },
    {
      question: "Do you offer digital marketing after launch?",
      answer: "Yes, we provide ongoing digital marketing services, including SEO, social media management, and performance marketing, to help grow your brand post-launch."
    },
    {
      question: "How do we get started?",
      answer: "Simply click the 'Let's Start Your Project' button to get in touch. We'll set up an initial consultation to discuss your goals, requirements, and scope."
    }
  ];

  // State Management
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Auto-play Testimonials Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // cycle every 5 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="testimonials-faq-section" id="testimonials-faq">
      <div className="testimonials-faq-container">
        
        {/* Left Column: Testimonials */}
        <div className="testimonials-column">
          <span className="section-tag">TESTIMONIALS</span>
          <h2 className="testimonials-title">What Our Clients Say</h2>
          
          <div className="testimonial-card-wrapper">
            <div className="testimonial-card">
              <div className="testimonial-cards-stack">
                {testimonials.map((t, idx) => (
                  <div 
                    key={t.id} 
                    className={`testimonial-slide-content ${idx === activeTestimonial ? 'active' : ''}`}
                  >
                    <div className="testimonial-top-row">
                      <div className="testimonial-quote-wrapper">
                        <QuoteIcon />
                      </div>
                      <p className="testimonial-text">
                        {t.text}
                      </p>
                    </div>
                    <div className="testimonial-bottom-row">
                      <div className="testimonial-avatar">
                        <User size={20} />
                      </div>
                      <div className="testimonial-meta">
                        <h4 className="testimonial-name">{t.name}</h4>
                        <p className="testimonial-role">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Dots */}
            <div className="slider-dots">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`slider-dot ${idx === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: FAQ */}
        <div className="faq-column">
          <span className="section-tag">FAQ</span>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          
          <div className="faq-accordion-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`faq-item ${isOpen ? 'active' : ''}`}>
                  <button 
                    className="faq-question-btn" 
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <span className="faq-toggle-icon-box">
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className={`faq-icon ${isOpen ? 'rotated' : ''}`}
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                  <div 
                    className="faq-answer-container"
                    style={{ 
                      maxHeight: isOpen ? '200px' : '0px',
                      opacity: isOpen ? 1 : 0
                    }}
                  >
                    <p className="faq-answer-text">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsFAQ;
