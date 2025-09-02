<template>
  <Header />
  <div class="product-detail-page">
    <!-- Loading State -->
    <div v-if="isLoading" class="loading-state">
      <div class="container">
        <div class="loading-content">
          <svg class="spinner" viewBox="0 0 50 50">
            <circle
              class="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke-width="5"
            ></circle>
          </svg>
          <p>Loading product details...</p>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error-state">
      <div class="container">
        <div class="error-content">
          <svg viewBox="0 0 24 24" class="error-icon">
            <path
              d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
            />
          </svg>
          <h3>Error loading product</h3>
          <p>{{ error }}</p>
          <button class="btn-retry" @click="retryLoading">Try Again</button>
        </div>
      </div>
    </div>

    <!-- Product Not Found -->
    <div v-else-if="!product" class="not-found-state">
      <div class="container">
        <div class="not-found-content">
          <svg viewBox="0 0 24 24" class="not-found-icon">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
            />
          </svg>
          <h3>Product Not Found</h3>
          <p>
            The product you're looking for doesn't exist or may have been
            removed.
          </p>
          <NuxtLink to="/products" class="btn-back">Browse Products</NuxtLink>
        </div>
      </div>
    </div>

    <!-- Product Content -->
    <div v-else>
      <!-- Breadcrumb Navigation -->
      <div class="breadcrumb">
        <div class="container">
          <NuxtLink to="/products" class="breadcrumb-link">Products</NuxtLink>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-current">{{ product.name }}</span>
        </div>
      </div>

      <!-- Product Main Section -->
      <section class="product-main">
        <div class="container">
          <div class="product-container">
            <!-- Product Images -->
            <div class="product-images">
              <div class="main-image">
                <img
                  :src="
                    currentImage ||
                    product.image ||
                    '/images/product-placeholder.jpg'
                  "
                  :alt="product.name"
                />
              </div>
              <div
                class="thumbnail-gallery"
                v-if="product.gallery && product.gallery.length > 0"
              >
                <div
                  v-for="(image, index) in product.gallery"
                  :key="index"
                  class="thumbnail"
                  @click="currentImage = image"
                  :class="{ active: currentImage === image }"
                >
                  <img :src="image" :alt="`${product.name} - ${index + 1}`" />
                </div>
              </div>
            </div>

            <!-- Product Info -->
            <div class="product-info">
              <h1 class="product-title">{{ product.name }}</h1>
              <div class="product-meta">
                <span class="product-type">{{ product.type }}</span>
                <span class="product-voltage"
                  >Voltage: {{ product.voltage }}</span
                >
              </div>

              <div class="product-divider"></div>

              <div class="product-highlights">
                <h3>Key Features</h3>
                <ul class="highlight-list">
                  <li v-for="(feature, index) in product.features" :key="index">
                    <svg viewBox="0 0 24 24" class="highlight-icon">
                      <path
                        d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                      />
                    </svg>
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>

              <div class="product-actions">
                <button class="btn-primary" @click="navigateTo('/contact')">
                  Request Inquiry
                </button>
                <!-- <button class="btn-secondary" @click="downloadBrochure">
                  Download Brochure
                </button> -->
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Product Tabs -->
      <section class="product-tabs">
        <div class="container">
          <div class="tabs-header">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              class="tab-button"
              :class="{ active: activeTab === tab.id }"
              @click="activeTab = tab.id"
            >
              {{ tab.label }}
            </button>
          </div>

          <div class="tabs-content">
            <!-- Specifications Tab -->
            <div v-if="activeTab === 'specifications'" class="tab-panel">
              <div class="specs-grid">
                <div
                  v-for="(spec, index) in product.specifications"
                  :key="index"
                  class="spec-item"
                >
                  <div class="spec-name">{{ spec.name }}</div>
                  <div class="spec-value">{{ spec.value }}</div>
                </div>
              </div>
            </div>

            <!-- Description Tab -->
            <div v-if="activeTab === 'description'" class="tab-panel">
              <div
                class="description-content"
                v-html="product.description"
              ></div>
            </div>

            <!-- Applications Tab -->
            <div v-if="activeTab === 'applications'" class="tab-panel">
              <div class="applications-content">
                <h3>Typical Applications</h3>
                <ul class="applications-list">
                  <li
                    v-for="(application, index) in product.applications"
                    :key="index"
                  >
                    {{ application }}
                  </li>
                </ul>

                <div v-if="product.standards" class="standards-section">
                  <h3>Compliance Standards</h3>
                  <div class="standards-grid">
                    <div
                      v-for="(standard, index) in product.standards"
                      :key="index"
                      class="standard-item"
                    >
                      <div class="standard-icon">
                        <svg viewBox="0 0 24 24">
                          <path
                            d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"
                          />
                        </svg>
                      </div>
                      <div class="standard-name">{{ standard }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Downloads Tab -->
            <!-- <div v-if="activeTab === 'downloads'" class="tab-panel">
              <div class="downloads-grid">
                <div
                  v-for="(download, index) in product.downloads"
                  :key="index"
                  class="download-item"
                >
                  <div class="download-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                    </svg>
                  </div>
                  <div class="download-info">
                    <div class="download-name">{{ download.name }}</div>
                    <div class="download-meta">
                      {{ download.type }} • {{ download.size }}
                    </div>
                  </div>
                  <a :href="download.url" class="download-button" download>
                    Download
                  </a>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </section>

      <!-- Related Products -->
      <section class="related-products" v-if="relatedProducts.length > 0">
        <div class="container">
          <h2 class="section-title">Related Products</h2>
          <div class="products-grid">
            <ProductCard
              v-for="relatedProduct in relatedProducts"
              :key="relatedProduct.id"
              :product="relatedProduct"
              @click="navigateToProduct(relatedProduct.id)"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
  <Footer />
</template>

<script setup>
const route = useRoute();
const router = useRouter();

// Reactive state
const product = ref(null);
const currentImage = ref("");
const activeTab = ref("specifications");
const isLoading = ref(true);
const error = ref(null);
const relatedProducts = ref([]);

// Tabs configuration
const tabs = [
  { id: "specifications", label: "Specifications" },
  { id: "description", label: "Description" },
  { id: "applications", label: "Applications" },
  // { id: "downloads", label: "Downloads" },
];

// Fetch product data
const fetchProduct = async () => {
  try {
    isLoading.value = true;
    error.value = null;

    // Simulate API call with timeout
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Mock data using ONLY the provided product details
    const products = [
      {
        id: "1",
        name: "Low Tension Current Transformer",
        type: "Low Tension Instruments Transformer",
        voltage: "Up to 1100V",
        image: "/images/Current.png",
        gallery: [
          "/images/Current.png",
          "/images/Current.png",
          "/images/Current.png",
        ],
        features: [
          "Primary current rating up to 10,000 Amps",
          "Secondary current: 1A, 5A, 0.577A or custom",
          "Multi core up to 5 cores or more",
          "Resin casted or tape insulated",
          "Accuracy class up to 0.1 for metering"
        ],
        specifications: [
          { name: "Primary Current", value: "Up to 10,000 Amps" },
          { name: "Secondary Current", value: "1A, 5A, 0.577A or custom" },
          { name: "Type", value: "Wound type, bar type or window type" },
          { name: "Multi Ratio", value: "With tapings on primary or secondary" },
          { name: "Burden", value: "Up to 50 VA (IEC 61869, IS 2705) or more" },
          { name: "Accuracy Class", value: "0.1 for metering, 10P/15P for protection" },
          { name: "STC Rating", value: "Up to 10 kA for 1 second" }
        ],
        description: `
          <p>TVOLTTECH CONTROL TRANSFORMERS LLP has a full range of LV CTs for indoor and outdoor applications. These transformers are designed for precise measurement and protection in electrical systems.</p>
          <p>Available in resin casted or tape insulated versions with different ratios and mounting options to suit various installation requirements.</p>
        `,
        applications: [
          "Energy metering systems",
          "Protection relays",
          "Power monitoring"
        ],
        standards: ["IEC 61869", "IS 2705"],
        downloads: [
          {
            name: "Product Datasheet",
            type: "PDF",
            size: "1.2 MB",
            url: "/downloads/ct-datasheet.pdf",
          }
        ],
      },
      {
        id: "2",
        name: "Low Tension Potential Transformer",
        type: "Low Tension Instruments Transformer",
        voltage: "Up to 1100V",
        image: "/images/demo.png",
        gallery: [
          "/images/demo.png",
          "/images/demo.png",
          "/images/demo.png",
        ],
        features: [
          "Primary voltage rating up to 1100 volts",
          "Secondary voltage: 27V, 63V, 100V, 110V, 120V or custom",
          "Multi winding up to 3 windings",
          "Thermal burden up to 1kVA"
        ],
        specifications: [
          { name: "Primary Voltage", value: "Up to 1100 volts" },
          { name: "Secondary Voltage", value: "27V, 63V, 100V, 110V, 120V or custom" },
          { name: "Multi Winding", value: "Up to 3 windings" },
          { name: "Burden", value: "Up to 200 VA (IEC 60044, IS 3156) or more" },
          { name: "Thermal Burden", value: "Up to 1kVA" },
          { name: "Accuracy Class", value: "0.1 for metering, 3P/5P for protection" }
        ],
        description: `
          <p>TVOLTTECH CONTROL TRANSFORMERS LLP offers a full range of LV VTs for precise voltage measurement in various applications. These transformers are suitable for both metering and protection purposes.</p>
        `,
        applications: [
          "Voltage measurement",
          "Protection systems",
          "Power quality monitoring"
        ],
        standards: ["IEC 60044", "IS 3156"],
        downloads: [
          {
            name: "Product Datasheet",
            type: "PDF",
            size: "1.1 MB",
            url: "/downloads/vt-datasheet.pdf",
          }
        ],
      },
      {
        id: "3",
        name: "Resin Cast Current Transformer",
        type: "Medium Voltage Instruments Transformers",
        voltage: "Up to 33KV",
        image: "/images/outdoor_1.png",
        gallery: [
          "/images/outdoor_1.png",
          "/images/outdoor/2.png",
          "/images/outdoor/1.png",
        ],
        features: [
          "Up to 33kV system voltage",
          "Primary current rating up to 10,000 Amps",
          "For up to 40 kA 3 seconds STC rating",
          "BIL 170kVp insulation level",
          "Special accuracy classes available"
        ],
        specifications: [
          { name: "System Voltage", value: "Up to 33kV" },
          { name: "Primary Current", value: "Up to 10,000 Amps" },
          { name: "Secondary Current", value: "1A or 5A" },
          { name: "Type", value: "Wound type, bar type or window type" },
          { name: "STC Rating", value: "Up to 40 kA for 3 seconds" },
          { name: "Insulation Level", value: "BIL 170kVp" },
          { name: "Frequency", value: "50-60 Hz" },
          { name: "Accuracy Class", value: "Special classes: PS/PX, PR, TPS, TPX, TPY, TPZ" }
        ],
        description: `
          <p>Indoor and outdoor resin cast current transformers designed for medium voltage applications up to 33kV. These transformers feature robust construction and reliable performance.</p>
        `,
        applications: [
          "Switchgear installations",
          "Metering panels",
          "Protection systems"
        ],
        standards: ["IEC 61869", "IS 2705"],
        downloads: [
          {
            name: "Technical Specification",
            type: "PDF",
            size: "1.5 MB",
            url: "/downloads/mv-ct-spec.pdf",
          }
        ],
      },
      {
        id: "4",
        name: "Resin Cast Voltage Transformer",
        type: "Medium Voltage Instruments Transformers",
        voltage: "Up to 33KV",
        image: "/images/indoor.png",
        gallery: [
          "/images/indoor.png",
          "/images/indoor.png",
          "/images/indoor/image.png",
        ],
        features: [
          "Different ratios with primary rating up to 33kV",
          "Single (Line to earth) or dual pole (Line to Line)",
          "Can be supplied with or without fuse",
          "Multi winding with open delta winding",
          "1.9 times continuous voltage factor"
        ],
        specifications: [
          { name: "Primary Voltage", value: "Up to 33kV" },
          { name: "Configuration", value: "Single or dual pole" },
          { name: "Fuse Option", value: "With or without fuse" },
          { name: "Multi Winding", value: "Open delta winding possible" },
          { name: "Voltage Factor", value: "1.9 times continuous" },
          { name: "Insulation Level", value: "BIL 170kVp" },
          { name: "Frequency", value: "50-60 Hz" }
        ],
        description: `
          <p>Resin cast voltage transformers designed for medium voltage applications up to 33kV. These transformers offer flexible configuration options to meet various system requirements.</p>
        `,
        applications: [
          "Voltage measurement",
          "Protection systems",
          "Synchronization circuits"
        ],
        standards: ["IEC 61869", "IS 3156"],
        downloads: [
          {
            name: "Installation Guide",
            type: "PDF",
            size: "2.0 MB",
            url: "/downloads/vt-install.pdf",
          }
        ],
      },
      {
        id: "5",
        name: "Oil Cooled CT-PT Meter Unit",
        type: "Oil Cooled Units",
        voltage: "Up to 33KV",
        image: "/images/Oil_Cooled.png",
        gallery: [
          "/images/Oil_Cooled.png",
          "/images/Oil_Cooled.png",
          "/images/Oil_Cooled.png",
        ],
        features: [
          "Different ratios with primary rating up to 6000 Amps",
          "Dead tank or Live tank type",
          "For up to 40 kA 3 seconds STC rating",
          "Secondary terminals in IP63 terminal box",
          "Copper/Aluminum primary terminals"
        ],
        specifications: [
          { name: "Primary Current", value: "Up to 6000 Amps" },
          { name: "Type", value: "Dead tank or Live tank" },
          { name: "STC Rating", value: "Up to 40 kA for 3 seconds" },
          { name: "Terminal Protection", value: "IP63 terminal box" },
          { name: "Primary Terminals", value: "Copper rod/bar" },
          { name: "Insulation Level", value: "BIL 170kVp" },
          { name: "Frequency", value: "50-60 Hz" }
        ],
        description: `
          <p>Oil cooled CT-PT meter units designed for reliable measurement in medium voltage systems up to 33kV. These combined units provide comprehensive measurement capabilities.</p>
        `,
        applications: [
          "Substation metering",
          "Energy monitoring",
          "Distribution systems"
        ],
        standards: ["IEC 61869", "IS 2705", "IS 3156"],
        downloads: [
          {
            name: "Product Brochure",
            type: "PDF",
            size: "1.8 MB",
            url: "/downloads/ctpt-brochure.pdf",
          }
        ],
      },
      {
        id: "6",
        name: "Epoxy Insulators",
        type: "Epoxy Components",
        voltage: "Up to 33KV",
        image: "/images/Epoxy.png",
        gallery: [
          "/images/Epoxy.png",
          "/images/Epoxy.png",
          "/images/Epoxy.png",
        ],
        features: [
          "LV and MV insulators",
          "Bushings for panel and outdoor applications",
          "MV wall through bushings",
          "Spouts and bus bar supports",
          "Copper/Aluminum/Brass contacts"
        ],
        specifications: [
          { name: "Voltage Rating", value: "Up to 33kV" },
          { name: "Types", value: "LV insulators, MV insulators, Bushings, Spouts" },
          { name: "Contact Material", value: "Copper, Aluminum, Brass" },
          { name: "Application", value: "Panel applications, Outdoor applications" }
        ],
        description: `
          <p>High-quality epoxy insulation components designed for various electrical applications up to 33kV. These components provide reliable insulation and support.</p>
        `,
        applications: [
          "Switchgear insulation",
          "Transformer bushings",
          "Busbar supports"
        ],
        standards: ["IEC 60243", "IS 2544"],
        downloads: [
          {
            name: "Product Catalog",
            type: "PDF",
            size: "2.5 MB",
            url: "/downloads/epoxy-catalog.pdf",
          }
        ],
      },
      {
        id: "7",
        name: "Distribution Transformers",
        type: "Power Transformers",
        voltage: "Up to 33KV",
        image: "/images/Distribution.png",
        gallery: [
          "/images/Distribution.png",
          "/images/Distribution.png",
          "/images/Distribution.png",
        ],
        features: [
          "10KVA to 5MVA capacity",
          "Off-load and On-load options",
          "Copper/Aluminum windings",
          "Dyn11, Dyn5, Dyn1 vector groups",
          "Designed for minimum 25 years operation"
        ],
        specifications: [
          { name: "Capacity", value: "10KVA to 5000KVA (5MVA)" },
          { name: "Voltage Class", value: "3.3kV, 6.6kV, 11kV, 22kV, 33kV" },
          { name: "Type", value: "Off-load or On-load" },
          { name: "Vector Group", value: "Dyn11, Dyn5, Dyn1 or custom" },
          { name: "Frequency", value: "50/60 Hz" },
          { name: "Tap Range", value: "±7.5% or ±5% in 2.5% steps" },
          { name: "Winding Material", value: "Copper/Aluminum with multiple paper covering" },
          { name: "Efficiency", value: "Complies with BIS-1180 loss levels" }
        ],
        description: `
          <p>Distribution transformers providing the final voltage transformation in electric power distribution systems. Designed for minimum 25 years of operation with negligible maintenance.</p>
          <p>Available in both off-load and on-load variants to suit different operational requirements.</p>
        `,
        applications: [
          "Hotels & Resorts",
          "Hospitals",
          "Pharmaceutical industries",
          "Automobile industry",
          "Mining industry"
        ],
        standards: ["BIS-1180", "IS-2026", "IEC 60076"],
        downloads: [
          {
            name: "Technical Manual",
            type: "PDF",
            size: "3.2 MB",
            url: "/downloads/transformer-manual.pdf",
          }
        ],
      }
    ];

    const foundProduct = products.find((p) => p.id === route.params.id);

    if (!foundProduct) {
      throw new Error("Product not found");
    }

    product.value = foundProduct;
    currentImage.value = foundProduct.image;

    // Filter related products by type
    relatedProducts.value = products.filter(p => 
      p.type === foundProduct.type && p.id !== foundProduct.id
    ).slice(0, 3);
  } catch (err) {
    error.value = err.message;
    product.value = null;
  } finally {
    isLoading.value = false;
  }
};

// Retry loading if there was an error
const retryLoading = () => {
  fetchProduct();
};

// Download brochure handler
const downloadBrochure = () => {
  if (product.value?.downloads?.length) {
    // In a real app, you would trigger the first download or show a download dialog
    window.open(product.value.downloads[0].url, "_blank");
  }
};

// Navigate to product
const navigateToProduct = (id) => {
  router.push(`/products/${id}`);
};

// Fetch product on mount
onMounted(fetchProduct);

// Watch for route changes
watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      fetchProduct();
    }
  }
);
</script>

