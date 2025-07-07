"use client";
// This is a client component

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { redirect } from "next/navigation";

const Login = () => {
    const handleLogin = () => {
        redirect("/dashboard");
    }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-600">
      <div className="flex flex-col h-[30vh] w-[30vw]  items-center justify-center gap-4 bg-white rounded-lg shadow-lg p-6 border shadow-gray-300">
        <>
          {" "}
          <Label htmlFor="text"> Username</Label>
          <Input type={"text"} placeholder="Enter Your username" />
        </>
        <Button className="w-full" onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
};

export default Login;
