import React from "react";
import Login from "../loginpage/Login.jsx";
import Browse from "../browse/Browse.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../hearder/Header.jsx";
const Body = () => {
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
