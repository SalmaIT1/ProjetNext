// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8nAAIeKJXLVT66ZsuPdeRxRPSZL7Kw5c",
  authDomain: "nextproject-a5bec.firebaseapp.com",
  projectId: "nextproject-a5bec",
  storageBucket: "nextproject-a5bec.appspot.com",
  messagingSenderId: "361199496370",
  appId: "1:361199496370:web:52c482bee38389998a6dab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firebase storage reference
const storage = getStorage(app);
export default storage;