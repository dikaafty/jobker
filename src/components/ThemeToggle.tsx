import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [ isDarkMode, setIsDarkMode ] = useState<boolean>(true);

  const toggleTheme = (): void => {
    if(isDarkMode) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  }

  return (
    <div>
      
    </div>
  )
}

export default ThemeToggle;