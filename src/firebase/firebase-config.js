import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "INSERTAR VALORES CORRESPONDIENTES DEL PROYECTO FIREBASE",
    authDomain: "INSERTAR VALORES CORRESPONDIENTES DEL PROYECTO FIREBASE",
    projectId: "INSERTAR VALORES CORRESPONDIENTES DEL PROYECTO FIREBASE",
    storageBucket: "INSERTAR VALORES CORRESPONDIENTES DEL PROYECTO FIREBASE",
    messagingSenderId: "INSERTAR VALORES CORRESPONDIENTES DEL PROYECTO FIREBASE",
    appId: "INSERTAR VALORES CORRESPONDIENTES DEL PROYECTO FIREBASE"
};

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }