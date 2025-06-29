// const { useTheme } = require("./Theme-provider")
import { useTheme } from "./Theme-provider";


const ThemeToggle = ()=>{
    const {theme, setTheme} = useTheme();

    const toggleTheme = ()=>{
        if(theme==="dark"){
            setTheme("light")
        }
        else{
            setTheme("dark");
        };
       
    }
   return (
    <div>
      <button className=" rounded-full cursor-pointer p-2 " onClick={toggleTheme}>
        {theme === "dark" ? (
          <i className="ri-sun-fill text-xl"></i>
        ) : (
          <i className="ri-moon-line text-xl"></i>
        )}
      </button>
    </div>
  );
};



export default ThemeToggle;



