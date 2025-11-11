<template>
  <header class="header" :class="{ active: isMenuOpen }">
    <div class="container">
      <!-- Logo -->
      <div class="logo">
        <NuxtLink to="/">
          <img class="h-10 w-auto" src="/images/logo1.png" alt="TVoltTech Logo" />
        </NuxtLink>
      </div>

      <!-- Navigation -->
      <nav class="nav" :class="{ active: isMenuOpen }">
        <ul class="nav-list">
          <li class="nav-item" @click="closeMenu">
            <NuxtLink to="/" class="nav-link" active-class="active-link">Home</NuxtLink>
          </li>
          <li class="nav-item" @click="closeMenu">
            <NuxtLink to="/about" class="nav-link" active-class="active-link">About</NuxtLink>
          </li>

          <!-- Products Dropdown -->
          <li
            class="nav-item dropdown"
            style="margin-top: 4px;"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
          >
            <button
              class="nav-link dropdown-toggle"
              @click="toggleDropdown"
            >
              Products
              <svg class="dropdown-icon" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>

            <transition name="dropdown">
              <ul v-if="showDropdown" class="dropdown-menu">
                <li class="dropdown-item" @click="closeMenu">
                  <NuxtLink to="/products/1" class="dropdown-link">Low Tension Instruments</NuxtLink>
                </li>
                <li class="dropdown-item" @click="closeMenu">
                  <NuxtLink to="/products/3" class="dropdown-link">Medium Voltage Instruments</NuxtLink>
                </li>
                <li class="dropdown-item" @click="closeMenu">
                  <NuxtLink to="/products/5" class="dropdown-link">Oil Cooled Units</NuxtLink>
                </li>
                <li class="dropdown-item" @click="closeMenu">
                  <NuxtLink to="/products/6" class="dropdown-link">Epoxy Components</NuxtLink>
                </li>
                <li class="dropdown-item" @click="closeMenu">
                  <NuxtLink to="/products/7" class="dropdown-link">Distribution Transformers</NuxtLink>
                </li>
              </ul>
            </transition>
          </li>

          <li class="nav-item" @click="closeMenu">
            <NuxtLink to="/contact" class="nav-link" active-class="active-link">Contact</NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- CTA -->
      <div class="cta-button">
        <a href="/brochure.pdf" download class="btn-primary">Get a Quote</a>
      </div>

      <!-- Mobile Menu Toggle -->
      <button class="mobile-menu-button" @click="toggleMenu" :aria-expanded="isMenuOpen">
        <span class="menu-line"></span>
        <span class="menu-line"></span>
        <span class="menu-line"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
const isMenuOpen = ref(false);
const showDropdown = ref(false);
const isDesktop = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.classList.toggle("no-scroll", isMenuOpen.value);
  if (!isMenuOpen.value) showDropdown.value = false;
};

const closeMenu = () => {
  isMenuOpen.value = false;
  showDropdown.value = false;
  document.body.classList.remove("no-scroll");
};

const handleMouseEnter = () => {
  if (isDesktop.value) showDropdown.value = true;
};

const handleMouseLeave = () => {
  if (isDesktop.value) showDropdown.value = false;
};

const toggleDropdown = () => {
  if (!isDesktop.value) showDropdown.value = !showDropdown.value;
};

// detect desktop / mobile width
const checkScreen = () => {
  isDesktop.value = window.innerWidth > 1024;
  if (isDesktop.value) showDropdown.value = false;
};

onMounted(() => {
  checkScreen();
  window.addEventListener("resize", checkScreen);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreen);
});
</script>
  <style scoped>
  .header {
    background: linear-gradient(135deg, #1a2a3a 0%, #2c3e50 100%);
    color: white;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .logo a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
  }

  .logo-text {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    background: linear-gradient(to right, #3498db, #2ecc71);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .nav {
    display: flex;
    align-items: center;
  }

  .nav-list {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-item {
    position: relative;
  }

  .nav-link {
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    padding: 0.5rem 0;
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    transition: color 0.3s;
  }

  .nav-link:hover {
    color: #3498db;
  }

  .active-link {
    color: #3498db;
    font-weight: 600;
  }

  .active-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #3498db;
    border-radius: 2px;
  }

  .dropdown-icon {
    width: 16px;
    height: 16px;
    fill: currentColor;
    transition: transform 0.3s;
  }

  .dropdown:hover .dropdown-icon {
    transform: rotate(180deg);
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    min-width: 300px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    padding: 0.5rem 0;
    list-style: none;
    margin: 0;
    z-index: 100;
    overflow: hidden;
  }

  .dropdown-item {
    transition: background 0.2s;
  }

  .dropdown-item:hover {
    background: #f5f7fa;
  }

  .dropdown-link {
    display: block;
    padding: 0.75rem 1.5rem;
    color: #2c3e50;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
  }

  .dropdown-link:hover {
    color: #3498db;
  }

  .cta-button {
    margin-left: 2rem;
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
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  .mobile-menu-button {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    z-index: 1001;
  }

  .menu-line {
    display: block;
    width: 24px;
    height: 2px;
    background: white;
    margin: 5px 0;
    transition: all 0.3s;
  }

  /* Dropdown animation */
  .dropdown-enter-active,
  .dropdown-leave-active {
    transition: all 0.3s ease;
  }

  .dropdown-enter-from,
  .dropdown-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }

  /* Mobile styles */
  @media (max-width: 1024px) {
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(26, 42, 58, 0.95);
      backdrop-filter: blur(5px);
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      z-index: 1000;
    }

    .nav.active {
      transform: translateX(0);
    }

    .nav-list {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    .nav-item {
      text-align: center;
    }

    .dropdown-menu {
      position: static;
      background: transparent;
      box-shadow: none;
      padding: 0;
      margin-top: 1rem;
    }

    .dropdown-link {
      color: white;
      padding: 0.5rem 0;
    }

    .dropdown-item:hover {
      background: transparent;
    }

    .cta-button {
      margin-left: 0;
      margin-top: 2rem;
    }

    .mobile-menu-button {
      display: block;
    }

    .header.active .menu-line:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }

    .header.active .menu-line:nth-child(2) {
      opacity: 0;
    }

    .header.active .menu-line:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }

    .no-scroll {
      overflow: hidden;
    }
  }
  .logo img {
    height: 48px;
    width: auto;
  }

.dropdown-toggle {
  background: none;
  border: none;
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
}

.dropdown-toggle:hover {
  color: #3498db;
}

/* Responsive dropdown improvement */
@media (max-width: 1024px) {
  .dropdown-menu {
    position: static;
    background: none;
    box-shadow: none;
    padding: 0;
    margin-top: 0.5rem;
    text-align: center;
  }

  .dropdown-link {
    color: white;
    display: block;
    padding: 0.5rem 0;
  }

  .dropdown-link:hover {
    color: #3498db;
  }

  .dropdown-toggle svg {
    transition: transform 0.3s;
  }

  .dropdown-menu-enter-active,
  .dropdown-menu-leave-active {
    transition: all 0.3s ease;
  }
}
  </style>