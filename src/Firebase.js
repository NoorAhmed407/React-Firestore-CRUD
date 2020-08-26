import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyBfh4DlAU8ddrGLh4gPKMLSCFk_QzUX0kM",
    authDomain: "react-firebase-crud-93c81.firebaseapp.com",
    databaseURL: "https://react-firebase-crud-93c81.firebaseio.com",
    projectId: "react-firebase-crud-93c81",
    storageBucket: "react-firebase-crud-93c81.appspot.com",
    messagingSenderId: "747444845185",
    appId: "1:747444845185:web:c16f0a996723479024ab80",
    measurementId: "G-972VML6PQM"
};

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;








// const firebaseConfig = {
//     apiKey: "AIzaSyBfh4DlAU8ddrGLh4gPKMLSCFk_QzUX0kM",
//     authDomain: "react-firebase-crud-93c81.firebaseapp.com",
//     databaseURL: "https://react-firebase-crud-93c81.firebaseio.com",
//     projectId: "react-firebase-crud-93c81",
//     storageBucket: "react-firebase-crud-93c81.appspot.com",
//     messagingSenderId: "747444845185",
//     appId: "1:747444845185:web:c16f0a996723479024ab80",
//     measurementId: "G-972VML6PQM"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();