import React from 'react';
import { MdNightlightRound, MdSunny } from 'react-icons/md';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
    const handleClick = () => toggleDarkMode();
    const icon = darkMode ? <MdSunny className="h-5 w-5" /> : <MdNightlightRound className="h-5 w-5" />;
    const ariaLabel = darkMode ? "Switch to Light Mode" : "Switch to Dark Mode";

    return (
        <button
            onClick={handleClick}
            className="p-2 cursor-pointer rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label={ariaLabel}
        >
            {icon}
        </button>
    );
};

export default ThemeToggle;
