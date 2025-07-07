import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="flex px-10 items-center justify-between sticky top-0 left-0 right-0 z-10 bg-white border shadow-md">
      <Image src="/exp_logo.png" alt="logo" width={160} height={100}  />
      <Button className={""}>Get Started</Button>
    </div>
  );
};

export default Header;
