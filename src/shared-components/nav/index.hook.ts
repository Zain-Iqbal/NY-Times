import {useLocation} from "react-router-dom";

import useTheme from "../../theme/useThemeContext.hook";

const useNavbar = () => {
    const {toggleTheme, isDark} = useTheme()
    const location = useLocation();
    const pathName = location.pathname

    return {pathName, toggleTheme, isDark}
}

export default useNavbar;
