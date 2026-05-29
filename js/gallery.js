const galleryItems = document.querySelectorAll(".gallery-page-item");

const lightbox = document.querySelector(".gallery-lightbox");
const lightboxImage = document.querySelector(".lightbox-image");

const closeBtn = document.querySelector(".lightbox-close");
const nextBtn = document.querySelector(".lightbox-next");
const prevBtn = document.querySelector(".lightbox-prev");

let currentIndex = 0;

/* ALL IMAGES */

const images = [];

galleryItems.forEach((item) => {
  const img = item.querySelector("img");

  images.push(img.src);
});

/* OPEN LIGHTBOX */

galleryItems.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    currentIndex = index;

    showImage();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
  });
});

/* SHOW IMAGE */

function showImage() {
  lightboxImage.src = images[currentIndex];
}

/* CLOSE */

function closeLightbox() {
  lightbox.classList.remove("active");

  document.body.style.overflow = "auto";
}

closeBtn.addEventListener("click", closeLightbox);

/* CLICK OUTSIDE CLOSE */

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

/* NEXT */

nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  showImage();
});

/* PREVIOUS */

prevBtn.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  showImage();
});

/* KEYBOARD SUPPORT */

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;

  if (e.key === "Escape") {
    closeLightbox();
  }

  if (e.key === "ArrowRight") {
    nextBtn.click();
  }

  if (e.key === "ArrowLeft") {
    prevBtn.click();
  }
});
