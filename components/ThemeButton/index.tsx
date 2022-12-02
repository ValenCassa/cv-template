import clsx from "clsx";
import { HalfMoon, SunLight } from "iconoir-react";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const ThemeButton = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="mb-4">
      <motion.button
        onClick={toggleTheme}
        className={clsx(
          "p-2",
          "bg-neutral-100",
          "dark:bg-[#0E0E0E]",
          "rounded-md"
        )}
        whileTap={{ scale: 0.9 }}
      >
        {mounted && (
          <span>
            {theme === "light" ? (
              <HalfMoon color="#4947C3" fontSize={13} />
            ) : (
              <SunLight color="#E9D883" fontSize={13} />
            )}
          </span>
        )}
      </motion.button>
    </div>
  );
};

export default ThemeButton;
