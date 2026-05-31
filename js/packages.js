const packagesData = [
  {
    title: "Luxury Cruise",
    price: "$299",
    duration: "3 Hours",
    image:
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1200",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus debitis maxime error quod minus, adipisci porro? Sit minus neque quas, adipisci porro? Sit minus neque quas.",
  },

  {
    title: "Sunset Escape",
    price: "$199",
    duration: "2 Hours",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus debitis maxime error quod minus, adipisci porro? Sit minus neque quas, adipisci porro? Sit minus neque quas.",
  },

  {
    title: "Family Adventure",
    price: "$399",
    duration: "5 Hours",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus debitis maxime error quod minus, adipisci porro? Sit minus neque quas, adipisci porro? Sit minus neque quas.",
  },

  {
    title: "Private Yacht",
    price: "$699",
    duration: "8 Hours",
    image:
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1200",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus debitis maxime error quod minus, adipisci porro? Sit minus neque quas, adipisci porro? Sit minus neque quas.",
  },

  {
    title: "Island Tour",
    price: "$250",
    duration: "4 Hours",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus debitis maxime error quod minus, adipisci porro? Sit minus neque quas, adipisci porro? Sit minus neque quas.",
  },
];

const cardsPerPage = 8;

let currentPage = 1;

const grid = document.getElementById("packagesContainer");

const pagination = document.getElementById("paginationNumbers");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");

function renderCards() {
  grid.innerHTML = "";

  const start = (currentPage - 1) * cardsPerPage;

  const end = start + cardsPerPage;

  const currentData = packagesData.slice(start, end);

  currentData.forEach((item) => {
    grid.innerHTML += `

<div class="package-grid-card">

<div class="package-image">
<img src="${item.image}">
</div>

<span class="package-tag">
${item.duration}
</span>

<div class="package-price-title">
<h3>${item.title}</h3>
<div class="package-price">
${item.price}
<span>/person</span>
</div>
</div>

<p class="package-desc">
${item.description}
</p>

<div class="package-bottom">



            <button class="package-btn">
          Book Now
         </button>

           </div>

</div>

`;
  });
}

function renderPagination() {
  pagination.innerHTML = "";

  const pageCount = Math.ceil(packagesData.length / cardsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    pagination.innerHTML += `

<button
class="page-number ${currentPage === i ? "active" : ""}"
onclick="changePage(${i})"
>
${i}
</button>

`;
  }
}

function changePage(page) {
  currentPage = page;

  renderCards();

  renderPagination();
}

prevBtn.onclick = () => {
  if (currentPage > 1) {
    currentPage--;

    renderCards();

    renderPagination();
  }
};

nextBtn.onclick = () => {
  const totalPages = Math.ceil(packagesData.length / cardsPerPage);

  if (currentPage < totalPages) {
    currentPage++;

    renderCards();

    renderPagination();
  }
};

renderCards();

renderPagination();

const couponData = [
  {
    title: "Couple Gift Coupon",
    price: "$100",
    duration: "Special Gift",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200",
    description: "Perfect luxury gift experience.",
  },

  {
    title: "Family Coupon",
    price: "$250",
    duration: "Family Deal",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    description: "Premium family package.",
  },

  {
    title: "VIP Coupon",
    price: "$450",
    duration: "Premium",
    image:
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1200",
    description: "Luxury VIP experience.",
  },
];

const couponContainer = document.getElementById("couponContainer");

couponData.forEach((item) => {
  couponContainer.innerHTML += `

<div class="package-grid-card">

<div class="package-image">

<img src="${item.image}">

</div>

<span class="package-tag">

${item.duration}

</span>

<h3>

${item.title}

</h3>

<p class="package-desc">

${item.description}

</p>

<div class="package-bottom">

<div class="package-price">

${item.price}

</div>

<button class="package-btn buyCoupon">

Buy Your Coupon

</button>

</div>

</div>

`;
});
