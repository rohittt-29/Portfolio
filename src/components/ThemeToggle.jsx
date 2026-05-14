import Image from "next/image";
import { useTheme } from "./Theme-provider";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div>
      <button
        className="rounded-full cursor-pointer p-1 overflow-hidden hover:scale-110 transition-transform duration-300 ease-in-out flex items-center justify-center"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? (
          <Image
            src="/moon.png"
            alt="Dark Mode Moon"
            width={32}
            height={32}
            className="rounded-full object-cover shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          />
        ) : (
          <Image
            src="/sun.png"
            alt="Light Mode Sun"
            width={32}
            height={32}
            className="rounded-full object-cover shadow-[0_0_15px_rgba(255,165,0,0.4)]"
          />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;

