import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAqlp-fvz4_JLaSoAFtd50_terU_5GW6ks",
  authDomain: "fir-6f3cb.firebaseapp.com",
  databaseURL: "https://fir-6f3cb.firebaseio.com",
  projectId: "fir-6f3cb",
  storageBucket: "fir-6f3cb.appspot.com",
  messagingSenderId: "289715166594",
  appId: "1:289715166594:web:9f14c3384ea238cb15c39b",
  measurementId: "G-SYX5K4NDDQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth, db };
