
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAWyGcNoljzarXe5IzEbU7u5_iHvsjAZPA",
  authDomain: "employee-app-a69ae.firebaseapp.com",
  projectId: "employee-app-a69ae",
  storageBucket: "employee-app-a69ae.appspot.com",
  messagingSenderId: "51868692083",
  appId: "1:51868692083:web:bf2fe2389c5495f11f0406",
  measurementId: "G-1KCSV4WBMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);