"use client";

import React from "react"; 
import Link from "next/link";
import { ModeToggle } from "@/components/theme/ThemeSwitcher";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { toggleSignup } from "@/components/functions/AuthForm";

export default function Header() {
    const { resolvedTheme } = useTheme();
    return (
        <header className="fixed text-primary-foreground py-4 lg:px-6 shadow-md backdrop-blur-md bg-opacity-30 top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <span className="flex items-center gap-2 text-primary-foreground">
              <img src={`${resolvedTheme === "dark" ? "Logo6.png" : "Logo6 dark.png"}`}
                className="h-5 w-5 sm:h-10 sm:w-10 mr-4"
              />
              <span className="text-lg sm:text-xl text-black dark:text-white font-bold relative">
                CitySync
              </span>
            </span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <ModeToggle />

            {/* Popover for Get Started Button */}
            <Popover>
              <PopoverTrigger asChild>
                <Button className="font-semibold">Get Started</Button>
              </PopoverTrigger>
              <PopoverContent className="w-48 p-2">
                <ul>
                  <li>
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={toggleSignup}
                    >
                      Department
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      3rd Party Vendors
                    </button>
                  </li>
                </ul>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </header>
    )
}