"use client";
import React, { useState } from "react";
import { AlignLeft } from "lucide-react";
import Sidebar from "./Sidebar";

const MobileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <AlignLeft className="hover:text-darkColor hoverEffect md:hidden" />
        </button>
      </div>
      <div className="md:hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </>
  );
};

export default MobileMenu;
