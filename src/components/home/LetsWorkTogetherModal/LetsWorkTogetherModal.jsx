import React, { useState, useEffect } from 'react';
import { Mail, X, CheckCircle } from 'lucide-react';
import './LetsWorkTogetherModal.css';

const LetsWorkTogetherModal = () => {
  const [isOpen, setIsOpen] = useState(() => {
    const submitted = localStorage.getItem('letsWorkTogetherModalSubmitted');
    const shown = sessionStorage.getItem('letsWorkTogetherModalShown');
    return !submitted && !shown;
  });
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('lets-work-together-modal-open');
      sessionStorage.setItem('letsWorkTogetherModalShown', 'true');
    } else {
      document.body.classList.remove('lets-work-together-modal-open');
    }
    return () => {
      document.body.classList.remove('lets-work-together-modal-open');
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const params = new URLSearchParams();
      params.append("_subject", "Collaboration Inquiry: Urban Knots Modal Subscriber");
      params.append("_template", "basic");
      params.append("_replyto", email);
      
      params.append("Greeting", "Dear Urban Knots Team,");
      params.append("Notification", "A user has requested to collaborate and subscribed via the \"Let's Work Together\" modal on the homepage.");
      params.append("Subscriber Email", email);
      params.append("Sign-off", "Best regards, Urban Knots Website Integration.");

      const response = await fetch("https://formsubmit.co/ajax/urbanknotsllp@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json"
        },
        body: params.toString()
      });

      if (response.ok) {
        setIsSuccess(true);
        localStorage.setItem('letsWorkTogetherModalSubmitted', 'true');
        
        // Auto-close modal after successful submission feedback
        setTimeout(() => {
          setIsOpen(false);
        }, 2500);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div 
        className="lets-work-together-card" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button 
          className="modal-close-btn" 
          onClick={handleClose} 
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {!isSuccess ? (
          <form className="modal-form-content" onSubmit={handleSubmit}>
            {/* Title */}
            <h2 id="modal-title" className="modal-title">
              Let's Work <span className="highlight-purple">Together!</span>
            </h2>

            {/* Description */}
            <p className="modal-description">
              Ready to grow your brand? Share your email,
              <br />
              and let's discuss how we can help.
            </p>

            {/* Email Input Field */}
            <div className="modal-input-group">
              <Mail className="modal-input-icon" size={20} />
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="modal-email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
            </div>

            {/* Bottom Actions Row */}
            <div className="modal-bottom-row">
              <div className="modal-privacy-policy">
                <p>We respect your privacy.</p>
                <p>Only valuable content, no spam.</p>
              </div>

              <button 
                type="submit" 
                className="modal-submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SENDING...' : 'SUBMIT'}
              </button>
            </div>
          </form>
        ) : (
          <div className="modal-success-content">
            <CheckCircle className="modal-success-icon" size={48} />
            <h2 className="modal-success-title">Thank You!</h2>
            <p className="modal-success-message">
              Your email has been submitted. Let's build something amazing together!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LetsWorkTogetherModal;
