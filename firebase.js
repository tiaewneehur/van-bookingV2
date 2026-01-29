
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "tiaewneehur.firebaseapp.com",
  projectId: "tiaewneehur",
  storageBucket: "tiaewneehur.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
