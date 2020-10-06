import React from "react";
import "./App.css";
import { Button } from "antd";
import "antd/dist/antd.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyD47qezbm6vLoWOfLNYp3vMpVH2OhPU2XA",
  authDomain: "chat-room-91dd4.firebaseapp.com",
  databaseURL: "https://chat-room-91dd4.firebaseio.com",
  projectId: "chat-room-91dd4",
  storageBucket: "chat-room-91dd4.appspot.com",
  messagingSenderId: "689361786892",
  appId: "1:689361786892:web:1ae7af9a7d67af5a13b629",
  measurementId: "G-P5261BQDMF",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <Button onClick={signInWithGoogle}>Sign in with Google</Button>;
}

function SignOut() {
  return (
    auth.currentUser && <Button onClick={() => auth.signOut()}>Sign Out</Button>
  );
}

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header></header>
      <section>{user ? "" : <SignIn />}</section>
    </div>
  );
}

export default App;
