<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-grid">
          <!-- About Column -->
          <div class="footer-col footer-about">
            <div class="footer-logo">
              <span class="logo-text">TVOLTTECH CONTROL TRANSFORMERS</span>
            </div>
            <p class="about-text">
              TVOLTTECH CONTROL TRANSFORMERS LLP is an ISO 9001:2015 certified company established in 2024. We specialize in manufacturing and supplying current transformers, potential transformers, and distribution transformers with physical presence across India.
            </p>
          </div>

          <!-- Quick Links -->
          <div class="footer-col footer-links">
            <h3 class="footer-title">Quick Links</h3>
            <ul class="footer-list">
              <li class="footer-item">
                <NuxtLink to="/" class="footer-link">Home</NuxtLink>
              </li>
              <li class="footer-item">
                <NuxtLink to="/about" class="footer-link">About Us</NuxtLink>
              </li>
              <li class="footer-item">
                <NuxtLink to="/products" class="footer-link">Our Products</NuxtLink>
              </li>
              <li class="footer-item">
                <NuxtLink to="/contact" class="footer-link">Contact Us</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Products -->
          <div class="footer-col footer-products">
            <h3 class="footer-title">Our Products</h3>
            <ul class="footer-list">
              <li class="footer-item">
                <NuxtLink to="/products/1" class="footer-link">Low Tension Transformers</NuxtLink>
              </li>
              <!-- <li class="footer-item">
                <NuxtLink to="/products/1" class="footer-link">Low Tension Instruments</NuxtLink>
              </li> -->
              <li class="footer-item">
                <NuxtLink to="/products/3" class="footer-link">Medium Voltage Instruments</NuxtLink>
              </li>
              <li class="footer-item">
                <NuxtLink to="/products/5" class="footer-link">Oil Cooled Units</NuxtLink>
              </li>
              <li class="footer-item">
                <NuxtLink to="/products/6" class="footer-link">Epoxy Components</NuxtLink>
              </li>
              <li class="footer-item">
                <NuxtLink to="/products/7" class="footer-link">Distribution Transformers</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="footer-col footer-contact">
            <h3 class="footer-title">Contact Info</h3>
            <ul class="contact-info">
              <li class="contact-item">
                <svg viewBox="0 0 24 24" class="contact-icon">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>SHED NO 624-625, A6, Makarpura Road, Makarpura GIDC, Vadodara, Gujarat - 390010, India</span>
              </li>
              <li class="contact-item">
                <svg viewBox="0 0 24 24" class="contact-icon">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>tvolttech22@gmail.com</span>
              </li>
              <li class="contact-item">
                <svg viewBox="0 0 24 24" class="contact-icon">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                <span>+91 8401999263, +91 9924302149</span>
              </li>
              <li class="contact-item">
                <svg viewBox="0 0 24 24" class="contact-icon">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <span>Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <p class="copyright">
            &copy; {{ new Date().getFullYear() }} TVOLTTECH CONTROL TRANSFORMERS LLP. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1a2a3a 0%, #2c3e50 100%);
  color: white;
  font-size: 1rem;
  line-height: 1.6;
}

.footer-top {
  padding: 4rem 0 3rem;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.footer-col {
  margin-bottom: 2rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(to right, #3498db, #2ecc71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.about-text {
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
}

.footer-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
  color: white;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background: linear-gradient(to right, #3498db, #2ecc71);
}

.footer-list,
.contact-info {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-item {
  margin-bottom: 0.75rem;
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s;
  position: relative;
  padding-left: 1rem;
}

.footer-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #3498db;
  opacity: 0;
  transition: all 0.3s;
}

.footer-link:hover {
  color: white;
  padding-left: 1.5rem;
}

.footer-link:hover::before {
  opacity: 1;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.8);
  word-break: break-word;
}

.contact-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  fill: #3498db;
}

.footer-bottom {
  background: rgba(0, 0, 0, 0.2);
  padding: 1.5rem 0;
}

.footer-bottom-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.copyright {
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  text-align: center;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;
  }

  .footer-title {
    font-size: 1.15rem;
  }

  .logo-text {
    font-size: 1.25rem;
  }
}

@media (max-width: 768px) {
  .footer-top {
    padding: 3rem 1rem 2rem;
  }

  .footer-grid {
    gap: 1.5rem;
  }

  .about-text,
  .contact-item span,
  .footer-link {
    font-size: 0.95rem;
  }

  .contact-item {
    align-items: center;
    font-size: 0.9rem;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-title::after {
    width: 40px;
  }

  .footer-link::before {
    width: 5px;
    height: 5px;
  }

  .footer-logo {
    flex-direction: column;
    align-items: flex-start;
  }

  .logo-text {
    font-size: 1.1rem;
    text-align: left;
  }
}
</style>
