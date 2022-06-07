// import firebase from "firebase/compat/app";
import "../init.js";
import { db } from "../init";
// import { auth } from "firebaseui";
// import { auth } from "../init.js";
//add categories and products
export const addMessage = (collectionName, payload) => {
  return db.collection(collectionName).add(payload);
};
//edite message and products

export const editeMessage = (collectionName, payload) => {
  return db.collection(collectionName).doc(payload.id).set(payload);
};
// delete message and categories
export const delletMessage = (collectionName, id) => {
  return db.collection(collectionName).doc(id).delete();
};
//get message and products
export const getMessage = (collectionName) => {
  return db.collection(collectionName).get();
};
// auth();
