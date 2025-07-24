"use client";
import { signOut } from "next-auth/react";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";

const Logout = () => {
  const { data: session } = useSession();
  useEffect(() => {
    // if (session) {
      signOut({
        callbackUrl: "/login",
      });
      console.log("Logging out user:", session);
    // }
  }, []);

  return (
    <div>
      <h1>Logging Out .....</h1>
    </div>
  );
};

export default Logout;
