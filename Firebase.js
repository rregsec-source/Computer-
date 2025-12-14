import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDqFUYg_VhEYimxtXPPIqwhWE_5509sej4",
  authDomain: "my-site-6f03c.firebaseapp.com",
  projectId: "my-site-6f03c",
  storageBucket: "my-site-6f03c.firebasestorage.app",
  messagingSenderId: "937500033590",
  appId: "1:937500033590:web:61d1136a9e4a8365dc8e97",
  measurementId: "G-K90MGG4W4J"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
