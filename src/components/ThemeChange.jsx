import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export const ThemeChange = () => {
    const [isDark, setDarkMode] = useState(false)
    useEffect(() => {
            const storedTheme = localStorage.getItem("theme");
            if (storedTheme === "dark") {
                setDarkMode(true)
                document.documentElement.classList.add('dark');

            }
            else {
                setDarkMode(false)
                localStorage.setItem("theme", "light");

            }
        },
        []
    )
    const changeTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light");
            setDarkMode(false)
        }
        else {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark");
            setDarkMode(true)
        }
    }
    return (
        <button
            onClick={changeTheme}
            className="fixed top-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0 z-50 
            p-3 md:p-2.5 
            rounded-full 
            bg-card/90 md:bg-background/80 
            backdrop-blur-md
            border-2 md:border border-primary/20 md:border-border/50 
            shadow-lg shadow-primary/10
            transition-all duration-300 
            hover:scale-110 hover:border-primary/50
            active:scale-95
            focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDark ? (
                <Sun className="h-6 w-6 md:h-5 md:w-5 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 md:h-5 md:w-5 text-blue-700" />
            )}
        </button>
    )
}