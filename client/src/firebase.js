// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-blog-7ce04.firebaseapp.com',
  projectId: 'mern-blog-7ce04',
  storageBucket: 'mern-blog-7ce04.appspot.com',
  messagingSenderId: '583319203000',
  appId: '1:583319203000:web:c19efec8403a90d259984d',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
