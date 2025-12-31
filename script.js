let currentUser = null;
let isReseller = false;

const products = [
  {
    id: 1,
    name: "Men's Premium Black T-Shirt",
    retailPrice: 2500,
    wholesalePrice: 1500,
    discount: 20,
    stock: 100,
    sold: 150,
    rating: 4.8,
    freeDelivery: true,
    images: [
      "https://img.freepik.com/premium-photo/blank-black-tshirt-mockup-front-back-view_343283-11386.jpg",
      "https://www.shutterstock.com/image-photo/black-tshirts-front-back-view-600nw-2499674183.jpg",
      "https://media.istockphoto.com/id/1218949014/photo/black-t-shirt-mock-up-on-wooden-hanger-front-and-rear-side-view.jpg?s=612x612&w=0&k=20&c=wGuTPmJCYLQDxOyIcI7pHcK-_A91UVmI5vQk-xnYU0Q=",
      "https://media.istockphoto.com/id/1726263781/vector/blank-black-t-shirt-template.jpg?s=612x612&w=0&k=20&c=D99VMv8nYh1tmSZO61Do3OYbUldC4JMQt7OiyyTaLG8="
    ],
    description: "Premium cotton, perfect fit. Available in S, M, L, XL.",
    variants: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "Women's Floral Summer Dress",
    retailPrice: 4500,
    wholesalePrice: 2800,
    discount: 15,
    stock: 80,
    sold: 95,
    rating: 4.6,
    freeDelivery: false,
    images: [
      "https://makersrow.com/wp-content/uploads/2025/05/two-young-beautiful-smiling-hipster-girls-trendy-summer-sundress-sexy-carefree-women-posing-street-background-hats-positive-models-having-fun-hugging-1024x768.webp",
      "https://www.marthastewart.com/thmb/DOYWYrmd4PAy2tXEBi5jbEVeCdM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/asos-a30c64d3cf5d417193eb89d4acdd6895.jpg",
      "https://s.yimg.com/uu/api/res/1.2/qsWgJgOZ0krbHoI0WGRekg--~B/Zmk9c3RyaW07aD03MjA7dz0xMjgwO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2025-05/3c705320-37e8-11f0-bdb7-11ba9130ca4a",
      "https://www.anitabydesign.com/wp-content/uploads/2024/09/1-2.png"
    ],
    description: "Light and elegant floral dress for summer.",
    variants: ["S", "M", "L"]
  },
  // Add remaining 8 products similarly with images from tool results (Running Shoes, Smart Watch, Backpack, Earbuds, Sunglasses, Hoodie, Jeans, Cap)
  // Example for product 3:
  {
    id: 3,
    name: "Men's Black Running Shoes",
    retailPrice: 8000,
    wholesalePrice: 5000,
    discount: 10,
    stock: 50,
    sold: 200,
    rating: 4.9,
    freeDelivery: true,
    images: [
      "https://cdns3.sasshoes.com/img/Mission-M_Stability_1.jpg",
      "https://cdn.shopify.com/s/files/1/0129/6942/files/NewBalanceMen_sFreshFoamX1080v14Black-Magnet-5_720x540.jpg",
      "https://cdn.shopify.com/s/files/1/0129/6942/files/OnRunningMen_sCloudrunner2EclipseBlack2_720x540.jpg",
      "https://images.dickssportinggoods.com/marketing/DSG_FTW_10426136_Multi_PostHolidayFootwearUpdates_11212133629.jpg"
    ],
    description: "Comfortable running shoes with great cushioning.",
    variants: ["8", "9", "10", "11"]
  },
  // Continue for 4-10 with selected images...
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateSiteForUser() {
  const siteName = document.getElementById('siteName');
  if (siteName) {
    siteName.textContent = isReseller ? 'RU Online Store' : 'Laaba Kade';
  }
  displayProducts();
}

function login(username, password) {
  if (username === 'admin' && password === 'admin123') {
    isReseller = true;
    localStorage.setItem('isReseller', true);
    updateSiteForUser();
    alert('Reseller login successful!');
  } else {
    alert('Invalid credentials');
  }
}

function sendToWhatsApp(message) {
  const text = encodeURIComponent(message);
  window.open(`https://wa.me/94775048455?text=${text}`);
}

// Cart functions, display products with correct price (retail or wholesale), etc.

window.onload = () => {
  isReseller = localStorage.getItem('isReseller') === 'true';
  updateSiteForUser();
};
