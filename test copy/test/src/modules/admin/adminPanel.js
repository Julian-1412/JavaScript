// Function to render the task form (used for both Creating and Editing)
export function renderAdminForm() {
    return `
        <section style="background: #f4f4f4; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
        <h3 id="form-title">Crear nueva tarea</h3>
        <form id="task-form">
            <!-- Hidden inputs to track task ID and ownership during the update process -->
            <input type="hidden" id="task-id">
            <input type="hidden" id="task-owner-id">
            
            <input type="text" id="title" placeholder="Titulo de la tarea" required style="width: 100%; margin-bottom: 10px;"><br>
            
            <textarea id="description" placeholder="Descripción de la tarea" required style="width: 100%; margin-bottom: 10px;"></textarea><br>
            
            <button type="submit" id="submit-btn" style="background: #1a4572ff; color: white; border: none; padding: 10px; border-radius: 4px; cursor: pointer;">
                Guardar
            </button>
            
            <button type="button" id="cancel-edit" style="display: none; background: #a53030ff; color: white; border: none; padding: 10px; border-radius: 4px; cursor: pointer; margin-left: 10px;">
                Cancelar
            </button>
        </form>
        </section>
    `;
}

/**
 * Fetches all tasks to calculate and render system-wide activity metrics.
 * @returns {Promise<string>} - HTML string containing the metrics dashboard or an error message.
 */
export async function renderAdminMetrics() {
    try {
        // Retrieve all tasks to perform statistical calculations
        const response = await fetch('http://localhost:3000/tasks');
        const tasks = await response.json();

        // Calculate counts for different task states
        const total = tasks.length;
        const pending = tasks.filter(t => t.status === 'pending').length;
        const completed = tasks.filter(t => t.status === 'completed').length;

        // Return a grid layout with the calculated statistics
        return `
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 20px;">
                <div style="background: #e3f2fdff; padding: 15px; border-radius: 8px; text-align: center;">
                    <small>Total de tareas</small>
                    <h2 style="margin: 0;">${total}</h2>
                </div>
                <div style="background: #fff3e0; padding: 15px; border-radius: 8px; text-align: center;">
                    <small>Pendientes</small>
                    <h2 style="margin: 0;">${pending}</h2>
                </div>
                <div style="background: #e8f5e9; padding: 15px; border-radius: 8px; text-align: center;">
                    <small>Completadas</small>
                    <h2 style="margin: 0;">${completed}</h2>
                </div>
            </div>
        `;
    } catch (error) {
        // Fallback UI in case of data fetching failure
        return `<p style="color: red;">Error cargando las metricas</p>`;
    }
}

/**
 * Handles the logic for creating or updating a task in the database.
 * @param {Object} taskData - The basic task info (title, description, status).
 * @param {string|null} taskId - The task ID if performing an update, null if creating.
 */
export async function handleCreateTask(taskData, taskId = null) {
    const userInSession = JSON.parse(localStorage.getItem("user_session"));
    
    // Retrieve the original owner ID from the form to maintain ownership during updates
    const originalOwnerId = document.getElementById('task-owner-id').value;

    // Determine the HTTP method and endpoint based on the presence of taskId
    const method = taskId ? 'PUT' : 'POST';
    const url = taskId ? `http://localhost:3000/tasks/${taskId}` : 'http://localhost:3000/tasks';

    // Construct the final payload, ensuring the correct userId is preserved or assigned
    const finalTask = {
        ...taskData,
        userId: taskId ? parseInt(originalOwnerId) : userInSession.id,
        status: taskData.status || "pending",
    };

    try {
        const response = await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(finalTask)
        });

        if (!response.ok) throw new Error("No se pudo guardar la tarea");

        // Notify success and refresh the page to reflect changes
        alert(taskId ? "Tarea editada satisfactoriamente!" : "Tarea creada satisfactoriamente!");
        location.reload(); 
    } catch (error) {
        // Error notification logic
        alert("Error: " + error.message);
    }
}