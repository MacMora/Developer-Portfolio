"use client";

import { itemsNavbar } from "@/data";
import { usePathname } from "next/navigation";
import MotionTransition from "./transition-component";
import ThemeMode from "@/components/thememode";
import Link from "next/link";



const Navbar = () => {
  
  const router = usePathname();

  return (
    <MotionTransition position="right" className="fixed z-30 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-black/15 dark:bg-white/15 background-blur-sm">
          {itemsNavbar.map((item) => (
            <div key={item.id}
            className={`px-3 py2 transition duration-150 rounded-full cursor-pointer hover:bg-[#7828c8] dark:hover:bg-[#9455d3]
              ${router === item.link && 'bg-[#7828c8] dark:bg-[#9455d3]'}`}
            >
              <Link href={item.link}>{item.icon}</Link>
            </div>
          ))}
          <ThemeMode/>
        </div>
      </nav>
    </MotionTransition>
  ); 
};

export default Navbar;
