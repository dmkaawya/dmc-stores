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
      "https://thumbs.dreamstime.com/b/high-quality-realistic-d-mockup-classic-black-t-shirt-showcasing-both-front-back-views-versatile-template-412906910.jpg",
      "https://thumbs.dreamstime.com/b/black-t-shirt-mockup-front-back-high-quality-mockup-black-t-shirt-male-model-showcasing-both-front-back-views-409987076.jpg",
      "https://png.pngtree.com/thumb_back/fh260/background/20251016/pngtree-black-t-shirt-mockup-front-and-back-views-image_19883359.webp",
      "https://c8.alamy.com/comp/3B788R4/black-t-shirt-front-and-back-side-on-grey-background-isolated-with-shadowcotton-shirt-object-nobodymale-tshirt-on-hangerhanging-clothesmockup-3B788R4.jpg"
    ],
    shortDescription: "Comfortable premium cotton t-shirt",
    longDescription: "High-quality 100% cotton t-shirt with perfect fit. Available in multiple sizes.",
    delivery: "3-5 days",
    warranty: true,
    returnPolicy: true,
    variants: [{color:"Black",size:"M"},{color:"Black",size:"L"},{color:"White",size:"M"}],
    feedback: [
      {name:"Nimal", message:"Super quality!", proof:"https://www.shutterstock.com/image-photo/young-asian-deliveryman-uniform-smiles-260nw-2628228883.jpg"},
      {name:"Kamal", message:"Fast delivery", proof:"https://thumbs.dreamstime.com/z/cheerful-afro-woman-hugging-carton-parcel-receiving-long-awaited-delivery-getting-online-order-indoors-satisfied-female-customer-229176680.jpg"}
    ]
  },
  {
    id: 2,
    name: "Women's Stylish Summer Dress",
    retailPrice: 4500,
    wholesalePrice: 2800,
    discount: 15,
    stock: 80,
    sold: 95,
    rating: 4.6,
    freeDelivery: false,
    images: [
      "https://www.shutterstock.com/image-photo/stylish-girl-fashionable-outfit-poses-600nw-2659109587.jpg",
      "https://thumbs.dreamstime.com/b/fashionable-young-woman-holding-shopping-bags-phone-blue-background-wearing-trendy-yellow-dress-stylish-woman-407519439.jpg",
      "https://www.shutterstock.com/image-photo/stylish-woman-shiny-ruched-metallic-260nw-2648052125.jpg",
      "https://www.shutterstock.com/image-photo/bride-friends-choosing-wedding-dress-600nw-2011651619.jpg"
    ],
    shortDescription: "Elegant floral summer dress",
    longDescription: "Light and breathable summer dress perfect for any occasion.",
    delivery: "4-7 days",
    warranty: false,
    returnPolicy: true,
    variants: [{color:"Yellow",size:"M"},{color:"Blue",size:"L"}],
    feedback: [...]
  },
  // Products 3-10 similar විදියට add කරන්න (images tool එකෙන් ගත්තු URLs use කරලා). Space නිසා short කරලා තියෙනවා – full එකට ඔයා add කරගන්න.
  // Example for product 3 (Running Shoes):
  {
    id: 3,
    name: "Men's Running Shoes",
    retailPrice: 8000,
    wholesalePrice: 5000,
    // ... same structure, images from shoes results
  }
  // Total 10 products හදන්න.
];

const users = [
  {username: "admin", password: "admin123", type: "admin"},
  {username: "reseller1", password: "pass123", type: "reseller"},
  // Add another 14 resellers similar විදියට (total 15 resellers + admin)
];

// Cart functions, login, WhatsApp send, etc. (standard e-commerce JS code – cart localStorage, addToCart(), checkout generate message, etc.)

function updateSiteName() {
  const siteName = document.getElementById('siteName');
  if (siteName) {
    const type = localStorage.getItem('userType');
    siteName.textContent = (type === 'reseller') ? 'RU Online Store' : 'Laaba Kade';
  }
}

function sendToWhatsApp(message) {
  const number = "94775048455";
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${number}?text=${encoded}`, '_blank');
}

// Login, logout, cart, etc. functions මෙතනින් පහල full implement කරන්න (standard code).
window.onload = updateSiteName;
