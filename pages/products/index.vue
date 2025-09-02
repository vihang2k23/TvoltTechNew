<template>
  <Header/>
  <div class="products-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <h1 class="hero-title">Our Products</h1>
        <p class="hero-subtitle">High-quality instrument transformers for precise measurement and protection</p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="products-main">
      <div class="container">
        <div class="products-header">
          <h2 class="section-title">Product Catalog</h2>
          <p class="section-description">Browse our range of instrument transformers designed for various applications</p>
        </div>
        
        <div class="products-container">
          <aside class="filter-sidebar">
            <div class="filter-card">
              <h3 class="filter-title">Filter Products</h3>
              
              <div class="filter-group">
                <label for="product-type">Product Type</label>
                <select id="product-type" v-model="selectedType" @change="filterProducts">
                  <option value="">All Products</option>
                  <option v-for="type in productTypes" :key="type" :value="type">{{ type }}</option>
                </select>
              </div>
              
              <div class="filter-group">
                <label for="voltage">Voltage Rating</label>
                <select id="voltage" v-model="selectedVoltage" @change="filterProducts">
                  <option value="">All Ratings</option>
                  <option v-for="voltage in voltageRatings" :key="voltage" :value="voltage">{{ voltage }}</option>
                </select>
              </div>
              
              <button class="reset-filters" @click="resetFilters">Reset Filters</button>
            </div>
            
            <div class="product-categories">
              <h3 class="categories-title">Product Categories</h3>
              <ul class="categories-list">
                <li v-for="category in categories" :key="category.slug">
                  <NuxtLink 
                    :to="`/products?type=${category.type}`" 
                    class="category-link"
                    @click="selectCategory(category.type)"
                  >
                    {{ category.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </aside>
          
          <main class="products-content">
            <div class="products-grid">
              <div v-if="filteredProducts.length === 0" class="no-results">
                <svg viewBox="0 0 24 24" class="no-results-icon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                <h3>No products match your filters</h3>
                <p>Try adjusting your search or filter criteria</p>
                <button class="btn-primary" @click="resetFilters">Reset Filters</button>
              </div>
              
              <ProductCard 
                v-for="product in filteredProducts" 
                :key="product.id" 
                :product="product" 
                @click="navigateToProduct(product.id)"
              />
            </div>
          </main>
        </div>
      </div>
    </section>
  </div>
  <Footer/>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useProducts } from '@/composables/useProducts'

const { products } = useProducts()

const selectedType = ref('')
const selectedVoltage = ref('')

// Updated categories to match your products
const categories = [
  { name: 'Low Tension Instruments', type: 'Low Tension Instruments Transformer' },
  { name: 'Medium Voltage Instruments', type: 'Medium Voltage Instruments Transformers' },
  { name: 'Oil Cooled Units', type: 'Oil Cooled Units' },
  { name: 'Epoxy Components', type: 'Epoxy Components' },
  { name: 'Distribution Transformers', type: 'Power Transformers' }
]

const productTypes = computed(() => {
  return [...new Set(products.value.map(p => p.type))]
})

const voltageRatings = computed(() => {
  return [...new Set(products.value.map(p => p.voltage))]
})

const filteredProducts = computed(() => {
  let result = products.value
  
  if (selectedType.value) {
    result = result.filter(p => p.type === selectedType.value)
  }
  
  if (selectedVoltage.value) {
    result = result.filter(p => p.voltage === selectedVoltage.value)
  }
  
  return result
})

const filterProducts = () => {
  // Filtering happens automatically through computed properties
}

const resetFilters = () => {
  selectedType.value = ''
  selectedVoltage.value = ''
}

const selectCategory = (type) => {
  selectedType.value = type
}

const navigateToProduct = (id) => {
  navigateTo(`/products/${id}`)
}
</script>

<style scoped>
.products-page {
  display: flex;
  flex-direction: column;
}

/* Hero Section */
.hero {
  position: relative;
  height: 50vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/products-bg.jpg');
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
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
}

/* Container */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Main Content */
.products-main {
  padding: 5rem 0;
}

.products-header {
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

.products-container {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
}

/* Filter Sidebar */
.filter-sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.filter-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.filter-title {
  font-size: 1.25rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #eee;
}

.filter-group {
  margin-bottom: 1.5rem;
}

.filter-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #2c3e50;
}

.filter-group select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  background: white;
  transition: all 0.3s;
}

.filter-group select:focus {
  border-color: #3498db;
  outline: none;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
}

.reset-filters {
  width: 100%;
  padding: 0.75rem;
  background: #f8fafc;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  color: #2c3e50;
  cursor: pointer;
  transition: all 0.3s;
}

.reset-filters:hover {
  background: #eee;
}

/* Product Categories */
.product-categories {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.categories-title {
  font-size: 1.25rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #eee;
}

.categories-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.categories-list li {
  margin-bottom: 0.75rem;
}

.category-link {
  display: block;
  padding: 0.75rem;
  color: #2c3e50;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s;
}

.category-link:hover {
  background: #f8fafc;
  color: #3498db;
}

.category-link.router-link-active {
  background: linear-gradient(to right, #3498db, #2ecc71);
  color: white;
}

/* Products Content */
.products-content {
  flex: 1;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.no-results {
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.no-results-icon {
  width: 60px;
  height: 60px;
  fill: #7f8c8d;
  margin-bottom: 1.5rem;
}

.no-results h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.no-results p {
  color: #7f8c8d;
  margin-bottom: 1.5rem;
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
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  .products-container {
    grid-template-columns: 1fr;
  }
  
  .filter-sidebar {
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .filter-card, .product-categories {
    flex: 1;
    min-width: 300px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
}
</style>