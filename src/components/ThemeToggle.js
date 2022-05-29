import React, { useState} from "react";
import { ThemeContext, themes } from '../contexts/ThemeContext';
import DarkModeToggle from "react-dark-mode-toggle";

const THEMES = {
    DARK: 'dark',
    LIGHT: 'light'
}

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(window.localStorage.getItem('theme') === THEMES.DARK)
    const handleThemeChange = (isDark) => {
        setIsDarkMode(isDark)
        window.localStorage.setItem('theme', isDark ? THEMES.DARK : THEMES.LIGHT )
    }

    return (
        <ThemeContext.Consumer>
            {({ changeTheme, theme }) => (
            <div className="switch">
                <DarkModeToggle
                    onChange={(e) => {
                        handleThemeChange(e)
                        setTimeout(() => changeTheme(isDarkMode ? themes.light : themes.dark), 350)
                    }}
                    checked={isDarkMode}
                    size={80}
                />
            </div>
            )}
        </ThemeContext.Consumer>
    )
}