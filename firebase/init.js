import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhlHhjnNMRv8tEB5xY0qajViyVYlYlvrs",
  authDomain: "guestbook-b5bea.firebaseapp.com",
  projectId: "guestbook-b5bea",
  storageBucket: "guestbook-b5bea.appspot.com",
  messagingSenderId: "363092692705",
  appId: "1:363092692705:web:f87d79533654c4e4bff1a0"
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
// export const storage = firebase.storage();
export const auth = firebase.auth();
// const Dbbb = function () {
//   firebase.firestore().collection("categorys");
// };
