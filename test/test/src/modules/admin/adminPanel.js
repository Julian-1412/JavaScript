export function renderAdminForm() {
    // 1. Return the HTML structure for the creation form as a string
    return `
        <section style="background: #f4f4f4; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
        <h3> Crear nuevo evento</h3>
        <form id="event-form">
            <input type="text" id="title" placeholder="Titulo del evento" required><br><br>
            <textarea id="description" placeholder="Descripción" required></textarea><br><br>
            <button type="submit" style="background: green; color: white;">Guardar evento</button>
        </form>
        </section>
    `;
}

export async function handleCreateEvent(eventData) {
    try {
        // 2. Send a POST request to save the new event data to the server
        const response = await fetch('http://localhost:3000/events', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData) // Convert JS object to JSON string
        });

        // 3. Check if the creation was successful
        if (!response.ok) throw new Error("No se pudo crear el evento");

        // 4. Notify the user and reload the page to update the list
        alert("Evento creado exitosamente!");
        location.reload(); 
    } catch (error) {
        // 5. Handle any errors during the process
        alert("Error: " + error.message);
    }
}