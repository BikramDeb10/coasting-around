// const storyImages = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
//   },
// ];

/* =========================
   RENDER SLIDES
========================= */

// const storyGallery = document.getElementById("storyGallery");

// storyImages.forEach((item) => {
//   storyGallery.innerHTML += `

//     <div class="swiper-slide">

//       <div class="story-image-wrap">

//         <img src="${item.image}" alt="story image">

//         <div class="story-image-overlay">
//           <i class="ri-search-eye-line"></i>
//         </div>

//       </div>

//     </div>

//   `;
// });

/* =========================
   SWIPER
========================= */

// new Swiper(".ourStorySwiper", {
//   slidesPerView: 4,
//   spaceBetween: 0,
//   loop: true,
//   speed: 1000,

//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: false,
//   },

//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },

//     600: {
//       slidesPerView: 2,
//     },

//     992: {
//       slidesPerView: 4,
//     },
//   },
// });

// const imagePopup = document.getElementById("imagePopup");

// const popupImage = document.getElementById("popupImage");

// const popupClose = document.getElementById("popupClose");

// document.querySelectorAll(".story-image-wrap").forEach((item) => {
//   item.addEventListener("click", () => {
//     const imageSrc = item.querySelector("img").src;

//     popupImage.src = imageSrc;

//     imagePopup.classList.add("active");

//     document.body.style.overflow = "hidden";
//   });
// });

// function closePopup() {
//   imagePopup.classList.remove("active");

//   document.body.style.overflow = "auto";
// }

// popupClose.addEventListener("click", closePopup);

// imagePopup.addEventListener("click", (e) => {
//   if (e.target === imagePopup) {
//     closePopup();
//   }
// });

// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") {
//     closePopup();
//   }
// });

/* =========================
   TEAM DATA
========================= */

const teamMembers = [
  {
    id: 1,

    name: "Bradley Schoch",

    role: "Certified Sailing Instructor",

    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=900&auto=format&fit=crop",

    description:
      "Bradley has over 10 years of luxury sailing experience and specializes in premium coastal adventures and private yacht training.",
  },

  {
    id: 2,

    name: "Andrew Clouston",

    role: "SVP Programs & Services",

    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=900&auto=format&fit=crop",

    description:
      "Andrew manages guest programs, charter operations, and premium onboard experiences for all luxury packages.",
  },

  {
    id: 3,

    name: "Cecilia Mendez",

    role: "Certified Sailing Instructor",

    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=900&auto=format&fit=crop",

    description:
      "Cecilia is passionate about ocean experiences and provides world-class sailing guidance for first-time guests.",
  },

  {
    id: 4,

    name: "Timothy Monahan",

    role: "Certified Sailing Instructor",

    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop",

    description:
      "Timothy delivers unforgettable luxury boat experiences with a strong focus on safety and entertainment.",
  },

  {
    id: 5,

    name: "Timothy Monahan",

    role: "Certified Sailing Instructor",

    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop",

    description:
      "Timothy delivers unforgettable luxury boat experiences with a strong focus on safety and entertainment.",
  },
];

/* =========================
   RENDER TEAM CARDS
========================= */

const teamWrapper = document.getElementById("teamWrapper");

teamMembers.forEach((member) => {
  teamWrapper.innerHTML += `
    
    <div class="swiper-slide">

      <div class="team-card">

        <div class="team-image">
          <img src="${member.image}" alt="${member.name}" />
        </div>

        <div class="team-content">

          <h4>${member.name}</h4>

          <p>${member.role}</p>

          <div class="team-bottom">

            <a href="#" 
               class="team-more"
               data-id="${member.id}">
               VIEW MORE
            </a>

          </div>

        </div>

      </div>

    </div>

  `;
});

/* =========================
   TEAM SWIPER
========================= */

const teamSwiper = new Swiper(".teamSwiper", {
  slidesPerView: 4,

  spaceBetween: 30,

  loop: teamMembers.length > 4,

  speed: 1000,

  autoplay: {
    delay: 2500,

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
      slidesPerView: 3,
    },

    1300: {
      slidesPerView: 4,
    },
  },
});

/* =========================
   TEAM MODAL
========================= */

const teamModal = document.getElementById("teamModal");

const teamModalClose = document.getElementById("teamModalClose");

const modalTeamImage = document.getElementById("modalTeamImage");

const modalTeamName = document.getElementById("modalTeamName");

const modalTeamRole = document.getElementById("modalTeamRole");

const modalTeamDescription = document.getElementById("modalTeamDescription");

/* OPEN MODAL */

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("team-more")) {
    e.preventDefault();

    const memberId = Number(e.target.dataset.id);

    const member = teamMembers.find((item) => item.id === memberId);

    if (!member) return;

    modalTeamImage.src = member.image;

    modalTeamName.textContent = member.name;

    modalTeamRole.textContent = member.role;

    modalTeamDescription.textContent = member.description;

    teamModal.classList.add("active");

    document.body.style.overflow = "hidden";
  }
});

/* CLOSE MODAL */

function closeTeamModal() {
  teamModal.classList.remove("active");

  document.body.style.overflow = "auto";
}

teamModalClose.addEventListener("click", closeTeamModal);

/* CLICK OUTSIDE */

teamModal.addEventListener("click", (e) => {
  if (e.target === teamModal) {
    closeTeamModal();
  }
});

/* ESC BUTTON */

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeTeamModal();
  }
});
