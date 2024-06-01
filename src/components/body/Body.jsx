import React, { useEffect } from "react";
import Login from "../loginpage/Login.jsx";
import Browse from "../browse/Browse.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../hearder/Header.jsx";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice.jsx";
const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // on sign up
        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email }));
        // we are stuck in navigate issue so here we can irectly use window.ocation.href to go to specific loaction
        // for example
        // window.location.href = "http://localhost:3000/browse";
        // but good practice is to use nagigate hook form react-router-do
        // so we navigate fromlogin lapage see loginpage lec-14 3:20
        // ...
      } else {
        // on User is signed out
        dispatch(removeUser());
        // ...
      }
    });
  }, []); //call only once
  return (
    
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Login />
          </>
        }
      />
      <Route path="/browse" element={<Browse />} />
    </Routes>
  </BrowserRouter>
  );
};

export default Body;
