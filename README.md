# Fruits Project

Fruits Project is a modular Vue.js frontend application that consumes a GraphQL API. This application is designed to display available services dynamically and allows users to interact with specific services, such as the "Saludame" service.

---

## Features

- **Dynamic Services Display**: Fetch and display available services from a GraphQL API.
- **Modular Architecture**: Easily extendable to add new services.
- **Interactive Views**: Dedicated views for each service.
- **GraphQL Integration**: Query and interact with the API seamlessly.

---

## Technologies

- **Frontend**: Vue.js
- **GraphQL Client**: Apollo Client
- **Build Tool**: Vue CLI

---

## Project Setup

### Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **Vue CLI**: Install globally using `npm install -g @vue/cli`

---

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/fruits-project.git
   cd fruits-project
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Configure the GraphQL endpoint in src/apollo.js if necessary.


### Run the Project

1. Start the development server:

   ```bash
   npm run serve
   ```
2. Open your browser and navigate to:

   ```bash
   http://localhost:8080
   ```

### Project Structure

   ```bash
    ├── src
    │   ├── components   # Shared Vue components
    │   ├── views        # Application views (HomeView, SaludameView)
    │   ├── apollo.js    # Apollo Client configuration
    │   ├── router.js    # Vue Router configuration
    │   └── main.js      # Application entry point
    ├── public           # Static files
    └── package.json     # Project dependencies and scripts
   ```

## GraphQL Queries

### Available Services

Fetch available services:

   ```bash
   query {
      getMenu
    }
   ```

### Saludame Service

Send a name and receive a personalized greeting:

   ```bash
    query ($name: String!) {
       sayHello(name: $name)
    }
   ```

## Known Issues

### ESLint Errors

If you encounter errors like eslint.CLIEngine is not a constructor, update or replace eslint-loader as per the instructions in the troubleshooting section.

### Dynamic Routing

Ensure proper configuration in router.js for dynamic routing to work.













