import { useState } from 'react';
import './PaySkulWebsite.css';

export const PaySkulWebsite = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      title: 'SkulFind',
      description: 'We help students discover institutions and educational programs best suited to them',
      color: '#E6D5F5'
    },
    {
      title: 'SkulScholar',
      description: 'Connecting students to scholarships and financial aid opportunities',
      color: '#D5E6F5'
    },
    {
      title: 'SkulLoan',
      description: 'Easy access to education loans with flexible repayment terms',
      color: '#F5E6D5'
    }
  ];

  const features = [
    {
      icon: '💳',
      title: 'Flexible Repayment Plan'
    },
    {
      icon: '📉',
      title: 'Low Interest Rate'
    },
    {
      icon: '✅',
      title: 'Easy Application Process'
    },
    {
      icon: '🎓',
      title: 'Student-Focused Support'
    }
  ];

  const faqs = [
    {
      question: 'What is PaySkul?',
      answer: 'PaySkul is an education financing platform that helps students access affordable loans and financial resources to achieve their educational goals.'
    },
    {
      question: 'What do I need to signup for PaySkul?',
      answer: 'You need a valid email address, phone number, student ID or admission letter, and basic personal information to create your PaySkul account.'
    },
    {
      question: 'What makes PaySkul stand out?',
      answer: 'PaySkul offers flexible repayment plans, low interest rates, quick approval, and dedicated student support throughout your educational journey.'
    },
    {
      question: 'What is my maximum account limit?',
      answer: 'Your account limit depends on your educational institution, program type, and academic standing. Limits typically range from ₦50,000 to ₦500,000 per semester.'
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="payskul-website">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <span className="logo-icon">S</span>
          <span className="logo-text">PAYSKUL</span>
        </div>
        <button className="menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Services Section */}
      <section className="services-section">
        <h1 className="section-title">Our Services</h1>
        <p className="section-subtitle">
          At PaySkul, we make education easier and your future brighter.
          <br />
          Download the app and school with ease.
        </p>

        <div className="services-layout">
          <div className="services-cards-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card-small"
                style={{ backgroundColor: service.color }}
              >
                <div className="service-icon-circle-small"></div>
                <h3 className="service-title-small">{service.title}</h3>
                <p className="service-description-small">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="services-phone-mockup">
            <div className="phone-illustration"></div>
          </div>
        </div>
      </section>

      {/* Education Priority Section */}
      <section className="priority-section">
        <h2 className="priority-title">Your Education is our Priority</h2>
        <p className="priority-subtitle">
          At PaySkul, we offer affordable, easy-to-understand education loans that empower students to achieve their goals free from financial stress.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <p className="feature-title">{feature.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Finance Section */}
      <section className="finance-section">
        <div className="finance-image-placeholder">
          <div className="phone-mockup"></div>
        </div>
        <h2 className="finance-title">
          Finance your future today <span className="italic-text">with</span> the PaySkul Platform
        </h2>
        <p className="finance-description">
          Experience seamless, fast, and secure student financing—designed to help you reach your goals without the hassle.
        </p>
        <div className="download-buttons">
          <button className="download-btn google-play">
            <span className="play-icon">▶</span>
            <div>
              <div className="btn-small-text">GET IT ON</div>
              <div className="btn-large-text">Google Play</div>
            </div>
          </button>
          <button className="download-btn get-started">Get Started now</button>
        </div>
      </section>

      {/* Social Section */}
      <section className="social-section">
        <p className="social-text">Learn more about our community on socials</p>
        <div className="social-icons">
          <a href="#" className="social-icon facebook">f</a>
          <a href="#" className="social-icon twitter">𝕏</a>
          <a href="#" className="social-icon linkedin">in</a>
        </div>
      </section>

      {/* Books Section */}
      <section className="books-section">
        <h2 className="books-title">Can't afford to buy school books?</h2>
        <div className="books-decoration">
          <div className="decoration-arrow"></div>
          <div className="decoration-lines"></div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <span className={`faq-arrow ${openFaq === index ? 'open' : ''}`}>
                  ▼
                </span>
              </button>
              <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="faq-footer">
          Can't find the answer you're looking for? <a href="#" className="contact-link">Click here</a> to reach out to us.
        </p>
      </section>

      {/* Floating Action Button */}
      <button className="fab">
        <span className="fab-arrow">▼</span>
      </button>
    </div>
  );
};
