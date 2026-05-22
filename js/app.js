const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");

if (menuToggle && mobileMenu && closeMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
}

const packages = [
  {
    duration: "1 Hour",
    title: "Quick Escape",
    price: "$149",
    desc: "Perfect short luxury ride for couples and sunset moments.",
    features: [
      "Bluetooth Speaker",
      "Ice Box Included",
      "2-4 Guests",
      "No License Needed",
    ],
  },

  {
    duration: "2 Hours",
    title: "Coastal Cruise",
    price: "$249",
    desc: "Relax and explore beautiful coastal waterways in style.",
    features: [
      "BBQ Setup",
      "Luxury Seating",
      "Up To 6 Guests",
      "Sunset Experience",
    ],
  },

  {
    duration: "3 Hours",
    title: "Premium Journey",
    price: "$349",
    desc: "The perfect balance of luxury and freedom.",
    features: [
      "Premium Sound",
      "BBQ Included",
      "Up To 8 Guests",
      "Photo Spots",
    ],
    featured: true,
  },

  {
    duration: "4 Hours",
    title: "Luxury Explorer",
    price: "$449",
    desc: "Long unforgettable luxury self-drive boat adventure.",
    features: [
      "Luxury Dining",
      "Extended Cruise",
      "Family Friendly",
      "Premium Comfort",
    ],
  },

  {
    duration: "6 Hours",
    title: "Ultimate Experience",
    price: "$699",
    desc: "Full luxury coastal experience with complete freedom.",
    features: [
      "All Premium Features",
      "Up To 10 Guests",
      "Luxury Lifestyle",
      "Full-Day Adventure",
    ],
  },
];

const packagesGrid = document.getElementById("packagesGrid");

packages.forEach((pkg) => {
  const slide = document.createElement("div");

  slide.className = "swiper-slide";

  slide.innerHTML = `
  
    <div class="package-card ${pkg.featured ? "featured" : ""}">
      
      ${pkg.featured ? `<div class="package-badge">MOST POPULAR</div>` : ""}

      <span class="package-duration">${pkg.duration}</span>

      <h3>${pkg.title}</h3>

      <div class="package-price">
        ${pkg.price}
        <span>/ package</span>
      </div>

      <p class="package-desc">
        ${pkg.desc}
      </p>

      <ul class="package-features">
        ${pkg.features
          .map(
            (feature) => `
              <li>
                <i class="ri-check-line"></i>
                ${feature}
              </li>
            `,
          )
          .join("")}
      </ul>

      <a href="#" class="package-btn">
        Book This Package
      </a>
    </div>
  `;

  packagesGrid.appendChild(slide);
});

/* SWIPER */

const swiper = new Swiper(".packagesSwiper", {
  slidesPerView: 1.1,
  spaceBetween: 28,

  loop: false,
  speed: 900,
  centeredSlides: false,

  navigation: {
    nextEl: ".package-next",
    prevEl: ".package-prev",
  },

  breakpoints: {
    640: {
      slidesPerView: 1.4,
    },

    900: {
      slidesPerView: 2.2,
    },

    1200: {
      slidesPerView: 3.4,
    },
  },
});

/* =========================
   GALLERY DATA
========================= */

const galleryItems = [
  {
    image:
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1600&auto=format&fit=crop",
    title: "Luxury Cruise",
    className: "large",
  },

  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    title: "Ocean Escape",
    className: "",
  },

  {
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
    title: "Sunset Moments",
    className: "tall",
  },

  {
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop",
    title: "Premium Lifestyle",
    className: "",
  },

  {
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1600&auto=format&fit=crop",
    title: "Adventure On Water",
    className: "wide",
  },
];

/* =========================
   RENDER GALLERY
========================= */

const galleryGrid = document.getElementById("galleryGrid");

galleryItems.forEach((item) => {
  const galleryCard = document.createElement("div");

  galleryCard.className = `gallery-item ${item.className}`;

  galleryCard.innerHTML = `
    
      <img
        src="${item.image}"
        alt="${item.title}"
      />

      <div class="gallery-overlay">
        <span>${item.title}</span>
      </div>
    
  `;

  galleryGrid.appendChild(galleryCard);
});

/* =========================
   HOW IT WORKS DATA
========================= */

const howItWorks = [
  {
    step: "01",
    icon: "ri-ship-line",
    title: "Choose Package",
    desc: "Select your preferred luxury self-drive boat package based on duration, guests, and experience style.",
  },

  {
    step: "02",
    icon: "ri-calendar-check-line",
    title: "Book Online",
    desc: "Secure your booking online in minutes with our easy reservation process and instant confirmation.",
  },

  {
    step: "03",
    icon: "ri-sailboat-line",
    title: "Enjoy Your Cruise",
    desc: "Arrive, get a quick safety briefing, and enjoy an unforgettable luxury cruise across coastal waters.",
  },
];

const howGrid = document.getElementById("howGrid");

howItWorks.forEach((item) => {
  const card = document.createElement("div");

  card.className = "how-card";

  card.innerHTML = `
  
    <span class="how-step">${item.step}</span>

    <div class="how-icon">
      <i class="${item.icon}"></i>
    </div>

    <h3>${item.title}</h3>

    <p>
      ${item.desc}
    </p>
  `;

  howGrid.appendChild(card);
});
