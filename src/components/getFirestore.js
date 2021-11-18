import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {

  apiKey: "AIzaSyBvcpTVh3D4J_ulXErd_VvstVbeD8iDz2g",

  authDomain: "burgos-5570f.firebaseapp.com",

  projectId: "burgos-5570f",

  storageBucket: "burgos-5570f.appspot.com",

  messagingSenderId: "978980112626",

  appId: "1:978980112626:web:c7e268750dc37ae183286b"

};


const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
  return firebase.firestore(app);
}
