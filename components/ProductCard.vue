<template>
  <div class="product-card" @click="$emit('click')">
    <div class="product-badge" v-if="product.badge">{{ product.badge }}</div>
    <div class="product-image">
      <img :src="product.image || '/images/product-placeholder.jpg'" :alt="product.name">
    </div>
    <div class="product-details">
      <h3 class="product-name">{{ product.name }}</h3>
      <div class="product-meta">
        <span class="product-type">{{ product.type }}</span>
        <span class="product-voltage">{{ product.voltage }}</span>
      </div>
      <p class="product-description">{{ product.shortDescription }}</p>
      
      <!-- Added features section -->
      <div class="product-features" v-if="product.features">
        <div class="feature" v-for="(feature, index) in product.features.slice(0, 3)" :key="index">
          <svg viewBox="0 0 24 24" class="feature-icon">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
          </svg>
          <span>{{ feature }}</span>
        </div>
      </div>
      
      <button class="view-button">
        View Details
        <svg viewBox="0 0 24 24" class="button-icon">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
product: {
  type: Object,
  required: true
}
})
</script>
  
  <style scoped>
  .product-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
    cursor: pointer;
    position: relative;
  }
  
  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .product-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: linear-gradient(to right, #e74c3c, #c0392b);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 600;
    z-index: 1;
  }
  
  .product-image {
    height: 200px;
    overflow: hidden;
    position: relative;
  }
  
  .product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }
  
  .product-card:hover .product-image img {
    transform: scale(1.05);
  }
  
  .product-details {
    padding: 1.5rem;
  }
  
  .product-name {
    font-size: 1.1rem;
    color: #2c3e50;
    margin: 0 0 0.5rem 0;
    line-height: 1.4;
  }
  
  .product-meta {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    flex-wrap: wrap;
  }
  
  .product-type, .product-voltage {
    font-size: 0.75rem;
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
  }
  
  .product-type {
    background: rgba(52, 152, 219, 0.1);
    color: #3498db;
  }
  
  .product-voltage {
    background: rgba(46, 204, 113, 0.1);
    color: #2ecc71;
  }
  
  .product-description {
    color: #7f8c8d;
    font-size: 0.9rem;
    margin: 0 0 1rem 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .product-features {
    margin-bottom: 1.5rem;
  }
  
  .feature {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
    color: #2c3e50;
  }
  
  .feature-icon {
    width: 16px;
    height: 16px;
    fill: #2ecc71;
    flex-shrink: 0;
  }
  
  .view-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.75rem;
    background: linear-gradient(to right, #3498db, #2ecc71);
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .view-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .button-icon {
    width: 16px;
    height: 16px;
    fill: white;
  }
  </style>