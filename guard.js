import { auth } from './firebase.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

onAuthStateChanged(auth, user => {
  if (!user) window.location.href = 'login.html';
});

export function logout() {
  signOut(auth).then(() => window.location.href='login.html');
}
