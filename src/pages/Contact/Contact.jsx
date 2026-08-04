import React, { useState } from 'react';
import './Contact.css';
import sendIcon from '../../assets/icons/lsicon_send-filled.png';
import { jsPDF } from 'jspdf';

// SVG Icons
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="contact-info-icon">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="contact-info-icon">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="contact-info-icon">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="contact-info-icon">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const PaperPlaneIcon = () => (
  <svg viewBox="0 0 24 24" className="contact-form-submit-icon" width="16" height="16" fill="currentColor">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    company: '',
    projectDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const companyInfo = formData.company ? ` representing ${formData.company}` : '';
      const emailMessage = `Dear Urban Knots Team,

I hope this email finds you well.

My name is ${formData.fullName}${companyInfo}, and I am writing to submit a project inquiry through the contact form on your website.

Here is my contact information:
- Email: ${formData.email}
- Phone Number: ${formData.phoneNumber || 'N/A'}

Project Details:
${formData.projectDetails}

Thank you for your time. I look forward to hearing from you.

Best regards,
${formData.fullName}`;

      // Generate PDF on the fly
      const doc = new jsPDF();
      
      // Header Section
      doc.setFillColor(33, 33, 33);
      doc.rect(0, 0, 210, 30, 'F');
      
      doc.setFont("helvetica", "bold");
      doc.setFontSize(20);
      doc.setTextColor(255, 255, 255);
      doc.text("URBAN KNOTS", 20, 20);
      
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text("PROJECT INQUIRY DETAILS", 140, 20);
      
      // Client Info Section
      doc.setTextColor(50, 50, 50);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text("Client Information", 20, 45);
      
      doc.setDrawColor(220, 220, 220);
      doc.line(20, 48, 190, 48);
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      
      const fields = [
        ["Full Name", formData.fullName],
        ["Email Address", formData.email],
        ["Phone Number", formData.phoneNumber || "N/A"],
        ["Company Name", formData.company || "N/A"],
      ];
      
      let y = 58;
      fields.forEach(([label, value]) => {
        doc.setFont("helvetica", "bold");
        doc.text(`${label}:`, 20, y);
        doc.setFont("helvetica", "normal");
        doc.text(value, 60, y);
        y += 8;
      });
      
      // Project Details Section
      y += 6;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text("Project Details", 20, y);
      
      doc.line(20, y + 3, 190, y + 3);
      
      y += 12;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      
      const detailLines = doc.splitTextToSize(formData.projectDetails, 170);
      detailLines.forEach(line => {
        if (y > 280) {
          doc.addPage();
          y = 20;
        }
        doc.text(line, 20, y);
        y += 6;
      });
      
      // Footer
      if (y > 260) {
        doc.addPage();
        y = 20;
      }
      y += 15;
      doc.setDrawColor(240, 240, 240);
      doc.line(20, y, 190, y);
      
      doc.setFont("helvetica", "italic");
      doc.setFontSize(9);
      doc.setTextColor(150, 150, 150);
      doc.text(`Submitted on: ${new Date().toLocaleString()}`, 20, y + 8);
      doc.text("Generated by Urban Knots Website", 140, y + 8);
      
      const pdfBlob = doc.output('blob');
      const pdfFile = new File([pdfBlob], `Inquiry_${formData.fullName.replace(/\s+/g, '_')}.pdf`, { type: 'application/pdf' });

      // Construct FormData to support attachments
      const formDataToSend = new FormData();
      formDataToSend.append("_subject", `Project Inquiry: ${formData.fullName}`);
      formDataToSend.append("_template", "basic");
      formDataToSend.append("_replyto", formData.email);
      
      formDataToSend.append("Greeting", "Dear Urban Knots Team,");
      formDataToSend.append("Introduction", `My name is ${formData.fullName}${companyInfo}, and I am writing to submit a project inquiry through the contact form on your website.`);
      formDataToSend.append("Contact Details", `You can reach me at ${formData.email}${formData.phoneNumber ? ` or by phone at ${formData.phoneNumber}` : ''}.`);
      formDataToSend.append("Project Details", formData.projectDetails);
      formDataToSend.append("Sign-off", `Thank you for your time. I look forward to hearing from you. Best regards, ${formData.fullName}.`);
      
      formDataToSend.append("Attachment", pdfFile);

      const response = await fetch("https://formsubmit.co/ajax/urbanknotsllp@gmail.com", {
        method: "POST",
        headers: { 
          "Accept": "application/json"
        },
        body: formDataToSend
      });
      
      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          company: '',
          projectDetails: ''
        });
      } else {
        alert('There was a problem submitting your form. Please try again.');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert('There was a problem submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page-wrapper">
      
      {/* 1. Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-image-wrapper">
          <img src="/images/hero/contact-img-new.png" alt="Fluid graphic" className="contact-hero-fluid-graphic" />
        </div>
        <div className="contact-hero-container">
          <span className="contact-hero-tag">Contact Us</span>
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">
              Let's Create Something <br /> Remarkable <span className="contact-title-accent">Together</span>
            </h1>
            <p className="contact-hero-desc">
              Have a project in mind? Whether you're building a new brand, designing a website, or growing your business online, we're here to help turn your ideas into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Details White Area wrapper */}
      <div className="contact-details-area">
        
        {/* 2. Contact Info Cards */}
        <section className="contact-info-section">
          <div className="contact-info-container">
            
            <div className="contact-info-card">
              <div className="contact-info-card-header">
                <div className="contact-info-icon-wrapper">
                  <MapPinIcon />
                </div>
                <h3 className="contact-info-title">Location</h3>
              </div>
              <p className="contact-info-text">
                C-29, 3rd Floor, Malabar Gate,<br />
                Ram Mohan Road, Kozhikode<br />
                Kerala - 673004
              </p>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-card-header">
                <div className="contact-info-icon-wrapper">
                  <MailIcon />
                </div>
                <h3 className="contact-info-title">Email</h3>
              </div>
              <p className="contact-info-text">
                <a href="mailto:urbanknotsllp@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                  urbanknotsllp@gmail.com
                </a>
              </p>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-card-header">
                <div className="contact-info-icon-wrapper">
                  <PhoneIcon />
                </div>
                <h3 className="contact-info-title">Phone</h3>
              </div>
              <p className="contact-info-text">
                +91 8129 185 151<br />
                +91 8281 919 151
              </p>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-card-header">
                <div className="contact-info-icon-wrapper">
                  <ClockIcon />
                </div>
                <h3 className="contact-info-title">Working Hours</h3>
              </div>
              <p className="contact-info-text">
                Monday - Saturday<br />
                10:00 AM - 6:00 PM
              </p>
            </div>

          </div>
        </section>

        {/* 3. Send Us A Message Form Section */}
        <section className="contact-form-section">
          <div className="contact-form-content">
            <span className="contact-form-tag">Send Us A Message</span>
            <h2 className="contact-form-title">We'd Love to Hear From you!</h2>
            <p className="contact-form-desc">
              Whether you're building a new brand, launching a website, creating compelling content, <br /> or growing your digital presence, Urban Knots is here to bring your ideas to life.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="contact-form-input"
                  />
                </div>
                <div className="contact-form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="contact-form-input"
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="contact-form-input"
                  />
                </div>
                <div className="contact-form-group">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name (Optional)"
                    className="contact-form-input"
                  />
                </div>
              </div>

              <div className="contact-form-group">
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Project Details"
                  required
                  className="contact-form-textarea"
                />
              </div>

              <div className="contact-form-submit-container">
                <button 
                  type="submit" 
                  className="contact-form-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} 
                  {!isSubmitting && <img src={sendIcon} alt="Send" className="contact-form-submit-icon" />}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* 4. CTA Banner Section */}
        <section className="contact-cta-section">
          <div className="contact-cta-banner">
            <div className="contact-cta-left">
              <span className="contact-cta-tag">Let's Work Together</span>
              <h2 className="contact-cta-title">Ready to Start Your<br />Project?</h2>
              <p className="contact-cta-desc">
                Whether you need branding, a website, creative content, or digital marketing, Urban Knots is your creative partner from idea to execution.
              </p>
            </div>
            <div className="contact-cta-right">
              <button className="contact-cta-btn" onClick={() => window.open('https://wa.me/918129195151', '_blank')}>
                Start Your Project <img src="/images/clients/Vector.png" alt="Arrow" className="contact-cta-btn-icon" />
              </button>
            </div>
          </div>
        </section>

      </div>

      {isSuccess && (
        <div className="contact-modal-overlay" onClick={() => setIsSuccess(false)}>
          <div className="contact-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="contact-modal-close-btn" onClick={() => setIsSuccess(false)}>
              &times;
            </button>
            <div className="contact-modal-success-content">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#6C63FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-modal-success-icon" width="48" height="48">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <h2 className="contact-modal-success-title">Thank You!</h2>
              <p className="contact-modal-success-message">
                Your inquiry has been submitted. We will get back to you shortly!
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Contact;
