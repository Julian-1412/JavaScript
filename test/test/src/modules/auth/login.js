export async function handleLogin(email, password) {
    try {
        // 1. Fetch the user from the server using email and password as filters
        const response = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`);
        
        // 2. Check if the server response is okay
        if (!response.ok) throw new Error("Error conectando al servidor");

        // 3. Convert the response to JSON format
        const users = await response.json();

        // 4. If the array contains a user, the credentials are correct
        if (users.length > 0) {
            const user = users[0];

            // 5. Save the user object in LocalStorage to keep the session active
            localStorage.setItem("user_session", JSON.stringify(user));
            
            // 6. Show a welcome message
            alert(`Bienvenido, ${user.name}`);
            
            console.log("Sesion iniciada:", user);
        } else {
            // 7. If no user is found, throw an error
            throw new Error("Contraseña o correo incorrecto");
        }
    } catch (error) {
        // 8. Catch any errors and display the message in the HTML
        const errorP = document.getElementById("error-message");
        errorP.textContent = error.message;
        errorP.style.display = "block";
    }
}