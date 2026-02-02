// Function to generate the HTML structure for the User Profile view
export function renderUserProfile(user) {
    // 1. Return the profile card with the user data from session
    return `
        <div class="profile-container" style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #ddd; max-width: 450px; margin: 30px auto; text-align: left;">
            <h2 style="text-align: center; color: #333;">Perfil de usuario</h2>
            <hr>
            
            <!-- User Information Section: Displays name, email, and specific role -->
            <div style="margin: 20px 0;">
                <p><strong>Nombre completo:</strong> ${user.name}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Rol:</strong> 
                    <span style="background: #ec0351ff; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.9em;">
                        ${user.role}
                    </span>
                </p>
            </div>
            
            <!-- Navigation Action: Button to return to the main dashboard -->
            <button id="back-to-dash" style="width: 100%; background: #6c757d; color: white; border: none; padding: 10px; border-radius: 4px; cursor: pointer;">
                Regresar a las tareas
            </button>
        </div>
    `;
}