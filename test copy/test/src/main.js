import { handleLogin } from './modules/auth/login.js';
import { handleRegister } from './modules/auth/register.js';
import { loadEvents } from './modules/events/eventList.js';
import { renderUserProfile } from './modules/auth/profile.js';
import { renderAdminForm, handleCreateTask, renderAdminMetrics } from './modules/admin/adminPanel.js';
import { renderUserList } from './modules/admin/userList.js';

const app = document.getElementById('app');

/**
 * THE ROUTER: 
 * Manages application state by checking for an active session in LocalStorage.
 * Redirects to Login or Dashboard accordingly.
 */
function router() {
  const user = JSON.parse(localStorage.getItem("user_session"));
  if (!user) {
    renderLogin();
  } else {
    renderDashboard(user);
  }
}

/**
 * LOGIN VIEW: 
 * Renders the authentication interface and binds the login submission logic.
 */
function renderLogin() {
  document.body.classList.add('body-login')
  app.innerHTML = `
    <div class="auth-container">
      <h2>Welcome Back</h2>
      <form id="login-form">
        <input type="email" id="email" placeholder="Email" required><br><br>
        <input type="password" id="password" placeholder="Contraseña" required autocomplete="current-password"><br><br>
        <button type="submit">Sign In</button>
      </form>
      <p>Don't have an account? <a href="#" id="go-register">Register</a></p>
    </div>
  `;

  // Handle Login submission via the auth module
  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    await handleLogin(email, password);
    
    // If login is successful, the router will find the session and load the dashboard
    if (localStorage.getItem("user_session")) {
        router(); 
    }
  });

  // Navigation link to the Registration view
  document.getElementById('go-register').addEventListener('click', (e) => {
    e.preventDefault();
    renderRegister();
  });
}

/**
 * REGISTER VIEW: 
 * Captures user input and invokes the registration service.
 */
function renderRegister() {
  document.body.classList.add('body-login')
  app.innerHTML = `
    <div class="auth-container">
      <h2>Create Account</h2>
      <form id="register-form">
        <input type="text" id="reg-name" placeholder="Nombre completo" required><br><br>
        <input type="email" id="reg-email" placeholder="Email" required><br><br>
        <input type="password" id="reg-password" placeholder="Contraseña" required autocomplete="new-password"><br><br>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="#" id="go-login">Sign In</a></p>
    </div>
  `;

  document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const success = await handleRegister(
      document.getElementById('reg-name').value,
      document.getElementById('reg-email').value,
      document.getElementById('reg-password').value
    );
    // On success, redirect back to login for security verification
    if (success) renderLogin();
  });

  document.getElementById('go-login').addEventListener('click', (e) => {
    e.preventDefault();
    renderLogin();
  });
}

/**
 * DASHBOARD VIEW: 
 * Orchestrates multiple components (Metrics, Tasks, Profile, Admin Panel).
 * Dynamically adjusts UI based on user role.
 */
async function renderDashboard(user) {
  document.body.classList.remove('body-login')
  
  // Render the core task form available for all authenticated users
  const taskFormSection = renderAdminForm();

  app.innerHTML = `
    <nav style="display: flex; justify-content: space-between; align-items: center; background: #eee; padding: 10px;">
      <div>
        <span>Hola, <b>${user.name}</b> (${user.role})</span> | 
        <a href="#" id="view-profile-link" style="text-decoration: none; color: DarkCyan; margin-left: 10px;">Mi perfil</a>
      </div>
      <button style="border-radius: 5px; color: white; background-color:Teal; cursor:pointer" id="logout-btn">Cerrar sesión</button>
    </nav>
    
    <main id="main-content" style="padding: 20px;">
      <div id="metrics-container"></div> 
      
      ${taskFormSection}

      <div id="tasks-section">
        <h2>${user.role === 'admin' ? 'Todas las tareas' : 'Mis tareas'}</h2>
        <div id="event-list">Cargando tareas...</div>
      </div>

      <div id="users-registered-section"></div>
    </main>
  `;

  // PROFILE TOGGLE: Replaces main content with the Profile UI
  document.getElementById('view-profile-link').addEventListener('click', (e) => {
    e.preventDefault();
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = renderUserProfile(user);

    // Re-initialize router to restore dashboard layout
    document.getElementById('back-to-dash').addEventListener('click', () => {
        router(); 
    });
  });

  // ADMIN-ONLY CONTENT: Metrics and full user list
  if (user.role === 'admin') {
      const metricsHTML = await renderAdminMetrics();
      const metricsContainer = document.getElementById('metrics-container');
      if (metricsContainer) metricsContainer.innerHTML = metricsHTML;

      const usersListContainer = document.getElementById('users-registered-section');
      const usersListHTML = await renderUserList();
      usersListContainer.appendChild(usersListHTML);
  }

  // LOGOUT: Destroys session and returns to login view
  document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem("user_session");
    router();
  });

  // FORM SUBMISSION: Handles both Create and Update operations
  const taskForm = document.getElementById('task-form');
  if (taskForm) {
    taskForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const taskId = document.getElementById('task-id').value;
      const taskData = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,     
      };

      await handleCreateTask(taskData, taskId || null);
    });

    // CANCEL LOGIC: Resets form and UI labels back to "Create" mode
    const cancelBtn = document.getElementById('cancel-edit');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            taskForm.reset();
            document.getElementById('task-id').value = "";
            document.getElementById('task-owner-id').value = "";
            document.getElementById('form-title').innerText = "Crear nueva tarea";
            document.getElementById('submit-btn').innerText = "Guardar Tarea";
            cancelBtn.style.display = "none";
        });
    }
  }

  // INITIAL DATA FETCH: Populate the task list on load
  loadEvents();
}


router();