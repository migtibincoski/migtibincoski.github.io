import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "migtibincoski-dev.firebaseapp.com",
  projectId: "migtibincoski-dev",
  storageBucket: "migtibincoski-dev.firebasestorage.app",
  messagingSenderId: "724762707423",
  appId: "1:724762707423:web:6d63140817210e1066306a",
  measurementId: "G-T498DY50ER",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
