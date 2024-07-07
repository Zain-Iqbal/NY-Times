import React, {useEffect, useState} from "react";
import {ThemeContext} from "./theme-context";

const THEME_TYPE = {
    light: 'light',
    dark: 'dark'
}
const ThemeProvider = (props) => {
    const localStorageDark = localStorage.getItem('dark-mode');
    const [isDark, setIsDark] = useState(localStorageDark === THEME_TYPE.dark)

    const toggleTheme = () => {
      localStorage.setItem('dark-mode', isDark? THEME_TYPE.dark : THEME_TYPE.light);
        setIsDark(!isDark)
    }

    useEffect(() => {
        localStorage.setItem('dark-mode', isDark ? THEME_TYPE.dark : THEME_TYPE.light);
    }, [isDark])

    return <ThemeContext.Provider value={{isDark, toggleTheme}}>
        {props.children}
    </ThemeContext.Provider>
}

export default ThemeProvider
