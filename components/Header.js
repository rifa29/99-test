"use client";

import { useState } from "react";
import Image from "next/image";
import { LayoutPanelTop, LayoutList, List } from "lucide-react";
import useRedditStore from "../stores/reddit.store";
import Link from "next/link";

export default function Header() {
  const { setView } = useRedditStore();
  const [selectedIcon, setSelectedIcon] = useState("card");

  const handleViewToggle = (selectedView) => {
    setView(selectedView);
    setSelectedIcon(selectedView);
  };

  return (
    <>
      <header className="bg-white h-[53px] border-b border-gray-200">
        <div className="container flex h-[53px] items-center justify-between">
          <Link href="/">
            <Image
              src="/reddit-logo.png"
              alt="Reddit Logo"
              width={90}
              height={14}
              priority
            />
          </Link>
          <div className="flex">
            <input
              type="text"
              className="px-2 h-8 border border-gray-200 mr-3 w-[500px]"
              placeholder="Search..."
            />
            <button className="bg-white border border-blue-800 font-semibold text-sm px-8 h-8 text-blue-800">
              Create Thread
            </button>
          </div>
        </div>
      </header>
      <nav className="bg-white h-[53px] shadow-md mb-5">
        <div className="container flex h-[53px] items-center">
          <div className="flex h-[53px] items-center">
            <div className="flex h-[35px] items-center pr-5 mr-5 border-r border-gray-300">
              <label className="mr-2">View</label>
              <div onClick={() => handleViewToggle("card")}>
                <LayoutPanelTop
                  className={`w-5 h-5 mr-2 cursor-pointer ${
                    selectedIcon === "card" ? "text-blue-800" : "text-gray-300"
                  }`}
                />
              </div>
              <div onClick={() => handleViewToggle("classic")}>
                <LayoutList
                  className={`w-5 h-5 mr-2 cursor-pointer ${
                    selectedIcon === "classic"
                      ? "text-blue-800"
                      : "text-gray-300"
                  }`}
                />
              </div>
              <div onClick={() => handleViewToggle("compact")}>
                <List
                  className={`w-5 h-5 mr-2 cursor-pointer ${
                    selectedIcon === "compact"
                      ? "text-blue-800"
                      : "text-gray-300"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