<style scoped>
/* Loading State */
.loading-state {
  padding: 4rem 0;
  text-align: center;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.spinner {
  width: 50px;
  height: 50px;
  animation: rotate 2s linear infinite;
}

.spinner .path {
  stroke: #3498db;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

/* Error State */
.error-state {
  padding: 4rem 0;
  text-align: center;
}

.error-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.error-icon {
  width: 60px;
  height: 60px;
  fill: #e74c3c;
}

.btn-retry {
  padding: 0.75rem 1.5rem;
  background: #3498db;
  color: white;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-retry:hover {
  background: #2980b9;
}

/* Not Found State */
.not-found-state {
  padding: 4rem 0;
  text-align: center;
}

.not-found-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.not-found-icon {
  width: 60px;
  height: 60px;
  fill: #f39c12;
}

.btn-back {
  padding: 0.75rem 1.5rem;
  background: #3498db;
  color: white;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
}

.btn-back:hover {
  background: #2980b9;
}

/* Thumbnail active state */
.thumbnail.active {
  border: 2px solid #3498db;
}
.product-detail-page {
  display: flex;
  flex-direction: column;
}

/* Breadcrumb */
.breadcrumb {
  background: #f8fafc;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
}

.breadcrumb .container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.breadcrumb-link {
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
}

.breadcrumb-link:hover {
  text-decoration: underline;
}

.breadcrumb-separator {
  color: #7f8c8d;
}

.breadcrumb-current {
  color: #2c3e50;
  font-weight: 500;
}

/* Container */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Product Main Section */
.product-main {
  padding: 3rem 0;
}

.product-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

/* Product Images */
.product-images {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.main-image {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.main-image img {
  width: 100%;
  height: auto;
  display: block;
}

.thumbnail-gallery {
  display: flex;
  gap: 1rem;
}

.thumbnail {
  width: 80px;
  height: 80px;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s;
}

.thumbnail:hover {
  border-color: #3498db;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Product Info */
.product-info {
  display: flex;
  flex-direction: column;
}

.product-title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.product-meta {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.product-type,
.product-voltage {
  font-size: 0.9rem;
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

.product-divider {
  height: 2px;
  background: linear-gradient(to right, #3498db, #2ecc71);
  width: 80px;
  margin: 1rem 0;
}

.product-highlights {
  margin-bottom: 2rem;
}

.product-highlights h3 {
  font-size: 1.25rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.highlight-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.highlight-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  color: #2c3e50;
}

.highlight-icon {
  width: 20px;
  height: 20px;
  fill: #2ecc71;
}

.product-actions {
  display: flex;
  gap: 1rem;
  margin-top: auto;
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

.btn-secondary {
  background: white;
  color: #3498db;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #3498db;
  cursor: pointer;
}

.btn-secondary:hover {
  background: #f8fafc;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

/* Product Tabs */
.product-tabs {
  padding: 3rem 0;
  background: #f8fafc;
}

.tabs-header {
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 2rem;
}

.tab-button {
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  color: #7f8c8d;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
}

.tab-button:hover {
  color: #3498db;
}

.tab-button.active {
  color: #3498db;
}

.tab-button.active::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(to right, #3498db, #2ecc71);
}

.tab-panel {
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

/* Specifications Tab */
.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.spec-item {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.spec-name {
  color: #7f8c8d;
  font-weight: 500;
}

.spec-value {
  color: #2c3e50;
  font-weight: 600;
}

/* Description Tab */
.description-content {
  line-height: 1.8;
  color: #2c3e50;
}

.description-content p {
  margin-bottom: 1rem;
}

/* Applications Tab */
.applications-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}

.applications-list li {
  padding: 0.5rem 0;
  color: #2c3e50;
  position: relative;
  padding-left: 1.5rem;
}

.applications-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 1rem;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #3498db;
}

.standards-section {
  margin-top: 2rem;
}

.standards-section h3 {
  font-size: 1.25rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.standards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.standard-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #f8fafc;
  border-radius: 6px;
}

.standard-icon {
  width: 30px;
  height: 30px;
  background: linear-gradient(to right, #3498db, #2ecc71);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.standard-icon svg {
  width: 16px;
  height: 16px;
  fill: white;
}

.standard-name {
  color: #2c3e50;
  font-weight: 500;
}

/* Downloads Tab */
.downloads-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.download-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 6px;
  transition: all 0.3s;
}

.download-item:hover {
  border-color: #3498db;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.download-icon {
  width: 40px;
  height: 40px;
  background: #f8fafc;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.download-icon svg {
  width: 20px;
  height: 20px;
  fill: #3498db;
}

.download-info {
  flex: 1;
}

.download-name {
  font-weight: 500;
  color: #2c3e50;
  margin-bottom: 0.25rem;
}

.download-meta {
  font-size: 0.8rem;
  color: #7f8c8d;
}

.download-button {
  padding: 0.5rem 1rem;
  background: #3498db;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s;
}

.download-button:hover {
  background: #2980b9;
}

/* Related Products */
.related-products {
  padding: 3rem 0;
  background: white;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(to right, #3498db, #2ecc71);
  border-radius: 3px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  .product-container {
    grid-template-columns: 1fr;
  }

  .product-images {
    order: 1;
  }

  .product-info {
    order: 2;
  }

  .tabs-header {
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
  }
}

@media (max-width: 768px) {
  .product-title {
    font-size: 1.75rem;
  }

  .product-actions {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    text-align: center;
  }
}
</style>