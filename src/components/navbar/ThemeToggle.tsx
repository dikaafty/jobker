import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [ isDarkMode, setIsDarkMode ] = useState<boolean>(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if(storedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = (): void => {
    if(isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  }

  return (
    <button 
      onClick={toggleTheme}
      className="w-fit h-fit cursor-pointer"
    >
      {
        isDarkMode 
        ? <Moon 
            data-testid="moon icon"
          />
        : <Sun 
            data-testid="sun icon"
          />
      }
    </button>
  )
}

export default ThemeToggle;