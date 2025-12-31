// Common JavaScript - Cart, User, Nav, Hamburger, Init Data
if (!localStorage.getItem('users')) {
  const users = [
    { username: 'admin', password: 'admin123', role: 'admin', firstName: 'Owner', lastName: 'Admin' },
    ...Array.from({length: 16}, (_, i) => ({
      username: `customer${i+1}`, password: 'pass123', role: 'customer', firstName: `Cust${i+1}`, lastName: 'Perera', whatsapp: '0771234567'
    })),
    ...Array.from({length: 14}, (_, i) => ({
      username: `reseller${i+1}`, password: 'pass123', role: 'reseller', firstName: `Res${i+1}`, lastName: 'Silva', businessName: `Shop${i+1}`, whatsapp: '0779876543'
    }))
  ];
  localStorage.setItem('users', JSON.stringify(users));
}
if (!localStorage.getItem('orders')) localStorage.setItem('orders', JSON.stringify([]));

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('currentUser'));
}
function logout() {
  localStorage.removeItem('currentUser');
  location.reload();
}
function updateNav() {
  const user = getCurrentUser();
  const loginEl = document.getElementById('login-link');
  if (loginEl) {
    if (user) {
      loginEl.innerHTML = `${user.username} | <a href="#" onclick="logout()">Logout</a>`;
      if (user.role === 'admin') loginEl.innerHTML += ' | <a href="admin.html">Admin</a>';
      if (user.role === 'reseller') loginEl.innerHTML += ' | <a href="resell.html">Resell Dashboard</a>';
    }
  }
}
document.querySelectorAll('.hamburger').forEach(h => {
  h.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
  });
});
function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}
function addToCart(id, qty = 1) {
  let cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) item.qty += qty;
  else cart.push({id, qty});
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Added to cart!');
}
window.onload = updateNav;
