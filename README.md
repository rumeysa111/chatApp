# ChatApp

## 📖 Overview

ChatApp is a chat application built using **React Native**. It leverages **Firebase Firestore** for real-time database functionality and **Firebase Auth** for secure user authentication. The app provides a simple interface for creating and participating in chat conversations.

---

## 🚀 Features

- **User Authentication**: Secure login using Firebase Authentication.
- **Real-Time Messaging**: Chat messages are updated instantly using Firebase Firestore.
- **Chat Management**: Create and manage chat rooms by specifying user emails.
- **User-Friendly Interface**: Built with **React Native Paper** for a clean and modern UI.
- **Easy Navigation**: Powered by **React Navigation**.
- **Customizable Chat UI**: Styled using **Gifted Chat**.

---

## 🛠️ Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rumeysa111/chatApp.git
   
   ```

2. **Install dependencies**: Ensure you have Node.js and npm/yarn installed, then run:
   ```bash
   npm install
   ```

3. **Set up Firebase**:
   - Go to Firebase Console and create a new project.
   - Enable Firestore Database and Firebase Authentication.
   - Add your Firebase configuration to the app:
   ```javascript
   firebase.initializeApp({
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
   });
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

5. **Run the app**:
   - For Android: `npm run android`
   - For iOS: `npm run ios`
   - For Web: `npm run web`




## 📋 How to Use

- **Log In**: Authenticate with Firebase credentials.
- **Create Chat**: Use the floating action button to start a chat by entering the recipient's email.
- **Select Chat**: Tap on a chat to view and participate in the conversation.
- **Send Messages**: Type messages in the input box to chat in real-time.

---

## 📦 Dependencies

- **React Native**: Framework for building cross-platform mobile apps.
- **Firebase**: Provides authentication and database services.
- **React Navigation**: For seamless navigation between screens.
- **React Native Paper**: A Material Design library for UI components.
- **Gifted Chat**: For advanced chat UI and features.
