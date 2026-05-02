
const flowers = [
    {
        id: 1,
        name: "Royal Rose",
        price: "₼85",
        image: "images/IMG_1795.JPG.jpeg",
        subImages: [
            "images/IMG_1795.JPG.jpeg",
           
        ]
    },
    {
        id: 2,
        name: "White Elegance",
        price: "₼95",
        image: "images/IMG_1804.JPG.jpeg",
        subImages: [
            "images/IMG_1804.JPG.jpeg",
         
        ]
    },
    {
        id: 3,
        name: "Golden Blossom",
        price: "₼110",
        image: "images/IMG_1832.PNG",
        subImages: [
            "images/IMG_1832.PNG",
            "images/IMG_1831.PNG",
        ]
    },
    {
        id: 4,
        name: "Golden Blossom",
        price: "₼110",
        image: "images/IMG_2158.JPG.jpeg",
        subImages: [
            "images/IMG_2158.JPG.jpeg",
            "images/IMG_2163.JPG.jpeg"
        ]
    }
];

const grid = document.getElementById("catalogGrid");

grid.innerHTML = flowers
    .map(flower => `
    <div class="card" data-id="${flower.id}">
      <img src="${flower.image}" alt="${flower.name}">
      <div class="card-content">
        <h3>${flower.name}</h3>
        <div class="price">${flower.price}</div>
        <a href="#" class="order-btn">Ətraflı bax</a>
      </div>
    </div>
  `)
    .join("");


let currentFlowerImages = [];
let currentIndex = 0;

const modal = document.createElement("div");
modal.className = "image-modal";

modal.innerHTML = `
  <button class="slider-btn prev-btn">&#10094;</button>
  <img class="modal-img" src="" alt="">
  <button class="slider-btn next-btn">&#10095;</button>
`;

document.body.appendChild(modal);

const modalImage = modal.querySelector(".modal-img");
const prevBtn = modal.querySelector(".prev-btn");
const nextBtn = modal.querySelector(".next-btn");

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
nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    showImage(currentIndex + 1);
});

prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    showImage(currentIndex - 1);
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});