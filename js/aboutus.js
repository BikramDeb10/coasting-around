/* =========================
   STORY GALLERY DATA
========================= */

const storyImages = [
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
  },

  {
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
  },

  {
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop",
  },

  {
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop",
  },

  {
    image:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=1200&auto=format&fit=crop",
  },

  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },
];

/* =========================
   RENDER SLIDES
========================= */

const storyGallery = document.getElementById("storyGallery");

storyImages.forEach((item) => {
  storyGallery.innerHTML += `
    
    <div class="swiper-slide">
      <img src="${item.image}" alt="story image">
    </div>

  `;
});

/* =========================
   SWIPER
========================= */

new Swiper(".ourStorySwiper", {
  slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  speed: 1000,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    600: {
      slidesPerView: 2,
    },

    992: {
      slidesPerView: 4,
    },
  },
});
