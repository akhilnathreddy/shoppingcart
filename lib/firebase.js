import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: 'shopping-cart-ce73b.firebaseapp.com',
    projectId: 'shopping-cart-ce73b',
    storageBucket: 'shopping-cart-ce73b.appspot.com',
    messagingSenderId: '864954843248',
    appId: '1:864954843248:web:86eee49bbff48d137af4b5',
  };

console.log("🔥 Firebase config:", firebaseConfig);

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
