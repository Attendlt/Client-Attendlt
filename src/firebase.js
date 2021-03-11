import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAiFWmNhppYj-8n7Tn6tuGC4H9uQ40VCLg",
  authDomain: "attendlt-official.firebaseapp.com",
  projectId: "attendlt-official",
  storageBucket: "attendlt-official.appspot.com",
  messagingSenderId: "12072668754",
  appId: "1:12072668754:web:4b7b339ee6e43b208d198b",
  measurementId: "G-GPY6K4H2N4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth, db };
