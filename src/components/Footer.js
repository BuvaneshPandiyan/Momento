import React from 'react';
import './Footer.css';
import WhatsAppIcon from '../components/assets/icon-whatsapp.png';
import InstagramIcon from '../components/assets/icon-instagram.png';
import EmailIcon from '../components/assets/icon-email.png';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Divider */}
      <div className="softDivider" />

      {/* Contact Icons */}
      <p className="textHighlight">Find us on</p>
      <div className="iconContainer">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="iconLink"
        >
          <img src={WhatsAppIcon} alt="WhatsApp" className="iconImage" />
        </a>
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="iconLink"
        >
          <img src={InstagramIcon} alt="Instagram" className="iconImage" />
        </a>
        <a
          href="mailto:contact@youremail.com"
          aria-label="Email"
          className="iconLink"
        >
          <img src={EmailIcon} alt="Email" className="iconImage" />
        </a>
      </div>
      <h2 className="sectionTitle">Our Works</h2>

<div className="worksGrid">
  <div className="workItem" data-title="Proposal">
    <iframe
      src="https://projectlove1.vercel.app" // TODO: Change to actual Proposal URL
      title="Proposal Preview"
      className="iframePreview"
      loading="lazy"
      allowFullScreen
      scrolling="no"
    ></iframe>
    <a
      href="https://projectlove1.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="overlayLink"
      aria-label="Open Proposal Website"
    ></a>
  </div>

  <div className="workItem" data-title="Invitation">
    <iframe
      src="https://projectlove1.vercel.app" // TODO: Change to actual Invitation URL
      title="Invitation Preview"
      className="iframePreview"
      loading="lazy"
      allowFullScreen
      scrolling="no"
    ></iframe>
    <a
      href="https://projectlove1.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="overlayLink"
      aria-label="Open Invitation Website"
    ></a>
  </div>

  <div className="workItem" data-title="Apology">
    <iframe
      src="https://projectlove1.vercel.app" // TODO: Change to actual Apology URL
      title="Apology Preview"
      className="iframePreview"
      loading="lazy"
      allowFullScreen
      scrolling="no"
    ></iframe>
    <a
      href="https://projectlove1.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="overlayLink"
      aria-label="Open Apology Website"
    ></a>
  </div>

  <div className="workItem" data-title="Love Story">
    <iframe
      src="https://projectlove1.vercel.app" // TODO: Change to actual Love Story URL
      title="Love Story Preview"
      className="iframePreview"
      loading="lazy"
      allowFullScreen
      scrolling="no"
    ></iframe>
    <a
      href="https://projectlove1.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="overlayLink"
      aria-label="Open Love Story Website"
    ></a>
  </div>
</div>


      {/* About Us */}
      <h2 className="sectionTitle">About Us</h2>
      <p className="aboutSection">
        We create personalized digital moments that help you express love, say sorry, invite someone special, or celebrate love stories. Every project is crafted to touch hearts and create unforgettable emotional connections.
      </p>

      {/* Newsletter */}
      <div className="newsletter">
        <input type="email" placeholder="Your email" className="newsletterInput" />
        <button className="newsletterButton">Subscribe</button>
      </div>

      {/* Call to Action */}
      <div className="footerCTA">
        <em>"Love deserves more than words. Create your own unforgettable digital moment."</em>
      </div>

      {/* Floating Hearts */}
      <div className="floatingHearts">
        <span className="heart" />
        <span className="heart delay1" />
        <span className="heart delay2" />
      </div>
    </footer>
  );
};

export default Footer;
