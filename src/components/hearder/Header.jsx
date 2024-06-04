import React, { useEffect } from "react";
import { auth } from "../../../firebase.jsx";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice.jsx";
import {toggleButton} from "../../utils/gptToggleSlice.jsx";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
        console.log(error);
      });
  };
  const handleGptButton=()=>{
    dispatch(toggleButton());
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="absolute z-20 w-full h-34 px-5 font-mono top-0 left-0 flex justify-between items-center" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.1))" }}>

        <div className="w-40 h-full mx-[8rem]  px-0 py-2">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
          className="h-full"
          />
      </div>
      {users && (
        <div className="w-96 h-12 flex justify-center items-center gap-[1rem] px-8 py-2">
        <button
            className="bg-[#E50914] w-24 h-[2rem] rounded-md text-white font-semibold hover:opacity-80 cursor-pointer"
            onClick={handleSignOut}
            >
            Sign Out
            </button>
        <button
            className="bg-[#10A37F] w-24 h-[2rem] rounded-md text-white font-semibold hover:opacity-80 cursor-pointer"
            onClick={handleGptButton}
            >
            Gpt Search
            </button>
            </div>
          )}
    </div>
  );
};

export default Header;
