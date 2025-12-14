import { auth } from './firebase.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// Login
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Signup
export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
