import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyBxe_HdQEUDu2Bn9Q4djvvc2vCLdc16H0Y",
  authDomain: "sk-hartmann.firebaseapp.com",
  databaseURL: "https://sk-hartmann.firebaseio.com",
  projectId: "sk-hartmann",
  storageBucket: "sk-hartmann.appspot.com",
  messagingSenderId: "1037131141247"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;