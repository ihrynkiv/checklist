import React, {useContext, useState} from "react";
import { ThemeContext, themes } from '../contexts/ThemeContext';
import DarkModeToggle from "react-dark-mode-toggle";
import {GlobalHotKeys} from "react-hotkeys";

const THEMES = {
    DARK: 'dark',
    LIGHT: 'light'
}

const keyMap = { TOGGLE_THEME: ['t'] }

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === THEMES.DARK)
    const {changeTheme} = useContext(ThemeContext)

    const handleThemeChange = (isDark) => {
        setIsDarkMode(isDark)
        localStorage.setItem('theme', isDark ? THEMES.DARK : THEMES.LIGHT )
        setTimeout(() => changeTheme(isDarkMode ? themes.light : themes.dark), 350)
    }

    const handlers = {
        TOGGLE_THEME: () => {
            const btn = document.querySelector('.switch button')
            btn.click()
        }
    };

    return (
            <div className="switch">
            <GlobalHotKeys handlers={handlers} keyMap={keyMap}/>
                <DarkModeToggle
                    onChange={handleThemeChange}
                    checked={isDarkMode}
                    size={80}
                />
            </div>
    )
}