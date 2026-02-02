export async function loadEvents() {
    const container = document.getElementById('event-list');
    
    // Retrieve the current user's session to determine permissions and ownership
    const userSession = JSON.parse(localStorage.getItem("user_session"));

    try {
        // 1. Fetch data based on role: 
        // Admins see all tasks, regular users only see their own.
        const url = userSession.role === 'admin' 
            ? 'http://localhost:3000/tasks' 
            : `http://localhost:3000/tasks?userId=${userSession.id}`;

        const response = await fetch(url);
        const tasks = await response.json();

        // Reset the container content before rendering new data
        container.innerHTML = "";

        tasks.forEach(task => {
            const taskCard = document.createElement('div');
            taskCard.style = "border: 1px solid #ccc; padding: 15px; margin-bottom: 15px; border-radius: 8px; position: relative;";
            
            // Determine the display name for the task owner
            const ownerDisplay = (task.userId == userSession.id) ? "Admin" : (task.userId || "Admin");

            // Define UI components for actions (Delete, Edit, Status Toggle)
            const deleteBtn = `<button class="delete-btn" data-id="${task.id}" style="color: FireBrick; position: absolute; top: 10px; right: 10px; cursor: pointer;">Eliminar</button>`;
            
            const editBtn = `<button class="edit-btn" 
                                data-id="${task.id}" 
                                data-title="${task.title}" 
                                data-userid="${task.userId}" 
                                data-desc="${task.description}">Editar</button>`;

            const nextStatus = task.status === 'pending' ? 'completed' : 'pending';
            const statusBtn = `<button class="status-btn" data-id="${task.id}" data-status="${nextStatus}">Cambiar estado a: ${nextStatus}</button>`;

            // Inject the task data into the card template
            taskCard.innerHTML = `
                ${deleteBtn}
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <p><small>Dueño: <b>${ownerDisplay}</b> | Estado: <b>${task.status}</b></small></p>
                ${editBtn} ${statusBtn}
            `;
            
            container.appendChild(taskCard);
        });

        // 3. EDIT LOGIC: Populates the form with existing task data for modification
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.onclick = () => {
                document.getElementById('task-id').value = btn.getAttribute('data-id');
                document.getElementById('task-owner-id').value = btn.getAttribute('data-userid');
                document.getElementById('title').value = btn.getAttribute('data-title');
                document.getElementById('description').value = btn.getAttribute('data-desc');

                document.getElementById('form-title').innerText = "Edit Task";
                document.getElementById('submit-btn').innerText = "Update Task";
                document.getElementById('cancel-edit').style.display = "inline";
            };
        });

        // 4. DELETE LOGIC: Sends a DELETE request and refreshes the list on success
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.onclick = async () => {
                if (confirm("Estas seguro?")) {
                    await fetch(`http://localhost:3000/tasks/${btn.dataset.id}`, { method: 'DELETE' });
                    loadEvents(); 
                }
            };
        });

        // 5. STATUS UPDATE LOGIC: Toggles task status using a PATCH request
        document.querySelectorAll('.status-btn').forEach(btn => {
            btn.onclick = async () => {
                await fetch(`http://localhost:3000/tasks/${btn.dataset.id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ status: btn.dataset.status })
                });
                loadEvents();
            };
        });

    } catch (error) {
        // UI fallback in case of API or network failure
        container.innerHTML = `<p style="color: red;">Error cargando la data.</p>`;
    }
}