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

/* =========================
   STICKY MODERN NAVBAR
========================= */

const navbar = document.querySelector(".navbar");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  /* ADD SCROLLED STYLE */

  if (currentScroll > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  /* HIDE / SHOW NAVBAR */

  if (currentScroll > lastScroll && currentScroll > 120) {
    navbar.classList.add("hide-nav");

    navbar.classList.remove("show-nav");
  } else {
    navbar.classList.remove("hide-nav");

    navbar.classList.add("show-nav");
  }

  lastScroll = currentScroll;
});

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

if (packagesGrid) {
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
}
/* SWIPER */

if (document.querySelector(".packagesSwiper")) {
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
}

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

/* =========================
   RENDER TESTIMONIALS
========================= */

const testimonialTrack = document.getElementById("testimonialTrack");

if (testimonialTrack) {
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

  const testimonialCardsHTML = testimonialTrack.innerHTML;

  testimonialTrack.innerHTML += testimonialCardsHTML;

  function updateTestimonials(animate = true) {
    const cards = document.querySelectorAll(".testimonial-card");

    if (!cards.length) return;

    const gap = 28;

    const cardWidth = cards[0].offsetWidth + gap;

    gsap.to(testimonialTrack, {
      x: -(testimonialIndex * cardWidth),
      duration: animate ? 1 : 0,
      ease: "power3.inOut",
    });

    cards.forEach((card) => {
      card.classList.remove("active");
    });

    const activeCard = cards[testimonialIndex];

    if (activeCard) {
      activeCard.classList.add("active");
    }
  }

  function nextSlide() {
    const originalLength = testimonials.length;

    testimonialIndex++;

    updateTestimonials(true);

    if (testimonialIndex >= originalLength) {
      setTimeout(() => {
        testimonialIndex = 0;

        updateTestimonials(false);
      }, 1000);
    }
  }

  function prevSlide() {
    const originalLength = testimonials.length;

    if (testimonialIndex <= 0) {
      testimonialIndex = originalLength;

      updateTestimonials(false);
    }

    testimonialIndex--;

    updateTestimonials(true);
  }

  function startAutoSlide() {
    stopAutoSlide();

    autoSlide = setInterval(() => {
      nextSlide();
    }, 3500);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  if (testimonialNext) {
    testimonialNext.addEventListener("click", () => {
      nextSlide();
      startAutoSlide();
    });
  }

  if (testimonialPrev) {
    testimonialPrev.addEventListener("click", () => {
      prevSlide();
      startAutoSlide();
    });
  }

  testimonialTrack.addEventListener("mouseenter", stopAutoSlide);

  testimonialTrack.addEventListener("mouseleave", startAutoSlide);

  window.addEventListener("resize", () => {
    updateTestimonials(false);
  });

  updateTestimonials(false);

  startAutoSlide();
}
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

if (faqContainer) {
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
}
