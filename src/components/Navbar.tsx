"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}> 
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Home">
          </MenuItem>
        
        </Link>
     

      
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm mt-4">
            {
              
                <HoveredLink href={`/courses`}>
                  <h1>All Courses</h1>
                </HoveredLink>
            } 
          </div>

          <div className="flex flex-col space-y-4 text-sm mt-4">
            {
              
              <HoveredLink href={`/courses`}>
                  <h1>Basic music theory</h1>
                </HoveredLink>
            }
              
          </div>

          <div className="flex flex-col space-y-4 text-sm mt-4">
            {
              
              <HoveredLink href={`/courses`}>
                  <h1>Advance Composition</h1>
                </HoveredLink>
            }
              
          </div>

          <div className="flex flex-col space-y-4 text-sm mt-4">
            {
              
              <HoveredLink href={`/courses`}>
                  <h1>Song Writing</h1>
                </HoveredLink>
            }
              
          </div>
        </MenuItem>


        <Link href="/contact">
          <MenuItem setActive={setActive} active={active} item="Contact Us">
          </MenuItem>
        
        </Link>
      </Menu>
    </div>
  );
}


export default Navbar
