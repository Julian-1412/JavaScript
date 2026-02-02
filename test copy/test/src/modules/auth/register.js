export async function handleRegister(name, email, password) {
    try {
        // 1. Check if the email is already registered in the database
        const checkRes = await fetch(`http://localhost:3000/users?email=${email}`);
        const existingUsers = await checkRes.json();

        // 2. Validation: If the array is not empty, the email is already in use
        if (existingUsers.length > 0) {
            throw new Error("Este correo ya esta registrado");
        }

        // 3. Object Creation: Initialize the new user structure with a default 'user' role
        const newUser = {
            name,
            email,
            password,
            role: "user"
        };

        // 4. Persistence: Send a POST request to store the new user record in the server
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        });

        // 5. Response Handling: Ensure the server successfully created the resource
        if (!response.ok) throw new Error("Error creando la cuenta");

        // 6. Success Feedback: Alert the user and return success status for navigation logic
        alert("Cuenta creada exitosamente!");
        return true; 
    } catch (error) {
        // 7. Error Handling: Display any caught exceptions to the user
        alert(error.message);
        return false;
    }
}