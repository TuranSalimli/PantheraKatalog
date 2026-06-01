
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
},
{
    id: 7,
    name: "Bouquet",
    price: "₼200",
    category: "buket",
    image: "images/Bouquet 002.jpg.jpeg",
    subImages: ["images/Bouquet 002.jpg.jpeg"]
},
{
    id: 8,
    name: "Electric Silver",
    price: "₼200",
    category: "buket",
    image: "images/Electric Silver.jpg.jpeg",
    subImages: ["images/Electric Silver.jpg.jpeg"]
},
{
    id: 9,
    name: "Far Away",
    price: "₼200",
    category: "kompozisiya",
    image: "images/Far Away.jpg.jpeg",
    subImages: ["images/Far Away.jpg.jpeg"]
},
{
    id: 10,
    name: "Just Happy",
    price: "₼200",
    category: "buket",
    image: "images/Just Happy.jpg.jpeg",
    subImages: ["images/Just Happy.jpg.jpeg"]
},
{
    id: 11,
    name: "Pink Wave",
    price: "₼200",
    category: "kompozisiya",
    image: "images/Pink Wave.jpg.jpeg",
    subImages: ["images/Pink Wave.jpg.jpeg"]
},
{
    id: 12,
    name: "Silver Light",
    price: "₼200",
    category: "buket",
    image: "images/Silver Light.jpg.jpeg",
    subImages: ["images/Silver Light.jpg.jpeg"]
},
{
    id: 13,
    name: "Yellow Love",
    price: "₼200",
    category: "kompozisiya",
    image: "images/Yellow Love.jpg.jpeg",
    subImages: ["images/Yellow Love.jpg.jpeg"]
},
{
    id: 14,
    name: "Mix Bouquet",
    price: "₼200",
    category: "buket",
    image: "images/Mix Bouquet.png",
    subImages: ["images/Mix Bouquet.png"]
},
{
    id: 15,
    name: "Jasmin",
    price: "₼200",
    category: "buket",
    image: "images/Jasmin.png",
    subImages: ["images/Jasmin.png"]
},
{
    id: 16,
    name: "Jasmin Wave",
    price: "₼200",
    category: "buket",
    image: "images/Jasmin Wave.png",
    subImages: ["images/Jasmin Wave.png"]
},
/*{
    id: 17,
    name: "Time to Fall",
    price: "₼200",
    category: "kompozisiya",
    image: "images/Time to Fall.png",
    subImages: ["images/Time to Fall.png"]
},
{
    id: 18,
    name: "Time to Fall",
    price: "₼200",
    category: "kompozisiya",
    image: "images/Time to Fall.png",
    subImages: ["images/Time to Fall.png"]
}*/
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

 setTimeout(() => {
  document.getElementById("catalogGrid").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}, 50);
  });
});