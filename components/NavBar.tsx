"use client";

import { itemsNavbar } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MotionTransition from "./transition-component";
import ThemeMode from "@/components/thememode";



const Navbar = () => {
  
  const router = usePathname();

  return (
    <MotionTransition position="right" className="fixed z-30 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-black/15 dark:bg-white/15  background-blur-sm">
          {itemsNavbar.map((item) => (
            <div key={item.id}
            className={`px-3 py2 transition duration-150 rounded-full cursor-pointer hover:bg-[#0070F3] dark:hover:bg-[#00C8C8]
              ${router === item.link && 'bg-[#0070F3] dark:bg-[#00C8C8]'}`}
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
