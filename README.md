# Thread the Market App

![Alt text](/thread-the-market.png?raw=true "Thread the Market")

Disclaimer: The name used in this project, Thread the Market App, is purely fictional and does not relate to any existing brand or website. It is used solely for the purpose of this project, which is an online clothing store developed for Umpisa.

## Description

Thread the Market App is an online clothing store project developed specifically for Umpisa, a fictional organization or client. The primary goal of this project is to create a fully functional e-commerce platform that offers a wide range of clothing items for purchase.

Key Features:

1. User Authentication: Secure user authentication system allowing customers to create accounts and login
2. Product Catalog: A comprehensive catalog showcasing various clothing items available for purchase.
3. Shopping Cart: Seamless shopping cart functionality that enables users to add items to their cart, review their selections, and proceed to checkout.
4. Checkout Process: Intuitive checkout process with multiple payment options, ensuring a smooth and secure transaction experience for customers. This is integrated with stripe

### Project Structure:

-   Frontend: The project is built using a React application structure powered by Vite using the latest version.
-   Backend: For handling data and requests, the project relies on an ExpressJS server.

### Prerequisites/Libraries

Here's a list of the dependencies used:

Frontend

-   @reduxjs/toolkit: ^2.2.1,
-   @stripe/react-stripe-js: ^2.5.1,
-   @stripe/stripe-js: ^3.0.6,
-   axios: ^1.6.7,
-   jwt-decode: ^4.0.0,
-   react: ^18.2.0,
-   react-dom: ^18.2.0, - React DOM is a package that serves as the entry point to the DOM and server renderers for React
-   react-hook-form: ^7.50.1, Used for providing a flexible and efficient way to manage forms in React applications using React hooks
-   react-icons: ^5.0.1, - Used for providing collection of icon sets as React components
-   react-redux: ^9.1.0, - This library provides bindings for using Redux with React.
-   react-router-dom: ^6.22.1, - Used for providing routing capabilities for React applications using the React Router library
-   redux-persist: ^6.0.0, - Used for providing persistence for Redux stores
-   stripe: ^14.18.0 - Used for providing n interface for integrating with the Stripe payment gateway

Backend

-   bcrypt: ^5.1.1, - Used for hashing passwords securely
-   body-parser: ^1.20.2, - Parses incoming request bodies in a middleware before your handlers, and it makes it available under the req.body property.
-   cookie-parser: ~1.4.4,
-   cors: ^2.8.5, - This middleware provides Cross-Origin Resource Sharing (CORS) support.
-   debug: ~2.6.9,
-   dotenv: ^16.4.5, - Used to load the environment variables from a .env file into process.env
-   express: ^4.18.2,
-   http-errors: ~1.6.3,
-   jsonwebtoken: ^9.0.2, - This library is used to generate and verify JSON Web Tokens (JWTs)
-   mongodb: ^6.3.0, - Used for interacting with MongoDB database.
-   mongoose: ^8.2.0, - This library provides a MongoDB object modeling tool designed to work in an asynchronous environmen
-   morgan: ~1.9.1,
-   nodemon: ^3.1.0,
-   stripe: ^14.18.0 - provides an interface for integrating with the Stripe payment gateway

### Installation

#### Run the backend before running the frontend

Frontend

1. Clone or download the project from the Github repository (The frontend and backend code are contained in a single folder).
2. Open the terminal window.
3. Navigate to the frontend directory on the terminal.
4. Install dependencies using <code>npm install</code> or yarn install on the frontend folder or directory.

Backend

1. Clone or download the project from the Github repository (The frontend and backend code are contained in a single folder).
2. Open the terminal window.
3. Navigate to the backend directory on the terminal.
4. Install dependencies using <code>npm install</code> or yarn install on the backend folder or directory.

Root Folder

1. Go to the root of the project.
2. Install dependencies using <code>npm install</code> or yarn install on the root folder or directory.

## How to Run the Project:

1. After installation and navigation to the root.
2. Type and run the command <code>npm run dev</code> in the terminal.

### Testing

Endpoints are tested using Jest and Supertest for the APIs.

Frontend

1. Go to the frontend folder through the terminal.
2. Type the command <code>npm test</code>

Backend

1. Go to the backend folder through the terminal.
2. Type the command <code>npm test</code>

### How to Use

1. Navigate to </code>http://localhost:5173/</code>. The web application should load.
2. To access the endpoints use base url of </code>http://localhost:3000</code> and add the succeeding access points.
3. Start playing around and navigating the website.

## Acknowledgements

Thank you to the hiring managers and lead developers who has taken the time to review this project and provide feedback. Grateful and appreciate the opportunity.

I extend my appreciation to the following photographers from Unsplash for providing the captivating images used in this project, all of which are available for free use:

• Mark Adriane
• Grailify
• Avie Huff
• Filipp Romanovski
• Mediamodifier
• Anomaly
• Mohamad Khosravi
• Brock Wegner
• Jamie Street

Their photographs have been utilized to enhance the visual presentation of this project.
