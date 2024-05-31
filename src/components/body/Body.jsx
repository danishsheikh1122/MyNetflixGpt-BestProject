import React from "react";
import Login from "../loginpage/Login.jsx";
import Browse from "../browse/Browse.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../hearder/Header.jsx";
const Body = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header></Header>
                <Login />
              </>
            }
          />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Body;
