# MERN Blog

MERN Blog is a full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It includes features like user authentication, a blog section, and a dashboard for managing blog content.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
     - [Prerequisites](#prerequisites)
     - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Secure user authentication using JWT (JSON Web Tokens).
- **Blog Section:** Users can view, create, edit, and delete blog posts.
- **Dashboard:** Admin dashboard for managing blog content and user accounts.

## Technologies Used

- **Frontend:**
  
     - React: JavaScript library for building user interfaces.
     - Redux Toolkit: State management library for React applications.
     - React Router: Declarative navigation for React.js.
     - Axios: Promise-based HTTP client for making API requests.

- **Backend:**
  
     - Node.js: JavaScript runtime for server-side development.
     - Express.js: Web application framework for Node.js.
     - MongoDB: NoSQL database for storing blog data.
     - Mongoose: MongoDB object modeling for Node.js.

- **Authentication:**
  
     - JSON Web Tokens (JWT): Secure and compact way of representing claims to be transferred between two parties.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB server running (local or remote).

### Installation

1. Clone the repository:

```
git clone https://github.com/kuntalojha/mern-blog.git
```

2. Navigate to the project directory

```
cd mern-blog
```

3. Install dependencies for both the client and api

```
cd client
npm install

cd ../api
npm install
```

4. Create a .env file in the server directory and set the following environment variables:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

5. Start the development server:

```
cd client
npm start
```

**The application should now be running on**<br>
➜ Local: `http://localhost:5173/`<br>
➜ Network: `http://(your ip address):5173/`<br>
➜ press h + enter to show help

```
cd ../server
npm run dev
```

Server is running on port 3000 `http://localhost:3000.`

## Project Structure

The project follows a standard MERN stack structure:

```
mern-blog/
|-- server/                # Backend (Node.js/Express) code
  |-- controllers       # user & auth controller
  |-- modules           # user model
  |-- routes            # auth & user route
  |-- utils             # error
index.js

|-- client/             # Frontend (React) code
  |-- node_modules      # node modules are here
  |-- public
  |-- src/
    |-- assets
    |-- components      # Header,Footer,OAuth,ThemeProvider
    |-- Pages           # About,Dashboard,Home,Project,SignIn,SignUp
    |-- redux           # theme & user and store.js
      |-- theme         # themeSlice.js file
      |-- user          #  userSlice.js file
      |-- store.js
    |-- App.jsx
    |-- ErrorBoundary.jsx
    |-- firebase.js
    |-- index.css
    |-- main.jsx
|-- README.md           # Project documentation
|-- node_modules        # node modules are here
|-- .gitignore          # Git ignore file
```

## Usage

Describe how to use the application, including any additional setup or configurations needed.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

- Remember to replace placeholders like `your_mongodb_connection_string` and `your_jwt_secret_key` with your actual MongoDB connection string and a secure JWT secret key. Feel free to add more sections or details based on your project's specific requirements.

## License

This project is licensed under the [MIT License](https://github.com/kuntalojha/mern-blog?tab=MIT-1-ov-file#readme).

#### README MAKER

1. [readme.so](https://readme.so/editor)
2. [Make a README](https://www.makeareadme.com/)