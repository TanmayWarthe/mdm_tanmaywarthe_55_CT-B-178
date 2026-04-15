// ======= DATA =======
const movies = [
  { title: "Mission: Fallout", genre: "Action", img: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg" },
  { title: "The Mechanic", genre: "Action", img: "https://image.tmdb.org/t/p/w500/e0pETFMSSVNmzJQKCFbT59jhGVM.jpg" },
  { title: "Avengers", genre: "Action", img: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
  { title: "District 9", genre: "Sci-Fi", img: "https://image.tmdb.org/t/p/w500/tuGHw44V8gAtBvD9oQheKBHONWF.jpg" },
  { title: "Gravity", genre: "Sci-Fi", img: "https://image.tmdb.org/t/p/w500/ByDCaFSEDFAGwvfYQSZ9VuDfMGM.jpg" },
  { title: "Interstellar", genre: "Sci-Fi", img: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { title: "Jurassic Park", genre: "Thriller", img: "https://image.tmdb.org/t/p/w500/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg" },
  { title: "Suits", genre: "Drama", img: "https://image.tmdb.org/t/p/w500/URxPEoQLXDwdR7r5bRrXEFNZQlp.jpg" },
  { title: "Breaking Bad", genre: "Drama", img: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg" },
  { title: "YellowStone", genre: "Drama", img: "https://image.tmdb.org/t/p/w500/wbtz7mYnPFMCMYxHBKFYVrRTlFu.jpg" },
  { title: "Friends", genre: "Comedy", img: "https://image.tmdb.org/t/p/w500/2koX1xLkpTM4IZebYvKysFW1Nh.jpg" },
  { title: "Seinfeld", genre: "Comedy", img: "https://image.tmdb.org/t/p/w500/aCw8ONfyz3AhngVQa1E2Ss4KSUQ.jpg" },
  { title: "Hairspray", genre: "Music", img: "https://image.tmdb.org/t/p/w500/vRkMNYWjFc2wRuaVDWHrVtWVMbr.jpg" },
  { title: "Believe", genre: "Music", img: "https://image.tmdb.org/t/p/w500/w9GB9a0uWmM0JMabczF0PW2dpPo.jpg" },
  { title: "Captain Underpants", genre: "Children", img: "https://image.tmdb.org/t/p/w500/4F8kH6fZJEBt3SBZWG8EJtGGLmQ.jpg" },
  { title: "Captain Marvel", genre: "Children", img: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TXL.jpg" },
  { title: "SpongeBob", genre: "Cartoon", img: "https://image.tmdb.org/t/p/w500/djHPDCMjHdEMlcrFbnUVJkrFDDx.jpg" },
  { title: "Madagascar", genre: "Cartoon", img: "https://image.tmdb.org/t/p/w500/kf4bOBjSRtEjDQKRDN3jZJEIliL.jpg" },
  { title: "The Lion King", genre: "Cartoon", img: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg" },
  { title: "Need for Speed", genre: "Action", img: "https://image.tmdb.org/t/p/w500/k1GKnBJGNAHJQJAnQ0H2NAIWGR9.jpg" },
  { title: "GOT S1", genre: "Drama", img: "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg" },
  { title: "Gravity Falls", genre: "Cartoon", img: "https://image.tmdb.org/t/p/w500/lXIr422cR8Og9qPNHbEIBguXD2b.jpg" },
];

const tvCategories = ["Action & Adventure","Comedies","Dramas","Sci-Fi & Fantasy","Thrillers","Children & family","Music","Cartoon"];
const categoryMap = { "Action & Adventure":"Action","Comedies":"Comedy","Dramas":"Drama","Sci-Fi & Fantasy":"Sci-Fi","Thrillers":"Thriller","Children & family":"Children","Music":"Music","Cartoon":"Cartoon" };

function getByGenre(g) { return movies.filter(m => m.genre === g); }

// ======= PAGES =======
let currentUser = null;

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const authPages = ['page-signup','page-signin'];
  const nb = document.getElementById('navbar');
  if(authPages.includes(id)) { nb.style.display='none'; }
  else { nb.style.display='flex'; renderNavActive(id); }
  window.scrollTo(0,0);
  closeDropdown();
}

function renderNavActive(id) {
  ['nav-home','nav-shows','nav-movies'].forEach(n => document.getElementById(n).classList.remove('active'));
  if(id==='page-home') document.getElementById('nav-home').classList.add('active');
  if(id==='page-shows') document.getElementById('nav-shows').classList.add('active');
  if(id==='page-movies') document.getElementById('nav-movies').classList.add('active');
}

// ======= AUTH =======
function handleSignup() {
  const fn = document.getElementById('su-firstname').value.trim();
  const un = document.getElementById('su-username').value.trim();
  const em = document.getElementById('su-email').value.trim();
  const pw = document.getElementById('su-pass').value;
  const cp = document.getElementById('su-cpass').value;
  if(!fn||!un||!em||!pw) return showToast('Please fill all fields');
  if(pw !== cp) return showToast('Passwords do not match!');
  currentUser = { name: fn, username: un, email: em };
  document.getElementById('u-firstname').value = fn;
  document.getElementById('u-username').value = un;
  document.getElementById('u-email').value = em;
  document.getElementById('user-avatar-btn').childNodes[0].nodeValue = fn.charAt(0).toUpperCase();
  showToast('Welcome to CHILIX, ' + fn + '!');
  setTimeout(() => showPage('page-home'), 900);
}

function handleSignin() {
  const un = document.getElementById('si-username').value.trim();
  const pw = document.getElementById('si-pass').value;
  if(!un||!pw) return showToast('Please enter credentials');
  currentUser = { name: 'User', username: un, email: 'user@chilix.com' };
  document.getElementById('user-avatar-btn').childNodes[0].nodeValue = un.charAt(0).toUpperCase();
  showToast('Welcome back, ' + un + '!');
  setTimeout(() => showPage('page-home'), 900);
}

function logout() {
  currentUser = null;
  closeDropdown();
  showPage('page-signin');
  showToast('Signed out successfully');
}

// ======= DROPDOWN =======
function toggleDropdown() {
  const dropdown = document.getElementById('user-dropdown');
  dropdown.classList.toggle('open');
}

function closeDropdown() {
  const dropdown = document.getElementById('user-dropdown');
  dropdown.classList.remove('open');
}

document.addEventListener('click', function(event) {
  const userAvatar = document.getElementById('user-avatar-btn');
  const dropdown = document.getElementById('user-dropdown');
  if (userAvatar && !userAvatar.contains(event.target)) {
    closeDropdown();
  }
});

// ======= RENDER HOME ROWS =======
function renderHomeRows() {
  const el = document.getElementById('home-rows');
  const rowDefs = [
    { title: "TRENDING NOW", items: movies.slice(0,8) },
    { title: "ACTION & ADVENTURE", items: getByGenre("Action") },
    { title: "TOP DRAMAS", items: getByGenre("Drama") },
    { title: "SCI-FI & FANTASY", items: getByGenre("Sci-Fi") },
    { title: "COMEDIES", items: getByGenre("Comedy") },
  ];
  el.innerHTML = rowDefs.map(row => `
    <div class="row">
      <div class="row-title">${row.title}</div>
      <div class="cards-scroll">
        ${row.items.map(m => `
          <div class="card" style="background: url('${m.img}') center/cover">
            <div class="card-overlay"></div>
            <div class="card-title">${m.title}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderCategoryContent(category) {
  const genre = categoryMap[category];
  const items = getByGenre(genre);
  return items.map(m => `
    <div class="thumb" style="background: url('${m.img}') center/cover">
      <div class="thumb-label">${m.title}</div>
    </div>
  `).join('');
}

function renderShowsPage() {
  const el = document.getElementById('shows-content');
  el.innerHTML = tvCategories.map(cat => `
    <div class="category-section">
      <div class="category-title">${cat}</div>
      <div class="category-grid">
        ${renderCategoryContent(cat)}
      </div>
    </div>
  `).join('');
}

function renderMoviesPage() {
  const el = document.getElementById('movies-content');
  el.innerHTML = tvCategories.map(cat => `
    <div class="category-section">
      <div class="category-title">${cat}</div>
      <div class="category-grid">
        ${renderCategoryContent(cat)}
      </div>
    </div>
  `).join('');
}

// ======= SEARCH =======
function openSearch() {
  document.querySelector('.search-overlay').classList.add('open');
  document.querySelector('.search-overlay input').focus();
}

function closeSearch() {
  document.querySelector('.search-overlay').classList.remove('open');
}

function performSearch(query) {
  if(!query.trim()) return;
  const results = movies.filter(m => m.title.toLowerCase().includes(query.toLowerCase()));
  const el = document.querySelector('.search-results');
  el.innerHTML = results.map(m => `
    <div class="search-result-card">
      <img src="${m.img}" alt="${m.title}" />
      <div class="src-label">${m.title}</div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', function() {
  renderHomeRows();
  renderShowsPage();
  renderMoviesPage();
  
  const searchInput = document.querySelector('.search-overlay input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => performSearch(e.target.value));
  }
  
  const searchClose = document.querySelector('.search-close');
  if (searchClose) {
    searchClose.addEventListener('click', closeSearch);
  }
});

// ======= TOAST =======
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ======= NAVBAR SCROLL =======
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
