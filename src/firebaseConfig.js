import firebase from 'firebase'

let config = {
    apiKey: "AIzaSyANXtPRdlbJLIMH-7mMdMAFBp_dmsIRoCM",
    authDomain: "exrcsies-fireb.firebaseapp.com",
    databaseURL: "https://exrcsies-fireb.firebaseio.com",
    projectId: "exrcsies-fireb",
    storageBucket: "exrcsies-fireb.appspot.com",
    messagingSenderId: "736736585356"
};

firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();