import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAuazEB38HvfRkIe__HwcjZ-tCt2ixt23M",
  authDomain: "login-demo-756bf.firebaseapp.com",
  databaseURL: "https://login-demo-756bf.firebaseio.com",
  projectId: "login-demo-756bf",
  storageBucket: "login-demo-756bf.appspot.com",
  messagingSenderId: "490679760296",
  appId: "1:490679760296:web:9acb102951b92edc2bd99d"
});

const auth = firebase.auth();

export default auth;

