
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
  } from 'firebase/auth';
  import { auth } from './firebase';
  
  export const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  
  export const login  = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  
  export const loginWithGoogle = () =>
    signInWithPopup(auth, new GoogleAuthProvider());
  
  export const logout = () => signOut(auth);