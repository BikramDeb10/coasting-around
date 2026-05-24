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

/* =========================
   HOW IT WORKS ANIMATION
========================= */

const howCards = document.querySelectorAll(".how-card");
const howSection = document.querySelector(".how-grid");

/* PROGRESS LINE CREATE */

const progressLine = document.createElement("div");
progressLine.classList.add("how-progress-line");

howSection.appendChild(progressLine);

let activeIndex = 0;

function animateSteps() {
  howCards.forEach((card) => {
    card.classList.remove("active");
  });

  howCards[activeIndex].classList.add("active");

  /* LINE WIDTH */

  if (activeIndex === 0) {
    progressLine.style.width = "18%";
  }

  if (activeIndex === 1) {
    progressLine.style.width = "50%";
  }

  if (activeIndex === 2) {
    progressLine.style.width = "80%";
  }

  activeIndex++;

  if (activeIndex >= howCards.length) {
    activeIndex = 0;
  }
}

/* START */

animateSteps();

setInterval(animateSteps, 2200);

/* =========================
   TESTIMONIAL DATA
========================= */

const testimonials = [
  {
    name: "Olivia Carter",
    role: "Luxury Traveler",
    image: "https://randomuser.me/api/portraits/women/44.jpg",

    review:
      "Absolutely unforgettable experience. The boat was luxurious, easy to drive, and the sunset views across the Gold Coast were breathtaking.",

    rating: 5,
  },

  {
    name: "Daniel Smith",
    role: "Family Trip",
    image: "https://randomuser.me/api/portraits/men/32.jpg",

    review:
      "Everything was perfectly organized. My family loved the BBQ setup and premium sound system onboard. Highly recommended experience.",

    rating: 5,
  },

  {
    name: "Sophia Williams",
    role: "Couples Escape",
    image: "https://randomuser.me/api/portraits/women/68.jpg",

    review:
      "One of the most relaxing luxury experiences we've had. Smooth booking process and an amazing self-drive adventure.",

    rating: 5,
  },

  {
    name: "James Anderson",
    role: "Adventure Guest",
    image: "https://randomuser.me/api/portraits/men/76.jpg",

    review:
      "The boat was super modern and beginner friendly. Coastal routes were stunning and the entire journey felt premium.",

    rating: 5,
  },

  {
    name: "Emily Johnson",
    role: "Weekend Cruise",
    image: "https://randomuser.me/api/portraits/women/90.jpg",

    review:
      "Beautiful experience from start to finish. The atmosphere, music system, and luxury vibe made our day unforgettable.",

    rating: 5,
  },
];

/* =========================
   RENDER TESTIMONIALS
========================= */

const testimonialTrack = document.getElementById("testimonialTrack");

testimonials.forEach((item, index) => {
  const card = document.createElement("div");

  card.className = `testimonial-card ${index === 1 ? "active" : ""}`;

  card.innerHTML = `
  
    <div class="testimonial-quote">
      <i class="ri-double-quotes-r"></i>
    </div>

    <div class="testimonial-user">
      <img src="${item.image}" alt="${item.name}" />

      <div class="testimonial-user-info">
        <h4>${item.name}</h4>
        <span>${item.role}</span>
      </div>
    </div>

    <p class="testimonial-text">
      ${item.review}
    </p>

    <div class="testimonial-rating">
      ${Array(item.rating)
        .fill()
        .map(() => `<i class="ri-star-fill"></i>`)
        .join("")}
    </div>
  
  `;

  testimonialTrack.appendChild(card);
});
/* =========================
   TESTIMONIAL INFINITE SLIDER
========================= */

const testimonialPrev = document.querySelector(".testimonial-prev");
const testimonialNext = document.querySelector(".testimonial-next");

let testimonialIndex = 0;
let autoSlide;

/* DUPLICATE CARDS FOR INFINITE LOOP */

const testimonialCardsHTML = testimonialTrack.innerHTML;

/* duplicate */
testimonialTrack.innerHTML += testimonialCardsHTML;

/* visible cards */

function getVisibleCards() {
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 1100) return 2;
  return 3;
}

/* UPDATE */

function updateTestimonials(animate = true) {
  const cards = document.querySelectorAll(".testimonial-card");

  const gap = 28;

  const cardWidth = cards[0].offsetWidth + gap;

  gsap.to(testimonialTrack, {
    x: -(testimonialIndex * cardWidth),
    duration: animate ? 1 : 0,
    ease: "power3.inOut",
  });

  /* ACTIVE CARD */

  cards.forEach((card) => {
    card.classList.remove("active");
  });

  const activeCard = cards[testimonialIndex];

  if (activeCard) {
    activeCard.classList.add("active");
  }
}

/* NEXT */

function nextSlide() {
  const originalLength = testimonials.length;

  testimonialIndex++;

  updateTestimonials(true);

  /* RESET WITHOUT JUMP */

  if (testimonialIndex >= originalLength) {
    setTimeout(() => {
      testimonialIndex = 0;

      updateTestimonials(false);
    }, 1000);
  }
}

/* PREV */

function prevSlide() {
  const originalLength = testimonials.length;

  if (testimonialIndex <= 0) {
    testimonialIndex = originalLength;

    updateTestimonials(false);
  }

  testimonialIndex--;

  updateTestimonials(true);
}

/* AUTO */

function startAutoSlide() {
  stopAutoSlide();

  autoSlide = setInterval(() => {
    nextSlide();
  }, 3500);
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

/* BUTTONS */

testimonialNext.addEventListener("click", () => {
  nextSlide();
  startAutoSlide();
});

testimonialPrev.addEventListener("click", () => {
  prevSlide();
  startAutoSlide();
});

/* HOVER PAUSE */

testimonialTrack.addEventListener("mouseenter", stopAutoSlide);

testimonialTrack.addEventListener("mouseleave", startAutoSlide);

/* RESIZE */

window.addEventListener("resize", () => {
  updateTestimonials(false);
});

/* INIT */

updateTestimonials(false);
startAutoSlide();

/* =========================
   FAQ DATA
========================= */

const faqs = [
  {
    question: "Do I need a boat license?",
    answer:
      "No license is required. Our boats are beginner-friendly and we provide a full safety briefing before your cruise starts.",
  },

  {
    question: "How many people are allowed?",
    answer:
      "Our luxury self-drive boats can accommodate up to 10 guests comfortably depending on the selected package.",
  },

  {
    question: "What happens if the weather is bad?",
    answer:
      "If weather conditions are unsafe, we will help you reschedule your booking or provide alternative options.",
  },

  {
    question: "Can I bring food & drinks?",
    answer:
      "Yes. You are welcome to bring your own food and drinks. We also provide an ice box and BBQ setup on selected packages.",
  },
];

/* =========================
   RENDER FAQ
========================= */

const faqContainer = document.getElementById("faqContainer");

faqs.forEach((faq, index) => {
  const item = document.createElement("div");

  item.className = `faq-item ${index === 0 ? "active" : ""}`;

  item.innerHTML = `
    
    <div class="faq-question">
      
      <div class="faq-number">
        0${index + 1}
      </div>

      <h3>${faq.question}</h3>

      <div class="faq-icon">
        <i class="ri-add-line"></i>
      </div>

    </div>

    <div class="faq-answer">
      <p>${faq.answer}</p>
    </div>

  `;

  faqContainer.appendChild(item);
});

/* =========================
   FAQ ACCORDION
========================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    const activeItem = document.querySelector(".faq-item.active");

    if (activeItem && activeItem !== item) {
      activeItem.classList.remove("active");
    }

    item.classList.toggle("active");
  });
});
