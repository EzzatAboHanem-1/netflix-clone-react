// Firebase setup
import { initializeApp } from "firebase/app";

// Auth
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

// Firestore
import {
  getFirestore,
  collection,
  addDoc
} from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDzrEl17WrdkkVxaRsYYScIh60PuqjJ2pI",
  authDomain: "netflix-clone-b4bd8.firebaseapp.com",
  projectId: "netflix-clone-b4bd8",
  storageBucket: "netflix-clone-b4bd8.firebasestorage.app",
  messagingSenderId: "253684489942",
  appId: "1:253684489942:web:33e87180f520104d0e3377"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign Up function
async function signup(name, email, password) {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;
    await addDoc(collection(db, 'user'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
}

// Sign In function
async function signin(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    //
    let errorMessage = error.code.split('/')[1].split('-').join(' ');
    if(errorMessage == 'invalid credential') {
        toast.error('invalid password')
    }
  }
}

// Logout function
async function logout() {
  await signOut(auth);
}

export { auth, db, logout, signin, signup };
