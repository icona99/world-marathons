# World Marathons Readme

Welcome to our Angular project! This project aims to provide a user-friendly interface for managing marathons. It includes features such as user authentication (login, register, logout), marathon catalog browsing, event creation, and management functionalities (viewing details, editing, and deletion).

## Table of Contents

- Getting Started
- Features
- Technologies Used
- Backend Server
- Usage
- Contributing
- License

## Getting Started

To get started with this project, follow these instructions:

Server part Setup
Navigate to the Server Directory:
cd server
Install Server Dependencies and Start the Server Execute the following commands in order to start the server.
npm install
npm run client
npm run build
npm start
Running the Server:
Once the server is started, it will listen for requests on:

http://localhost:3030/

Client Application Setup
Clone the Repository: You can clone the repository using the following command or download it as a ZIP file and extract it on your computer.

git clone https://github.com/icona99/world-marathons

Navigate to the Project Directory:

Use the terminal to navigate to the project directory.
cd world-marathons

Install Dependencies:
Install all the necessary dependencies by running the following command in your terminal:

npm install   
Run the Client Part: Start the Angular development server with this command:
ng serve 
Open the Project: Access the application by opening the following URL in a web browser: http://localhost:4200/

## Features

Our Angular project includes the following features:

- **User Authentication**:
  - Login: Users can log in using their credentials.
  - Register: New users can create an account by providing necessary information.
  - Logout: Users can securely log out of their accounts.

  Test User - email: peter@abv.bg password:123456

- **Marathon Catalog**:
  - View Catalog: Users can browse through the available marathons in the catalog.

- **Event Management**:

  - Create Event: Authenticated users can create new marathon events.
  - View Details: Users can view detailed information about specific marathon events.
  - Edit Event: Authenticated users can edit the details of the events they created.
  - Delete Event: Authenticated users can delete events they no longer wish to manage.

## Technologies Used

This project is built using the following technologies:

- Angular: A platform and framework for building single-page client applications using HTML and TypeScript. Angular provides tools for developers to build applications that live on the web, mobile, or desktop.
- TypeScript: A superset of JavaScript that adds optional static typing and other features to the language. It's designed for large-scale JavaScript application development and aims to make JavaScript development more robust and maintainable.
- Angular animations: Provides a powerful built-in animation system that allows you to animate HTML elements and components easily. Angular animations are based on the Web Animations API and provide a way to create animations declaratively using Angular's animation DSL (Domain Specific Language).
- SoftUni Practice Server: Utilized for backend services. This server is often used in educational contexts for practical exercises and provides a reliable back-end service for the application.
- HTML/CSS/JavaScript: Markup, styling, and scripting languages for web development.

## Backend Server

For backend functionalities such as user authentication, marathon management, and event handling, this project interfaces with a backend server running on localhost.

## Usage

To use this application effectively, follow these guidelines:

- **Login/Register**: If you're a new user, register for an account. If you're an existing user, log in using your credentials.
- **Browse Catalog**: Explore the available marathons in the catalog.
- **Create Event**: If you're logged in, create a new marathon event by providing necessary details.
- **View Details**: Click on a specific event to view detailed information.
- **Edit/Delete Event**: If you're the owner of an event, you can edit its details or delete it entirely.

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
