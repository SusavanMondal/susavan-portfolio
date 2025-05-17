import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export const ThemeChange=()=>{
    const [isDark, setDarkMode]=useState(false)
    useEffect(()=>{
            const storedTheme=localStorage.getItem("theme");
            if (storedTheme==="dark"){
                setDarkMode(true)
                document.documentElement.classList.add('dark');

            }
            else{
                setDarkMode(false)
                localStorage.setItem("theme", "light");

            }
        },[]
    )
    const changeTheme=()=>{
        if(isDark){
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light");
            setDarkMode(false)
        }
        else{
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark");
            setDarkMode(true)
        }
    }
    return  <button onClick={changeTheme} className="fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hidden">{isDark ? <Sun className="h-5 w-5 text-yellow-300 "/> : <Moon className="h-5 w-5 text-blue-700"/>}</button>
}