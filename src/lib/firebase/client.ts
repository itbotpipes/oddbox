import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyBV9YeXwEJJlwDtRCElqMZO5RT0iunEv14",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "oddbox-63006.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "oddbox-63006",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "oddbox-63006.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "73148384029",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:73148384029:web:836a518ba0427cf864d7f4",
};

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let db: Firestore | undefined;

export function getClientFirebase(): { app: FirebaseApp; auth: Auth; db: Firestore } {
  if (!app) {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    auth = getAuth(app);
    db = getFirestore(app);
  }
  return { app, auth: auth!, db: db! };
}
