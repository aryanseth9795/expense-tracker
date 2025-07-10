"use client";

import React, { use } from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  PiggyBank,
  ReceiptIcon,
  Settings,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const path = usePathname();

  const menulist = [
    { name: "Dashboard", icon: <LayoutDashboard />, path: "/dashboard" },
    { name: "Budget", icon: <PiggyBank />, path: "/dashboard/budget" },
    { name: "Expenses", icon: <ReceiptIcon />, path: "/dashboard/expenses" },
    { name: "Upgrade", icon: <Shield />, path: "/dashboard/upgrade" },
    { name: "Settings", icon: <Settings />, path: "/dashboard/setting" },
  ];

  return (
    <>
      <div className="pl-3">
        <Image src="/exp_logo.png" alt="logo" width={160} height={100} />
      </div>
      <div className="flex flex-col gap-4">
        {menulist.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <Link
                href={`${item.path}`}
                className={`flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md ${
                  path === item.path ? "bg-gray-200" : "bg-transparent"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-md">{item.name}</span>
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
