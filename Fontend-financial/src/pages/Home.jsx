import React from "react";
import { Navigate } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
const Home = () => {
  return (
    <div>
      <SignedOut>
        <h1 className="text-center text-4xl md:text-5xl md:leading-snug font-bold my-2">
          Welcome to your own Personal Finance Tracker
        </h1>
      </SignedOut>
      <SignedIn>
        <Navigate to="/dashbord" />
      </SignedIn>
    </div>
  );
};

export default Home;
