import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDL8L8qqhZ7zwHE0BH-jWpk_hqLd9u0O6Q",
  authDomain: "vue-e-commerc.firebaseapp.com",
  projectId: "vue-e-commerc",
  storageBucket: "vue-e-commerc.appspot.com",
  messagingSenderId: "989704752760",
  appId: "1:989704752760:web:1403a6396b5716ba35278d",
  measurementId: "G-YDT07E3J0J",
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
// export const storage = firebase.storage();
export const auth = firebase.auth();
// const Dbbb = function () {
//   firebase.firestore().collection("categorys");
// };
