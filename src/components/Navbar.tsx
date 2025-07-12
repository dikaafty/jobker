import { useState } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState<boolean>(false);

  return (
    <nav 
      className="w-full font-jost grid grid-cols-[1fr_min-content_min-content] max-md:gap-3
      md:flex justify-between items-center px-8 sm:px-10 py-4 sm:py-5.5 relative"
    >
      <h1 
        className="text-lg font-extrabold"
      >
        JOBKER.
      </h1>

      {/* Desktop Nav */}
      <div 
        className="text-sm font-medium hidden md:flex justify-center items-center gap-12.5"
      >
        <a href="/job">
          Job
        </a>
        
        <a href="/job">
          Add Job
        </a>

        <a href="/about">
          About
        </a>
      </div>

      {/* Mobile Nav */}
      <button 
        className="w-8 h-7 flex flex-col justify-evenly items-center z-50 md:hidden"
        onClick={() => setIsMenuOpen(prev => !prev)}
      >
        <div 
          className={cn(
            "w-[80%] h-0.5 bg-foreground transition-all duration-300 rounded-full",
            isMenuOpen ? "-rotate-45 translate-y-[5px]" : "",
          )}
        />
        <div 
          className={cn(
            "w-[80%] h-0.5 bg-foreground transition-all duration-300 rounded-full",
            isMenuOpen ? "rotate-45 -translate-y-[5px]" : "",
          )}
        />
      </button>

      <div 
        className={cn(
          "w-full h-full bg-background text-lg font-bold flex flex-col justify-center",
          "items-center gap-5 fixed -right-190 top-0 z-10 transition-all duration-500 md:hidden",
          isMenuOpen ? "right-0 pointer-events-auto" : "-right- 190pointer-events-none"
        )}
      >
        <div className="w-1/2 flex flex-col justify-center items-center gap-2 mb-5">
          <div className="w-40 h-0.5 bg-foreground rounded-full" />
          <div className="w-32 h-0.5 bg-foreground rounded-full" />
        </div>

        <a href="/job">
          JOB
        </a>
        
        <a href="/job">
          ADD JOB
        </a>

        <a href="/about">
          ABOUT
        </a>

        <div className="w-1/2 flex flex-col justify-center items-center gap-2 mt-5">
          <div className="w-32 h-0.5 bg-foreground rounded-full" />
          <div className="w-40 h-0.5 bg-foreground rounded-full" />
        </div>
      </div>

      <ThemeToggle />
    </nav>
  )
}

export default Navbar;