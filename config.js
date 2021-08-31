import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCMRK52HtCR0ztr4OK79w3_b_OUhQDOLcQ",
  authDomain: "school-attendance-app-cc7a8.firebaseapp.com",
  databaseURL: "https://school-attendance-app-cc7a8-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-cc7a8",
  storageBucket: "school-attendance-app-cc7a8.appspot.com",
  messagingSenderId: "757510888752",
  appId: "1:757510888752:web:b0f2abd5f5c72911b2fcf5"
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()

  