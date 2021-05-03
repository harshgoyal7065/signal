// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import * as firebase from "firebase";
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyClycO6tll7rVrtLSGJ04RrWyQigGy09yk",
    authDomain: "signalclone-c4f2b.firebaseapp.com",
    projectId: "signalclone-c4f2b",
    storageBucket: "signalclone-c4f2b.appspot.com",
    messagingSenderId: "322596394466",
    appId: "1:322596394466:web:91aebff32ce2ba6874d5bb",
    measurementId: "G-4HB4W901NG"
  };

let app;

if(firebase.apps.length==0)
{
  app = firebase.initializeApp(firebaseConfig);
}
else
{
  app = firebase.app();
}


const db = app.firestore();
const auth = firebase.auth();

export {db,auth}