import firebase from 'firebase/compat/app';

import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCZIGmQDVhq9vhC6bkGYzUqHXRKtXXgGKs",
    authDomain: "shake-project.firebaseapp.com",
    databaseURL: "https://shake-project-default-rtdb.firebaseio.com",
    projectId: "shake-project",
    storageBucket: "shake-project.appspot.com",
    messagingSenderId: "420979625558",
    appId: "1:420979625558:web:c3b6cba7bc363697dab5f7"
  };

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const auth = firebase.auth();
const database = firebase.database();

export {firebase, auth, database};