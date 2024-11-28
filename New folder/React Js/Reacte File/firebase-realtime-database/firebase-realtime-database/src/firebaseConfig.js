import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCN2nInaz_RDRnNM0h-V_fBH8fy3iH1apE",
  authDomain: "student-crud-realtimedb.firebaseapp.com",
  databaseURL: "https://student-crud-realtimedb-default-rtdb.firebaseio.com",
  projectId: "student-crud-realtimedb",
  storageBucket: "student-crud-realtimedb.appspot.com",
  messagingSenderId: "453946406455",
  appId: "1:453946406455:web:ae2eedc54749fdd401b1b2",
  measurementId: "G-G1YZT3F2C4"
};


export const app = initializeApp(firebaseConfig);
