export async function handleRegister(name, email, password) {
    try {
        // 1. Check if the email is already registered in the database
        const checkRes = await fetch(`http://localhost:3000/users?email=${email}`);
        const existingUsers = await checkRes.json();

        // 2. If the array is not empty, it means the user already exists
        if (existingUsers.length > 0) {
            throw new Error("Este correo ya esta registrado");
        }

        // 3. Create the new user object (role is set to 'user' by default)
        const newUser = {
            name,
            email,
            password,
            role: "user"
        };

        // 4. Send a POST request to save the new user to the server
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        });

        // 5. Verify if the server created the user successfully
        if (!response.ok) throw new Error("Error creando la cuenta");

        // 6. Notify the user and return true to proceed to the login view
        alert("Cuenta creada exitosamente!");
        return true; 
    } catch (error) {
        // 7. Show any error messages via alert
        alert(error.message);
        return false;
    }
}