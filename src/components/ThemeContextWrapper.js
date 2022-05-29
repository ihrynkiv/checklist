import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from '../contexts/ThemeContext';

export default function ThemeContextWrapper(props) {
    const [theme, setTheme] = useState(window.localStorage.getItem('theme') || themes.light);

    const changeTheme = (theme) => {
        setTheme(theme);
    }

    useEffect(() => {
        switch (theme) {
            case themes.dark:
                document.body.classList.add('dark-theme');
                break;
            case themes.light:
            default:
                document.body.classList.remove('dark-theme');
                break;
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}