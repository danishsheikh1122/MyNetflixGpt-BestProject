import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [loginState,setLoginState]=useState("sign in")
  return (
    <div className="relative font-mono">
      <img
        className="w-full h-full object-contain z-0"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full z-20 flex justify-center items-center text-white">
        <div className="w-[28rem] h-[35rem] px-16 py-8 flex-col justify-start bg-black bg-opacity-70 rounded-sm ">
          <form action="" method="post">
            <h1 className="text-[3rem] font-semibold  my-6">Sign In</h1>
            <input
              name="btn"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email Address"
              className="w-full h-[4rem] outline-none  bg-transparent border-white border-solid border-[0.1rem] rounded p-4 text-white"
            />
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              className="w-full h-[4rem]  outline-none bg-transparent border-white border-solid border-[0.1rem] rounded p-4 my-4 text-white"
            />
            <button className="w-full h-[1rem] text-[0.8rem] text-left capitalize">forget password?</button>
            <button
              value="Sign In"
              className="w-full h-[2.6rem] rounded my-6 bg-[#D9232E] opacity-1 text-[1.4rem] font-normal"
            >
              Sign In
            </button>
            <h3 className="w-full h-[1rem] text-center text-[1.4rem] uppercase">or</h3>
            <h3 className="w-full h-[1rem] my-[2rem] text-[1rem] capitalize text-[#b8b6b6]">
              New to Netflix? 
            <button className="pl-[0.4rem] text-white hover:underline" onClick={}>Sign Up Now</button>
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
