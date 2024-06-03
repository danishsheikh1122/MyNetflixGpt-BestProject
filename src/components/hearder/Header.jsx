import React, { useEffect } from "react";
import { auth } from "../../../firebase.jsx";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice.jsx";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.user);
  const handelSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
        console.log(error);
      });
  };
  // every time user login or sing out this will call and
  // use below code t navigate

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        navigate("/browse");
      } else {
        // on User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });
    
    return () => {
      unsubscribe;
    };
    // unsubscribe when component unmount

  }, []); //call only once
  return (
      <div className=" relative z-10 w-[full] h-[5rem] px-[5rem] font-mono  top-0 left-0 flex justify-between items-center">
        <div className="w-[15rem] h-[full] px-8 py-2">
          <img
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt=""
          />
        </div>
        {users && (
          <div className="w-[15rem] h-12 flex justify-center px-8 py-2">
            <button
              type="button"
              className="bg-[#E50914] w-[6rem] rounded-md text-white font-semibold"
              onClick={handelSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
  );
};

export default Header;
