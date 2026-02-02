export async function renderUserList() {
    // Initialize the main container and apply basic styling
    const userContainer = document.createElement('section');
    userContainer.style = "background: white; padding: 20px; border-radius: 8px; border: 1px solid #ccc; margin-top: 20px;";
    
    // Set initial loading state UI
    userContainer.innerHTML = `
        <h3 style="margin-top: 0; color: #000000ff;">Usuarios Registrados</h3>
        <div id="users-registered-list">Cargando lista...</div>
    `;

    try {
        // Fetch all users from the backend API
        const response = await fetch('http://localhost:3000/users');
        const users = await response.json();

        // Target the specific list container to inject user rows
        const userRegisteredList = userContainer.querySelector('#users-registered-list');
        userRegisteredList.innerHTML = ""; // Clear the loading text

        // Iterate through each user to build the row elements
        users.forEach(user => {
            const userRow = document.createElement('div');
            userRow.style = "display: flex; justify-content: space-between; padding: 10px; border-bottom: 1px solid #eee; font-size: 15px;";
            
            // Logic to determine badge color based on user permissions
            const roleColor = user.role === 'admin' ? '#1a4572ff' : '#940909ff';

            // Populate the row with formatted user data
            userRow.innerHTML = `
                <div style="flex: 1;"><strong>ID:</strong> ${user.id}</div>
                <div style="flex: 2;"><strong>Nombre:</strong> ${user.name}</div>
                <div style="flex: 2;"><strong>Email:</strong> ${user.email}</div>
                <div style="flex: 1; text-align: right;">
                    <span style="background: ${roleColor}; color: white; padding: 3px 8px; border-radius: 4px;">
                        ${user.role}
                    </span>
                </div>
            `;
            userRegisteredList.appendChild(userRow);
        });

    } catch (error) {
        // Error handling: update the UI if the fetch request fails
        userContainer.querySelector('#users-registered-list').innerHTML = `<p style="color: red;">Error loading users.</p>`;
    }

    // Return the complete section node to be appended to the DOM
    return userContainer;
}