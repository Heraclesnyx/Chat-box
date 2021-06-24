/*Connexion de notre appli avec Firebase (BDD)*/

import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';


const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDP4Tf0xvbVe1rK1YPfk6b-mb8Eshm6dYY",
	authDomain: "chatbox-64b95.firebaseapp.com",
	databaseURL: "https://chatbox-64b95-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "chatbox-64b95",
	storageBucket: "chatbox-64b95.appspot.com",
	messagingSenderId: "573993996197",
	appId: "1:573993996197:web:b654134ccbd1457083624c",
	measurementId: "G-3CPMPZQESE"
});


const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base
