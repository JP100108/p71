import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
    apiKey: "AIzaSyCxipB4PJwFYPCospz3y5eHUCYHVj41gi8",
    authDomain: "dsafdsa-8cbff.firebaseapp.com",
    projectId: "dsafdsa-8cbff",
    storageBucket: "dsafdsa-8cbff.appspot.com",
    messagingSenderId: "151354425574",
    appId: "1:151354425574:web:d74451d4af0a057d273b27"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
