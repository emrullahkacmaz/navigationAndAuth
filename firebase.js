// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI5kAxX2OYpr6qTauwchDZMNGRJUtgXhg",
  authDomain: "ornek20-e7f19.firebaseapp.com",
  projectId: "ornek20-e7f19",
  storageBucket: "ornek20-e7f19.appspot.com",
  messagingSenderId: "433436334152",
  appId: "1:433436334152:web:7e3ad2c8d1b3d25275607d"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app;
}

const auth = firebase.auth();
const fireStore = firebase.firestore();

export { auth, fireStore };
