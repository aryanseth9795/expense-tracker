'use client';
import React from "react";
import Header from "./dashboard/_component/header";
import Image from "next/image";
import Landing from "./dashboard/_component/landing";
import {auth} from '../../auth'
import { useSession } from "next-auth/react";
const Home = () => {
  // const session = auth();
  const {data:session}=useSession()
  console.log("Session:", session);
  return (
    <div className="flex flex-col ">
      <Header session={session?.user?.email ? true : false}
        style={{ position: "static", top: 0, left: 0, right: 0, zIndex: 10 }}
      />

      <Landing session={session?.user?.email ? true : false} />

      <div className="flex items-center justify-center h-screen">
        <Image src="/dash.jpg" alt="dashboard" width={1000} height={500} />
      </div>
    </div>
  );
};

export default Home;
