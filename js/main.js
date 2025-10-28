document.addEventListener('DOMContentLoaded', () => {
  const mainHeader = document.querySelector('.main-header');
  const mainContent = document.querySelector('main');

  // --- Determine which navbar to build ---
  // We check if the header has an id of 'dashboard-header'
  if (mainHeader && mainHeader.id === 'dashboard-header') {
    // --- BUILD DASHBOARD NAVBAR ---
    const session = JSON.parse(localStorage.getItem('ticketapp_session'));
    const userName = session?.user?.name || 'User';
    mainHeader.innerHTML = `
      <div class="container">
        <nav class="main-nav">
          <a href="dashboard.html" class="nav-logo">TicketApp</a>
          <ul class="nav-links">
            <li><span class="nav-user">Welcome, ${userName}!</span></li>
            <li><a href="tickets.html" class="btn btn-text">Manage Tickets</a></li>
            <li><button id="logout-btn" class="btn btn-primary">Logout</button></li>
          </ul>
          <button class="hamburger-menu"><i class="fas fa-bars"></i></button>
        </nav>
      </div>
    `;
    document.getElementById('logout-btn')?.addEventListener('click', () => {
      localStorage.removeItem('ticketapp_session');
      window.location.href = 'index.html';
    });
  } else if (mainHeader) {
    // --- BUILD PUBLIC NAVBAR ---
    mainHeader.innerHTML = `
      <div class="container">
        <nav class="main-nav">
          <a href="index.html" class="nav-logo">TicketApp</a>
          <ul class="nav-links">
            <li><a href="login.html" class="btn btn-text">Login</a></li>
            <li><a href="signup.html" class="btn btn-primary">Get Started</a></li>
          </ul>
          <button class="hamburger-menu"><i class="fas fa-bars"></i></button>
        </nav>
      </div>
    `;
  }
  
  // --- Universal Mobile Menu Logic ---
  const hamburger = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mainContent?.classList.toggle('blur-background');
      const icon = hamburger.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });
  }

  // --- Universal Dynamic Year in Footer ---
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});