/*
 * script.js
 * This file contains the main JavaScript logic for the Mokkos restaurant website,
 * including cart management, language switching, and UI interactions.
 */

// -- Firebase Configuration (REMOVED) --

// -- Global State Variables --
let currentLang = localStorage.getItem('lang') || 'ru';
let cart = JSON.parse(localStorage.getItem('cart')) || [];
// Removed: user, balance

// -- DOM Element References --
const preloader = document.getElementById('preloader');
const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartCount = document.querySelector('.cart-count');
const checkoutBtn = document.getElementById('checkout-btn');
const modalOverlay = document.getElementById('modal-overlay');
const categoryBtns = document.querySelectorAll('.category-btn');
const viewMenuBtn = document.getElementById('view-menu-btn');
const reserveBtn = document.getElementById('reserve-btn');
const floatingReserve = document.getElementById('floating-reserve');
const dishModal = document.getElementById('dish-modal');
const dishContent = document.getElementById('dish-content');
const closeDish = document.getElementById('close-dish');
const backToTop = document.getElementById('back-to-top');
// Removed: aiAssistantBtn

// -- Language Switching --

/**
 * Toggles the visibility of the language selection panel.
 */
function toggleLangPanel() {
  const langPanel = document.getElementById('lang-panel');
  langPanel.classList.toggle('open');
}

/**
 * Sets the application language and updates the UI.
 * @param {string} lang - The language code to set (e.g., 'ru', 'en', 'kk').
 */
function setLanguage(lang) {
  // Ensure translation data and menu functions are loaded before proceeding.
  if (typeof translations === 'undefined' || typeof displayMenuItems === 'undefined' || typeof displayBarMenu === 'undefined') {
    console.error("Menu data script (menu.js) has not loaded yet.");
    return;
  }
  if (!translations[lang]) return;

  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  // Translate elements with data-lang-key attribute
  document.querySelectorAll('[data-lang-key]').forEach(elem => {
    const key = elem.getAttribute('data-lang-key');
    if (translations[lang] && translations[lang][key]) {
      elem.innerHTML = translations[lang][key];
    }
  });

  // Translate placeholder text for input elements
  document.querySelectorAll('[data-lang-key-placeholder]').forEach(elem => {
    const key = elem.getAttribute('data-lang-key-placeholder');
    const inputEl = document.getElementById(elem.id);
    if (translations[lang] && translations[lang][key] && inputEl) {
      inputEl.placeholder = translations[lang][key];
    }
  });

  // Update the active button in the language panel
  document.querySelectorAll('.lang-panel-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update the text in the language toggle button
  const currentLangText = document.getElementById('current-lang-text');
  if (currentLangText) {
    currentLangText.textContent = lang.toUpperCase();
  }


  // Re-render menu and bar with the new language
  const activeCategoryEl = document.querySelector('.category-btn.active');
  const activeCategory = activeCategoryEl ? activeCategoryEl.dataset.category : 'all';

  // Проверяем, существует ли функция, прежде чем вызывать ее
  if (typeof displayMenuItems === 'function') {
    displayMenuItems(lang, activeCategory);
  }
  if (typeof displayBarMenu === 'function') {
    displayBarMenu(lang);
  }

  // Update other UI components
  updateCart();
  // Removed: updateLoginButton();

  // Close the language panel after selection
  const langPanel = document.getElementById('lang-panel');
  if (langPanel.classList.contains('open')) {
    langPanel.classList.remove('open');
  }
}

// -- Cart Management --

/**
 * Adds a menu item to the shopping cart.
 * @param {Event} e - The click event from the 'Add to Cart' button.
 */
function addToCart(e) {
  const id = parseInt(e.target.dataset.id);
  const existingItem = cart.find(cartItem => cartItem.id === id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    // Убедимся, что menuData доступна
    if (typeof menuData === 'undefined') {
      console.error('menuData is not defined. Make sure menu.js is loaded correctly.');
      return;
    }
    const itemData = menuData.find(item => item.id === id);
    if (itemData) {
      cart.push({ ...itemData, quantity: 1 });
    } else {
      console.error(`Item with id ${id} not found in menuData.`);
      return;
    }
  }
  updateCart();
  showCartModal();
  // Trigger a bounce animation on the cart icon
  cartCount.classList.remove('bounce');
  void cartCount.offsetWidth; // Trigger reflow
  cartCount.classList.add('bounce');
}


/**
 * Updates the cart UI and saves the cart to localStorage.
 */
function updateCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  cartItems.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="empty-cart">${translations[currentLang]?.cart_empty_message || 'Ваша корзина пуста'}</p>`;
    cartTotalPrice.textContent = '0 ₸';
    cartCount.textContent = '0';
    return;
  }

  cart.forEach(item => {
    // Убедимся, что translations доступны
    if (typeof translations === 'undefined' || !translations.menu_items || !translations.menu_items[item.id]) {
      console.error('Translations object or menu_items not found.');
      return;
    }
    const itemTranslations = translations.menu_items[item.id][currentLang];
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <div class="cart-item-details">
        <div class="cart-item-title">${itemTranslations.title}</div>
        <div class="cart-item-price">${item.price} ₸ × ${item.quantity}</div>
      </div>
      <div class="cart-item-actions">
        <div class="cart-item-quantity">
          <button class="quantity-btn decrease" data-id="${item.id}">-</button>
          <span>${item.quantity}</span>
          <button class="quantity-btn increase" data-id="${item.id}">+</button>
        </div>
        <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
      </div>`;
    cartItems.appendChild(cartItem);
    total += item.price * item.quantity;
  });

  cartTotalPrice.textContent = `${total} ₸`;
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Re-attach event listeners for new cart item buttons
  document.querySelectorAll('.decrease').forEach(button => button.addEventListener('click', decreaseQuantity));
  document.querySelectorAll('.increase').forEach(button => button.addEventListener('click', increaseQuantity));
  document.querySelectorAll('.remove-item').forEach(button => button.addEventListener('click', removeItem));
}

