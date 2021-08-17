import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAM-enAfW-HH7UUfNr0yuCzcPuh09tO0JE",
  authDomain: "snapchat-eudes-clone.firebaseapp.com",
  projectId: "snapchat-eudes-clone",
  storageBucket: "snapchat-eudes-clone.appspot.com",
  messagingSenderId: "457753454862",
  appId: "1:457753454862:web:b00d8fdbdfc039d5778f5f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
