<template>
  <Header/>
  <div class="home-page">
      <!-- <img src="/images/image.png" alt="TVOLTTECH Logo" class="logo" /> -->
    <!-- Hero Section with Background Image -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <h1 class="hero-title">TVOLTTECH CONTROL TRANSFORMER LLP</h1>
        <p class="hero-subtitle">Premium Quality Instrument Transformers</p>
        <div class="hero-cta">
          <NuxtLink to="/products" class="btn-primary">Explore Products</NuxtLink>
          <NuxtLink to="/contact" class="btn-secondary">Contact Us</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Products Overview -->
    <section class="products-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Products</h2>
          <p class="section-description">High-quality instrument transformers for precise electrical measurement and protection</p>
        </div>
        
        <div class="products-grid">
          <div v-for="(product, index) in featuredProducts" :key="index" class="product-card">
            <div class="product-icon">
              <svg viewBox="0 0 24 24" class="icon">
                <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2zm0 2.8L18 10v9h-2v-6H8v6H6v-9l6-5.2z"/>
              </svg>
            </div>
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-description">{{ product.description }}</p>
            <NuxtLink :to="`/products/${product.slug}`" class="product-link">Learn More →</NuxtLink>
          </div>
        </div>
        
        <div class="section-cta">
          <NuxtLink to="/products" class="btn-primary">View All Products</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose TVOLTTECH?</h2>
          <p class="section-description">Our commitment to quality and innovation sets us apart</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" class="icon">
                <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"/>
              </svg>
            </div>
            <h3 class="feature-title">Quality Assurance</h3>
            <p class="feature-text">All products undergo rigorous testing to meet international standards</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" class="icon">
                <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.557 1.522 4.82 3.889 6.115l-.78 2.77 3.116-1.65c.88.275 1.823.425 2.775.425 4.97 0 9-3.186 9-7.115C21 6.186 16.97 3 12 3z"/>
              </svg>
            </div>
            <h3 class="feature-title">Expert Support</h3>
            <p class="feature-text">Technical expertise to help you select the right solution</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" class="icon">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
              </svg>
            </div>
            <h3 class="feature-title">Competitive Pricing</h3>
            <p class="feature-text">High-quality products at competitive market prices</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" class="icon">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
              </svg>
            </div>
            <h3 class="feature-title">Reliable Performance</h3>
            <p class="feature-text">Products designed for durability and long-term reliability</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Footer/>
</template>

<script setup>
const featuredProducts = [
  {
    name: 'Low Tension Instruments Transformer',
    description: 'High precision transformers for various applications',
    slug: '1'
  },
  {
      name: "Resin Cast Current Transformer",
      description: 'These resin cast current transformers provide excellent insulation and durability for medium voltage applications. Available in various configurations to suit different installation requirements.',
   slug: '2'
  }
]
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
}

/* Hero Section */
.hero {
  position: relative;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  color: white;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(26, 42, 58, 0.8) 0%, rgba(44, 62, 80, 0.9) 100%);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 2rem;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
  background: linear-gradient(to right, #3498db, #2ecc71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero-cta {
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
}