/**
 * Decreases the quantity of an item in the cart.
 * @param {Event} e - The click event from the '-' button.
 */
function decreaseQuantity(e) {
  const id = parseInt(e.target.dataset.id);
  const item = cart.find(item => item.id === id);
  if (item.quantity > 1) {
    item.quantity--;
  } else {
    // Remove the item if quantity becomes 0
    cart = cart.filter(cartItem => cartItem.id !== id);
  }
  updateCart();
}

/**
 * Increases the quantity of an item in the cart.
 * @param {Event} e - The click event from the '+' button.
 */
function increaseQuantity(e) {
  const id = parseInt(e.target.dataset.id);
  const item = cart.find(item => item.id === id);
  item.quantity++;
  updateCart();
}

/**
 * Removes an item completely from the cart.
 * @param {Event} e - The click event from the trash icon button.
 */
function removeItem(e) {
  const id = parseInt(e.target.closest('.remove-item').dataset.id);
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

// -- Modal Visibility --

/**
 * Shows the cart modal and overlay.
 */
function showCartModal() {
  cartModal.classList.add('open');
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/**
 * Hides the cart modal and overlay if no other modals are open.
 */
function hideCartModal() {
  cartModal.classList.remove('open');
  // Removed login modal check
  if (!dishModal.classList.contains('open')) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

/**
 * Shows the dish details modal with information about the selected item.
 * @param {Event} e - The click event from the 'Details' button.
 */
function showDishDetails(e) {
  const id = parseInt(e.target.dataset.id);
  // Убедимся, что menuData доступна
  if (typeof menuData === 'undefined') {
    console.error('menuData is not defined.');
    return;
  }
  const item = menuData.find(item => item.id === id);
  const itemTranslations = translations.menu_items[item.id][currentLang];

  let ingredientsHTML = '';
  if (item.ingredients && item.ingredients.length > 0) {
    ingredientsHTML = `
      <div class="dish-ingredients">
        <h3>${translations[currentLang].dish_ingredients_title}</h3>
        <ul>${item.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
      </div>`;
  }

  dishContent.innerHTML = `
    <h2 class="dish-title">${itemTranslations.title}</h2>
    <div class="dish-price">${item.price} ₸</div>
    <p class="dish-description">${itemTranslations.desc}</p>
    ${ingredientsHTML}`;
  dishModal.classList.add('open');
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/**
 * Hides the dish details modal.
 */
function hideDishModal() {
  dishModal.classList.remove('open');
  // Removed login modal check
  if (!cartModal.classList.contains('open')) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Removed: showLoginModal, hideLoginModal, updateLoginButton, login, register

/**
 * Sets up all event listeners and initial UI states.
 */
function initializePage() {
  // Set initial language and UI state
  setLanguage(currentLang);
  updateCart();

  // Language panel event listeners
  document.getElementById('lang-toggle-btn').addEventListener('click', toggleLangPanel);
  document.getElementById('close-lang-panel').addEventListener('click', toggleLangPanel);
  document.querySelectorAll('.lang-panel-btn').forEach(btn => {
    btn.addEventListener('click', (e) => setLanguage(e.target.dataset.lang));
  });

  // Cart modal event listeners
  cartIcon.addEventListener('click', showCartModal);
  closeCart.addEventListener('click', hideCartModal);

  // Dish details modal event listeners
  closeDish.addEventListener('click', hideDishModal);

  // Removed: Login modal event listeners

  // Overlay click closes any open modal
  modalOverlay.addEventListener('click', () => {
    hideCartModal();
    hideDishModal();
    // Removed: hideLoginModal();
  });

  // Checkout button navigation
  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      alert(translations[currentLang].alert_cart_empty);
      return;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'Order.html';
  });

  // Scroll to menu button
  viewMenuBtn.addEventListener('click', () => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' }));

  // Reservation buttons navigation
  const makeReservation = () => window.location.href = 'reservation.html';
  reserveBtn.addEventListener('click', makeReservation);
  floatingReserve.addEventListener('click', makeReservation);

  // Back to top button
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Menu category filter buttons
  categoryBtns.forEach(btn => btn.addEventListener('click', (e) => {
    categoryBtns.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    displayMenuItems(currentLang, e.target.dataset.category);
  }));

  // Removed: Login/Register form submission
  // Removed: Balance display click action
  // Removed: AI Assistant button navigation

  // Function to trigger animations on scroll
  const initAnimations = () => {
    document.querySelectorAll('.gallery-item, .payment-card, .bar-item').forEach(item => {
      if (item.getBoundingClientRect().top < window.innerHeight * 0.9) {
        item.classList.add('animate');
      }
    });
  };

  // Scroll event listener for animations and back-to-top button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
    initAnimations();
  });

  // Initial animation check on page load
  initAnimations();

  // Hide the preloader now that everything is ready
  if (preloader) {
    preloader.classList.add('loaded');
  }
}


// -- Main Entry Point: DOMContentLoaded --
// Removed: auth.onAuthStateChanged
document.addEventListener('DOMContentLoaded', () => {
  // Ждем, пока menu.js (и translations) загрузится
  // Простая проверка, если translations еще не определены
  if (typeof translations === 'undefined' || typeof menuData === 'undefined') {
    // Попробуем еще раз через короткое время
    setTimeout(() => {
      if (typeof translations === 'undefined' || typeof menuData === 'undefined') {
        console.error("Failed to load menu.js data, retrying...");
        // Повторная попытка
        setTimeout(initializePage, 1000);
      } else {
        initializePage();
      }
    }, 500); // Даем 500ms на загрузку defer-скрипта
  } else {
    initializePage();
  }
});
