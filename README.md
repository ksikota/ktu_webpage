# Software Engineering Coding Exercise

This is a single-page web application built to fulfill the requirements of the KTU coding exercise. The system allows users to add new people (first name, surname, gender) to a database, view the complete list of entries, and see a summary of entries grouped by gender.

## Tech Stack

- **Backend**: Spring Boot 3, Java 17, Maven, Spring Data JPA
- **Frontend**: Angular 17, TypeScript
- **Database**: H2 In-Memory SQL Database

---

## [cite_start]Development Environment Requirements

To compile and work on this project, you will need the following installed:

- **Java Development Kit (JDK)**: Version 17 or later
- **Apache Maven**: Version 3.8 or later
- **Node.js**: Latest LTS version (e.g., 18.x or 20.x)
- **Angular CLI**: Latest version (`npm install -g @angular/cli`)
- **IDE**: An IDE that supports both Java/Maven and Angular (e.g., IntelliJ IDEA Ultimate, VS Code with extensions)

---

## [cite_start]How to Run the Application

You must run both the backend and the frontend servers for the application to work.

### 1. Run the Backend (Spring Boot)

1.  Open the `backend` folder in your IDE (e.g., IntelliJ IDEA).
2.  Allow the IDE to download all the Maven dependencies.
3.  Navigate to `src/main/java/com/ktu/assessment/BackendApplication.java`.
4.  Run the `main` method in this file.
5.  The backend server will start on `http://localhost:8080`.

### 2. Run the Frontend (Angular)

1.  Open a new terminal or command prompt.
2.  Navigate to the `frontend` project folder: `cd path/to/your/project/frontend`
3.  Install the Node.js dependencies by running:
    ```bash
    npm install
    ```
4.  Start the frontend development server by running:
    ```bash
    ng serve
    ```
5.  The frontend server will start on `http://localhost:4200`.

### 3. Use the Application

Once both servers are running, open your web browser and navigate to:
**http://localhost:4200**

You will see the application, pre-populated with three entries from the database migration script.
