
const flowers = [
   {
    id: 1,
    name: "Lonely",
    price: "₼120",
    category: "buket",
    image: "images/Lonely.png",
    subImages: ["images/Lonely.png"]
},
{
    id: 2,
    name: "Pink Dance",
    price: "₼110",
    category: "buket",
    image: "images/Pink dance.png",
    subImages: ["images/Pink dance.png"]
},
{
    id: 3,
    name: "Red Dream",
    price: "₼110",
    category: "buket",
    image: "images/Red Dream.png",
    subImages: ["images/Red Dream.png"]
},
{
    id: 4,
    name: "Paeony Utopia",
    price: "₼110",
    category: "buket",
    image: "images/Paeony Utopia.png",
    subImages: ["images/Paeony Utopia.png"]
},
{
    id: 5,
    name: "Silent",
    price: "₼180",
    category: "kompozisiya",
    image: "images/Silent.png",
    subImages: ["images/Silent.png"]
},
{
    id: 6,
    name: "Time to Fall",
    price: "₼200",
    category: "kompozisiya",
    image: "images/Time to Fall.png",
    subImages: ["images/Time to Fall.png"]
}
];

const grid = document.getElementById("catalogGrid");

function renderFlowers(data) {
  grid.innerHTML = data.map(flower => `
    <div class="card" data-id="${flower.id}">
      <img src="${flower.image}" alt="${flower.name}">
      <div class="card-content">
        <h3>${flower.name}</h3>
        <div class="price">${flower.price}</div>
      </div>
    </div>
  `).join("");
}

renderFlowers(flowers);

let currentFlowerImages = [];
let currentIndex = 0;

const modal = document.createElement("div");
modal.className = "image-modal";

modal.innerHTML = `
  <img class="modal-img" src="" alt="">
`;

document.body.appendChild(modal);

const modalImage = modal.querySelector(".modal-img");

function openModal(flower) {
    currentFlowerImages = flower.subImages && flower.subImages.length > 0
        ? flower.subImages
        : [flower.image];

    currentIndex = 0;

    modalImage.src = currentFlowerImages[currentIndex];
    modalImage.alt = flower.name;
    modal.classList.add("active");
}

function showImage(index) {
    currentIndex = (index + currentFlowerImages.length) % currentFlowerImages.length;
    modalImage.src = currentFlowerImages[currentIndex];
}
grid.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;

    const id = Number(card.dataset.id);
    const flower = flowers.find(flower => flower.id === id);

    openModal(flower);
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});
const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach(card => {
  card.addEventListener("click", () => {

    const category = card.dataset.category;

    if (category === "all") {
      renderFlowers(flowers);
    } else {
      const filtered = flowers.filter(
        f => f.category === category
      );
      renderFlowers(filtered);
    }

    const catalog = document.getElementById("catalog");

function scrollToCatalog() {
  const yOffset = -80; // header üçün
  const y = catalog.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth"
  });
}
  });
});