import firebase from 'firebase/compat/app'
import {getDatabase} from 'firebase/database'

const firebaseConfig={
  apiKey: "AIzaSyA4rz6_Q_asRqkm90060G6ZssPBDG6O_Go",
  authDomain: "weather-app-87f16.firebaseapp.com",
  databaseURL: "https://weather-app-87f16-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "weather-app-87f16",
  storageBucket: "weather-app-87f16.appspot.com",
  messagingSenderId: "59968301811",
  appId: "1:59968301811:web:0bf31a43bf80f726fee586",
  measurementId: "G-V69Y8222WR"
}
if(firebase.apps.length==0)
{
    firebase.initializeApp(firebaseConfig);
}
const db=getDatabase();
export{db};