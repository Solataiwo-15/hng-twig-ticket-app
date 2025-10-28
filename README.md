# HNG Stage 2: Multi-Framework Ticket Web App (Twig/Vanilla JS Version)

This repository contains the **Twig/Vanilla JS implementation** for the HNG Stage 2 Frontend task. This version demonstrates the ability to build the complete application using a traditional, non-framework approach.

The application's structure is built with static HTML files, simulating the rendered output of a server-side templating engine like Twig. All dynamic functionality, including authentication, protected routes, and full ticket CRUD operations, is handled entirely with **vanilla JavaScript**.

---

### ✨ Live URL

**The deployed Twig/JS application can be viewed here:**

**[https://hng-twig-ticket-app.vercel.app/](https://hng-twig-ticket-app.vercel.app/)**

---

### ✅ Core Features Implemented

- **Static HTML Structure:** Clean, semantic HTML files for each page, representing the output of a Twig template.
- **Vanilla JS Interactivity:** All dynamic features are built from scratch with plain JavaScript, demonstrating core DOM manipulation skills.
- **Authentication:** Client-side login and signup forms with validation, handled by `auth.js`.
- **Simulated User Sessions:** User authentication is simulated using `localStorage`.
- **Protected Routes:** A "gatekeeper" script (`auth-check.js`) runs on protected pages, checking for a valid session and redirecting unauthorized users before the page content loads.
- **Dashboard:** A dashboard that dynamically builds its own navbar and displays statistics.
- **Full CRUD Functionality:** A complete Ticket Management system handled by `tickets.js`, which allows users to:
  - **C**reate new tickets via a modal form.
  - **R**ead all existing tickets in a responsive grid.
  - **U**pdate ticket details (title, description, status) via an edit modal.
  - **D**elete tickets with a confirmation step.
- **Responsive Design:** The entire application is fully responsive using the shared global CSS and page-specific stylesheets.

---

### 🛠️ Tech Stack & Approach

- **Templating (Simulated):** Twig (demonstrated via static HTML files).
- **Client-Side Logic:** Vanilla JavaScript (ES6+).
- **Styling:** Plain CSS with variables.
- **Icons:** Font Awesome.

---

### 🚀 Setup and Execution Steps

To run this project locally, you do not need a build step or a complex server.

1.  **Clone the repository.**
2.  **Open the `index.html` file** directly in your web browser. A tool like the "Live Server" extension in VS Code is recommended for the best experience.
3.  Navigate through the application. All pages and functionality are self-contained.

---

### 👤 Example Test User Credentials

- **Login:** Enter any non-empty email and password.
- **Signup:** Fill out all fields with valid information to create a new "session."

---
