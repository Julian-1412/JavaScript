import { handleLogin } from './modules/auth/login.js';
import { handleRegister } from './modules/auth/register.js';
import { loadEvents } from './modules/events/eventList.js';
import { renderAdminForm, handleCreateEvent } from './modules/admin/adminPanel.js';

const app = document.getElementById('app');

// 1. THE ROUTER: Controls which view to display based on the user's session in LocalStorage
function router() {
  const user = JSON.parse(localStorage.getItem("user_session"));
  if (!user) {
    // If no user is logged in, show the Login view
    renderLogin();
  } else {
    // If user is authenticated, show the Dashboard
    renderDashboard(user);
  }
}

// 2. LOGIN VIEW: Renders the login form and handles its submission
function renderLogin() {
  app.innerHTML = `
    <div class="auth-container">
      <h2>Login</h2>
      <form id="login-form">
        <input type="email" id="email" placeholder="Email" required><br><br>
        <input type="password" id="password" placeholder="Contraseña" required><br><br>
        <button type="submit">Login</button>
      </form>
      <p>No tiene una cuenta? <a href="#" id="go-register">Registrese aquí</a></p>
    </div>
  `;

  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    // Call login logic and then re-evaluate the router
    await handleLogin(document.getElementById('email').value, document.getElementById('password').value);
    router();
  });

  document.getElementById('go-register').addEventListener('click', (e) => {
    e.preventDefault();
    renderRegister(); // Navigate to the register view
  });
}

// 3. REGISTER VIEW: Handles new user creation
function renderRegister() {
  app.innerHTML = `
    <div class="auth-container">
      <h2>Create Account</h2>
      <form id="register-form">
        <input type="text" id="reg-name" placeholder="Nombre completo" required><br><br>
        <input type="email" id="reg-email" placeholder="Email" required><br><br>
        <input type="password" id="reg-password" placeholder="Contraseña" required><br><br>
        <button type="submit">Registrarse</button>
      </form>
      <p>Ya tiene una cuenta? <a href="#" id="go-login">Ingrese aquí</a></p>
    </div>
  `;

  document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    // Handle registration and return to login if successful
    const success = await handleRegister(
      document.getElementById('reg-name').value,
      document.getElementById('reg-email').value,
      document.getElementById('reg-password').value
    );
    if (success) renderLogin();
  });

  document.getElementById('go-login').addEventListener('click', (e) => {
    e.preventDefault();
    renderLogin();
  });
}

// 4. MAIN VIEW (DASHBOARD): Displays content based on user roles
function renderDashboard(user) {
  // Check user role: only 'admin' gets the creation form
  const adminSection = (user.role === 'admin') ? renderAdminForm() : '';

  app.innerHTML = `
    <nav style="display: flex; justify-content: space-between; align-items: center; background: #eee; padding: 10px;">
      <span>Hola, <b>${user.name}</b> (${user.role})</span>
      <button id="logout-btn">Cerrar sesión</button>
    </nav>
    
    <main style="padding: 20px;">
      ${adminSection}
      <h2>Proximos eventos</h2>
      <div id="event-list">Cargando eventos</div>
    </main>
  `;

  // LOGOUT: Clears LocalStorage and re-runs the router
  document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem("user_session");
    router();
  });

  // ADMIN LOGIC: Bind the event listener to the creation form if it exists
  if (user.role === 'admin') {
    const eventForm = document.getElementById('event-form');
    if (eventForm) {
      eventForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const newEvent = {
          title: document.getElementById('title').value,
          description: document.getElementById('description').value,
          date: document.getElementById('date').value,
          capacity: parseInt(document.getElementById('capacity').value)
        };
        await handleCreateEvent(newEvent);
      });
    }
  }

  // Load and render events from the API
  loadEvents();
}

// Initialize the application
router();