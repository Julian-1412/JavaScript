export async function loadEvents() {
    const container = document.getElementById('event-list');
    
    // 1. Get the current user from LocalStorage to check their role
    const user = JSON.parse(localStorage.getItem("user_session"));

    try {
        // 2. Fetch the list of events from the API
        const response = await fetch('http://localhost:3000/events');
        const events = await response.json();

        // 3. Clear the container before rendering new content
        container.innerHTML = "";

        // 4. Iterate through each event and create the HTML structure
        events.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.style = "border: 1px solid #ccc; padding: 15px; margin-bottom: 15px; border-radius: 8px; position: relative;";
            
            // 5. Conditional Rendering: Only show the delete button if the user is an admin
            const deleteBtn = user.role === 'admin' 
                ? `<button class="delete-btn" data-id="${event.id}" style="color: red; position: absolute; top: 10px; right: 10px;">Eliminar</button>` 
                : '';

            eventCard.innerHTML = `
                ${deleteBtn}
                <h3>${event.title}</h3>
                <p>${event.description}</p>
            `;
            
            container.appendChild(eventCard);
        });

        // 6. Delete Logic: Attach a click event to all delete buttons
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = btn.getAttribute('data-id');
                
                // 7. Confirm before deleting from the server
                if (confirm("Esta seguro de que desea eliminar este evento?")) {
                    await fetch(`http://localhost:3000/events/${id}`, { method: 'DELETE' });
                    
                    // 8. Refresh the list to show updated data
                    loadEvents(); 
                }
            });
        });

    } catch (error) {
        // 9. Error Handling: Inform the user if the data fails to load
        container.innerHTML = `<p style="color: red;">Error cargando los eventos</p>`;
    }
}