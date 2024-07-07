import React from 'react';
import {Link} from 'react-router-dom'
import {AppBar} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import useNavbar from "./index.hook";
import ThemeSwitch from "../theme-switch";
import Logo from "./logo";

import './styles.scss'
const Navbar = () => {
    const {toggleTheme, isDark} = useNavbar()

    return (<AppBar position="fixed"
                    color={'transparent'}
                    elevation={0}>
        <Container className={'nav-class'}>
            <Toolbar disableGutters className={'nav-container'}>
                <Link to='/'>
                    <Logo isDark={isDark}/>
                </Link>
                <NavRight toggleTheme={toggleTheme} isDark={isDark}/>
            </Toolbar>
        </Container>
    </AppBar>)
}


export default React.memo(Navbar);

const NavRight = ({toggleTheme, isDark}) => {
    return <ThemeSwitch sx={{m: 1}} defaultChecked={isDark} onChange={toggleTheme}/>
}