.btn-primary {
  background: linear-gradient(to right, #3498db, #2ecc71);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.btn-secondary {
  background: transparent;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  border: 2px solid white;
  text-align: center;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Section Styling */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(to right, #3498db, #2ecc71);
  border-radius: 3px;
}

.section-description {
  font-size: 1.1rem;
  color: #7f8c8d;
  max-width: 700px;
  margin: 0 auto;
}

.section-cta {
  text-align: center;
  margin-top: 3rem;
}

/* Products Section */
.products-section {
  padding: 5rem 0;
  background: #f8fafc;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.product-card {
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  text-align: center;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.product-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #3498db, #2ecc71);
  border-radius: 50%;
}

.product-icon .icon {
  width: 30px;
  height: 30px;
  fill: white;
}

.product-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.product-description {
  color: #7f8c8d;
  margin-bottom: 1.5rem;
}

.product-link {
  color: #3498db;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;
}

.product-link:hover {
  color: #2980b9;
}

/* Features Section */
.features-section {
  padding: 5rem 0;
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #f8fafc;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.feature-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #3498db, #2ecc71);
  border-radius: 50%;
}

.feature-icon .icon {
  width: 30px;
  height: 30px;
  fill: white;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.feature-text {
  color: #7f8c8d;
}

/* ========== RESPONSIVE DESIGN ========== */

/* Tablet Styles (768px - 1024px) */
@media (max-width: 1024px) {
  .hero {
    height: 60vh;
    min-height: 500px;
  }
  
  .hero-content {
    max-width: 700px;
    padding: 0 1.5rem;
  }
  
  .hero-title {
    font-size: 2.2rem;
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
  
  .section-description {
    font-size: 1rem;
  }
  
  .products-section,
  .features-section {
    padding: 4rem 0;
  }
  
  .products-grid,
  .features-grid {
    gap: 1.5rem;
  }
  
  .product-card,
  .feature-card {
    padding: 1.5rem;
  }
  
  .product-icon,
  .feature-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 1rem;
  }
  
  .product-icon .icon,
  .feature-icon .icon {
    width: 25px;
    height: 25px;
  }
  
  .product-name,
  .feature-title {
    font-size: 1.1rem;
  }
  
  .product-description,
  .feature-text {
    font-size: 0.9rem;
  }
}

/* Mobile Styles (up to 767px) */
@media (max-width: 767px) {
  .hero {
    height: 50vh;
    min-height: 400px;
    text-align: center;
  }
  
  .hero-content {
    padding: 0 1rem;
    width: 100%;
  }
  
  .hero-title {
    font-size: 1.8rem;
    margin-bottom: 0.75rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
  
  .hero-cta {
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  
  .btn-primary,
  .btn-secondary {
    padding: 0.75rem 1.25rem;
    font-size: 0.9rem;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .section-header {
    margin-bottom: 2rem;
  }
  
  .section-title {
    font-size: 1.6rem;
    margin-bottom: 0.75rem;
  }
  
  .section-title::after {
    width: 60px;
    bottom: -8px;
  }
  
  .section-description {
    font-size: 0.95rem;
  }
  
  /* Products Section */
  .products-section {
    padding: 3rem 0;
  }
  
  .products-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .product-card {
    padding: 1.5rem 1rem;
  }
  
  .product-icon {
    width: 45px;
    height: 45px;
    margin-bottom: 1rem;
  }
  
  .product-icon .icon {
    width: 22px;
    height: 22px;
  }
  
  .product-name {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }
  
  .product-description {
    font-size: 0.9rem;
    margin-bottom: 1.25rem;
  }
  
  .section-cta {
    margin-top: 2rem;
  }
  
  /* Features Section */
  .features-section {
    padding: 3rem 0;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .feature-card {
    padding: 1.5rem 1rem;
  }
  
  .feature-icon {
    width: 45px;
    height: 45px;
    margin-bottom: 1rem;
  }
  
  .feature-icon .icon {
    width: 22px;
    height: 22px;
  }
  
  .feature-title {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }
  
  .feature-text {
    font-size: 0.9rem;
  }
}

/* Small Mobile Styles (up to 480px) */
@media (max-width: 480px) {
  .hero {
    height: 45vh;
    min-height: 350px;
  }
  
  .hero-title {
    font-size: 1.6rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 1.4rem;
  }
  
  .section-description {
    font-size: 0.9rem;
  }
  
  .products-section,
  .features-section {
    padding: 2rem 0;
  }
  
  .product-card,
  .feature-card {
    padding: 1.25rem 0.75rem;
  }
  
  .product-name,
  .feature-title {
    font-size: 1rem;
  }
  
  .product-description,
  .feature-text {
    font-size: 0.85rem;
  }
  
  .btn-primary,
  .btn-secondary {
    padding: 0.65rem 1rem;
    font-size: 0.85rem;
  }
}

/* Large Desktop Styles (min-width: 1400px) */
@media (min-width: 1400px) {
  .container {
    max-width: 1600px;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.8rem;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .section-description {
    font-size: 1.2rem;
  }
  
  .products-grid,
  .features-grid {
    gap: 3rem;
  }
  
  .product-card,
  .feature-card {
    padding: 3rem 2rem;
  }
  
  .product-icon,
  .feature-icon {
    width: 70px;
    height: 70px;
  }
  
  .product-icon .icon,
  .feature-icon .icon {
    width: 35px;
    height: 35px;
  }
}

/* Special handling for very small screens */
@media (max-width: 360px) {
  .hero-title {
    font-size: 1.4rem;
  }
  
  .hero-subtitle {
    font-size: 0.9rem;
  }
  
  .product-card,
  .feature-card {
    padding: 1rem 0.5rem;
  }
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
  
  .hero-title {
    background: none;
    -webkit-text-fill-color: black;
    color: black;
  }
  
  .hero-subtitle {
    color: black;
  }
  
  .btn-primary,
  .btn-secondary {
    display: none;
  }
  
  .products-section,
  .features-section {
    padding: 2rem 0;
  }
  
  .product-card,
  .feature-card {
    box-shadow: none;
    border: 1px solid #ddd;
  }
}
</style>