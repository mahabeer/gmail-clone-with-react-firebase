# Gmail Clone with React.js, Redux Toolkit, and Firebase

This project is a clone of the popular email service Gmail, built using modern web technologies including React.js, Redux Toolkit, and Firebase. It aims to provide users with a familiar and efficient email experience in a web application.

## Description

**Gmail Clone** is a web application that emulates the core features of Gmail, allowing users to:

- Sign in with their Google accounts.
- Compose, receive, and manage emails.

The project utilizes the following technologies and tools:

- **React.js**: A popular JavaScript library for building user interfaces.
- **Redux Toolkit**: A library for managing application state and data flow efficiently.
- **Firebase**: A cloud-based platform that provides authentication, real-time database, and file storage services, making it ideal for building web applications like this.

## Prerequisites

Before running this project locally, ensure that you have the following prerequisites installed on your system:

- Node.js version 14.17.6 or compatible
- npm (Node Package Manager)

You can check your Node.js version by running the following command in your terminal:

```bash
node -v


Getting Started
To run this project locally, follow these steps:

Clone the Repository:

bash
Copy code
git clone https://github.com/mahabeer/Gmail-Clone-with-React-Js.git/
cd Gmail-Clone-with-React-Js
Install Dependencies:

Install the project's dependencies using the following command:

bash
Copy code
npm install
Configure Firebase:

Place your Firebase configuration data into a file named firebase.js in the src folder of the project. You can obtain the Firebase configuration data from your Firebase project.

Create a firebase.js file with the following structure, replacing the placeholders with your actual Firebase configuration:

javascript
Copy code
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };

Start the Development Server:

Start the development server using the following command:

bash
Copy code
npm start
The project will be available at http://localhost:3000 in your web browser.
