<template>
  <Header />
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <h1 class="hero-title">Contact Us</h1>
        <p class="hero-subtitle">Get in touch with our team for inquiries and support</p>
      </div>
    </section>

    <!-- Contact Info Section -->
    <section class="contact-info-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2 class="section-title">Our Office</h2>
            <div class="info-card">
              <div class="info-item">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div class="info-content">
                  <h3>Address</h3>
                  <p>SHED NO 624-625, A6, Makarpura Road, Makarpura GIDC, Vadodara, Gujarat - 390010, India</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                </div>
                <div class="info-content">
                  <h3>Phone</h3>
                  <p>+91 8401999263</p>
                  <p>+91 9924302149</p>
                  <p>+91 7778899668</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div class="info-content">
                  <h3>Email</h3>
                  <p>tvolttech22@gmail.com</p>
                  <p>niranjankumar9924@gmail.com</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <div class="info-content">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form-section">
            <h2 class="section-title">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="container">
        <h2 class="section-title">Our Location</h2>
        <div class="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.569661994729!2d73.17634627506017!3d22.23373674329544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc90112c62b3d%3A0x6d295e916f42452b!2s624%2C%20GIDC%20Industrial%20Estate%2C%20Makarpura%2C%20Vadodara%2C%20Gujarat%20390010!5e0!3m2!1sen!2sin!4v1719045105840!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>

<script setup>
import ContactForm from '@/components/ContactForm.vue'
</script>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
}

/* Hero Section */
.hero {
  position: relative;
  height: 65vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  color: white;
}

.hero-content {
  position: relative;
  z-index: 1;
  width: 100%;
  text-align: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(26, 42, 58, 0.8) 0%, rgba(44, 62, 80, 0.9) 100%);
}

/* Container */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section Styling */
.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 80px;
  height: 3px;
  background: linear-gradient(to right, #3498db, #2ecc71);
  border-radius: 3px;
}

/* Contact Info Section */
.contact-info-section {
  padding: 5rem 0;
  background: white;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.contact-info {
  padding-right: 2rem;
}

.info-card {
  background: #f8fafc;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.info-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(to right, #3498db, #2ecc71);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-icon svg {
  width: 24px;
  height: 24px;
  fill: white;
}

.info-content h3 {
  font-size: 1.25rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.info-content p {
  color: #7f8c8d;
  margin-bottom: 0.5rem;
}

.contact-form-section {
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

/* Map Section */
.map-section {
  padding: 5rem 0;
  background: #f8fafc;
}

.map-container {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* ========== RESPONSIVE DESIGN ========== */

/* Tablet Styles (768px - 1024px) */
@media (max-width: 1024px) {
  .hero {
    height: 50vh;
    min-height: 400px;
  }
  
  .hero-title {
    font-size: 2.8rem;
  }
  
  .hero-subtitle {
    font-size: 1.3rem;
  }
  
  .container {
    padding: 0 1.5rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .contact-grid {
    gap: 2rem;
  }
  
  .contact-info {
    padding-right: 1rem;
  }
  
  .info-card {
    padding: 1.5rem;
  }
  
  .info-item {
    gap: 1.2rem;
    margin-bottom: 1.5rem;
  }
  
  .info-icon {
    width: 45px;
    height: 45px;
  }
  
  .info-icon svg {
    width: 20px;
    height: 20px;
  }
  
  .contact-form-section {
    padding: 1.5rem;
  }
  
  .map-section {
    padding: 3rem 0;
  }
}

/* Mobile Styles (up to 767px) */
@media (max-width: 767px) {
  .hero {
    height: 40vh;
    min-height: 300px;
  }
  
  .hero-title {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  
  .section-title::after {
    width: 60px;
    bottom: -8px;
  }
  
  /* Contact Info Section */
  .contact-info-section {
    padding: 3rem 0;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-info {
    padding-right: 0;
  }
  
  .info-card {
    padding: 1.5rem 1rem;
  }
  
  .info-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .info-icon {
    width: 40px;
    height: 40px;
  }
  
  .info-icon svg {
    width: 18px;
    height: 18px;
  }
  
  .info-content h3 {
    font-size: 1.1rem;
  }
  
  .info-content p {
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
  }
  
  .contact-form-section {
    padding: 1.5rem 1rem;
    margin-top: 1rem;
  }
  
  /* Map Section */
  .map-section {
    padding: 2rem 0;
  }
  
  .map-container {
    border-radius: 8px;
  }
  
  .map-container iframe {
    height: 350px;
  }
}

/* Small Mobile Styles (up to 480px) */
@media (max-width: 480px) {
  .hero {
    height: 35vh;
    min-height: 250px;
  }
  
  .hero-title {
    font-size: 1.8rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 1.4rem;
  }
  
  .contact-info-section {
    padding: 2rem 0;
  }
  
  .info-card {
    padding: 1rem;
  }
  
  .info-item {
    margin-bottom: 1.25rem;
  }
  
  .info-content h3 {
    font-size: 1rem;
  }
  
  .info-content p {
    font-size: 0.85rem;
  }
  
  .contact-form-section {
    padding: 1rem;
  }
  
  .map-container iframe {
    height: 300px;
  }
}

/* Large Desktop Styles (min-width: 1400px) */
@media (min-width: 1400px) {
  .container {
    max-width: 1600px;
  }
  
  .hero-title {
    font-size: 4rem;
  }
  
  .hero-subtitle {
    font-size: 1.8rem;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .contact-grid {
    gap: 4rem;
  }
  
  .info-card {
    padding: 3rem 2rem;
  }
  
  .contact-form-section {
    padding: 3rem;
  }
}

/* Special handling for very small screens */
@media (max-width: 360px) {
  .hero-title {
    font-size: 1.6rem;
  }
  
  .hero-subtitle {
    font-size: 0.9rem;
  }
  
  .info-card {
    padding: 0.75rem;
  }
  
  .contact-form-section {
    padding: 0.75rem;
  }
}

/* Ensure proper spacing for the contact form component */
.contact-form-section :deep(.contact-form) {
  width: 100%;
}

/* Print Styles */
@media print {
  .hero {
    height: auto;
    min-height: auto;
    background: white !important;
    color: black;
  }
  
  .hero-overlay {
    display: none;
  }
  
  .contact-info-section,
  .map-section {
    padding: 2rem 0;
  }
  
  .info-card,
  .contact-form-section {
    box-shadow: none;
    border: 1px solid #ddd;
  }
}
</style>