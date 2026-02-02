#  Event Management System (SPA)

This project is a Single Page Application (SPA) designed for corporate event management. It allows user authentication with different roles, event browsing, and administrative management (creation and deletion).

##  Key Features

* **Full Authentication:** New user registration and Login with credential validation.
* **Role-Based Access Control (RBAC):**
    * **Admin:** Can create new events and delete existing ones.
    * **User:** Can view the list of available events.
* **Data Persistence:** Uses LocalStorage to keep the user session active even after refreshing the page.
* **Mock Backend:** Functional REST API using json-server.
* **Modular Architecture:** Code organized into modules for easy maintenance and scalability.

##  Tech Stack

* **Vite:** Build tool for a fast development environment.
* **JavaScript (ES6+):** Modern logic without external framework dependencies.
* **JSON Server:** Database simulation and CRUD endpoints.
* **CSS3:** Clean and organized styling.

##  Installation and Usage

Follow these steps to run the project on your local machine:

1. Install dependencies:
npm install

2. Start the Backend (JSON Server) in a separate terminal:
npx json-server --watch db.json --port 3000

3. Start the Frontend (Vite) in another terminal:
npm run dev

*The server will run at http://localhost:3000 and the app at http://localhost:5173*

##  Test Credentials

| Role | Email | Password |
| :--- | :--- | :--- |
| Administrator | admin@test.com | 123 |
| Standard User | user@test.com | 123 |

Note: You can also register new users directly from the UI; they will be automatically saved to the db.json file with the "user" role.

##  Project Structure

src/
├── modules/
│   ├── admin/      # Logic for event creation and management
│   ├── auth/       # Login and Registration processes
│   └── events/     # Logic for displaying the event list
├── main.js         # Main router and entry point
└── style.css       # Global styles

##  Author
* Name: Julian Elejalde
* Role: Coder
* Project: Performance Test - Event Management System.