import { Button } from "@/components/ui/button";
import React from "react";
import Header from "./dashboard/_component/header";
import Image from "next/image";
import Landing from "./dashboard/_component/landing";

const Home = () => {
  return (
    <div className="flex flex-col ">
      <Header
        style={{ position: "static", top: 0, left: 0, right: 0, zIndex: 10 }}
      />

      <Landing />

      <div className="flex items-center justify-center h-screen">
        <Image src="/dash.jpg" alt="dashboard" width={1000} height={500} />
      </div>
    </div>
  );
};

export default Home;
