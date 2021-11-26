import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBa__TDG7Jq-ek-OeWHk9AJT7L_lzr6o-E",
  authDomain: "salcobrand-fb12b.firebaseapp.com",
  projectId: "salcobrand-fb12b",
  storageBucket: "salcobrand-fb12b.appspot.com",
  messagingSenderId: "354425742840",
  appId: "1:354425742840:web:b0325e5abbc5815962a20d",
  measurementId: "G-F115H08JN3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
